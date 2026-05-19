import { Accessor, createSignal, onCleanup, onMount, Show } from "solid-js";
import { register, unregister } from "@tauri-apps/plugin-global-shortcut";

function TimerWidget(props: { passthrough: Accessor<boolean> }) {
  const [pos, setPos] = createSignal({ x: 100, y: 160 });
  const [count, setCount] = createSignal(0);
  const [active, setActive] = createSignal(false);
  const seconds = () => count() % 60;
  const minutes = () => Math.floor(count() / 60) % 60;
  const hours = () => Math.floor(count() / 3600);

  let interval: number;

  let offset = { x: 0, y: 0 };

  const onMove = (e: MouseEvent) => {
    setPos({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  const onUp = () => {
    window.removeEventListener("mousemove", onMove);
    window.removeEventListener("mouseup", onUp);
    localStorage.setItem("timerPos", JSON.stringify(pos()));
  };

  const onDown = (e: MouseEvent) => {
    offset = { x: e.clientX - pos().x, y: e.clientY - pos().y };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  const startTimer = () => {
    setActive(true);
    interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    setActive(false);
    clearInterval(interval);
  };

  const resetTimer = () => {
    stopTimer();
    setCount(0);
  };

  onMount(async () => {
    await register("Alt+F", (e) => {
      if (e.state === "Pressed") {
        if (!active()) {
          startTimer();
          return;
        }

        if (active()) {
          stopTimer();
          return;
        }
      }
    });

    await register("Alt+R", (e) => {
      if (e.state === "Pressed") {
        resetTimer();
      }
    });

    const t = localStorage.getItem("timer");
    if (t) setCount(Number(t));

    const pos = localStorage.getItem("timerPos");
    if (pos) setPos(JSON.parse(pos));
  });

  onCleanup(() => {
    localStorage.setItem("timer", count().toString());
    onUp();
    clearInterval(interval);
    unregister("Alt+F");
    unregister("Alt+R");
  });

  return (
    <div
      class="absolute bg-base-200/30 shadow-lg p-4 h-auto flex items-center gap-4"
      style={{
        left: `${pos().x}px`,
        top: `${pos().y}px`,
      }}
    >
      <div class="cursor-move select-none" onMouseDown={onDown}>
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

export default TimerWidget;
