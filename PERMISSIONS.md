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
| **[Vercel][]**               | -                                  | -           | -                      | Admin             | Admin              | Along with individual access, credentials for a user with elevated exist in 1Password.                                                                                 |

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
