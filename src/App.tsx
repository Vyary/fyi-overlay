import { createSignal, onMount } from "solid-js";
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
    <main class="bg-transparent">
      <div class="text-red-600">Hello world</div>
      <FileSelect setFilePath={setFilePath} />
      <FileTail filePath={filePath} setZone={setZone} />
      <p>{zone()}</p>
    </main>
  );
}

export default App;
