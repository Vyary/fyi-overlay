import { createSignal, onMount } from "solid-js";
import "./App.css";
import usePassthroughShortcut from "./hooks/usePassthroughShortcut";
import FileSelect from "./components/FileSelect";

function App() {
  const [passthrough, setPassthrough] = createSignal(false);
  const [filePath, setFilePath] = createSignal("");

  onMount(() => usePassthroughShortcut(passthrough, setPassthrough));

  return (
    <main class="bg-transparent">
      <div class="text-red-600">Hello world</div>
      <FileSelect filePath={filePath} setFilePath={setFilePath} />
    </main>
  );
}

export default App;
