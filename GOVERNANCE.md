# Node.js Web Team Governance

This document describes the governance structure and processes for the Node.js Web Team.

## Overview

The Node.js Web Team (`@nodejs/web`) maintains Node.js's web presence and related projects through four specialized subteams, each with distinct responsibilities and expertise.

## Team Structure

### 1. Node.js Website Team (`@nodejs/nodejs-website`)

**Responsibilities:**
- Day-to-day technical development of [nodejs.org](https://nodejs.org)
- Feature development and enhancement
- Website component creation
- Security issue resolution
- Operational maintenance

The Website Team maintains final decision authority on website issues and pull requests, in accordance with the project's Contribution Guidelines, Collaborator Guidelines, Code of Conduct, and overall Node.js governance.

### 2. Node.js Web Infrastructure Team (`@nodejs/web-infra`)

**Responsibilities:**
- Maintenance of CI/CD pipelines for web projects
- Management of web infrastructure providers*
- Establishment of technical standards and best practices
- Infrastructure access management

*Note: This team manages infrastructure specific to the Website (e.g., Vercel). Other shared infrastructure (e.g., Cloudflare) may be managed by other teams such as the Node.js Build WG.

### 3. Node.js Web Standards Team (`@nodejs/web-standards`)

**Responsibilities:**
- Advisory role on web standards (e.g., Ecma262)
- Consultation for Node.js Collaborators, TSC, and Web Team on standards-related matters
- Guidance on standards compliance

This team consists of Node.js Collaborators and external experts with significant web standards experience.

### 4. Node.js UX & Design Team (`@nodejs/ux-and-design`)

**Responsibilities:**
- Advisory role on UX and design matters
- Development of design guidelines and best practices
- Consultation on:
  - CSS implementation
  - Accessibility standards
  - User experience flows
  - Component design

This team consists of Node.js Collaborators and external experts with UX and design expertise.

## Membership

Team membership is not time-limited, and there is no fixed size for any subteam.

### Website Team Membership

Members are nominated according to the [Collaborator Guide](https://github.com/nodejs/nodejs.org/blob/main/docs/collaborator-guide.md#becoming-a-collaborator) in the nodejs.org repository. Upon successful nomination, new members should add themselves to [MEMBERS.md](MEMBERS.md) via pull request.

### Web Infrastructure Team Membership

Members are nominated by:
- Node.js Technical Steering Committee (TSC)
- Node.js Build WG, following their Collaborator Guidelines
- Existing Node.js Web Team members (recommendation only)

### Web Standards Team Membership

Members are nominated by:
- Node.js Technical Steering Committee (TSC)
- Existing Node.js Web Team members (recommendation only)

### UX & Design Team Membership

Members are nominated by:
- Node.js Technical Steering Committee (TSC)
- Existing Node.js Web Team members (recommendation only)

### Current Members

The current list of all Web Team members across all subteams is maintained in [MEMBERS.md](MEMBERS.md).

## Governance

### Relationship with the TSC

The Website Team operates with significant autonomy for most website decisions, but must recognize the TSC's ultimate authority on matters affecting Node.js project representation, branding, and strategic partnerships.

#### Decision Authority Hierarchy

1. **Website Team Authority**

   - Technical implementation details
   - User interface and experience design
   - Content organization and information architecture
   - Day-to-day maintenance and updates

2. **TSC Authority**
   - Project-wide policies and governance
   - Strategic partnerships and representation
   - Major structural or navigational changes
   - Content that affects Node.js project positioning

#### Content Requiring TSC Approval

- **Statements on Sociopolitical Issues**: Any content expressing positions on political, social, cultural, or humanitarian matters
- **Commercial Relationships and Endorsements**: Any content establishing or promoting commercial partnerships, vendor preferences, or paid services related to Node.js

Website changes falling under these categories require **formal TSC endorsement** as outlined in the [TSC Charter](https://github.com/nodejs/TSC/blob/main/TSC-Charter.md#section-4-responsibilities-of-the-tsc). Valid approval consists of at least one TSC member's explicit approval with no objections from any TSC members. This endorsement may be secured through either:

- Pinging `@nodejs/tsc` OR
- Sending an email to `tsc@iojs.org`

#### Handling TSC Feedback and Concerns

When TSC members express concerns about proposed changes:

1. **Documentation Requirement**: Document all TSC feedback in the relevant issue or PR
2. **Hold Period**: Pause implementation until concerns are addressed
3. **Resolution Process**:
   - Seek clarification on specific concerns
   - Propose compromise solutions
   - Document resolution attempts and outcomes

#### Dispute Resolution Process

If disagreements arise between the Website Team and TSC regarding website changes:

1. **Escalation Path**:

   - First attempt: Direct discussion on the PR/issue
   - Second attempt: Scheduled discussion in TSC meeting
   - Final resolution: Formal TSC vote if needed

2. **Implementation Requirements**:

   - Changes with unresolved TSC objections must not proceed without formal TSC approval
   - When in doubt about approval status, seek explicit confirmation
   - Document the resolution and approval in the PR before merging

3. **Documentation Standard**:
   - All significant disagreements and their resolutions must be documented
   - TSC approvals should be explicit and documented in writing
   - Approval pathways should be clear to all current and future contributors

### Team Meetings

- Individual subteams may hold meetings as needed
- Cross-team coordination happens through issues in this repository
- Governance discussions occur through repository issues and relevant communication channels

Any community member or contributor can request discussion topics by creating GitHub Issues. Team members can contribute to discussions by participating in issue threads.

### Consensus Seeking Process

The Web Team follows a [Consensus Seeking](http://en.wikipedia.org/wiki/Consensus-seeking_decision-making) decision-making model for governance matters:

- For subteam-specific decisions, each subteam follows their established processes
- For cross-team matters, consensus is sought through GitHub Issue discussions with appropriate input from affected subteams

### Pull Request Guidelines

For pull requests to the governance repository:

**Items requiring consensus seeking:**
- Governance changes
- Significant process modifications

**Items that may be merged with reasonable review time and no dissent:**
- Errata fixes
- Editorial changes
- Meeting minutes
- Team member updates in MEMBERS.md
- Documentation fixes
- Process clarifications

## Interoperability

The four Node.js Web Team subteams collaborate with complementary roles:

- **Web Infrastructure Team**: Manages technical infrastructure and CI/CD
- **Website Team**: Handles day-to-day development
- **UX and Design Team**: Provides design guidance
- **Web Standards Team**: Advises on web technologies and standards compliance

Together, these teams work to deliver the best possible web experience for the Node.js community and users.

## Developer's Certificate of Origin 1.1

By making a contribution to this project, I certify that:

* (a) The contribution was created in whole or in part by me and I
  have the right to submit it under the open source license
  indicated in the file; or

* (b) The contribution is based upon previous work that, to the best
  of my knowledge, is covered under an appropriate open source
  license and I have the right under that license to submit that
  work with modifications, whether created in whole or in part
  by me, under the same open source license (unless I am
  permitted to submit under a different license), as indicated
  in the file; or

* (c) The contribution was provided directly to me by some other
  person who certified (a), (b) or (c) and I have not modified
  it.

* (d) I understand and agree that this project and the contribution
  are public and that a record of the contribution (including all
  personal information I submit with it, including my sign-off) is
  maintained indefinitely and may be redistributed consistent with
  this project or the open source license(s) involved.