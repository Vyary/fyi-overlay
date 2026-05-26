import {
  Accessor,
  createMemo,
  createSignal,
  For,
  onCleanup,
  onMount,
  Show,
} from "solid-js";
import { actGuides, Guide } from "../data/guide";
import { prevZones, zone } from "./FileState";
import { getCurrentWindow } from "@tauri-apps/api/window";

const [posZw, setPosZw] = createSignal({ x: 28, y: 160 });
const [widthZw, setWidthZw] = createSignal({ w: 300 });
const [textSizeZw, setTextSizeZw] = createSignal(2);

const savePosition = () => {
  localStorage.setItem("posZw", JSON.stringify(posZw()));
};

const resetPosition = () => {
  setPosZw({ x: 28, y: 160 });
  localStorage.removeItem("posZw");
};

const saveWidth = () => {
  localStorage.setItem("widthZw", JSON.stringify(widthZw()));
};

const resetWidth = () => {
  setWidthZw({ w: 300 });
  localStorage.removeItem("widthZw");
};

const saveTextSize = () => {
  localStorage.setItem("textSizeZw", JSON.stringify(textSizeZw()));
};

const resetTextSize = () => {
  setTextSizeZw(2);
  localStorage.removeItem("textSizeZw");
};

const loadState = () => {
  const p = localStorage.getItem("posZw");
  if (p) setPosZw(JSON.parse(p));

  const s = localStorage.getItem("widthZw");
  if (s) setWidthZw(JSON.parse(s));

  const ts = localStorage.getItem("textSizeZw");
  if (ts) setTextSizeZw(Number(ts));
};

const cleanUp = () => {
  savePosition();
  saveWidth();
  saveTextSize();
};

function ZoneWidget(props: { passthrough: Accessor<boolean> }) {
  const sizes = ["text-xs", "text-sm", "text-base", "text-lg", "text-xl"];
  const textSize = () => sizes[textSizeZw()];

  let offset = { x: 0, y: 0 };
  let start = { w: 0, h: 0, x: 0, y: 0 };

  const content = createMemo<Guide>(
    (prev) => {
      const found = actGuides[zone()]?.find((z) => {
        const prevCheck = z.prev == prevZones()[prevZones().length - 2];
        const preqCheck = z.preq?.every((zone) => prevZones().includes(zone));

        if (prevCheck && preqCheck) return true;
        if (prevCheck && !z.preq) return true;
        if (!z.prev && preqCheck) return true;
        if (!z.prev && !z.preq) return true;

        return false;
      });

      return found?.tasks ? found : prev;
    },
    { tasks: ["Awaiting game data... Enter a new zone"] },
  );

  const onMove = (e: MouseEvent) => {
    setPosZw({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  const onUp = () => {
    window.removeEventListener("mousemove", onMove);
    window.removeEventListener("mouseup", onUp);
    savePosition();
  };

  const onDown = (e: MouseEvent) => {
    offset = { x: e.clientX - posZw().x, y: e.clientY - posZw().y };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  const onResizeMove = (e: MouseEvent) => {
    setWidthZw({
      w: start.w + (e.clientX - start.x),
    });
  };

  const onResizeUp = () => {
    window.removeEventListener("mousemove", onResizeMove);
    window.removeEventListener("mouseup", onResizeUp);
    saveWidth();
  };

  const onResizeDown = (e: MouseEvent) => {
    e.stopPropagation();
    start.w = widthZw().w;
    start.x = e.clientX;

    window.addEventListener("mousemove", onResizeMove);
    window.addEventListener("mouseup", onResizeUp);
  };

  const onTextSizeChange = (e: any) => {
    setTextSizeZw(e.currentTarget.value);
    saveTextSize();
  };

  onMount(async () => {
    loadState();

    const unlisten = await getCurrentWindow().onCloseRequested(async () => {
      cleanUp();
    });
    return () => unlisten();
  });

  onCleanup(() => cleanUp());

  return (
    <Show when={content().tasks}>
      <div
        class="absolute h-auto overflow-auto bg-base-200/30 backdrop-blur-md rounded-2xl ring-1 ring-base-content/5 px-5 py-3"
        style={{
          left: `${posZw().x}px`,
          top: `${posZw().y}px`,
          width: `${widthZw().w}px`,
        }}
      >
        <div class="space-y-1 cursor-move" onMouseDown={onDown}>
          <Show when={content().zone}>
            <div
              class={`text-base-content text-shadow-lg leading-relaxed select-none ${textSize()}`}
            >
              {content().zone}
            </div>
            <div class="divider" />
          </Show>
          <For each={content().tasks}>
            {(task) => (
              <div
                class={`text-base-content text-shadow-lg leading-relaxed select-none ${textSize()}`}
                innerHTML={task}
              />
            )}
          </For>
        </div>

        <Show when={!props.passthrough()}>
          <div
            class="absolute top-1/2 -translate-y-1/2 right-2 h-5 w-1 cursor-e-resize p-1 text-white/50 hover:text-white transition-colors"
            onMouseDown={onResizeDown}
          >
            <svg viewBox="0 0 8 40" class="h-5 w-1" fill="currentColor">
              <rect x="0" y="0" width="8" height="40" rx="4" />
            </svg>
          </div>
        </Show>

        <Show when={!props.passthrough()}>
          <div class="max-w-xs select-none">
            <input
              type="range"
              min="0"
              max={sizes.length - 1}
              value={textSizeZw()}
              class="range range-xs"
              step="1"
              onInput={onTextSizeChange}
            />
          </div>
        </Show>
      </div>
    </Show>
  );
}

export { ZoneWidget, resetPosition, resetWidth, resetTextSize };
