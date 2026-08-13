import { createSignal, For } from "solid-js";
import { BaseWidget } from "./widgets/BaseWidget";
import { createStore } from "solid-js/store";
import { tracker } from "../state/Tracker";

type LayoutIcon = {
  id: string;
  type: "entrance" | "exit" | "boss";
  x: number;
  y: number;
};

type ZoneLayout = {
  id: string;
  name: string;
  image: string;
  icons: LayoutIcon[];
};

const getIconImage = (icon: string) => {
  return "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lSZXJvbGxSYXJlIiwic2NhbGUiOjF9XQ/46a2347805/CurrencyRerollRare.png";
};

function Layouts() {
  const [layouts, setLayouts] = createStore<Record<string, ZoneLayout[]>>({
    G1_2: [
      {
        id: "clearfell-1",
        name: "Layout 1",
        image: "",
        icons: [
          {
            id: "entrance",
            type: "entrance",
            x: 0.23,
            y: 0.81,
          },
          {
            id: "boss",
            type: "boss",
            x: 0.72,
            y: 0.24,
          },
          {
            id: "boss",
            type: "boss",
            x: 0.5,
            y: 0.5,
          },
        ],
      },
    ],
  });

  let containerRef!: HTMLDivElement;

  const [iconIndex, setIconIndex] = createSignal(0);

  const onMove = (e: MouseEvent) => {
    const rect = containerRef.getBoundingClientRect();

    setLayouts(
      tracker.zone,
      0,
      "icons",
      iconIndex(),
      "x",
      (e.clientX - rect.left) / rect.width,
    );

    setLayouts(
      tracker.zone,
      0,
      "icons",
      iconIndex(),
      "y",
      (e.clientY - rect.top) / rect.height,
    );
  };

  const onUp = () => {
    window.removeEventListener("mousemove", onMove);
    window.removeEventListener("mouseup", onUp);
  };

  const onDown = (_e: MouseEvent, index: number) => {
    setIconIndex(index);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  return (
    <BaseWidget
      name="layout"
      defaultPos={{ x: 575, y: 15 }}
      defaultWidth={{ w: 550 }}
      defaultTransparency={100}
      transparencySlider={true}
    >
      <div ref={containerRef} class="relative">
        <img
          src={layouts?.[tracker.zone][0].image}
          class="w-70 h-70 opacity-0"
        />

        <For each={layouts?.[tracker.zone][0].icons}>
          {(icon, i) => (
            <img
              src={getIconImage(icon.type)}
              class="absolute w-6 h-6"
              style={{
                left: `${icon.x * 100}%`,
                top: `${icon.y * 100}%`,
                transform: "translate(-50%, -50%)",
              }}
              onMouseDown={(e) => {
                onDown(e, i());
              }}
            />
          )}
        </For>
      </div>
    </BaseWidget>
  );
}

export { Layouts };
