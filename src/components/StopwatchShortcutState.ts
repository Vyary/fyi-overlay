import { register, unregister } from "@tauri-apps/plugin-global-shortcut";
import { createStore } from "solid-js/store";
import {
  activeSw,
  resetTimer,
  setActiveSw,
  startTimer,
  stopTimer,
} from "./StopwatchWidget";

const buildShortcutString = (state: Record<string, any>) => {
  const mods = Object.entries(state)
    .filter(([k, v]) => v === true && k !== "Key")
    .map(([k]) => (k === "Ctrl" ? "CommandOrControl" : k));

  if (state.Key) {
    mods.push(state.Key);
  }
  return mods.join("+");
};

const [SwSc, setSwSc] = createStore({
  Ctrl: false,
  Shift: false,
  Alt: true,
  Key: "E",
});

const registerStopwatchShortcut = async () => {
  const sc = localStorage.getItem("StopwatchToggle");
  if (sc) setSwSc(JSON.parse(sc));

  try {
    await register(buildShortcutString(SwSc), (e) => {
      if (e.state === "Pressed") {
        if (!activeSw()) {
          startTimer();
          setActiveSw(true);
          return;
        }

        if (activeSw()) {
          stopTimer();
          setActiveSw(false);
        }
      }
    });
  } catch (e) {
    console.log("failed to register stopwatch toggle shortcut: " + e);
    return false;
  }
};

const updateStopwatchShortcut = async (e: any, input: boolean = false) => {
  try {
    await unregister(buildShortcutString(SwSc));
  } catch (e) {
    console.log("failed to unregister stopwatch toggle shortcut: " + e);
  }

  setSwSc(e.target.value, e.target.checked);

  if (input) {
    setSwSc(e.target.placeholder, e.target.value.toUpperCase());
  }

  localStorage.setItem("StopwatchToggle", JSON.stringify(SwSc));

  registerStopwatchShortcut();
};

const [SwScReset, setSwScReset] = createStore({
  Ctrl: false,
  Shift: false,
  Alt: true,
  Key: "R",
});

const registerStopwatchShortcutReset = async () => {
  const sc = localStorage.getItem("StopwatchReset");
  if (sc) setSwScReset(JSON.parse(sc));

  try {
    await register(buildShortcutString(SwScReset), (e) => {
      if (e.state === "Pressed") {
        setActiveSw(false);
        resetTimer();
      }
    });
  } catch (e) {
    console.log("failed to register stopwatch reset shortcut: " + e);
    return false;
  }
};

const updateStopwatchShortcutReset = async (e: any, input: boolean = false) => {
  try {
    await unregister(buildShortcutString(SwScReset));
  } catch (e) {
    console.log("failed to unregister stopwatch reset shortcut: " + e);
  }

  setSwScReset(e.target.value, e.target.checked);

  if (input) {
    setSwScReset(e.target.placeholder, e.target.value.toUpperCase());
  }

  localStorage.setItem("StopwatchReset", JSON.stringify(SwScReset));

  registerStopwatchShortcutReset();
};

const unregisterStopwatchShortcuts = async () => {
  await unregister(buildShortcutString(SwSc));
  await unregister(buildShortcutString(SwScReset));
};

export {
  SwSc,
  registerStopwatchShortcut,
  updateStopwatchShortcut,
  SwScReset,
  registerStopwatchShortcutReset,
  updateStopwatchShortcutReset,
  unregisterStopwatchShortcuts,
};
