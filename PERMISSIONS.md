# Permissions

## Repositories

| Repository                               | Everyone | @nodejs/web | @nodejs/nodejs-website | @nodejs/web-infra | @nodejs/web-admins | Notes |
| ---------------------------------------- | -------- | ----------- | ---------------------- | ----------------- | ------------------ | ----- |
| **[nodejs/discord-status-worker][]**     | Read     | -           | -                      | Maintain          | Admin              |       |
| **[nodejs/doc-kit][]**                   | Read     | -           | Write                  | Maintain          | Admin              |       |
| **[nodejs/node.js.org][]**               | Read     | Write       | -                      | Maintain          | Admin              |       |
| **[nodejs/nodejs.dev][]**                | Read     | -           | Write                  | Maintain          | Admin              |       |
| **[nodejs/nodejs.org][]**                | Read     | -           | Write                  | Maintain          | Admin              |       |
| **[nodejs/nodejs.org-archive][]**        | Read     | Write       | -                      | Maintain          | Admin              |       |
| **[nodejs/release-cloudflare-worker][]** | Read     | -           | -                      | Maintain          | Admin              |       |
| **[nodejs/web-team][]**                  | Read     | Triage      | Maintain               | -                 | Admin              |       |
| **[nodejs/website-cloudflare-worker][]** | -        | -           | -                      | Maintain          | Admin              |       |

## External Services

| Service                   | Everyone | @nodejs/web | @nodejs/nodejs-website | @nodejs/web-infra | @nodejs/web-admins | Notes                                                                         |
| ------------------------- | -------- | ----------- | ---------------------- | ----------------- | ------------------ | ----------------------------------------------------------------------------- |
| **[1Password][]**         | -        | -           | -                      | Admin             | Admin              |                                                                               |
| **[Chromatic][]**         | Read     | -           | Write                  | Admin             | Write              | Access to this service is granted via GitHub authentication.                  |
| **[Cloudflare][]**        | -        | -           | -                      | Write             | Admin              | Access to this service is controlled by @nodejs/build                         |
| **[Codecov][]**           | Read     | -           | Admin                  | Admin             | Admin              | Access to this service is granted via GitHub authentication.                  |
| **[Figma Design File][]** | Read     | -           | Write                  | -                 | -                  | Access to this service is controlled by the OpenJS Foundation and @avivkeller |
| **[Sentry][]**            | -        | -           | -                      | Admin             | Admin              |                                                                               |
| **[Vercel][]**            | -        | -           | -                      | Admin             | Admin              |                                                                               |

## Access Tokens

| Secret Name                | Display Name          | Platform/Location   | Associated Project(s) | Access Level | Expiry | Notes                                                    |
| -------------------------- | --------------------- | ------------------- | --------------------- | ------------ | ------ | -------------------------------------------------------- |
| `CROWDIN_GITHUB_BOT_TOKEN` | **[@nodejs-crowdin]** | [nodejs/nodejs.org] | [nodejs/nodejs.org]   | Write        | -      | Used for localization workflows via Crowdin              |

[1Password]: https://1password.com/
[@nodejs-crowdin]: https://github.com/nodejs-crowdin
[@openjs-vercel]: https://github.com/openjs-vercel
[Chromatic]: https://www.chromatic.com/
[Cloudflare]: https://www.cloudflare.com/
[Codecov]: https://codecov.io/
[Figma Design File]: https://www.figma.com/file/a10cjjw3MzvRQMPT9FP3xz
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
