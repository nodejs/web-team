# Node.js Web-Infra — Incident Response Plan (IRP)

## Scope

This IRP covers incidents affecting Node.js web properties and supporting services operated by the **@nodejs/web** team.

For a list of covered services and repositories, refer to [PERMISSIONS.md](./PERMISSIONS.md).

## IC & Escalation

* **Incident Commander (IC):** Any `@nodejs/web` member who first takes charge.

**Escalation:**
 IC → `@nodejs/web-infra` → `@nodejs/web-admins` → `@nodejs/build` (Cloudflare account/zone-critical) and/or `@nodejs/security-wg` (security incidents) -> `@nodejs/tsc`.

## Severity Levels & SLAs

* **P0 – Critical user impact** (global outage/defacement/security breach):

  * Acknowledge: TBD

* **P1 – Major degradation** (partial outage, broken downloads/docs on a locale/route):

  * Acknowledge: TBD

* **P2 – Minor** (noncritical errors, single integration down):

  * Acknowledge: TBD

When in doubt, start at higher severity and downgrade later.

## Canonical Response Workflow

1. **Declare** severity; assign IC and Comms Lead.

2. **Stabilize users first:**
   * Roll back to last good deploy
   * If needed, enable Cloudflare “Under Attack/WAF rules” and emergency caching on critical paths.

3. **Communicate:** post an initial status summary and known impact; repeat per SLA. (Use blog/announcements or org channel as appropriate; precedent: public [post-mortem for March 17 incident](https://nodejs.org/en/blog/announcements/node-js-march-17-incident).

4. **Contain & eradicate:** revoke keys/tokens, disable compromised deploy hooks, patch, and purge caches safely.

5. **Recover:** redeploy clean artifact, validate, then progressively relax mitigations.

6. **Review:** draft a blameless post-mortem, impact, root cause, and follow-up engineering actions \+ process fixes

## Common Incidents — What Happens & What They Cause

| Incident | Likely Cause | What users see | Immediate actions | Primary owner |
| ----- | ----- | ----- | ----- | ----- |
| **Token/secret leak in repo (EXAMPLE)** | Accidental commit or exposed CI logs. | Subsequent unauthorized changes/deploys. | Invalidate in provider; rotate in 1Password; hunt for usage in audit logs; force redeploy clean. | Service owner + Web-Admins. ([GitHub](https://raw.githubusercontent.com/nodejs/web-team/1cc6db145256efaaa5d11684249361139dff602c/PERMISSIONS.md)) |

## Communications

**Internal (private):** `@nodejs/web-infra` channel/thread; if Cloudflare account action is required, loop in `@nodejs/build`. 

**Public (as needed):** short status updates; if user impact was material, publish a brief blog post or addendum to an incident page (example precedent exists).

### Notes on authority & ownership

* Cloudflare account-level actions (e.g., role changes) are coordinated with **@nodejs/build**; Web-Infra holds write/admin depending on team (`web-infra` vs `web-admins`). Keep this in mind when planning mitigations that require account scope. 
