# Nilvora Website

Responsive static landing website for Nilvora, intended for deployment with Cloudflare Pages from GitHub.

## Contents
- `index.html` — landing page
- `css/styles.css` — responsive design and RTL layout
- `js/main.js` — mobile navigation, language toggle, search interaction and Coming Soon toast
- `assets/nilvora-logo.jpeg` — user-provided official logo
- `assets/aswan-hero.png` — generated scenic hero image
- `assets/design-reference.jpeg` — supplied visual reference (not used as page background)
- `policies/terms.html` — draft Terms of Service
- `policies/privacy.html` — draft Privacy Policy
- `policies/refunds.html` — draft Cancellation & Refund Policy

## Preview locally
Open `index.html` in a browser. For best testing, use VS Code Live Server or another local static server.

## Cloudflare Pages settings
- Production branch: `main`
- Framework preset: `None`
- Build command: `exit 0`
- Build output directory: `/` (repository root)

Cloudflare Pages requires a top-level `index.html` in the configured output directory.

## Before sending to XPay
1. Verify the official business/support email and replace `hello@nilvora.online` if needed.
2. Review all policy drafts; they are placeholders, not legal advice or a substitute for your actual operating policies.
3. Confirm the platform's current availability statements accurately reflect the service.
4. Confirm that the product/service categories match what you intend to sell and the payment provider permits the activity.
5. Test mobile layout, navigation, language switch, all policy links and the Coming Soon message.
6. Verify the deployed website on `https://www.nilvora.online`.

## Image note
The five category card photographs are loaded from Unsplash image URLs. A working internet connection is needed for those photographs. The hero and logo assets are local files in this repository. Check the relevant image pages and Unsplash license/attribution requirements before commercial use.
