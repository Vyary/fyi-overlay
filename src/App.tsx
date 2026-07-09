import { createSignal, onMount, Show } from "solid-js";
import "./App.css";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { ZoneWidget } from "./components/ZoneWidget";
import initTrayIcon from "./components/TrayIcon";
import { Stopwatch } from "./components/StopwatchWidget";
import SettingsWidget from "./components/SettingsWidget";
import {
  enablePassthrough,
  passthrough,
  registerPasstroughShortcut,
} from "./components/PassthroughState";
import { unregisterAll } from "@tauri-apps/plugin-global-shortcut";
import {
  filePath,
  setFilePath,
  showOverlay,
  startTailing,
} from "./components/FileState";
import Updater from "./components/Updater";
import { loadTracker, saveTracker } from "./state/Tracker";
import { loadGuide, saveGuide } from "./state/Guide";
import { loadTowns, saveTowns } from "./state/Towns";
import { loadCharacter, saveCharacter } from "./state/Character";

function App() {
  const [showSw, setShowSw] = createSignal(false);
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
        <ZoneWidget passthrough={passthrough} />

        <Show when={showSw()}>
          <Stopwatch passthrough={passthrough} />
        </Show>
      </div>
      <div
        classList={{
          hidden: passthrough(),
        }}
      >
        <SettingsWidget
          showSw={showSw}
          setShowSw={setShowSw}
          autoUpdate={autoUpdate}
          setAutoUpdate={setAutoUpdate}
        />
      </div>

      <Show when={autoUpdate()}>
        <Updater />
      </Show>
    </main>
  );
}

export default App;
