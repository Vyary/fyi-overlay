# Path of Exile 2 Leveling Overlay

A lightweight, transparent leveling guide overlay for **Path of Exile 2** that helps you navigate the campaign. Never miss important items, quest rewards, or optional content.

## 📥 Download

<div align="center">

### [⬇️ Download for Windows](https://github.com/Vyary/fyi-overlay/releases/latest/download/fyi-overlay_0.3.1_x64-setup.exe)

**Latest Release: v0.3.1**

</div>

> Pre-built binaries for **macOS** and **Linux** are available in the [Releases](https://github.com/Vyary/fyi-overlay/releases) section.  
> ⚠️ **Note:** The overlay has been tested primarily on **Windows**. If you run it on Linux or macOS, please report any issues so we can improve compatibility.

---

## ✨ Features

- **Complete Campaign Guide** — Step-by-step zone progression with quest checkpoints
- **Item & Reward Tracking** — Never miss important quest rewards or rare drops
- **Lightweight** — Minimal performance impact
- **Hotkey Support** — Toggle overlay with configurable keyboard shortcuts
- **Auto-updates** — Get the latest version automatically
- **GGG Compliant** — Fully adheres to Path of Exile 2's Terms of Service

---

## 💬 Feedback & Support

Found a bug? Have suggestions for the guide? Join our community:

- **[Discord Server](https://discord.com/invite/TfpK2fnCmF)** — Direct support and feedback
- **[GitHub Issues](https://github.com/Vyary/fyi-overlay/issues)** — Report bugs and suggest improvements

---

## 🛠️ Development

### Running Locally

To build and run the project from source:

1. Install [Tauri prerequisites](https://v2.tauri.app/start/prerequisites/) for your system
2. Clone the repository:
   ```bash
   git clone https://github.com/Vyary/fyi-overlay.git
   cd fyi-overlay
   ```
3. Install dependencies:
   ```bash
   bun install
   ```
4. Start development server:
   ```bash
   bun run tauri dev
   ```
5. Build a binary:
   ```bash
   bun run tauri build
   ```

### Tech Stack

- **Frontend:** TypeScript, Solid.js, Tailwind CSS
- **Backend:** Rust, Tauri v2
- **Package Manager:** Bun

### Project Structure

```
src/               TypeScript + Solid.js frontend
├── components/    UI widgets (ZoneWidget, Settings, Stopwatch)
├── state/         Campaign guide data & tracking
└── assets/        Icons and images

src-tauri/         Rust backend
├── src/           Tauri commands & file monitoring
└── icons/         App icons
```

---

## 📄 License

This project is licensed under the **Apache License 2.0** — see [LICENSE](LICENSE) file for details.

---

**Made to help Path of Exile 2 players enjoy the campaign without worries**
