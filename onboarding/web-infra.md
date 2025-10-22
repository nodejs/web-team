# @nodejs/web-infra Onboarding

This document is an outline of the tasks necessary to onboard a new member of the Web Infrastructure team (@nodejs/web-infra).

Please note these tasks should only be performed after an individual's nomination has passed.
To start the nomination process, see [GOVERNANCE.md](../GOVERNANCE.md).

## Tasks

- [ ] Add the **Nominee** to the @nodejs/web-infra team on GitHub.
- [ ] The nominee should open an issue in [nodejs/admin](https://github.com/nodejs/admin) requesting access to the Web Infra 1Password vault.
- [ ] Grant the **Nominee** access to Sentry.
  - [ ] The **Nominee** should enable physical or passkey 2FA on their Sentry account.
- [ ] Grant the **Nominee** access to Vercel.
  - [ ] The nominee should enable physical or passkey 2FA on their Vercel account.
- [ ] The **Nominee** should add their email to the following aliases (by opening a PR in [nodejs/email](https://github.com/nodejs/email))
	- [ ] [`nodejs-crowdin`](https://github.com/nodejs/email/blob/main/iojs.org/aliases.json#L174)
	- [ ] [`nodejs-vercel`](https://github.com/nodejs/email/blob/main/iojs.org/aliases.json#L241)
- [ ] An OpenJS Slack Admin should add their Slack account to the `nodejs-website-team` team.

### Recommendations

- [ ] The **Nominee** should have some form of physical 2FA (i.e. Yubikey) or passkey enabled on their GitHub account.
- [ ] The **Nominee** should have a SSH or GPG key attached to their GitHub account have passphrases or be stored on a physical 2FA device.
- [ ] The **Nominee** should sign their Git commits.

## Notes

There currently is not a set level of access that @nodejs/web-infra members have on Cloudflare.

Should you need additional access, it may be granted, however, access is not given by default since we do not control it.
