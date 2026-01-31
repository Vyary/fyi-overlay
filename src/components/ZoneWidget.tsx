import {
  Accessor,
  createMemo,
  createSignal,
  For,
  onCleanup,
  onMount,
} from "solid-js";
import { actGuides, Guide } from "../data/guide";

function ZoneWidget(props: {
  zone: Accessor<string>;
  prevZones: Accessor<string[]>;
}) {
  const [pos, setPos] = createSignal({ x: 10, y: 90 });
  const content = createMemo((prev) => {
    const found = actGuides[props.zone()]?.find((z) => {
      const prevCheck =
        z.prev == props.prevZones()[props.prevZones().length - 2];
      const preqCheck = z.preq?.every((zone) =>
        props.prevZones().includes(zone),
      );

      if (prevCheck && preqCheck) return z;
      if (prevCheck && !z.preq) return z;
      if (!z.prev && preqCheck) return z;
      if (!z.prev && !z.preq) return z;
    }) as Guide;

    return found ?? prev;
  }, null);
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
      class="absolute w-96 cursor-move bg-base-200/30 shadow-lg p-4"
      style={{
        left: `${pos().x}px`,
        top: `${pos().y}px`,
      }}
    >
      <div class="space-y-1">
        <div>Zone: {props.zone()}</div>
        <div>{content().zone}</div>
        <div class="divider" />
        <For each={content().tasks}>
          {(task) => (
            <div
              class="text-base-content text-shadow-lg leading-relaxed"
              innerHTML={task}
            />
          )}
        </For>
      </div>
    </div>
  );
}

export default ZoneWidget;
