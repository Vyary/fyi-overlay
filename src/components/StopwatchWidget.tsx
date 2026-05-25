import { Accessor, createSignal, onCleanup, onMount, Show } from "solid-js";
import {
  registerStopwatchShortcut,
  registerStopwatchShortcutReset,
  unregisterStopwatchShortcuts,
} from "./StopwatchShortcutState";
import { getCurrentWindow } from "@tauri-apps/api/window";

const [posSw, setPosSw] = createSignal({ x: 350, y: 850 });
const [countSw, setCountSw] = createSignal(0);
const [activeSw, setActiveSw] = createSignal(false);

let interval: number;

const savePositionSw = () => {
  localStorage.setItem("posSw", JSON.stringify(posSw()));
};

const resetPositionSw = () => {
  setPosSw({ x: 350, y: 850 });
  localStorage.removeItem("posSw");
};

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

  const p = localStorage.getItem("posSw");
  if (p) setPosSw(JSON.parse(p));
};

const cleanUp = () => {
  clearInterval(interval);
  localStorage.setItem("timer", countSw().toString());
  savePositionSw();
  unregisterStopwatchShortcuts();
};

function Stopwatch(props: { passthrough: Accessor<boolean> }) {
  const seconds = () => countSw() % 60;
  const minutes = () => Math.floor(countSw() / 60) % 60;
  const hours = () => Math.floor(countSw() / 3600);

  let offset = { x: 0, y: 0 };

  const onMove = (e: MouseEvent) => {
    setPosSw({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  const onUp = () => {
    window.removeEventListener("mousemove", onMove);
    window.removeEventListener("mouseup", onUp);
    savePositionSw();
  };

  const onDown = (e: MouseEvent) => {
    offset = { x: e.clientX - posSw().x, y: e.clientY - posSw().y };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

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
    <div
      class="absolute bg-base-200/30 shadow-lg p-4 h-auto flex items-center gap-4 cursor-move"
      style={{
        left: `${posSw().x}px`,
        top: `${posSw().y}px`,
      }}
      onMouseDown={onDown}
    >
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

      <Show when={!props.passthrough()}>
        <button class="btn" onClick={startTimer}>
          Start
        </button>
        <button class="btn" onClick={stopTimer}>
          Stop
        </button>
        <button class="btn" onClick={resetTimer}>
          Reset
        </button>
      </Show>
    </div>
  );
}

export {
  resetPositionSw,
  startTimer,
  stopTimer,
  resetTimer,
  activeSw,
  setActiveSw,
  Stopwatch,
};
