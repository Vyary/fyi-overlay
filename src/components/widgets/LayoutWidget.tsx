import { createSignal, For, onMount, Show } from "solid-js";
import { BaseWidget } from "./BaseWidget";
import { createStore, produce, reconcile } from "solid-js/store";
import { tracker } from "../../state/Tracker";
import { passthrough } from "../../state/Passthrough";

type LayoutIcon = {
  id: string;
  x: number;
  y: number;
};

type LayoutLine = {
  fromIconId: number;
  toIconId: number;
};

type ZoneLayout = {
  name: string;
  image: string;
  icons: LayoutIcon[];
  lines: LayoutLine[];
};

const [layouts, setLayouts] = createStore<Record<string, ZoneLayout[]>>({
  G1_town: [
    {
      name: "1",
      image: "https://i.ytimg.com/vi_webp/ARFSbodxJZU/sddefault.webp",
      icons: [
        {
          id: "entrance",
          x: 0.13,
          y: 0.81,
        },
        {
          id: "waypoint",
          x: 0.4642857142857143,
          y: 0.7535714285714286,
        },
        {
          id: "entrance",
          x: 0.7,
          y: 0.325,
        },
      ],
      lines: [
        {
          fromIconId: 0,
          toIconId: 2,
        },
      ],
    },
  ],
  G1_2: [
    {
      name: "1",
      image: "",
      icons: [
        {
          id: "entrance",
          x: 0.20357142857142857,
          y: 0.85,
        },
        {
          id: "campsite",
          x: 0.8107142857142857,
          y: 0.4107142857142857,
        },
        {
          id: "boss",
          x: 0.6857142857142857,
          y: 0.8571428571428571,
        },
        {
          id: "waypoint",
          x: 0.875,
          y: 0.6928571428571428,
        },
        {
          id: "entrance",
          x: 0.48214285714285715,
          y: 0.225,
        },
      ],
      lines: [
        {
          fromIconId: 0,
          toIconId: 1,
        },
        {
          fromIconId: 1,
          toIconId: 2,
        },
        {
          fromIconId: 2,
          toIconId: 4,
        },
      ],
    },
    {
      name: "2",
      image: "",
      icons: [
        {
          id: "entrance",
          x: 0.20357142857142857,
          y: 0.85,
        },
        {
          id: "campsite",
          x: 0.5892857142857143,
          y: 0.7464285714285714,
        },
        {
          id: "boss",
          x: 0.8142857142857143,
          y: 0.5142857142857142,
        },
        {
          id: "waypoint",
          x: 0.20714285714285716,
          y: 0.4142857142857143,
        },
        {
          id: "entrance",
          x: 0.8178571428571428,
          y: 0.21428571428571427,
        },
      ],
      lines: [
        {
          fromIconId: 0,
          toIconId: 1,
        },
        {
          fromIconId: 1,
          toIconId: 2,
        },
        {
          fromIconId: 2,
          toIconId: 4,
        },
      ],
    },
    {
      name: "3",
      image: "",
      icons: [
        {
          id: "entrance",
          x: 0.20357142857142857,
          y: 0.85,
        },
        {
          id: "campsite",
          x: 0.2642857142857143,
          y: 0.5107142857142857,
        },
        {
          id: "boss",
          x: 0.8142857142857143,
          y: 0.5142857142857142,
        },
        {
          id: "waypoint",
          x: 0.575,
          y: 0.7785714285714286,
        },
        {
          id: "entrance",
          x: 0.8178571428571428,
          y: 0.21428571428571427,
        },
      ],
      lines: [
        {
          fromIconId: 0,
          toIconId: 1,
        },
        {
          fromIconId: 1,
          toIconId: 2,
        },
        {
          fromIconId: 2,
          toIconId: 4,
        },
      ],
    },
  ],
});

const addLayout = (zone: string) => {
  if (!layouts[zone]) {
    setLayouts(zone, [
      {
        name: "1",
        image: "",
        icons: [],
        lines: [],
      },
    ]);
  }
};

function LayoutWidget() {
  const [iconIndex, setIconIndex] = createSignal(0);
  const [layoutIndex, setLayoutIndex] = createSignal(0);
  let containerRef!: HTMLDivElement;

  const onIconMove = (e: MouseEvent) => {
    const rect = containerRef.getBoundingClientRect();

    setLayouts(
      tracker.zone,
      layoutIndex(),
      "icons",
      iconIndex(),
      "x",
      (e.clientX - rect.left) / rect.width,
    );

    setLayouts(
      tracker.zone,
      layoutIndex(),
      "icons",
      iconIndex(),
      "y",
      (e.clientY - rect.top) / rect.height,
    );
  };

  const onUp = () => {
    window.removeEventListener("mousemove", onIconMove);
    window.removeEventListener("mouseup", onUp);
  };

  const onDown = (e: MouseEvent, index: number) => {
    e.preventDefault();
    setIconIndex(index);
    window.addEventListener("mousemove", onIconMove);
    window.addEventListener("mouseup", onUp);
  };

  const addIcon = () => {
    setLayouts(
      produce(
        (s) =>
          (s[tracker.zone][layoutIndex()]["icons"] = [
            ...s[tracker.zone][layoutIndex()]["icons"],
            { id: "waypoint", x: 0.5, y: 0.5 },
          ]),
      ),
    );
  };

  const addLine = () => {};

  const saveLayouts = () => {
    localStorage.setItem("layouts", JSON.stringify(layouts));
  };

  const loadLayouts = () => {
    const l = localStorage.getItem("layouts");
    if (l) setLayouts(reconcile(JSON.parse(l)));
  };

  onMount(() => {
    // loadLayouts();
  });

  return (
    <BaseWidget
      name="layout"
      defaultPos={{ x: 575, y: 15 }}
      defaultWidth={{ w: 550 }}
      defaultTransparency={100}
      transparencySlider={true}
    >
      <Show
        when={layouts[tracker.zone]}
        fallback={
          <div class="px-5 py-3" onClick={() => addLayout(tracker.zone)}>
            No Zone Layout
          </div>
        }
      >
        <div ref={containerRef} class="relative w-[280px] h-[280px]">
          <img
            src={layouts?.[tracker.zone]?.[layoutIndex()].image}
            draggable={false}
            class="w-full h-full opacity-0"
          />

          <svg
            class="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <For each={layouts?.[tracker.zone]?.[layoutIndex()].lines}>
              {(line) => {
                const from = () =>
                  layouts[tracker.zone]?.[layoutIndex()].icons[line.fromIconId];
                const to = () =>
                  layouts[tracker.zone]?.[layoutIndex()].icons[line.toIconId];
                return (
                  <Show when={from() && to()}>
                    <line
                      x1={from()!.x * 100}
                      y1={from()!.y * 100}
                      x2={to()!.x * 100}
                      y2={to()!.y * 100}
                      stroke="rgba(255,255,255,0.85)"
                      stroke-width="0.5"
                      vector-effect="non-scaling-stroke"
                    />
                  </Show>
                );
              }}
            </For>
          </svg>

          <For each={layouts?.[tracker.zone]?.[layoutIndex()].icons}>
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
        <Show when={!passthrough()}>
          <select class="select select-sm bg-base-300">
            <For each={layouts?.[tracker.zone]}>
              {(l, i) => (
                <option
                  selected={i() == layoutIndex()}
                  onClick={() => setLayoutIndex(i())}
                >
                  {l.name}
                </option>
              )}
            </For>
          </select>
          <button class="btn" onClick={saveLayouts}>
            Save Layouts
          </button>
          <button class="btn" onClick={addIcon}>
            add icon
          </button>
        </Show>
      </Show>
    </BaseWidget>
  );
}

export { LayoutWidget, layouts, addLayout };
