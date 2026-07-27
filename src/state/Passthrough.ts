import { getCurrentWindow } from "@tauri-apps/api/window";
import { register, unregister } from "@tauri-apps/plugin-global-shortcut";
import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";

const [passthrough, setPassthrough] = createSignal(false);

const enablePassthrough = () => {
  setPassthrough(true);
  getCurrentWindow().setIgnoreCursorEvents(true);
};

const togglePassthrough = () => {
  setPassthrough(!passthrough());
  getCurrentWindow().setIgnoreCursorEvents(passthrough());
};

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

const registerPasstroughShortcut = async () => {
  const sc = localStorage.getItem("OverlayToggle");
  if (sc) setPtSc(JSON.parse(sc));

  try {
    await register(buildShortcutString(PtSc), (e) => {
      if (e.state === "Pressed") {
        togglePassthrough();
      }
    });
  } catch (e) {
    console.log("failed to register passthrough toggle shortcut: " + e);
    return false;
  }
};

const updatePasstroughShortcut = async (e: any, input: boolean = false) => {
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

  registerPasstroughShortcut();
};

export {
  passthrough,
  setPassthrough,
  enablePassthrough,
  togglePassthrough,
  PtSc,
  registerPasstroughShortcut,
  updatePasstroughShortcut,
};
