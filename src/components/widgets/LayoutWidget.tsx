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

const exportLayouts = () => {};

const importLayouts = () => {};

function LayoutWidget() {
  const [iconIndex, setIconIndex] = createSignal(0);
  const [layoutIndex, setLayoutIndex] = createSignal(0);
  const [selecting, setSelecting] = createSignal<boolean>(false);
  const [startIcon, setStartIcon] = createSignal<number>();
  const [iconType, setIconType] = createSignal("");

  const icons = ["waypoint", "boss", "campsite", "entrance"];
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
    if (iconType() === "") return;

    setLayouts(
      produce(
        (s) =>
          (s[tracker.zone][layoutIndex()]["icons"] = [
            ...s[tracker.zone][layoutIndex()]["icons"],
            { id: iconType(), x: 0.5, y: 0.5 },
          ]),
      ),
    );

    setIconType("");
  };

  const addLine = (start: number | undefined, end: number) => {
    if (start === undefined) return;

    setLayouts(
      produce(
        (s) =>
          (s[tracker.zone][layoutIndex()]["lines"] = [
            ...s[tracker.zone][layoutIndex()]["lines"],
            { fromIconId: start, toIconId: end },
          ]),
      ),
    );
  };

  const linker = (index: number) => {
    {
      if (selecting()) {
        if (startIcon() === undefined) {
          setStartIcon(index);
          return;
        }

        addLine(startIcon(), index);
        setSelecting(false);
        setStartIcon(undefined);
      }
    }
  };

  const addExtraLayout = () => {
    setLayouts(
      produce(
        (s) =>
          (s[tracker.zone] = [
            ...s[tracker.zone],
            {
              name: "1",
              image: "",
              icons: [],
              lines: [],
            },
          ]),
      ),
    );
  };

  const deleteLayout = (index: number) => {
    setLayouts(
      produce((s) => {
        const filtered = s[tracker.zone].filter((_, i) => i !== index);

        if (filtered.length > 0) {
          s[tracker.zone] = filtered;
        }

        if (filtered.length === 0) {
          s[tracker.zone] = [
            {
              name: "1",
              image: "",
              icons: [],
              lines: [],
            },
          ];
        }
      }),
    );
  };

  const saveLayouts = () => {
    localStorage.setItem("layouts", JSON.stringify(layouts));
  };

  const loadLayouts = () => {
    const l = localStorage.getItem("layouts");
    if (l) setLayouts(reconcile(JSON.parse(l)));
  };

  onMount(() => {
    loadLayouts();
  });

  return (
    <BaseWidget
      name="layout"
      defaultPos={{ x: 1375, y: 5 }}
      defaultWidth={{ w: 550 }}
      defaultTransparency={100}
      transparencySlider={true}
    >
      <Show
        when={layouts[tracker.zone]}
        fallback={
          <div
            class="flex items-center justify-center px-5 py-8 text-sm text-base-content/50 cursor-pointer hover:text-base-content/70 transition-colors"
            onClick={() => addLayout(tracker.zone)}
          >
            No Zone Layout — click to add
          </div>
        }
      >
        <div class="flex flex-col gap-3 p-3">
          <div
            ref={containerRef}
            class="relative w-[240px] h-[240px] mx-auto rounded-lg overflow-hidden"
          >
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
                    layouts[tracker.zone]?.[layoutIndex()].icons[
                      line.fromIconId
                    ];
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
                    new URL(`../../assets/${icon.id}.webp`, import.meta.url)
                      .href
                  }
                  class="absolute w-6 h-6 drop-shadow-md"
                  classList={{
                    "cursor-move": !selecting(),
                    "cursor-pointer ring-2 ring-primary rounded-full":
                      selecting(),
                  }}
                  style={{
                    left: `${icon.x * 100}%`,
                    top: `${icon.y * 100}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  onMouseDown={(e) => onDown(e, i())}
                  onClick={() => linker(i())}
                />
              )}
            </For>
          </div>

          <Show when={!passthrough()}>
            <div class="flex flex-col gap-2 pt-1 border-t border-base-content/10">
              <div class="inline-flex items-center justify-center gap-2">
                <select class="select select-sm select-bordered w-full bg-base-200">
                  <For each={layouts?.[tracker.zone]}>
                    {(l, i) => (
                      <option
                        selected={i() == layoutIndex()}
                        onClick={() => setLayoutIndex(i())}
                      >
                        {i() + 1}
                      </option>
                    )}
                  </For>
                </select>
                <button
                  class="btn btn-sm flex-1 hover:text-success hover:bg-success/10"
                  onClick={() => {
                    addExtraLayout();
                    setLayoutIndex(layouts?.[tracker.zone]?.length - 1);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                </button>
                <button
                  class="btn btn-sm flex-1 hover:text-error hover:bg-error/10"
                  onClick={() => {
                    const index = layoutIndex();
                    setLayoutIndex(index - 1 >= 0 ? index - 1 : 0);
                    deleteLayout(index);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class=""
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>

              <div class="form-control w-full">
                <input
                  type="text"
                  list="icons"
                  placeholder="Select icon type..."
                  class="input input-sm input-bordered w-full bg-base-200"
                  value={iconType()}
                  onChange={(e) => setIconType(e.currentTarget.value)}
                />
                <datalist id="icons">
                  <For each={icons}>
                    {(i) => <option value={i}>{i}</option>}
                  </For>
                </datalist>
              </div>

              <div class="flex gap-2">
                <button class="btn btn-sm btn-primary flex-1" onClick={addIcon}>
                  Add Icon
                </button>
                <button
                  class="btn btn-sm flex-1"
                  classList={{ "btn-active btn-secondary": selecting() }}
                  onClick={() => setSelecting(true)}
                >
                  {selecting() ? "Selecting…" : "Add Line"}
                </button>
              </div>

              <button
                class="btn btn-sm btn-outline btn-block mt-1"
                onClick={saveLayouts}
              >
                Save Layouts
              </button>
            </div>
          </Show>
        </div>
      </Show>
    </BaseWidget>
  );
}

export { LayoutWidget, addLayout, exportLayouts, importLayouts };
