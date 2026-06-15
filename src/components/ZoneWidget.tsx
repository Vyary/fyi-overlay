import {
  Accessor,
  createSignal,
  For,
  onCleanup,
  onMount,
  Show,
} from "solid-js";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { TransitionGroup } from "solid-transition-group";
import { tracker } from "../state/Tracker";
import { towns } from "../state/Towns";
import { ZoneEditor } from "./ZoneEditor";
import { passthrough } from "./PassthroughState";
import { content } from "../state/Content";
import { character } from "../state/Character";

const [posZw, setPosZw] = createSignal({ x: 28, y: 160 });
const [widthZw, setWidthZw] = createSignal({ w: 300 });
const [textSizeZw, setTextSizeZw] = createSignal(2);
const [openEditor, setOpenEditor] = createSignal(false);

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
  localStorage.setItem("textSizeZw", textSizeZw().toString());
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
  const [isNegative, setIsNegative] = createSignal(false);
  const levelDiff = () => {
    const ld = tracker.zoneLevel - character.level;
    setIsNegative(ld < 0);
    return Math.abs(ld);
  };
  const penalty = () => 4 + Math.floor(character.level / 16);

  let offset = { x: 0, y: 0 };
  let start = { w: 0, h: 0, x: 0, y: 0 };

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
    <div class="flex">
      <Show when={content().tasks.length > 0}>
        <div
          class="absolute h-auto overflow-auto bg-base-200/30 backdrop-blur-md rounded-2xl ring-1 ring-base-content/5 px-5 py-3"
          style={{
            left: `${posZw().x}px`,
            top: `${posZw().y}px`,
            width: `${widthZw().w}px`,
          }}
        >
          <div class="space-y-1 cursor-move" onMouseDown={onDown}>
            <Show when={towns[tracker.zone]}>
              <div
                class={`text-base-content text-shadow-lg leading-relaxed select-none ${textSize()}`}
              >
                {`${towns[tracker.zone]} - Zone Level: ${tracker.zoneLevel}`}
              </div>
              <div class="divider" />
              <Show when={levelDiff() >= penalty()}>
                <div
                  classList={{
                    "text-warning": levelDiff() == penalty(),
                    "text-error": levelDiff() > penalty(),
                  }}
                >
                  XP Penalty move to {isNegative() ? "Higher" : "Lower"} level
                  zone
                </div>
                <div class="divider" />
              </Show>
            </Show>

            <For each={[towns[tracker.zone]]}>
              {() => (
                <TransitionGroup name="slide-fade">
                  <For each={content().tasks}>
                    {(task) => (
                      <div
                        class={`text-base-content text-shadow-lg leading-relaxed select-none ${textSize()}`}
                        innerHTML={task.text}
                      />
                    )}
                  </For>
                </TransitionGroup>
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

          <Show when={!props.passthrough()}>
            <div
              class="absolute top-1 right-7 h-5 w-1 cursor-pointer p-1 text-white/50 hover:text-white transition-colors"
              onMouseDown={() => setOpenEditor(!openEditor())}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-square-pen-icon lucide-square-pen"
              >
                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
              </svg>
            </div>
          </Show>
        </div>
      </Show>

      <Show when={openEditor()}>
        <div
          classList={{
            hidden: passthrough(),
          }}
        >
          <ZoneEditor
            left={`${posZw().x + widthZw().w + 6}px`}
            top={`${posZw().y}px`}
          />
        </div>
      </Show>
    </div>
  );
}

export { ZoneWidget, resetPosition, resetWidth, resetTextSize };
