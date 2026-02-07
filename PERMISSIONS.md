# Permissions

## Repositories

| Repository                               | Everyone | @nodejs/web | @nodejs/nodejs-website | @nodejs/web-infra | @nodejs/web-admins | Notes                          |
| ---------------------------------------- | -------- | ----------- | ---------------------- | ----------------- | ------------------ | ------------------------------ |
| **[nodejs/discord-status-worker][]**     | Read     | -           | -                      | Maintain          | Admin              |                                |
| **[nodejs/doc-kit][]**                   | Read     | -           | Write                  | Maintain          | Admin              |                                |
| **[nodejs/node.js.org][]**               | Read     | Write       | -                      | Maintain          | Admin              |                                |
| **[nodejs/nodejs.dev][]**                | Read     | -           | Write                  | Maintain          | Admin              | This repository is _archived_. |
| **[nodejs/nodejs.org][]**                | Read     | -           | Write                  | Maintain          | Admin              |                                |
| **[nodejs/nodejs.org-archive][]**        | Read     | Write       | -                      | Maintain          | Admin              | This repository is _archived_. |
| **[nodejs/release-cloudflare-worker][]** | Read     | -           | -                      | Maintain          | Admin              |                                |
| **[nodejs/web-team][]**                  | Read     | Triage      | Maintain               | -                 | -                  |                                |
| **[nodejs/website-cloudflare-worker][]** | -        | -           | -                      | Maintain          | Admin              |                                |

## External Services

| Service                      | Everyone                           | @nodejs/web | @nodejs/nodejs-website | @nodejs/web-infra | @nodejs/web-admins | Notes                                                                                                                                                                  |
| ---------------------------- | ---------------------------------- | ----------- | ---------------------- | ----------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[1Password][]**            | -                                  | -           | -                      | Admin             | Admin              |                                                                                                                                                                        |
| **[Atlassian Statuspage][]** | [Read](https://status.nodejs.org/) | -           | -                      | App Admin         | Org Admin          |
| **[Chromatic][]**            | Read                               | -           | Write                  | Admin             | Admin              | Access to this service is granted via GitHub authentication.                                                                                                           |
| **[Cloudflare][]**           | -                                  | -           | -                      | Read              | Admin              | Access to this service is controlled by @nodejs/build. Additional access may be granted on a case-by-case basis.                                                       |
| **[Codecov][]**              | Read                               | -           | Admin                  | Admin             | Admin              | Access to this service is granted via GitHub authentication, and only related to the repository above.                                                                 |
| **[Crowdin][]**              | Read                               | -           | -                      | Admin             | Admin              | Credentials for a user with elevated exist in 1Password. Access to this service may be granted to outside collaborators on a case-by-case, language-by-language basis. |
| **[Figma][]**                | Read                               | -           | Write                  | -                 | -                  | Access to this service is controlled by the OpenJS Foundation and @avivkeller, and only covers website-related design files.                                           |
| **[HackMD][]**               | -                                  | -           | -                      | -                 | Admin              |                                                                                                                                                                        |
| **[Sentry][]**               | -                                  | -           | -                      | Admin             | Admin              |                                                                                                                                                                        |
| **[Vercel][]**               | -                                  | -           | -                      | Developer         | Owner              | Along with individual access, credentials for a user with elevated exist in 1Password.                                                                                 |

### Trial Period Permissions for New Web Infra Members

As outlined in [GOVERNANCE.md](GOVERNANCE.md), new members of the @nodejs/web-infra team undergo a **3-month trial period** with reduced permissions before receiving full access. The table below shows the access levels granted during the trial period compared to the full access levels shown above.

| Service                      | Trial Period Access | Full Access (post-trial) | Notes                                                                                              |
| ---------------------------- | ------------------- | ------------------------ | -------------------------------------------------------------------------------------------------- |
| **[1Password][]**            | -                   | Admin                    | Not granted during trial; credentials shared on a case-by-case basis by an existing member.        |
| **[Atlassian Statuspage][]** | Read                | App Admin                | Public status page is accessible to everyone; management access is granted after trial.             |
| **[Chromatic][]**            | Read                | Admin                    | Read access available via GitHub authentication.                                                   |
| **[Cloudflare][]**           | Read                | Read                     | Read-only access is sufficient for day-to-day; elevated access may be granted on a case-by-case basis post-trial. |
| **[Crowdin][]**              | Read                | Admin                    | Read access to review translations; admin access after trial.                                      |
| **[Sentry][]**               | Read                | Admin                    | Read access to view error reports and logs; admin access after trial.                               |
| **[Vercel][]**               | Viewer              | Developer                | Viewer access allows reviewing deployments and checking logs; Developer access after trial.         |

> [!NOTE]
> GitHub repository permissions are **not** affected by the trial period. New members receive the same repository-level access as all @nodejs/web-infra members from day one.

## Access Tokens & Automations

| Secret Name                | Display Name            | Platform(s) / Location(s)                                              | Associated Project(s)                     | Access Level | Expiry | Notes                                       |
| -------------------------- | ----------------------- | ---------------------------------------------------------------------- | ----------------------------------------- | ------------ | ------ | ------------------------------------------- |
| `CF_API_TOKEN`             | N/A                     | [nodejs/discord-status-worker][], [nodejs/release-cloudflare-worker][] | [Cloudflare][]                            | Write        | -      | Used for deploying to Cloudflare Workers    |
| `CROWDIN_GITHUB_BOT_TOKEN` | **[@nodejs-crowdin][]** | [nodejs/nodejs.org][]                                                  | [nodejs/nodejs.org][]                     | Write        | -      | Used for localization workflows via Crowdin |
| N/A                        | **[@openjs-vercel][]**  | Vercel                                                                 | [nodejs/nodejs.org][], [nodejs/doc-kit][] | Admin        | -      | Used for deployments                        |
| `CLOUDFLARE_API_TOKEN`     | N/A                     | [nodejs/nodejs.org][]                                                  | [Cloudflare][]                            | Write        | -      | Used for deploying Cloudflare Workers       |

[1Password]: https://1password.com/
[@nodejs-crowdin]: https://github.com/nodejs-crowdin
[@openjs-vercel]: https://github.com/openjs-vercel
[Atlassian Statuspage]: https://manage.statuspage.io/pages/rxy2rhgm8q1n/incidents
[Chromatic]: https://www.chromatic.com/builds?appId=64c7d71358830e9105808652
[Cloudflare]: https://dash.cloudflare.com/07be8d2fbc940503ca1be344714cb0d1
[Codecov]: https://app.codecov.io/github/nodejs
[Crowdin]: https://crowdin.com/project/nodejs-web
[Figma]: https://www.figma.com/file/a10cjjw3MzvRQMPT9FP3xz
[HackMD]: https://hackmd.io
[nodejs/discord-status-worker]: https://github.com/nodejs/discord-status-worker
[nodejs/doc-kit]: https://github.com/nodejs/doc-kit
[nodejs/node.js.org]: https://github.com/nodejs/node.js.org
[nodejs/nodejs.dev]: https://github.com/nodejs/nodejs.dev
[nodejs/nodejs.org]: https://github.com/nodejs/nodejs.org
[nodejs/nodejs.org-archive]: https://github.com/nodejs/nodejs.org-archive
[nodejs/release-cloudflare-worker]: https://github.com/nodejs/release-cloudflare-worker
[nodejs/web-team]: https://github.com/nodejs/web-team
[nodejs/website-cloudflare-worker]: https://github.com/nodejs/website-cloudflare-worker
[Sentry]: https://sentry.io/
[Vercel]: https://vercel.com/
