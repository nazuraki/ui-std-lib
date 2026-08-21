# ui-std-lib

Shared UX/design system for nazuraki apps. Two layers:

- **`styles/`** (`@nazuraki/styles`) — framework-agnostic CSS: design tokens,
  base styles, and component classes, organized per theme. Any app (React,
  Svelte, plain HTML) can adopt this layer immediately.
- **`components/react/`** (`@nazuraki/ui-react`) — React components that render
  the style layer's classes. For behavior-heavy UI as apps standardize on React.

**Showcase:** https://nazuraki.github.io/ui-std-lib/ — every component rendered
live, with a style selector. Deployed from `site/` on push to main.

## Themes

| Theme | Description |
| --- | --- |
| `neon-butterfly` | Dark navy + lilac + neon lime, JetBrains Mono, glass surfaces with glow hovers. Derived from the switchboard landing page. |

Each theme ships a `design.md` — a Stitch-compatible written spec of the
aesthetic (palette, typography, shape rules, component inventory). Read it
before designing new screens; feed it to Stitch to generate on-system mockups.

## Consuming

Packages publish to the public npm registry (`@nazuraki/styles`,
`@nazuraki/ui-react`) — no registry config or auth needed to install.

### Styles (any app)

```css
@import "@nazuraki/styles/neon-butterfly";        /* full theme */
@import "@nazuraki/styles/neon-butterfly/tokens"; /* tokens only */
```

No-build apps can pull from jsDelivr instead:

```html
<link rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/nazuraki/ui-std-lib@v0.2.1/styles/neon-butterfly/index.css">
```

The JetBrains Mono webfont is not bundled; include the Google Fonts link
(weights 450 + 700) or self-host it. The font stack falls back to
`ui-monospace`.

### React components

```tsx
import { Button, Card, NavLink } from "@nazuraki/ui-react";
```

Import a theme's CSS once at the app root; components carry only class names
(`nb-btn`, `nb-card`, `nb-link`), so themes stay swappable.

## Developing

```
pnpm install
pnpm build
```

## Publishing

Tag `v*` on main → the `publish` workflow builds and publishes both packages to
npmjs via trusted publishing (OIDC, no stored token; each package's npm
settings name this repo + `publish.yml` as its trusted publisher). Bump
versions in both package manifests before tagging.

## Agent skill

[skills/design-system/SKILL.md](skills/design-system/SKILL.md) teaches coding
agents to consume this system instead of writing ad-hoc styles. Install it in
an app repo by symlinking or copying into `.claude/skills/design-system/`.

## Layout

```
styles/                    @nazuraki/styles
  neon-butterfly/          tokens.css, base.css, components/*.css, index.css, design.md
components/
  react/                   @nazuraki/ui-react (tsc → dist/)
site/                      GH Pages showcase (no build; styles copied in by CI)
skills/design-system/      agent skill for consuming the system
```
