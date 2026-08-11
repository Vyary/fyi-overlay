import { onCleanup, onMount, Show } from "solid-js";
import "./App.css";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { ZoneWidget } from "./components/widgets/ZoneWidget";
import initTrayIcon from "./components/TrayIcon";
import {
  autoUpdate,
  SettingsWidget,
  showInventory,
  showSw,
} from "./components/widgets/SettingsWidget";
import {
  enablePassthrough,
  passthrough,
  registerPasstroughShortcut,
} from "./state/Passthrough";
import { unregisterAll } from "@tauri-apps/plugin-global-shortcut";
import { filePath, setFilePath, showOverlay, startTailing } from "./state/File";
import Updater from "./components/Updater";
import { loadTracker, saveTracker } from "./state/Tracker";
import { loadGuide, saveGuide } from "./state/Guide";
import { loadTowns, saveTowns } from "./state/Towns";
import { loadCharacter, saveCharacter } from "./state/Character";
import { Inventory } from "./components/widgets/InventoryWidget";
import { Stopwatch } from "./components/widgets/StopwatchWidget";
import { store } from "./state/Store";
import { exit } from "@tauri-apps/plugin-process";

function App() {
  onMount(async () => {
    const initializeApp = async () => {
      initTrayIcon();
      getCurrentWindow().maximize();
      registerPasstroughShortcut();

      loadTracker();
      loadGuide();
      loadTowns();
      loadCharacter();

      const fp = (await store.get("filePath")) as string;
      if (fp) setFilePath(fp);
      if (filePath()) {
        startTailing();
        enablePassthrough();
      }
    };

    const unlisten = await getCurrentWindow().onCloseRequested(async (e) => {
      e.preventDefault();

      unregisterAll();

      try {
        await Promise.all([
          saveTracker(),
          saveGuide(),
          saveTowns(),
          saveCharacter(),
        ]);

        await exit(0);
      } catch (error) {
        console.error("Failed to save data before closing:", error);
        await exit(1);
      }
    });

    initializeApp();

    onCleanup(() => unlisten());
  });

  return (
    <main
      class="min-h-dvh min-w-dvw flex items-center justify-center gap-2"
      classList={{
        "bg-neutral-content/3": !passthrough(),
        "bg-[repeating-linear-gradient(-45deg,rgba(0,0,0,0.25)_0px,rgba(0,0,0,0.25)_2px,transparent_3px,transparent_8px)]":
          !passthrough(),
      }}
    >
      <div
        classList={{
          hidden: passthrough(),
        }}
      >
        <SettingsWidget />

        <Show when={showInventory()}>
          <Inventory shortcut="F2" />
        </Show>
      </div>

      <Show when={autoUpdate()}>
        <Updater />
      </Show>

      <div
        classList={{
          hidden: !showOverlay() && passthrough(),
        }}
      >
        <ZoneWidget />

        <Show when={showSw()}>
          <Stopwatch />
        </Show>
      </div>
    </main>
  );
}

export default App;
