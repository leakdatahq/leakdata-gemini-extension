<img src="assets/logo-fallback.png" alt="LeakData" width="240">

# LeakData for Antigravity CLI and Gemini CLI

Check your verified email for breach exposure and check password hash prefixes in Antigravity. LeakData returns a concise summary of the evidence it finds, so you can decide what to investigate next.

[Create a LeakData account](https://leakdata.io/register?utm_source=gemini_cli&utm_medium=extension&utm_campaign=marketplace) · [View plans](https://leakdata.io/pricing?utm_source=gemini_cli&utm_medium=extension&utm_campaign=marketplace) · [Get help](https://leakdata.io/contact)

## What you can ask

| Your question | What LeakData checks |
| --- | --- |
| “Check my verified email for breach exposure.” | The primary email verified on your linked LeakData account. |
| “Check the SHA-1 prefix 5BAA6.” | A five-character hash prefix. Never enter your password or full hash. |

Results reflect the evidence available to LeakData. A no-match result does not establish that an account or password is safe. A prefix check alone cannot confirm whether a specific password has appeared in a breach.

## Before you connect

**Connection update, September 10:** Some longer Antigravity sessions currently need you to reconnect. We have reproduced an OAuth renewal error and are fixing it. If a check fails, use `/mcp` to authenticate again before retrying. Initial connection and tool checks passed; uninterrupted long-session use is still being verified.

You need an active LeakData plan with API access and a verified primary email for exposure searches. Creating an account alone does not enable this connection. Your account permissions and usage limits apply; the extension does not include a LeakData subscription. [Review plans](https://leakdata.io/pricing?utm_source=gemini_cli&utm_medium=extension&utm_campaign=marketplace) or [contact us](https://leakdata.io/contact) to confirm API access before you connect.

For individual Google accounts, use Antigravity CLI. [Google moved individual Gemini CLI accounts to Antigravity CLI](https://github.com/google-gemini/gemini-cli/discussions/28017). Gemini CLI remains available through eligible enterprise or API access. Your Google account access is separate from your LeakData subscription.

## Connect Antigravity CLI

```sh
git clone https://github.com/leakdatahq/leakdata-gemini-extension.git leakdata
agy plugin validate ./leakdata
agy plugin install ./leakdata
```

Open Antigravity, use `/mcp` to find LeakData, and complete authentication in your browser. Review the requested permissions before approving the connection.

If an older connection returns an authorization error, open `/mcp`, restart LeakData and choose Authenticate when prompted. Complete the new browser consent, then retry your check. Do not paste tokens into a prompt or edit authentication files.

## Connect Gemini CLI

```sh
gemini extensions install https://github.com/leakdatahq/leakdata-gemini-extension
```

Restart Gemini CLI, then run:

```text
/mcp auth leakdata
```

Sign in on `leakdata.io` and review the two requested permissions: exposure search and password-prefix checks. After connecting, `/mcp` shows the available LeakData tools.

## Your account stays in control

The extension adds two read-only tools. It cannot change your accounts, send messages or remediate systems. Exposure searches are limited to the primary email verified on your linked account. Domain searches are not available through this MCP integration.

Authentication uses OAuth with PKCE. No API key, client secret or access token is bundled. Keep normal tool confirmations enabled. Never share plaintext passwords, complete hashes or raw breach records in a prompt.

To stop using the extension locally, disable or remove it from your client. This does not confirm that its OAuth tokens have been revoked. Contact [LeakData Support](mailto:support@leakdata.io) if you need help ending account access; never include passwords or tokens in your message.

## Connection details

| Setting | Value |
| --- | --- |
| MCP endpoint | `https://leakdata.io/mcp` |
| Transport | Streamable HTTP |
| Authentication | OAuth authorization code with PKCE S256; Gemini CLI uses dynamic registration and Antigravity uses Google's published client metadata |
| Permissions | `search`, `password-check` |
| Tools | `leakdata.search`, `leakdata.password_prefix_check` |

## Help and privacy

For setup or account questions, email [support@leakdata.io](mailto:support@leakdata.io). Report security issues privately to [security@leakdata.io](mailto:security@leakdata.io).

[Documentation](https://leakdata.io/docs) · [Privacy policy](https://leakdata.io/privacy) · [Terms](https://leakdata.io/terms) · [OAuth guide](https://leakdata.io/auth.md)

This extension is maintained by LeakData. Gemini and Antigravity are Google products; no Google endorsement is implied.

## Development and release status

Use Node.js `24.18.0` and npm `11.16.0` for package validation:

```sh
npm test
npx --yes @google/gemini-cli@0.59.0 extensions validate .
agy plugin validate .
```

Package 1.0.0 passed real Antigravity CLI `1.2.0` verified-email, supplied-prefix and negative-case checks against live MCP `1.3.2`. The pinned CI validator also checks Antigravity CLI `1.1.28` and Gemini CLI `0.59.0`. Actual Gemini account validation remains pending. See [RELEASE_CHECKLIST.md](RELEASE_CHECKLIST.md) for dated evidence and limitations; source-package distribution does not establish Google gallery or MCP Store inclusion.
