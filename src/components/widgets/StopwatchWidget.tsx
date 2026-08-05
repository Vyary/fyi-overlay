import { createSignal, onCleanup, onMount, Show } from "solid-js";
import {
  registerStopwatchShortcut,
  registerStopwatchShortcutReset,
  unregisterStopwatchShortcuts,
} from "./StopwatchShortcutState";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { BaseWidget } from "./BaseWidget";

const [countSw, setCountSw] = createSignal(0);
const [activeSw, setActiveSw] = createSignal(false);

let interval: number;

const startTimer = () => {
  if (!activeSw()) {
    setActiveSw(true);
    interval = setInterval(() => {
      setCountSw((prev) => prev + 1);
    }, 1000);
  }
};

const stopTimer = () => {
  if (activeSw()) {
    setActiveSw(false);
    clearInterval(interval);
  }
};

const resetTimer = () => {
  stopTimer();
  setCountSw(0);
};

const loadStateSw = () => {
  const t = localStorage.getItem("timer");
  if (t) setCountSw(Number(t));
};

const cleanUp = () => {
  clearInterval(interval);
  localStorage.setItem("timer", countSw().toString());
  unregisterStopwatchShortcuts();
};

function Stopwatch() {
  const seconds = () => countSw() % 60;
  const minutes = () => Math.floor(countSw() / 60) % 60;
  const hours = () => Math.floor(countSw() / 3600);

  onMount(async () => {
    registerStopwatchShortcut();
    registerStopwatchShortcutReset();
    loadStateSw();

    const unlisten = await getCurrentWindow().onCloseRequested(async () => {
      cleanUp();
    });
    return () => unlisten();
  });

  onCleanup(() => {
    cleanUp();
  });

  return (
    <BaseWidget
      name="stopwatch"
      defaultPos={{ x: 340, y: 875 }}
      defaultWidth={{ w: 135 }}
      defaultTransparency={25}
    >
      <div class="flex flex-col gap-2 py-3 px-5">
        <div class="select-none">
          <span class="countdown font-mono text-2xl">
            <span
              style={`--value:${hours()};`}
              aria-live="polite"
              aria-label={`${hours()}`}
            >
              {hours()}
            </span>
            :
            <span
              style={`--value:${minutes()}; --digits: 2;`}
              aria-live="polite"
              aria-label={`${minutes()}`}
            >
              {minutes()}
            </span>
            :
            <span
              style={`--value:${seconds()}; --digits: 2;`}
              aria-live="polite"
              aria-label={`${seconds()}`}
            >
              {seconds()}
            </span>
          </span>
        </div>

        <Show when={false}>
          <div class="flex gap-2">
            <button class="btn" onClick={startTimer}>
              Start
            </button>
            <button class="btn" onClick={stopTimer}>
              Stop
            </button>
            <button class="btn" onClick={resetTimer}>
              Reset
            </button>
          </div>
        </Show>
      </div>
    </BaseWidget>
  );
}

export { startTimer, stopTimer, resetTimer, activeSw, Stopwatch };
