import { invoke } from "@tauri-apps/api/core";
import { listen } from "@tauri-apps/api/event";
import { onMount, Setter } from "solid-js";

function useTitleTracker(setTitle: Setter<string>) {
  onMount(async () => {
    await listen("active-window-changed", (event) => {
      const title = event.payload as string;
      setTitle(title);
    });

    await invoke("window_monitor");
  });
}

export default useTitleTracker;
