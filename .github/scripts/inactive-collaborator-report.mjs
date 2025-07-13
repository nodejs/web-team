import { readFile } from "node:fs/promises";

const CONFIG = {
  FILE: "MEMBERS.md",
  HEADER: "## Node.js Website Team (`@nodejs/nodejs-website`)",
  INACTIVE_MONTHS: 12,
  ISSUE_TITLE: "Inactive Collaborator Report",
  ISSUE_LABELS: ["meta", "inactive-collaborator-report"],
};

// Get date N months ago in YYYY-MM-DD format
const getDateMonthsAgo = (months = CONFIG.INACTIVE_MONTHS) => {
  const date = new Date();
  date.setMonth(date.getMonth() - months);
  const result = date.toISOString().split("T")[0];
  console.log(`getDateMonthsAgo(${months}): ${result}`);
  return result;
};

// Check if there's already an open issue
async function hasOpenIssue(github, context) {
  console.log("Checking for existing open issues...");
  const { owner, repo } = context.repo;
  const { data: issues } = await github.rest.issues.listForRepo({
    owner,
    repo,
    state: "open",
    labels: CONFIG.ISSUE_LABELS[1],
    per_page: 1,
  });

  const hasIssue = issues.length > 0;
  console.log(`Found ${issues.length} open issues with label "${CONFIG.ISSUE_LABELS[1]}"`);
  return hasIssue;
}

// Parse collaborator usernames from governance file
async function parseCollaborators() {
  console.log(`Reading collaborators from ${CONFIG.FILE}...`);
  const content = await readFile(CONFIG.FILE, "utf8");
  const lines = content.split("\n");
  const collaborators = [];

  const startIndex = lines.findIndex((l) => l.startsWith(CONFIG.HEADER)) + 1;
  console.log(`Header found at line ${startIndex - 1}, starting parse at line ${startIndex}`);
  
  if (startIndex <= 0) {
    console.log("Header not found, returning empty collaborators array");
    return collaborators;
  }

  for (let i = startIndex; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith("#")) {
      console.log(`Reached next section at line ${i}, stopping parse`);
      break;
    }

    const match = line.match(/^\s*-\s*@\[([^\]]+)\]/);
    if (match) {
      collaborators.push(match[1]);
      console.log(`Found collaborator: ${match[1]}`);
    }
  }

  console.log(`Total collaborators found: ${collaborators.length}`);
  return collaborators;
}

// Check if users have been active since cutoff date
async function getInactiveUsers(github, usernames, repo, cutoffDate) {
  console.log(`Checking activity for ${usernames.length} users since ${cutoffDate}...`);
  const inactiveUsers = [];

  for (const username of usernames) {
    console.log(`Checking activity for ${username}...`);
    
    // Check commits
    const { data: commits } = await github.rest.search.commits({
      q: `author:${username} repo:${repo} committer-date:>=${cutoffDate}`,
      per_page: 1,
    });

    // Check issues and PRs
    const { data: issues } = await github.rest.search.issuesAndPullRequests({
      q: `involves:${username} repo:${repo} updated:>=${cutoffDate}`,
      per_page: 1,
    });

    console.log(`${username}: ${commits.total_count} commits, ${issues.total_count} issues/PRs`);

    // User is inactive if they have no commits AND no issues/PRs
    if (commits.total_count === 0 && issues.total_count === 0) {
      inactiveUsers.push(username);
      console.log(`${username} is inactive`);
    } else {
      console.log(`${username} is active`);
    }
  }

  console.log(`Total inactive users: ${inactiveUsers.length}`);
  return inactiveUsers;
}

// Generate report for inactive members
function formatReport(inactiveMembers, cutoffDate) {
  console.log(`Formatting report for ${inactiveMembers.length} inactive members...`);
  
  if (!inactiveMembers.length) {
    console.log("No inactive members found, skipping report generation");
    return null;
  }

  const today = getDateMonthsAgo(0);
  const report = `# Inactive Collaborators Report

Last updated: ${today}
Checking for inactivity since: ${cutoffDate}

## Inactive Collaborators (${inactiveMembers.length})

| Login |
| ----- |
${inactiveMembers.map((m) => `| @${m} |`).join("\n")}

## What happens next?

@nodejs/nodejs-website should review this list and contact inactive collaborators to confirm their continued interest in participating in the project.`;

  console.log("Report generated successfully");
  return report;
}

async function createIssue(github, context, report) {
  if (!report) {
    console.log("No report to create issue from");
    return;
  }

  console.log("Creating new issue...");
  const { owner, repo } = context.repo;
  await github.rest.issues.create({
    owner,
    repo,
    title: CONFIG.ISSUE_TITLE,
    body: report,
    labels: CONFIG.ISSUE_LABELS,
  });
  console.log("Issue created successfully");
}

export default async function (github, context) {
  console.log("Starting inactive collaborator check...");
  
  // Check for existing open issue first - exit early if one exists
  if (await hasOpenIssue(github, context)) {
    console.log("Open issue already exists, exiting early");
    return;
  }

  const cutoffDate = getDateMonthsAgo();
  const collaborators = await parseCollaborators();

  if (collaborators.length === 0) {
    console.log("No collaborators found, exiting");
    return;
  }

  const inactiveMembers = await getInactiveUsers(
    github,
    collaborators,
    "nodejs/nodejs.org",
    cutoffDate,
  );
  const report = formatReport(inactiveMembers, cutoffDate);

  await createIssue(github, context, report);
  console.log("Inactive collaborator check completed");
}
