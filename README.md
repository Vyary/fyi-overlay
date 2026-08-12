<div align="center">

# Qutm - Quest Tracker Improved - PoE2 Overlay

A lightweight, transparent guide overlay that helps you move through the campaign without missing important items, quests, or rewards.

[Download](https://github.com/Vyary/qutm/releases/latest/download/fyi-overlay_0.3.1_x64-setup.exe) · [Discord](https://discord.com/invite/TfpK2fnCmF) · [Issues](https://github.com/Vyary/qutm/issues)

</div>

<br>

## Overview

qutm is a minimal overlay for Path of Exile 2 that tracks your progress through the campaign in real time. It stays out of the way, updates itself, and adheres fully to GGG's Terms of Service.

- **Guided progression** — zone-by-zone campaign checkpoints
- **Reward tracking** — never miss a quest reward or key item
- **Minimal footprint** — negligible performance impact
- **Configurable hotkeys** — show or hide on your own terms
- **Self-updating** — always on the latest version

<br>

## Download

**v0.3.1** is available for Windows, with pre-built binaries for macOS and Linux on the [Releases page](https://github.com/Vyary/qutm/releases).

Windows is the primary supported platform. If you try it on macOS or Linux, reports on compatibility are welcome.

<br>

## Development

**Requirements:** [Tauri prerequisites](https://v2.tauri.app/start/prerequisites/) for your platform

```bash
git clone https://github.com/Vyary/qutm.git
cd qutm
bun install
bun run tauri dev
```

Build a release binary:

```bash
bun run tauri build
```

**Stack**

```
Frontend    TypeScript · Solid.js · Tailwind CSS · daisyUI
Backend     Rust · Tauri v2
Tooling     Bun
```

**Structure**

```
src/               Frontend
├── components/    Widgets — zones, settings, stopwatch
├── state/         Campaign data & tracking
└── assets/        Icons & images

src-tauri/         Backend
├── src/           Commands & file monitoring
└── icons/         App icons
```

<br>

## License

Apache License 2.0 — see [LICENSE](https://github.com/Vyary/qutm/blob/main/LICENSE).

<br>

<div align="center">

Made for Path of Exile 2 players who don't want to miss a thing.

</div>
