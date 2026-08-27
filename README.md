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
| `summer-cloud` | Light sky gradient + vivid violet + sky blue, Plus Jakarta Sans / Inter / JetBrains Mono, frosted glass with bouncy pill buttons. Derived from the Summer Cloud retail UI system. |
| `luminous-precision` | Deep obsidian + vibrant orchid + electric teal, Sora headlines over JetBrains Mono, glass panes with lit top edges and glow-based elevation. Professional evolution of neon-butterfly, derived from the InfraPulse Stitch mockups. |

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
@import "@nazuraki/styles/summer-cloud";          /* or the light retail theme */
```

No-build apps can pull from jsDelivr instead:

```html
<link rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/nazuraki/ui-std-lib@v0.2.1/styles/neon-butterfly/index.css">
```

Webfonts are not bundled; include the Google Fonts links or self-host. Every
font stack falls back to a system family.

| Theme | Fonts |
| --- | --- |
| `neon-butterfly` | JetBrains Mono (450, 700) |
| `summer-cloud` | Plus Jakarta Sans (400, 600, 700, 800), Inter (400, 600), JetBrains Mono (500) |
| `luminous-precision` | Sora (500, 600, 700), JetBrains Mono (400, 600, 700) |

`summer-cloud` also expects `.nb-bg` on `<body>` — the sky gradient is what its
frosted-glass surfaces read against.

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
  summer-cloud/            same layout, same --nb-* token names, different values
components/
  react/                   @nazuraki/ui-react (tsc → dist/)
site/                      GH Pages showcase (no build; styles copied in by CI)
skills/design-system/      agent skill for consuming the system
```
