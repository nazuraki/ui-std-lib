# luminous-precision

Professional, nocturnal evolution of neon-butterfly — "Luminous Precision".
Deep obsidian foundation, glassmorphic indigo surfaces, and light used as the
interaction language: instead of heavy borders, elements glow. Vibrant orchid
is the primary voice; electric teal marks active paths and critical signals.
Sora headlines over JetBrains Mono body give it a commanding, high-tech,
developer-console feel without going full terminal. Derived from the
InfraPulse Stitch mockups (Stitch project 18185577263375001507).

## Color

| Role | Value | Usage |
| --- | --- | --- |
| Background | `#0a0c10` (deep obsidian) | Page background; `.nb-bg` adds soft orchid/teal radial underlays |
| Surface | `#1a1d29` (indigo) | Solid panels, dialogs |
| Surface sunken | `#0c0e14` | Inset fields, log wells, progress troughs |
| Surface glass | `rgba(26,29,41,0.4)` + 12px blur | Cards, nav links, alerts |
| On-surface | `#e2e2eb` | Body text |
| Faint | `#958e9b` | Secondary text, labels, idle tabs |
| Primary | `#c6a5ff` (vibrant orchid) | Primary buttons (solid fill), emphasis, glow |
| Accent | `#00f5ff` (electric teal) | Active states, focus rings, success paths, list-edge bars |
| Info | `#83b7ff` | Informational callouts and chips |
| Success | `#47e34e` | Live/healthy status |
| Warning | `#ffb86c` (amber) | Caution states |
| Danger | `#ff4d6d` (rose) | Destructive actions, errors |
| Border | `rgba(255,255,255,0.08)` | Resting borders |
| Border lit | `rgba(255,255,255,0.2)` | Top edge of glass panes — simulates overhead light |

Rules: color is functional, never decorative. Resting UI stays obsidian/faint;
orchid and teal appear on interaction, focus, and state. Depth comes from
tonal layers and glow, not drop shadows. Never pure white or pure black.

## Typography

- **Headlines:** Sora (500 md / 600 lg / 700 xl), tight letter-spacing
  (−0.01 to −0.02em); fallback `ui-sans-serif`.
- **Body & UI:** JetBrains Mono 400; fallback `ui-monospace`.
- **Labels & interactive text** (buttons, tabs, table headers): uppercase,
  600, 12–14px, letter-spacing `0.05em`.

## Shape & effects

- Radius `0.5rem` for buttons and inputs; `1rem` for cards, dialogs, and large
  containers. Pills reserved strictly for chips/badges and switches.
- Glass panes: 1px hairline borders with a lighter top edge
  (`--nb-border-lit`) to simulate overhead lighting; `backdrop-filter` 12px.
- Focus is electric teal: inputs drop the resting border for a teal line plus
  soft teal outer glow.
- Elevation = glow (`nb-pulse-glow` orchid, `nb-pulse-glow-accent` teal), not
  dark shadows. Transitions 0.3s. Respect `prefers-reduced-motion`.
- 8px spacing rhythm; generous negative space so glows can breathe.

## Components

Class prefix `nb-` (shared token/class contract with the other themes).

- **Card** `.nb-card` — glass pane, 1rem radius, lit top edge.
- **NavLink** `.nb-link` — glass list row; hover shifts to solid indigo and
  lights a 2px teal bar on the left edge.
- **Button** `.nb-btn` — ghost by default; `--primary` is the one solid fill
  (orchid, dark text), `--accent` teal ghost, `--danger` rose ghost. `--sm` is a
  compact size scaled to `.nb-badge`, for inline and table-row actions.
- **Form** `.nb-input`, `.nb-textarea`, `.nb-select`, `.nb-label`,
  `.nb-field`, `.nb-checkbox`, `.nb-radio`, `.nb-switch`, `.nb-choice` —
  checked/focus states glow teal.
- **Badge** `.nb-badge` — pill chip: 15% tint of its hue behind
  full-saturation text (+ semantic modifiers).
- **Alert** `.nb-alert` — glass, 3px left bar carries the semantic color.
- **Dialog** `.nb-dialog` — native `<dialog>`, indigo pane with orchid glow,
  Sora title, blurred obsidian backdrop.
- **Tabs** `.nb-tabs`/`.nb-tab`/`.nb-tabpanel` — active tab underlined in
  teal with text glow.
- **Table** `.nb-table` — lit header rule; row hover shifts glass and lights
  the teal left bar.
- **Progress** `.nb-progress`, **Spinner** `.nb-spinner` — glowing orchid
  indicators (`--accent` bar variant in teal).

## Code syntax

Tokens `--nb-code-*`, part of the baseline contract. Orchid keywords, teal
types, info-blue functions, amber numbers, success-green strings, soft-rose
variables, dimmed-faint comments, faint meta — palette voices reused, never
new hues for decoration.

## Scoping

Every rule is guarded by `data-nb-style="luminous-precision"` (self or
ancestor), wrapped in zero-specificity `:where()`. Set the attribute on
`<html>` for a page or on a container for an embedded island.
