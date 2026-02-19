import {
  Accessor,
  createSignal,
  For,
  onCleanup,
  onMount,
  Show,
} from "solid-js";
import { Guide } from "../data/guide";

function ZoneWidget(props: {
  content: Accessor<Guide>;
  passthrough: Accessor<boolean>;
}) {
  const [pos, setPos] = createSignal({ x: 10, y: 160 });
  const [size, setSize] = createSignal({ w: 300 });
  const [textSizeValue, setTextSizeValue] = createSignal(1);

  const sizes = ["text-xs", "text-sm", "text-base"];
  const textSize = () => sizes[textSizeValue()];

  let offset = { x: 0, y: 0 };
  let start = { w: 0, h: 0, x: 0, y: 0 };

  const onMove = (e: MouseEvent) => {
    setPos({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  const onUp = () => {
    window.removeEventListener("mousemove", onMove);
    window.removeEventListener("mouseup", onUp);
    localStorage.setItem("pos", JSON.stringify(pos()));
  };

  const onDown = (e: MouseEvent) => {
    offset = { x: e.clientX - pos().x, y: e.clientY - pos().y };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  const onResizeMove = (e: MouseEvent) => {
    setSize({
      w: start.w + (e.clientX - start.x),
    });
  };

  const onResizeUp = () => {
    window.removeEventListener("mousemove", onResizeMove);
    window.removeEventListener("mouseup", onResizeUp);
    localStorage.setItem("size", JSON.stringify(size()));
  };

  const onResizeDown = (e: MouseEvent) => {
    e.stopPropagation();
    start.w = size().w;
    start.x = e.clientX;

    window.addEventListener("mousemove", onResizeMove);
    window.addEventListener("mouseup", onResizeUp);
  };

  const onTextSizeChange = (e: any) => {
    setTextSizeValue(e.currentTarget.value);
    localStorage.setItem("textSize", textSizeValue().toString());
  };

  onMount(() => {
    const pos = localStorage.getItem("pos");
    if (pos) setPos(JSON.parse(pos));

    const size = localStorage.getItem("size");
    if (size) setSize(JSON.parse(size));

    const textSize = localStorage.getItem("textSize");
    if (textSize) setTextSizeValue(Number(textSize));
  });

  onCleanup(() => {
    onUp();
    onResizeUp();
  });

  return (
    <Show when={props.content().tasks}>
      <div
        class="absolute bg-base-200/30 shadow-lg p-4 overflow-auto h-auto"
        style={{
          left: `${pos().x}px`,
          top: `${pos().y}px`,
          width: `${size().w}px`,
        }}
      >
        <div class="space-y-1 cursor-move" onMouseDown={onDown}>
          <Show when={props.content().zone}>
            <div
              class={`text-base-content text-shadow-lg leading-relaxed select-none ${textSize()}`}
            >
              {props.content().zone}
            </div>
            <div class="divider" />
          </Show>
          <For each={props.content().tasks}>
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
          <div class="divider" />
          <div class="max-w-xs select-none">
            <p class={`${textSize()}`}>Text Size</p>
            <input
              type="range"
              min="0"
              max="2"
              value={textSizeValue()}
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

export default ZoneWidget;
