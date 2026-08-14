import { createSignal, For } from "solid-js";
import { BaseWidget } from "./BaseWidget";
import { createStore } from "solid-js/store";
import { tracker } from "../../state/Tracker";

type LayoutIcon = {
  id: string;
  x: number;
  y: number;
};

type ZoneLayout = {
  id: string;
  name: string;
  image: string;
  icons: LayoutIcon[];
};

function LayoutWidget() {
  const [layouts, setLayouts] = createStore<Record<string, ZoneLayout[]>>({
    G1_town: [
      {
        id: "clearfell-1",
        name: "Layout 1",
        image: "https://i.ytimg.com/vi_webp/ARFSbodxJZU/sddefault.webp",
        icons: [
          {
            id: "entrance",
            x: 0.13,
            y: 0.81,
          },
          {
            id: "boss",
            x: 0.22,
            y: 0.24,
          },
          {
            id: "waypoint",
            x: 0.5,
            y: 0.5,
          },
          {
            id: "rustobelisk",
            x: 0.1,
            y: 0.1,
          },
        ],
      },
    ],
    G1_2: [
      {
        id: "clearfell-1",
        name: "Layout 1",
        image: "",
        icons: [
          {
            id: "entrance",
            x: 0.23,
            y: 0.81,
          },
          {
            id: "boss",
            x: 0.72,
            y: 0.24,
          },
          {
            id: "campsite",
            x: 0.5,
            y: 0.5,
          },
          {
            id: "waypoint",
            x: 0.8,
            y: 0.5,
          },
          {
            id: "entrance",
            x: 0.83,
            y: 0.81,
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

  const onDown = (e: MouseEvent, index: number) => {
    e.preventDefault();
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
      <div ref={containerRef} class="relative w-[280px] h-[280px]">
        <img
          src={layouts?.[tracker.zone][0].image}
          draggable={false}
          class="w-full h-full opacity-0"
        />

        <For each={layouts?.[tracker.zone][0].icons}>
          {(icon, i) => (
            <img
              src={
                new URL(`../../assets/${icon.id}.webp`, import.meta.url).href
              }
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

export { LayoutWidget };
