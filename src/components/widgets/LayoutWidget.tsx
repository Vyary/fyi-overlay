import { createSignal, For, onMount, Show } from "solid-js";
import { BaseWidget } from "./BaseWidget";
import { createStore, produce, reconcile } from "solid-js/store";
import { tracker } from "../../state/Tracker";
import { passthrough } from "../../state/Passthrough";
import { open } from "@tauri-apps/plugin-dialog";
import { save } from "@tauri-apps/plugin-dialog";
import { error, info } from "@tauri-apps/plugin-log";
import { readTextFile, writeTextFile } from "@tauri-apps/plugin-fs";

type LayoutIcon = {
  id: string;
  label?: string;
  x: number;
  y: number;
};

type LayoutLine = {
  fromIconId: number;
  toIconId: number;
};

type ZoneLayout = {
  name: string;
  image?: string;
  icons: LayoutIcon[];
  lines: LayoutLine[];
};

const [layouts, setLayouts] = createStore<Record<string, ZoneLayout[]>>({
  G1_town: [
    {
      name: "1",
      icons: [
        {
          id: "entrance",
          label: "The Riverbank",
          x: 0.1625,
          y: 0.775,
        },
        {
          id: "waypoint",
          x: 0.5916666666666667,
          y: 0.7291666666666666,
        },
        {
          id: "entrance",
          label: "Clearfell",
          x: 0.8458333333333333,
          y: 0.1625,
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
      icons: [
        {
          id: "entrance",
          label: "Clearfell Encampment",
          x: 0.19166666666666668,
          y: 0.625,
        },
        {
          id: "campsite",
          label: "Campsite",
          x: 0.8875,
          y: 0.4,
        },
        {
          id: "boss",
          label: "Biera",
          x: 0.4791666666666667,
          y: 0.9291666666666667,
        },
        {
          id: "waypoint",
          x: 0.75,
          y: 0.825,
        },
        {
          id: "entrance",
          label: "The Grelwood",
          x: 0.5375,
          y: 0.09583333333333334,
        },
        {
          id: "entrance",
          label: "Mud Barrow",
          x: 0.8541666666666666,
          y: 0.7958333333333333,
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
  G1_3: [
    {
      name: "1",
      image: "",
      icons: [
        {
          id: "entrance",
          label: "Clearfell",
          x: 0.16666666666666666,
          y: 0.1625,
        },
        {
          id: "boss",
          label: "The Devourer",
          x: 0.8041666666666667,
          y: 0.8125,
        },
      ],
      lines: [
        {
          fromIconId: 0,
          toIconId: 1,
        },
      ],
    },
  ],
  G1_4: [
    {
      name: "1",
      image: "",
      icons: [
        {
          id: "entrance",
          label: "Clearfell",
          x: 0.65,
          y: 0.10416666666666667,
        },
        {
          id: "checkpoint",
          label: "",
          x: 0.525,
          y: 0.3333333333333333,
        },
        {
          id: "checkpoint",
          label: "",
          x: 0.8333333333333334,
          y: 0.5291666666666667,
        },
        {
          id: "checkpoint",
          label: "",
          x: 0.21666666666666667,
          y: 0.5541666666666667,
        },
        {
          id: "checkpoint",
          label: "",
          x: 0.5333333333333333,
          y: 0.75,
        },
        {
          id: "entrance",
          label: "The Red Vale",
          x: 0.8041666666666667,
          y: 0.9041666666666667,
        },
      ],
      lines: [
        {
          fromIconId: 0,
          toIconId: 5,
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

const saveLayouts = () => {
  localStorage.setItem("layouts", JSON.stringify(layouts));
};

const exportLayouts = async () => {
  try {
    const filePath = await save({
      filters: [
        {
          name: "JSON",
          extensions: ["json"],
        },
      ],
      defaultPath: "layouts.json",
    });

    if (!filePath) {
      info("layouts export cancelled");
      return;
    }

    await writeTextFile(filePath, JSON.stringify(layouts));
  } catch (e) {
    error("exporting layouts: " + e);
  }
};

const importLayouts = async () => {
  try {
    const filePath = await open({
      multiple: false,
      directory: false,
      filters: [
        {
          name: "JSON",
          extensions: ["json"],
        },
      ],
    });

    if (!filePath) {
      info("layouts import cancelled");
      return;
    }

    const rawFile = await readTextFile(filePath);
    const file = JSON.parse(rawFile);

    setLayouts(reconcile(file));

    saveLayouts();
  } catch (e) {
    error("importing layouts: " + e);
  }
};

function LayoutWidget() {
  const [iconIndex, setIconIndex] = createSignal(0);
  const [layoutIndex, setLayoutIndex] = createSignal(0);
  const [selecting, setSelecting] = createSignal<boolean>(false);
  const [startIcon, setStartIcon] = createSignal<number>();
  const [iconType, setIconType] = createSignal("");
  const [iconLabel, setIconLabel] = createSignal("");

  const icons = ["waypoint", "boss", "campsite", "entrance", "checkpoint"];
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

  const changeLayoutName = (name: string) => {
    setLayouts(
      produce((s) => {
        s[tracker.zone][layoutIndex()].name = name;
      }),
    );
  };

  const addIcon = () => {
    if (iconType() === "") return;

    setLayouts(
      produce(
        (s) =>
          (s[tracker.zone][layoutIndex()]["icons"] = [
            ...s[tracker.zone][layoutIndex()]["icons"],
            { id: iconType(), label: iconLabel(), x: 0.5, y: 0.5 },
          ]),
      ),
    );

    setIconType("");
    setIconLabel("");
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
      defaultPos={{ x: 1375, y: 5 }}
      defaultWidth={{ w: 550 }}
      defaultTransparency={25}
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
              src={layouts?.[tracker.zone]?.[layoutIndex()]?.image}
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
                <div
                  class="absolute flex flex-col items-center pointer-events-none"
                  style={{
                    left: `${icon.x * 100}%`,
                    top: `${icon.y * 100}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <Show when={icon.label}>
                    <span class="text-[9px] font-medium text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] whitespace-nowrap select-none">
                      {icon.label}
                    </span>
                  </Show>

                  <img
                    src={
                      new URL(`../../assets/${icon.id}.webp`, import.meta.url)
                        .href
                    }
                    class="w-5 h-5 drop-shadow-md pointer-events-auto"
                    classList={{
                      "cursor-move": !selecting(),
                      "cursor-pointer ring-2 ring-primary rounded-full":
                        selecting(),
                    }}
                    onMouseDown={(e) => onDown(e, i())}
                    onClick={() => linker(i())}
                  />
                </div>
              )}
            </For>
          </div>

          <Show when={!passthrough()}>
            <div class="flex flex-col gap-2 pt-1 border-t border-base-content/10 max-w-[240px]">
              <select class="select select-sm select-bordered w-full bg-base-200">
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
              <div class="inline-flex items-center justify-center gap-2">
                <input
                  type="text"
                  placeholder="Icon Label..."
                  class="input input-sm input-bordered w-full bg-base-200"
                  value={layouts?.[tracker.zone][layoutIndex()].name}
                  onChange={(e) => changeLayoutName(e.currentTarget.value)}
                />
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

              <div class="flex gap-2">
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

                <input
                  type="text"
                  placeholder="Icon Label..."
                  class="input input-sm input-bordered w-full bg-base-200"
                  value={iconLabel()}
                  onChange={(e) => setIconLabel(e.currentTarget.value)}
                />
              </div>

              <div class="flex gap-2">
                <button class="btn btn-sm btn-primary flex-1" onClick={addIcon}>
                  Add Icon
                </button>
                <button
                  class="btn btn-sm flex-1"
                  classList={{ "btn-active btn-secondary": selecting() }}
                  onClick={() => setSelecting(!selecting())}
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
