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

| Theme | Scheme | Description |
| --- | --- | --- |
| `neon-butterfly` | dark | Dark navy + lilac + neon lime, JetBrains Mono, glass surfaces with glow hovers. Derived from the switchboard landing page. |
| `summer-cloud` | light | Light sky gradient + vivid violet + sky blue, Plus Jakarta Sans / Inter / JetBrains Mono, frosted glass with bouncy pill buttons. Derived from the Summer Cloud retail UI system. |
| `luminous-precision` | dark | Deep obsidian + vibrant orchid + electric teal, Sora headlines over JetBrains Mono, glass panes with lit top edges and glow-based elevation. Professional evolution of neon-butterfly, derived from the InfraPulse Stitch mockups. |

Each theme ships a `design.md` — a Stitch-compatible written spec of the
aesthetic (palette, typography, shape rules, component inventory). Read it
before designing new screens; feed it to Stitch to generate on-system mockups.

`styles/manifest.json` (exported as `@nazuraki/styles/manifest`) is the
machine-readable roster: every theme's name, scheme, and webfont links.
Consumers that validate a configured theme name or inject font links should
read it instead of hardcoding a list — a new theme then works by name alone.

## Consuming

Packages publish to the public npm registry (`@nazuraki/styles`,
`@nazuraki/ui-react`) — no registry config or auth needed to install.

**Since 0.3.0 every rule is scoped:** nothing applies until an element carries
`data-nb-style="<theme>"`. Put it on `<html>` for a whole page, or on any
container to theme just that subtree (safe for embedding into pages you don't
own — the CSS is inert everywhere else, and the guards are zero-specificity
`:where()`, so any of your own rules override). Because of the scoping, several
themes can load at once and swapping is one attribute flip.

### Styles (any app)

```css
@import "@nazuraki/styles/luminous-precision";        /* full theme */
@import "@nazuraki/styles/luminous-precision/tokens"; /* tokens only */
@import "@nazuraki/styles/all";                       /* every theme, for runtime switching */
```

```html
<html data-nb-style="luminous-precision">
```

No-build apps can pull from jsDelivr instead:

```html
<link rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/nazuraki/ui-std-lib@v0.3.0/styles/luminous-precision/index.css">
```

The same works at runtime for themes newer than an app's installed dep: fetch
`.../styles/manifest.json` for the roster, add the theme's stylesheet link,
set the attribute.

Webfonts are not bundled; include the Google Fonts links (exact URLs are in
`manifest.json`) or self-host. Every font stack falls back to a system family.

| Theme | Fonts |
| --- | --- |
| `neon-butterfly` | JetBrains Mono (450, 700) |
| `summer-cloud` | Plus Jakarta Sans (400, 600, 700, 800), Inter (400, 600), JetBrains Mono (500, 700) |
| `luminous-precision` | Sora (500, 600, 700), JetBrains Mono (400, 600, 700) |

`summer-cloud` also expects `.nb-bg` on `<body>` — the sky gradient is what its
frosted-glass surfaces read against.

### Migrating from 0.2.x

Add `data-nb-style="<theme>"` to your `<html>` element (or the container you
mount into). That is the whole migration — class names, tokens, and import
paths are unchanged. Apps that relied on the unscoped `body`/heading/anchor
defaults get them back through the same attribute.

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
pnpm --filter @nazuraki/styles test   # theme contract + release-bump tests
```

The contract test enforces the theme rules: every selector guarded by its
`data-nb-style`, keyframe names unique, the baseline token set complete, and
manifest/exports/directories in sync. A new theme that passes it works in
every manifest-reading consumer.

## Publishing

Automatic. Merging package changes to main runs the `release` workflow:
it bumps both package versions (patch by default; a `type!:` subject or
`BREAKING CHANGE:` footer in an unreleased commit bumps the minor while the
major is 0), tags, creates the GitHub release, and the tag triggers
`publish.yml` — npm trusted publishing (OIDC, no stored token).

## Agent skill

[skills/design-system/SKILL.md](skills/design-system/SKILL.md) teaches coding
agents to consume this system instead of writing ad-hoc styles. Install it in
an app repo by symlinking or copying into `.claude/skills/design-system/`.

## Layout

```
styles/                    @nazuraki/styles
  manifest.json            theme roster: name, scheme, font links
  all.css                  every theme in one import
  neon-butterfly/          tokens.css, base.css, components/*.css, index.css, design.md
  summer-cloud/            same layout, same --nb-* token names, different values
  test/                    theme contract + release-bump tests (node:test)
components/
  react/                   @nazuraki/ui-react (tsc → dist/)
site/                      GH Pages showcase (no build; styles copied in by CI)
skills/design-system/      agent skill for consuming the system
```
