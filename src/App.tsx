import { createMemo, createSignal, onMount, Show } from "solid-js";
import "./App.css";
import usePassthroughShortcut from "./hooks/usePassthroughShortcut";
import FileSelect from "./components/FileSelect";
import FileTail from "./components/FileTail";
import { getCurrentWindow } from "@tauri-apps/api/window";
import ZoneWidget from "./components/ZoneWidget";
import initTrayIcon from "./components/TrayIcon";
import useTitleTracker from "./hooks/useTitleTracker";
import { actGuides, Guide } from "./data/guide";

function App() {
  const [passthrough, setPassthrough] = createSignal(false);
  const [filePath, setFilePath] = createSignal("");
  const [zone, setZone] = createSignal("");
  const [prevZones, setPrevZones] = createSignal<string[]>([]);
  const [title, setTitle] = createSignal("");
  const [watching, setWatching] = createSignal(false);

  const content = createMemo((prev) => {
    const found = actGuides[zone()]?.find((z) => {
      const prevCheck = z.prev == prevZones()[prevZones().length - 2];
      const preqCheck = z.preq?.every((zone) => prevZones().includes(zone));

      if (prevCheck && preqCheck) return true;
      if (prevCheck && !z.preq) return true;
      if (!z.prev && preqCheck) return true;
      if (!z.prev && !z.preq) return true;

      return false;
    });

    return found?.tasks ? found : prev;
  }, {});

  onMount(async () => {
    initTrayIcon();
    getCurrentWindow().maximize();
    usePassthroughShortcut(passthrough, setPassthrough);
    useTitleTracker(setTitle);
  });

  return (
    <>
      <div class="ml-96">{zone()}</div>
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
          <ZoneWidget content={content} />
        </Show>
      </main>
    </>
  );
}

export default App;
