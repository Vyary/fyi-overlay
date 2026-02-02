import {
  Accessor,
  createSignal,
  For,
  onCleanup,
  onMount,
  Show,
} from "solid-js";
import { Guide } from "../data/guide";

function ZoneWidget(props: { content: Accessor<Guide> }) {
  const [pos, setPos] = createSignal({ x: 10, y: 160 });

  let offset = { x: 0, y: 0 };

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

  onMount(() =>
    setPos(JSON.parse(localStorage.getItem("pos") || "{ x: 50, y: 50 }")),
  );
  onCleanup(() => onUp());

  return (
    <div
      onMouseDown={onDown}
      class="absolute w-72 cursor-move bg-base-200/30 shadow-lg p-4"
      style={{
        left: `${pos().x}px`,
        top: `${pos().y}px`,
      }}
    >
      <div class="space-y-1">
        <Show when={props.content().zone}>
          <div class="text-base-content text-shadow-lg leading-relaxed text-sm">
            {props.content().zone}
          </div>
          <div class="divider" />
        </Show>
        <For each={props.content().tasks}>
          {(task) => (
            <div
              class="text-base-content text-shadow-lg leading-relaxed text-sm"
              innerHTML={task}
            />
          )}
        </For>
      </div>
    </div>
  );
}

export default ZoneWidget;
