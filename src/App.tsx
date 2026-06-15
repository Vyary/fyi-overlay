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

function App() {
  const [showZw, setShowZw] = createSignal(true);
  const [showSw, setShowSw] = createSignal(false);
  const [autoUpdate, setAutoUpdate] = createSignal(true);

  onMount(async () => {
    initTrayIcon();
    getCurrentWindow().maximize();
    registerPasstroughShortcut();

    loadTracker();
    loadGuide();
    loadTowns();

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
      unregisterAll();
    });
    return () => unlisten();
  });

  return (
    <main
      class="min-h-dvh min-w-dvw flex items-center justify-center gap-2"
      classList={{
        "bg-gray-600/25": !passthrough(),
        "bg-[repeating-linear-gradient(-45deg,rgba(0,0,0,0.08)_0px,rgba(0,0,0,0.08)_1px,transparent_2px,transparent_12px)]":
          !passthrough(),
      }}
    >
      <div
        classList={
          {
            // hidden: !showOverlay() && passthrough(),
          }
        }
      >
        <Show when={showZw()}>
          <ZoneWidget passthrough={passthrough} />
        </Show>

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
          showZw={showZw}
          setShowZw={setShowZw}
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
