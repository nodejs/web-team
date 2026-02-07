# Node.js Web Team Governance

The Node.js Web Team (@nodejs/web) is a team in the Node.js Project that is composed by a set of subteams. Each containing specific responsibilities and goals.

### TSC Oversight

Any website change that expresses a position about a global event or group of people requires explicit
[TSC](https://github.com/nodejs/TSC/blob/main/TSC-Charter.md#section-4-responsibilities-of-the-tsc)
approval. This can be obtained by pinging `@nodejs/tsc` and receive no objections after seven days,
or by sending an email to `tsc@iojs.org` and receive at least one approval and no objections after seven days.

### Node.js Website Team (`@nodejs/nodejs-website`)

The Node.js Website Team is responsible for the day-to-day technical development of the Node.js Website. This is primarily the development of the website itself, adding new features, pages and components, but also fixing any security issues in the website code, handling operational maintenance, and so on.

The maintainers on the Node.js Website Team are responsible for steering the technical direction of the Node.js Website, and reserve the right to make final decisions on any issues or pull requests, in line with the Contribution Guidelines, Collaborator Guidelines, the Code of Conduct and the overall Governance premises of the Node.js project.

Members of this team are nominated through the guidelines provided in the [Contributing Guidelines](https://github.com/nodejs/nodejs.org/blob/main/CONTRIBUTING.md#becoming-a-collaborator) within the [nodejs.org](https://github.com/nodejs/nodejs.org) repository. After a passed nomination, members should submit a PR to add themselves to the list of current members, shown within [MEMBERS.md](https://github.com/nodejs/web-team/blob/main/MEMBERS.md).

### Node.js Web Infra Team (`@nodejs/web-infra`)

The Node.js Web Infra Team is responsible for maintaining the Infrastructure relating to Node.js's Web Presence. The Node.js Web Infra team has the responsibilities of:

- Maintaining CI/CD pipelines related to Web Infrastructure
- Maintaining our Infrastructure Providers\*
- Have technical ownership on best-standards and best-practices for our Web Infrastructure (such as Web Frameworks that we use)

Web Infra Team members should have access to maintain the services mentioned above.

Members of this team are nominated either by the Node.js Technical Steering Committee (TSC) or the Node.js Build WG and follow the guidelines provided in the Collaborator Guidelines of the Node.js Build WG. Current members of the Node.js Web Infra Team may also nominate individuals.

\* This team has access to infrastructure providers directly related to the Website only, such as Vercel. Other providers that are shared beyond the Website may be controlled by other teams (for example, the Node.js Build WG owns Cloudflare).

When considering new members, approvers are primarily concerned with **competence** and **trust**. The [language within the Build WG pertaining to competence and trust](https://github.com/nodejs/build/blob/main/GOVERNANCE.md#wg-membership) applies here. The following is repeated, for emphasis:

> [!IMPORTANT]
> Please be aware of the fact that the Web-Infra team is usually invisible to the Node.js project when things go well, but highly visible when things don't go well. Downtime of important resources can have a very wide impact, not just for Node.js open source contributors but for very large sections of the Node.js user ecosystem. Security breaches could have devastating consequences and these all reflect on the project.

#### Onboarding Trial Period

New members of the Web Infra Team undergo an initial **trial period** with limited access to infrastructure systems. During this period, new members receive reduced permissions sufficient for day-to-day monitoring and troubleshooting, but not full administrative access. Specifically:

- **Vercel**: New members are granted the **Viewer** role (instead of the standard **Developer** role). This provides sufficient access to view deployments, check logs, and monitor projects.
- **Cloudflare**: New members receive **Read-only** access (which is the standard level for all Web Infra members, as access is controlled by @nodejs/build).
- **Other Services**: Access to other services (Sentry, Crowdin, Search Console, Status Page, 1Password) is granted as normal during the trial period.

The trial period lasts a **minimum of 3 months** from the date the member is onboarded. After this period, existing Web Infra members may approve elevating the new member's permissions to full access levels. The elevation requires approval from at least **two existing Web Infra members** (or one Web Admin). If concerns arise during the trial period, the team may extend the trial or revoke access as necessary.

During the trial period, new members are encouraged to:

- Familiarize themselves with the infrastructure and its documentation
- Participate in incident response under the guidance of experienced members
- Demonstrate competence in handling day-to-day operational tasks

For the detailed onboarding checklist, see [onboarding/web-infra.md](onboarding/web-infra.md).

### Node.js UX & Design Team (`@nodejs/ux-and-design`)

The Node.js UX & Design Team is composed of Node.js Collaborators and External Collaborators that have experience or expertisè with UX & Design. The UX & Design Team is responsible for guiding and serving as points of contact when members of the Node.js Web Team require assistance or guidance regarding UX & Design.

Often members of this team will collaborate on providing best practices and guidelines for the Node.js Website, on matters of UX & Design. Members of this team are also responsible for providing feedback on the Node.js Website, and providing feedback on the Node.js Website's design. (For example, when a discussion arises regarding best practices on topics such as CSS, accessibility, UX flows and intent, or component design, the UX & Design Team has a say on the matter).

Members of this team are nominated by the Node.js Technical Steering Committee (TSC). Current members of the UX & Design Team may also nominate individuals.

## The Interoperability of the Node.js Web Team

As seen above, the different teams under the Node.js Web Team umbrella are responsible for having the oversight on different aspects of Node.js's Web-related projects. However, it is important to note that the Node.js Web Team is not a set of siloed teams, but rather a set of teams that work together to achieve the same goal: Providing the best Web Experience for Node.js.

Following this line of thought, the Web Infra Team is responsible for the technical aspects of the Node.js Website (Infrastructure, Framework, CI/CD, etc); The Website Team is responsible for the day-to-day development of the Node.js Website; The UX and Design Team advise on Design Matters.

But above all, the Web Team should work together to better the Web Experience for Node.js, aiming to provide the best experience for Node.js users.