# Node.js Web WG Governance

The Node.js Web WG (@nodejs/web) is a Working Group in the Node.js Project that is composed of a set of subteams. Each containing specific responsibilities and goals.

The Node.js Web Working Group ([`@nodejs/web`](https://github.com/orgs/nodejs/teams/web))
is a [Node.js Core Working Group][], chartered by the
[Technical Steering Committee (TSC)][]. The WG is responsible for high-level
guidance of the Node.js web presence and has final authority over the work
described in the [Charter][], and over the following teams:

- [`@nodejs/web`](https://github.com/orgs/nodejs/teams/web)
- [`@nodejs/nodejs-website`](https://github.com/orgs/nodejs/teams/nodejs-website)
- [`@nodejs/doc-kit`](https://github.com/orgs/nodejs/teams/doc-kit)
- [`@nodejs/web-infra`](https://github.com/orgs/nodejs/teams/web-infra)
- [`@nodejs/web-admins`](https://github.com/orgs/nodejs/teams/web-admins)

For the current list of WG members, see [Members](README.md#members) in the
README.

## Charter

The Working Group's scope, both the work it is responsible for and the work that
remains outside it, is defined in the [Charter][]. The Charter is the
authoritative statement of that scope and is reproduced in the TSC's
[WORKING_GROUPS.md][], so it is not restated here.

Work that the Charter does not place with the WG remains with the TSC or other WGs. 
Within the charter, the TSC's only recourse over a Working Group is to revoke its charter.

The Charter defers to two oversight clauses, described below. Chartering does not
change either of them. Changes to the Cloudflare boundary the Charter describes
require agreement from the [Build WG][].

### TSC Oversight

Any website change that expresses a position about a global event or group of people requires explicit
[TSC](https://github.com/nodejs/TSC/blob/main/TSC-Charter.md#section-4-responsibilities-of-the-tsc)
approval. This can be obtained by pinging `@nodejs/tsc` and receive no objections after seven days,
or by sending an email to `tsc@iojs.org` and receive at least one approval and no objections after seven days.

### OpenJS Oversight and Content Input

Website content including, but not limited to, the [blog](https://nodejs.org/en/blog), [about](https://nodejs.org/en/about), and [partner](https://nodejs.org/en/about/partners) pages are governed by the [content vs. code][] guidance. Additionally, OpenJS Foundation requests are always honored, such as including project and foundation links in the footer.

### Node.js Website Team (`@nodejs/nodejs-website`)

The Node.js Website Team is responsible for the day-to-day technical development of the Node.js Website. This is primarily the development of the website itself, adding new features, pages and components, but also fixing any security issues in the website code, handling operational maintenance, and so on.

The maintainers on the Node.js Website Team are responsible for steering the technical direction of the Node.js Website, and reserve the right to make final decisions on any issues or pull requests, in line with the Contribution Guidelines, Collaborator Guidelines, the Code of Conduct and the overall Governance premises of the Node.js project.

Members of this team are nominated through the guidelines provided in the [Contributing Guidelines][] within the [nodejs.org][] repository. After a passed nomination, members should submit a PR to add themselves to the list of current members, shown within the [README.md](README.md#members).

### Node.js Web Infra Team (`@nodejs/web-infra`)

The Node.js Web Infra Team is responsible for maintaining the Infrastructure relating to Node.js's Web Presence. The Node.js Web Infra team has the responsibilities of:

- Maintaining CI/CD pipelines related to Web Infrastructure
- Maintaining our Infrastructure Providers\*
- Have technical ownership on best-standards and best-practices for our Web Infrastructure (such as Web Frameworks that we use)

Web Infra Team members should have access to maintain the services mentioned above.

Members of this team are nominated by current members of the Node.js Web Infra Team or by the Web Working Group, and follow the guidelines provided in the Collaborator Guidelines of the Node.js Build WG. Nominations are decided by the Working Group, as described in [WG Membership](#wg-membership).

\* This team has access to infrastructure providers directly related to the Website only, such as Vercel. Other providers that are shared beyond the Website may be controlled by other teams (for example, the Node.js Build WG owns Cloudflare). See the [Charter][] for that boundary.

When considering new members, approvers are primarily concerned with **competence** and **trust**. The [language within the Build WG pertaining to competence and trust][build-membership] applies here. The following is repeated, for emphasis:

> [!IMPORTANT]
> Please be aware of the fact that the Web-Infra team is usually invisible to the Node.js project when things go well, but highly visible when things don't go well. Downtime of important resources can have a very wide impact, not just for Node.js open source contributors but for very large sections of the Node.js user ecosystem. Security breaches could have devastating consequences and these all reflect on the project.

## The Interoperability of the Node.js Web WG

As seen above, the different teams under the Node.js Web WG umbrella are responsible for having the oversight on different aspects of Node.js's Web-related projects. However, it is important to note that the Node.js Web WG is not a set of siloed teams, but rather a set of teams that work together to achieve the same goal: Providing the best Web Experience for Node.js.

But above all, the Web WG should work together to better the Web Experience for Node.js, aiming to provide the best experience for Node.js users.

## Collaborators

The repositories within the WG's scope are maintained by the WG and additional
Collaborators who are added by the WG on an ongoing basis. The access each team
holds is listed in [PERMISSIONS.md](PERMISSIONS.md).

Individuals making significant and valuable contributions are made Collaborators
and given commit-access to the project. These individuals are identified by the
WG, and their addition as Collaborators is discussed via pull requests and at WG meetings. Members of
`@nodejs/nodejs-website` are nominated through the [Contributing Guidelines][] in
the [nodejs.org][] repository.

_Note:_ If you make a significant contribution and are not considered for
commit-access, log an issue or contact a WG member directly and it will be
brought up at the next WG meeting.

Modifications of the contents of the repositories within the WG's scope are made
on a collaborative basis. Anybody with a GitHub account may propose a
modification via pull request and it will be considered by the project
Collaborators. All pull requests must be reviewed and accepted by a Collaborator
with sufficient expertise who is able to take full responsibility for the change.
In the case of pull requests proposed by an existing Collaborator, an additional
Collaborator is required for sign-off. Consensus should be sought if additional
Collaborators participate and there is disagreement around a particular
modification. See _Consensus Seeking Process_ below for further detail on the
consensus model used for governance. Pull requests are also subject to the
[Pull Request Policies](#pull-request-policies) below.

Collaborators may opt to elevate significant or controversial modifications, or
modifications that have not found consensus, to the WG for discussion by applying
the `web-agenda` label to a pull request or issue. The WG should serve as the
final arbiter where required.

For the current list of Collaborators, see [Members](README.md#members) in the
README.

## Pull Request Policies

### Timing Requirements

These requirements mirror the [Timing Requirements][] documented in the nodejs.org
Collaborator Guide, and are repeated here so that they apply to every repository
within the WG's scope:

- **Minimum open time**: pull requests must be open for at least 48 hours, or 72
  hours if authored on a weekend.
- **At least one approval**: at least one approval is required for any pull
  request to be merged.
- **No objections**: there must be no unresolved objections once the minimum open
  time has passed.

Pull requests may be merged immediately when they contain critical bug fixes,
short errata such as typos from a previous pull request, or critical changes
considered "showstoppers" for the website's functionality. Otherwise, landing
before the minimum open time requires the [Fast-Track Policy](#fast-track-policy)
below, which is stricter than the fast-tracking process described in the
Collaborator Guide.

### Consensus and Objections

Where there is disagreement on a pull request, consensus should be sought. All
objections must be addressed before merging, and an objection raised by a member
of the TSC or by a Node.js core Collaborator is a valid objection that must be
resolved. A pull request that cannot reach consensus may be elevated to the WG by
applying the `web-agenda` label, and is then handled by the
[Consensus Seeking Process](#consensus-seeking-process) below.

### Atomic Pull Requests

Each pull request should contain a single, atomic, and logical change. This makes it easier to isolate breakages and simplifies the review process for maintainers. Additionally, this policy ensures that, in the event of a regression, the offending change can easily be singled out and reverted.

### Fast-Track Policy

Pull requests may be fast-tracked (landed before the typical review period) when the change is urgent or time-sensitive. Fast-track landing requires the following approvals:

- At least one approval from a team member who is **not** the PR author **and not** the person who requested fast-track.

In other words, if someone other than the author requests fast-track on a PR, their approval alone is not sufficient — an additional approval from a third team member is required.

While there are special exceptions that require bypassing this policy, all unorthodox merges should have proper justification in writing in GitHub and/or Slack.

## WG Membership

WG seats are not time-limited. There is no fixed size of the WG.

Membership of `@nodejs/web` and its subteams is determined by the Working Group.
Any WG member may nominate an individual, following the process for each subteam
described above. Nominations are decided by the WG, per the
_Consensus Seeking Process_ below.

A WG member may be removed from the WG by voluntary resignation, or by consensus
of the other WG members. The WG runs an
[inactive collaborator report](.github/workflows/inactive-collaborator-report.yml)
to identify members who may no longer be active. An emeritus member may rejoin the
WG following consensus from the current WG.

Changes to WG membership are decisions of impact and follow the
[Consensus Seeking Process](#consensus-seeking-process) below. They are proposed
and decided on GitHub, so that every member has the opportunity to participate in
all membership decisions without attending a meeting, and should also be posted in
the agenda (see [meetings/README.md](meetings/README.md)).

If a membership change is discussed in a meeting, the meeting does not decide it;
the outcome is recorded in the relevant issue and confirmed there, so that members
who were not present participate on equal terms.

When considering new members for `@nodejs/web-infra` and `@nodejs/web-admins`,
approvers are primarily concerned with **competence** and **trust**, per the
[language within the Build WG pertaining to competence and trust][build-membership]
and as stated in [Node.js Web Infra Team](#nodejs-web-infra-team-nodejsweb-infra).

## Special Access Requests

The Working Group can grant access to the resources it manages to people who are
not WG members. Examples include translators working on a single language in
Crowdin, and contributors who need scoped access to debug a specific problem.

Requests are made by opening an issue in this repository, and are decided by the
WG. Special access is split into two categories:

- **Ongoing access** is granted where the need is continuing, such as a translator
  maintaining a language. It is reviewed alongside the WG's own membership.
- **Temporary access** is granted for a defined piece of work, and is revoked once
  that work is complete.

Granted access is recorded in [PERMISSIONS.md](PERMISSIONS.md). Access to services
the WG does not own remains subject to the owning team; Cloudflare access, for
example, is granted by the [Build WG][].

## WG Meetings

The WG's meeting schedule, moderation, agenda, and participation process are
described in [meetings/README.md](meetings/README.md).

Items are added to the WG agenda that are considered contentious or are
modifications of governance, contribution policy, WG membership, or this charter.

The intention of the agenda is not to approve or review all patches; that should
happen continuously on GitHub and be handled by the larger group of
Collaborators.

The moderator is responsible for summarizing the discussion of each agenda item
and sends it as a pull request to [meetings/](meetings) after the meeting.

## Consensus Seeking Process

The WG follows a [Consensus Seeking][] decision-making model.

Decisions are made asynchronously on GitHub. The WG meets every four weeks, so
requiring a meeting to decide something would leave that decision waiting for up
to a month. Meetings are an avenue for reaching consensus faster; they are not
where consensus is established, and nothing is binding by virtue of having been
agreed in one. Where a meeting reaches agreement, that agreement is recorded in
the relevant issue or pull request and confirmed there.

This WG does not define a quorum. [Adding quorum rules to the TSC][TSC quorum]
was proposed and declined, on the grounds that a quorate meeting would make
decisions binding independently of consensus, which is not how the project wants
to operate. The thresholds below are therefore counted against the WG's
membership, not against whoever is present at a given moment.

### Everyday Changes

Most changes are decided by lazy consensus on the pull request itself, under the
[Pull Request Policies](#pull-request-policies) above. No further process applies.

### Decisions of Impact

Decisions of impact include nominations to `@nodejs/web` and its subteams, the
removal of a member, changes to this document, and changes to the set of
repositories and services the WG oversees.

A decision of impact is proposed by opening an issue or pull request in this
repository, mentioning `@nodejs/web`, and applying the `web-agenda` label. It
passes when, after seven days:

- at least three WG members have approved, by review, comment, or 👍 reaction;
  and
- no WG member objects.

Nominations to `@nodejs/nodejs-website` instead follow the [Approval Process][] in
the nodejs.org Collaborator Guide, which requires three approvals and a 72-hour
window.

Objections are addressed rather than outvoted. An objection raised by a member of
the TSC or by a Node.js core Collaborator is a valid objection. If a proposal
cannot reach consensus, any WG member may ask for it to be added to the agenda of
the next meeting, or call for a vote.

### Votes

If an item cannot reach a consensus, a WG member can call for either a closing
vote or a vote to table the issue to the next meeting.

All votes, including votes to close or to table, pass if and only if more than
50% of the WG members, excluding those who explicitly abstain, vote in favour.
For example, if there are 20 WG members and 5 of them indicate that they abstain,
then 8 votes in favour are required for the vote to pass.

Votes are held on GitHub and are open for at least seven days. Silence is not
abstention: a member who neither votes nor abstains still counts toward the
threshold, so a vote that few members participate in fails rather than passing on
the strength of a handful of votes.

### Participation in Votes

WG members are expected to participate in WG votes. A WG member who does not
participate in three consecutive votes becomes emeritus, and is no longer counted
in the membership that vote thresholds are measured against. This mirrors the
rule the [TSC Charter][] applies to its own voting members, and keeps the
denominator above honest without introducing a quorum. The monthly
[inactive collaborator report](.github/workflows/inactive-collaborator-report.yml)
is the WG's mechanism for noticing this. An emeritus member may rejoin the WG as
described in [WG Membership](#wg-membership) above.

## Moderation Policy

The [Node.js Moderation Policy][] applies to this WG.

## Code of Conduct

The [Node.js Code of Conduct][] applies to this WG.

[Build WG]: https://github.com/nodejs/build
[Charter]: ./Charter.md
[Consensus Seeking]: https://en.wikipedia.org/wiki/Consensus-seeking_decision-making
[Contributing Guidelines]: https://github.com/nodejs/nodejs.org/blob/main/CONTRIBUTING.md#becoming-a-collaborator
[Approval Process]: https://github.com/nodejs/nodejs.org/blob/main/docs/collaborator-guide.md#approval-process
[Node.js Code of Conduct]: https://github.com/nodejs/TSC/blob/main/CODE_OF_CONDUCT.md
[Node.js Core Working Group]: https://github.com/nodejs/TSC/blob/main/WORKING_GROUPS.md
[Node.js Moderation Policy]: https://github.com/nodejs/TSC/blob/main/Moderation-Policy.md
[TSC Charter]: https://github.com/nodejs/TSC/blob/main/TSC-Charter.md
[TSC quorum]: https://github.com/nodejs/TSC/issues/253
[Technical Steering Committee (TSC)]: https://github.com/nodejs/TSC/blob/main/TSC-Charter.md
[WORKING_GROUPS.md]: https://github.com/nodejs/TSC/blob/main/WORKING_GROUPS.md
[Timing Requirements]: https://github.com/nodejs/nodejs.org/blob/main/docs/collaborator-guide.md#timing-requirements
[build-membership]: https://github.com/nodejs/build/blob/main/GOVERNANCE.md#wg-membership
[content vs. code]: https://github.com/nodejs/nodejs.org/blob/main/docs/content-vs-code.md
[nodejs.org]: https://github.com/nodejs/nodejs.org
