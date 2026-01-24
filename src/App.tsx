import { createSignal, onMount, Show } from "solid-js";
import "./App.css";
import usePassthroughShortcut from "./hooks/usePassthroughShortcut";
import FileSelect from "./components/FileSelect";
import FileTail from "./components/FileTail";
import { getCurrentWindow } from "@tauri-apps/api/window";

function App() {
  const [passthrough, setPassthrough] = createSignal(false);
  const [filePath, setFilePath] = createSignal("");
  const [zone, setZone] = createSignal("");

  onMount(() => {
    getCurrentWindow().maximize();
    usePassthroughShortcut(passthrough, setPassthrough);
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
      <Show when={!zone()}>
        <FileSelect setFilePath={setFilePath} />
        <FileTail filePath={filePath} setZone={setZone} />
      </Show>
      <p class="text-write">Zone: {zone()}</p>
    </main>
  );
}

export default App;
