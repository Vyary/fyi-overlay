import { getCurrentWindow } from "@tauri-apps/api/window";
import { register, unregister } from "@tauri-apps/plugin-global-shortcut";
import { Accessor, Setter } from "solid-js";
import { createStore } from "solid-js/store";

const buildShortcutString = (state: Record<string, any>) => {
  const mods = Object.entries(state)
    .filter(([k, v]) => v === true && k !== "Key")
    .map(([k]) => (k === "Ctrl" ? "CommandOrControl" : k));

  if (state.Key) {
    mods.push(state.Key);
  }
  return mods.join("+");
};

const [PtSc, setPtSc] = createStore({
  Ctrl: true,
  Shift: true,
  Alt: false,
  Key: "F",
});

const registerPasstroughShortcut = async (
  passthrough: Accessor<boolean>,
  setPassthrough: Setter<boolean>,
) => {
  const sc = localStorage.getItem("OverlayToggle");
  if (sc) setPtSc(JSON.parse(sc));

  try {
    await register(buildShortcutString(PtSc), (e) => {
      if (e.state === "Pressed") {
        setPassthrough(!passthrough());
        getCurrentWindow().setIgnoreCursorEvents(passthrough());
      }
    });
  } catch (e) {
    console.log("failed to register passthrough toggle shortcut: " + e);
    return false;
  }
};

const updatePasstroughShortcut = async (
  e: any,
  passthrough: Accessor<boolean>,
  setPassthrough: Setter<boolean>,
  input: boolean = false,
) => {
  try {
    await unregister(buildShortcutString(PtSc));
  } catch (e) {
    console.log("failed to unregister passthrough toggle shortcut: " + e);
  }

  setPtSc(e.target.value, e.target.checked);

  if (input) {
    setPtSc(e.target.placeholder, e.target.value.toUpperCase());
  }

  localStorage.setItem("OverlayToggle", JSON.stringify(PtSc));

  registerPasstroughShortcut(passthrough, setPassthrough);
};

export { PtSc, registerPasstroughShortcut, updatePasstroughShortcut };
