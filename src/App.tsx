import { createSignal, onMount, Show } from "solid-js";
import "./App.css";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { ZoneWidget } from "./components/widgets/ZoneWidget";
import initTrayIcon from "./components/TrayIcon";
import SettingsWidget from "./components/widgets/SettingsWidget";
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

function App() {
  const [showSw, setShowSw] = createSignal(false);
  const [showInventory, setShowInventory] = createSignal(false);
  const [autoUpdate, setAutoUpdate] = createSignal(true);

  onMount(async () => {
    initTrayIcon();
    getCurrentWindow().maximize();
    registerPasstroughShortcut();

    loadTracker();
    loadGuide();
    loadTowns();
    loadCharacter();

    const fp = localStorage.getItem("filePath");
    if (fp) setFilePath(fp);
    if (filePath()) {
      startTailing();
      enablePassthrough();
    }

    const unlisten = await getCurrentWindow().onCloseRequested(async () => {
      saveTracker();
      saveGuide();
      saveTowns();
      saveCharacter();
      unregisterAll();
    });
    return () => unlisten();
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
          hidden: !showOverlay() && passthrough(),
        }}
      >
        <ZoneWidget />

        <Show when={showSw()}>
          <Stopwatch />
        </Show>
      </div>

      <SettingsWidget
        showSw={showSw}
        setShowSw={setShowSw}
        autoUpdate={autoUpdate}
        setAutoUpdate={setAutoUpdate}
        showInventory={showInventory}
        setShowInventory={setShowInventory}
      />

      <Show when={autoUpdate()}>
        <Updater />
      </Show>

      <Show when={showInventory()}>
        <Inventory shortcut="F2" />
      </Show>
    </main>
  );
}

export default App;
