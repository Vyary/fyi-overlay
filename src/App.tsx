import { createSignal, onMount, Show } from "solid-js";
import "./App.css";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { ZoneWidget } from "./components/ZoneWidget";
import initTrayIcon from "./components/TrayIcon";
import useTitleTracker from "./hooks/useTitleTracker";
import { Stopwatch } from "./components/StopwatchWidget";
import SettingsWidget from "./components/SettingsWidget";
import { registerPasstroughShortcut } from "./components/PassthroughShortcutState";
import { unregisterAll } from "@tauri-apps/plugin-global-shortcut";
import {
  filePath,
  setFilePath,
  setPrevZones,
  setZone,
  startTailing,
} from "./components/FileState";

function App() {
  const [passthrough, setPassthrough] = createSignal(false);
  const [title, setTitle] = createSignal("");
  const [showZw, setShowZw] = createSignal(true);
  const [showSw, setShowSw] = createSignal(true);

  onMount(async () => {
    initTrayIcon();
    getCurrentWindow().maximize();
    registerPasstroughShortcut(passthrough, setPassthrough);
    useTitleTracker(setTitle);

    setZone(localStorage.getItem("zone") || "");
    const prevZones = localStorage.getItem("prevZones");
    if (prevZones) setPrevZones(JSON.parse(prevZones));

    const fp = localStorage.getItem("filePath");
    if (fp) setFilePath(fp);
    if (filePath()) {
      startTailing();
      setPassthrough(true);
      getCurrentWindow().setIgnoreCursorEvents(true);
    }

    const unlisten = await getCurrentWindow().onCloseRequested(async () => {
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
        classList={{
          hidden: !title().includes("Path of Exile 2") && passthrough(),
        }}
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
          passthrough={passthrough}
          setPassthrough={setPassthrough}
        />
      </div>
    </main>
  );
}

export default App;
