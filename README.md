# ui-std-lib

Shared UX/design system for nazuraki apps. Two layers:

- **`styles/`** (`@nazuraki/styles`) — framework-agnostic CSS: design tokens,
  base styles, and component classes, organized per theme. Any app (React,
  Svelte, plain HTML) can adopt this layer immediately.
- **`components/react/`** (`@nazuraki/ui-react`) — React components that render
  the style layer's classes. For behavior-heavy UI as apps standardize on React.

## Themes

| Theme | Description |
| --- | --- |
| `neon-butterfly` | Dark navy + lilac + neon lime, JetBrains Mono, glass surfaces with glow hovers. Derived from the switchboard landing page. |

## Consuming

Packages publish to the GitHub Packages npm registry. One-time consumer setup
in the app's `.npmrc`:

```
@nazuraki:registry=https://npm.pkg.github.com
```

### Styles (any app)

```css
@import "@nazuraki/styles/neon-butterfly";        /* full theme */
@import "@nazuraki/styles/neon-butterfly/tokens"; /* tokens only */
```

No-build apps can pull from jsDelivr instead:

```html
<link rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/nazuraki/ui-std-lib@v0.1.0/styles/neon-butterfly/index.css">
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
GitHub Packages. Bump versions in the package manifests before tagging.

## Layout

```
styles/                    @nazuraki/styles
  neon-butterfly/          tokens.css, base.css, components.css, index.css
components/
  react/                   @nazuraki/ui-react (tsc → dist/)
```
