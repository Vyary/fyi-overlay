import { getCurrentWindow } from "@tauri-apps/api/window";
import { register, unregister } from "@tauri-apps/plugin-global-shortcut";
import { Accessor, onCleanup, onMount, Setter } from "solid-js";

function usePassthroughShortcut(
  passthrough: Accessor<boolean>,
  setPassthrough: Setter<boolean>,
) {
  onMount(async () => {
    await register("CommandOrControl+Shift+F", (e) => {
      if (e.state === "Pressed") {
        setPassthrough(!passthrough());
        getCurrentWindow().setIgnoreCursorEvents(passthrough());
      }
    });
  });

  onCleanup(() => unregister("CommandOrControl+Shift+F"));
}

export default usePassthroughShortcut;
