# @nodejs/web-infra Onboarding

This document is an outline of the tasks necessary to onboard a new member of the Web Infrastructure team (@nodejs/web-infra).

Please note these tasks should only be performed after an individual's nomination has passed.
To start the nomination process, see [GOVERNANCE.md](../GOVERNANCE.md).

## Phase 1: Trial Period Access

New members begin with a **3-month trial period** and receive limited access to infrastructure services. See [GOVERNANCE.md](../GOVERNANCE.md) for details on the trial period policy.

### Tasks

- [ ] Add the **Nominee** to the @nodejs/web-infra team on GitHub.
- [ ] Grant the **Nominee** _Viewer_ access to Vercel.
  - [ ] The Nominee should enable physical or passkey 2FA on their Vercel account.
- [ ] Grant the **Nominee** _Read-only_ access to Sentry.
  - [ ] The Nominee should enable physical or passkey 2FA on their Sentry account.
- [ ] Grant the **Nominee** _Read-only_ access to Crowdin.
- [ ] Grant the **Nominee** _Read-only_ access to the Node.js Status Page.
- [ ] The **Nominee** should add their email to the following aliases (by opening a PR in [nodejs/email](https://github.com/nodejs/email)):
  - [ ] [`nodejs-crowdin`](https://github.com/nodejs/email/blob/main/iojs.org/aliases.json#L174)
  - [ ] [`nodejs-vercel`](https://github.com/nodejs/email/blob/main/iojs.org/aliases.json#L241)
- [ ] An OpenJS Slack Admin should add their Slack account to the `nodejs-website-team` team.
- [ ] Add the **Nominee** to the following OpenJS Slack channels:
  - [ ] `#nodejs-website`
  - [ ] `#nodejs-web-infra`
  - [ ] `#nodejs-web-infra-alerts`
  - [ ] `#ext-nodejs-cloudflare`
  - [ ] `#ext-nodejs-sentry`

### Recommendations

- [ ] The **Nominee** should have some form of physical 2FA (i.e. Yubikey) or passkey enabled on their GitHub account.
- [ ] The **Nominee** should have any SSH or GPG key attached to their GitHub account have passphrases and/or be stored on a physical 2FA device.
- [ ] The **Nominee** should sign their Git commits.

## Phase 2: Full Access (Post-Trial)

After the trial period concludes (typically 3 months), existing Web Infra Team members will assess the new member's performance and trustworthiness. If the team agrees the member is ready, the following tasks should be completed to grant full access.

> [!NOTE]
> Full access may be granted earlier by consensus of existing team members. The trial period may also be extended if the team determines additional time is needed.

### Tasks

- [ ] The **Nominee** should open an issue in [nodejs/admin](https://github.com/nodejs/admin) requesting access to the Web Infra 1Password vault.
- [ ] Elevate the **Nominee** to _Developer_ access on Vercel.
- [ ] Elevate the **Nominee** to _Admin_ access on Sentry.
- [ ] Elevate the **Nominee** to _Admin_ access on Crowdin.
- [ ] Elevate the **Nominee** to _App Admin_ access on the Node.js Status Page.
- [ ] Grant the **Nominee** access to Search Console.

## Notes

There currently is not a set level of access that @nodejs/web-infra members have on Cloudflare.

Should you need additional access, it may be granted, however, access is not given by default since we do not control it.
