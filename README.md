# Node.js Web Working Group

The Node.js Web Working Group ([`@nodejs/web`](https://github.com/orgs/nodejs/teams/web))
is a [Node.js Core Working Group][], chartered by the
[Technical Steering Committee (TSC)][].

This repository contains the charter, governance documentation, workflows, and
shared resources for the Working Group and its subteams.

The WG is responsible for high-level guidance of the Node.js web presence and has
final authority over the work described in the charter below, and over the
following teams:

- [`@nodejs/web`](https://github.com/orgs/nodejs/teams/web)
- [`@nodejs/nodejs-website`](https://github.com/orgs/nodejs/teams/nodejs-website)
- [`@nodejs/web-infra`](https://github.com/orgs/nodejs/teams/web-infra)
- [`@nodejs/web-admins`](https://github.com/orgs/nodejs/teams/web-admins)

For the current list of WG members, see [Members](#members).

## Charter

The Web Working Group is responsible for the Node.js project's web presence: the
development, operation, and security of nodejs.org and the infrastructure that
serves it.

Responsibilities include:

- Technical direction and day-to-day development of the Node.js website and its
  supporting projects, including `nodejs/nodejs.org`, `nodejs/learn`, and
  `nodejs/doc-kit`.
- Operating and maintaining the infrastructure serving the Node.js web presence,
  including CI/CD pipelines, `nodejs/website-cloudflare-worker`,
  `nodejs/release-cloudflare-worker`, and `nodejs/discord-status-worker`.
- Managing access to, and administration of, the third-party services used to run
  the Node.js web presence, as enumerated in the Working Group's
  [PERMISSIONS.md](PERMISSIONS.md).
- Responding to availability and security incidents affecting the Node.js web
  presence, per the Working Group's
  [incident response plan](INCIDENT_RESPONSE_PLAN.md).
- Maintaining localization tooling and workflows for the Node.js website.
- Project governance and process for the Working Group, including this policy, its
  contribution policy, and its permissions model.
- Managing the membership of `@nodejs/web` and its subteams, including
  `@nodejs/nodejs-website`, `@nodejs/web-infra`, and `@nodejs/web-admins`.
- Overseeing repositories within the Working Group's scope (creating, moving,
  archiving, removing) and their maintainer teams.

### Outside the Charter

- **Editorial positions.** Chartering does not change the
  [TSC Oversight](GOVERNANCE.md#tsc-oversight) clause described about global positions or events.
- **Foundation, Partner, Marketing, or Collaborator content.** Chartering does not change [content input](GOVERNANCE.md#openjs-oversight-and-content-input) from stakeholders that have [content vs. code][] scope. 
- **Shared infrastructure.** Cloudflare is owned by the [Build WG][]; the Web WG
  holds scoped access only. Changes to that boundary require agreement from the
  Build WG.
- **Anything not listed above.** Work outside these responsibilities remains with
  the TSC.

Within the charter, the TSC's only recourse over a Working Group is to revoke its
charter.

## Working Group Structure

The Working Group consists of two specialized subteams:

- **Website Team** ([`@nodejs/nodejs-website`](https://github.com/orgs/nodejs/teams/nodejs-website)) - Day-to-day website development
- **Web Infra Team** ([`@nodejs/web-infra`](https://github.com/orgs/nodejs/teams/web-infra)) - Infrastructure and CI/CD

_There is also the **Web Admins Team** ([`@nodejs/web-admins`](https://github.com/orgs/nodejs/teams/web-admins)), which is responsible for administrative operations relating to the Working Group._

For detailed information about each team's responsibilities, see
[GOVERNANCE.md](GOVERNANCE.md).

## Members

### Node.js Website Team (`@nodejs/nodejs-website`)

- [@araujogui](https://github.com/araujogui) - **Guilherme Araújo** (he/him)
- [@AugustinMauroy](https://github.com/AugustinMauroy) - **Augustin Mauroy** (he/him)
- [@avivkeller](https://github.com/avivkeller) - **Aviv Keller** (he/him)
- [@aymen94](https://github.com/aymen94) - **Aymen Naghmouchi**
- [@benhalverson](https://github.com/benhalverson) - **Ben Halverson** (he/him)
- [@bjohansebas](https://github.com/bjohansebas) - **Sebastian Beltran**
- [@bmuenzenmeyer](https://github.com/bmuenzenmeyer) - **Brian Muenzenmeyer** (he/him)
- [@bnb](https://github.com/bnb) - **Tierney Cyren** (they/them)
- [@canerakdas](https://github.com/canerakdas) - **Caner Akdas**
- [@dario-piotrowicz](https://github.com/dario-piotrowicz) - **Dario Piotrowicz**
- [@Harkunwar](https://github.com/Harkunwar) - **Harkunwar Kochar** (he/him)
- [@manishprivet](https://github.com/manishprivet) - **Manish Kumar** (he/him)
- [@mikeesto](https://github.com/mikeesto) - **Michael Esteban** (he/him)
- [@ovflowd](https://github.com/ovflowd) - **Claudio Wunder** (they/them)

### Node.js Web Infra Team (`@nodejs/web-infra`)

- [@avivkeller](https://github.com/avivkeller) - **Aviv Keller** <<me@aviv.sh>> (he/him)
- [@bmuenzenmeyer](https://github.com/bmuenzenmeyer) - **Brian Muenzenmeyer** <<brian.muenzenmeyer@gmail.com>> (he/him)
- [@canerakdas](https://github.com/canerakdas) - **Caner Akdas** <<canerakdas@gmail.com>> (he/him)
- [@flakey5](https://github.com/flakey5) - **flakey5** <<me@flakey5.dev>> (she/her)
- [@MattIPv4](https://github.com/MattIPv4) - **Matt Cowley** <<me@mattcowley.co.uk>> (he/him)
- [@MoLow](https://github.com/MoLow) - **Moshe Atlow** <<moshe@atlow.co.il>> (he/him)
- [@ovflowd](https://github.com/ovflowd) - **Claudio Wunder** <<cwunder@gnome.org>> (they/them)

### Node.js Web Admins Team (`@nodejs/web-admins`)

- [@bmuenzenmeyer](https://github.com/bmuenzenmeyer) - **Brian Muenzenmeyer** (he/him)
- [@MattIPv4](https://github.com/MattIPv4) - **Matt Cowley** (he/him)
- [@ovflowd](https://github.com/ovflowd) - **Claudio Wunder** (they/them)

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
[Pull Request Policies](GOVERNANCE.md#pull-request-policies) in GOVERNANCE.md.

Collaborators may opt to elevate significant or controversial modifications, or
modifications that have not found consensus, to the WG for discussion by applying
the `web-agenda` label to a pull request or issue. The WG should serve as the
final arbiter where required.

For the current list of Collaborators, see [Members](#members) above.

## WG Membership

WG seats are not time-limited. There is no fixed size of the WG.

Membership of `@nodejs/web` and its subteams is determined by the Working Group.
Any WG member may nominate an individual, following the process for each subteam
described in [GOVERNANCE.md](GOVERNANCE.md). Nominations are decided by the active
members of the WG, per the _Consensus Seeking Process_ below.

A WG member may be removed from the WG by voluntary resignation, or by consensus
of the other active WG members. The WG runs an
[inactive collaborator report](.github/workflows/inactive-collaborator-report.yml)
to identify members who may no longer be active. An emeritus member may rejoin the
WG following consensus from the current WG.

Changes to WG membership should be posted in the agenda, and may be suggested as
any other agenda item (see [meetings/README.md](meetings/README.md)).

If an addition or removal is proposed during a meeting, and the full WG is not in
attendance to participate, then the addition or removal is added to the agenda
for the subsequent meeting. This is to ensure that all members are given the
opportunity to participate in all membership decisions. If a WG member is unable
to attend a meeting where a planned membership decision is being made, then their
consent is assumed.

When considering new members for `@nodejs/web-infra` and `@nodejs/web-admins`,
approvers are primarily concerned with **competence** and **trust**, per the
[language within the Build WG pertaining to competence and trust][build-membership]
and as stated in [GOVERNANCE.md](GOVERNANCE.md#nodejs-web-infra-team-nodejsweb-infra).

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

When an agenda item has appeared to reach a consensus, the moderator will ask
"Does anyone object?" as a final call for dissent from the consensus.

If an agenda item cannot reach a consensus, a WG member can call for either a
closing vote or a vote to table the issue to the next meeting. The call for a
vote must be seconded by a majority of the WG or else the discussion will
continue. Simple majority wins.

Changes to WG membership follow this same process. See "WG Membership" above.

## Moderation Policy

The [Node.js Moderation Policy][] applies to this WG.

## Code of Conduct

The [Node.js Code of Conduct][] applies to this WG.

## In This Repository

| Document                                               | Contents                                                       |
| ------------------------------------------------------ | -------------------------------------------------------------- |
| [GOVERNANCE.md](GOVERNANCE.md)                         | Subteam responsibilities, TSC oversight, pull request policies |
| [PERMISSIONS.md](PERMISSIONS.md)                       | Repository, service, and token access held by each team        |
| [SECURITY.md](SECURITY.md)                             | How to report a security issue                                 |
| [INCIDENT_RESPONSE_PLAN.md](INCIDENT_RESPONSE_PLAN.md) | Incident classification, response, and postmortem process      |
| [meetings/](meetings)                                  | Meeting process and published minutes                          |
| [onboarding/](onboarding)                              | Onboarding material for new members                            |

[Build WG]: https://github.com/nodejs/build
[Consensus Seeking]: https://en.wikipedia.org/wiki/Consensus-seeking_decision-making
[Contributing Guidelines]: https://github.com/nodejs/nodejs.org/blob/main/CONTRIBUTING.md#becoming-a-collaborator
[Node.js Code of Conduct]: https://github.com/nodejs/TSC/blob/main/CODE_OF_CONDUCT.md
[Node.js Core Working Group]: https://github.com/nodejs/TSC/blob/main/WORKING_GROUPS.md
[Node.js Moderation Policy]: https://github.com/nodejs/TSC/blob/main/Moderation-Policy.md
[Technical Steering Committee (TSC)]: https://github.com/nodejs/TSC/blob/main/TSC-Charter.md
[WORKING_GROUPS.md]: https://github.com/nodejs/TSC/blob/main/WORKING_GROUPS.md#web
[build-membership]: https://github.com/nodejs/build/blob/main/GOVERNANCE.md#wg-membership
[content vs. code]: https://github.com/nodejs/nodejs.org/blob/main/docs/content-vs-code.md
[nodejs.org]: https://github.com/nodejs/nodejs.org
