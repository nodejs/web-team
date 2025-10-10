# @nodejs/web-infra Onboarding

This document is an outline of the tasks necessary to onboard a new member of the Web Infrastructure team (@nodejs/web-infra).

Please note these tasks should only be performed after an individual's nomination has passed.
To start the nomination process, see [GOVERNANCE.md](../GOVERNANCE.md).

## Tasks

- [ ] The nominee should open a pull request in [nodejs/web-team](https://github.com/nodejs/web-team) adding themselves to the [MEMBERS.md](https://github.com/nodejs/web-team/blob/main/MEMBERS.md#nodejs-web-infra-team-nodejsweb-infra) document.
  - [ ] Nominee should include this list in the pull request's body to keep track of what has been completed for their onboarding. The pull request should not be merged until the onboarding tasks have been completed.
  - [ ] Please link any additional issues or pull requests back to this one for record keeping purposes.
- [ ] A Web Admin should add the nominee to the [@nodejs/web-infra](https://github.com/orgs/nodejs/teams/web-infra) team.
- [ ] The nominee should open an issue in [nodejs/admin](https://github.com/nodejs/admin) requesting access to the Web Infra 1Password vault.
- [ ] A Web Admin should invite the nominee to Node.js' Sentry account.
  - [ ] The nominee should enable physical or passkey 2FA on their Sentry account.
- [ ] A Web Admin should invite the nominee to Node.js' Vercel account.
  - [ ] The nominee should enable physical or passkey 2FA on their Vercel account.
- [ ] The nominee should open a pull request in [nodejs/email](https://github.com/nodejs/email) to add their email to the `nodejs-crowdin` email chain.
- [ ] An OpenJS Slack Admin should add their Slack account to the `nodejs-website-team` team.

### Recommendations

- [ ] A Web Admin should recommend the nominee have some form of physical 2FA (i.e. Yubikey) or passkey enabled on their GitHub account
- [ ] A Web Admin should recommend any SSH or GPG key attached to their GitHub account have passphrases or be stored on a physical 2FA device.
- [ ] A Web Admin should recommend the nominee sign their Git commits.

## Notes

There currently is not a set level of access that @nodejs/web-infra members have on Cloudflare.

Should you need additional access, it may be granted, however, access is not given by default since we do not control it.
