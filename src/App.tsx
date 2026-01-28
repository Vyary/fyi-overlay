import { createSignal, onMount, Show } from "solid-js";
import "./App.css";
import usePassthroughShortcut from "./hooks/usePassthroughShortcut";
import FileSelect from "./components/FileSelect";
import FileTail from "./components/FileTail";
import { getCurrentWindow } from "@tauri-apps/api/window";
import ZoneWidget from "./components/ZoneWidget";
import initTrayIcon from "./components/TrayIcon";
import useTitleTracker from "./hooks/useTitleTracker";

function App() {
  const [passthrough, setPassthrough] = createSignal(false);
  const [filePath, setFilePath] = createSignal("");
  const [zone, setZone] = createSignal("");
  const [prevZones, setPrevZones] = createSignal<string[]>([]);
  const [title, setTitle] = createSignal("");
  const [watching, setWatching] = createSignal(false);

  onMount(async () => {
    initTrayIcon();
    getCurrentWindow().maximize();
    usePassthroughShortcut(passthrough, setPassthrough);
    useTitleTracker(setTitle);
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
      <Show when={!watching()}>
        <FileSelect setFilePath={setFilePath} />
        <FileTail
          filePath={filePath}
          setWatching={setWatching}
          setZone={setZone}
          prevZones={prevZones}
          setPrevZones={setPrevZones}
          setPassthrough={setPassthrough}
        />
      </Show>
      <Show when={title().includes("Path of Exile 2")}>
        <ZoneWidget zone={zone} prevZones={prevZones} />
      </Show>
    </main>
  );
}

export default App;
