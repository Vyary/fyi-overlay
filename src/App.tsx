import { createSignal, onMount } from "solid-js";
import "./App.css";
import usePassthroughShortcut from "./hooks/usePassthroughShortcut";

function App() {
  const [passthrough, setPassthrough] = createSignal(false);

  onMount(() => usePassthroughShortcut(passthrough, setPassthrough));

  return (
    <main class="bg-transparent">
      <div class="text-red-600">Hello world</div>
    </main>
  );
}

export default App;
