import { createStore, produce, reconcile } from "solid-js/store";
import { open } from "@tauri-apps/plugin-dialog";
import { save } from "@tauri-apps/plugin-dialog";
import { error, info } from "@tauri-apps/plugin-log";
import { readTextFile, writeTextFile } from "@tauri-apps/plugin-fs";
import { tracker } from "./Tracker";

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
        { id: "entrance", label: "The Riverbank", x: 0.1625, y: 0.775 },
        { id: "waypoint", x: 0.5916666666666667, y: 0.7291666666666666 },
        {
          id: "entrance",
          label: "Clearfell",
          x: 0.8458333333333333,
          y: 0.1625,
        },
      ],
      lines: [{ fromIconId: 0, toIconId: 2 }],
    },
  ],
  G1_2: [
    {
      name: "EEW",
      icons: [
        {
          id: "entrance",
          label: "Clearfell Encampment",
          x: 0.9083333333333333,
          y: 0.6041666666666666,
        },
        {
          id: "campsite",
          label: "Campsite",
          x: 0.48333333333333334,
          y: 0.18333333333333332,
        },
        {
          id: "boss",
          label: "Biera",
          x: 0.5708333333333333,
          y: 0.3333333333333333,
        },
        { id: "waypoint", x: 0.08333333333333333, y: 0.49166666666666664 },
        {
          id: "entrance",
          label: "The Grelwood",
          x: 0.12083333333333333,
          y: 0.7458333333333333,
        },
        {
          id: "entrance",
          label: "Mud Barrow",
          x: 0.10833333333333334,
          y: 0.3625,
        },
      ],
      lines: [
        { fromIconId: 0, toIconId: 1 },
        { fromIconId: 1, toIconId: 2 },
        { fromIconId: 2, toIconId: 4 },
      ],
    },
    {
      name: "SW",
      icons: [
        {
          id: "entrance",
          label: "Clearfell Encampment",
          x: 0.08333333333333333,
          y: 0.5375,
        },
        { id: "campsite", label: "Campsite", x: 0.925, y: 0.3416666666666667 },
        { id: "boss", label: "Biera", x: 0.6375, y: 0.7541666666666667 },
        { id: "waypoint", x: 0.8166666666666667, y: 0.6666666666666666 },
        {
          id: "entrance",
          label: "The Grelwood",
          x: 0.6166666666666667,
          y: 0.1375,
        },
        { id: "entrance", label: "Mud Barrow", x: 0.8958333333333334, y: 0.6 },
      ],
      lines: [
        { fromIconId: 0, toIconId: 1 },
        { fromIconId: 1, toIconId: 2 },
        { fromIconId: 2, toIconId: 4 },
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
        { id: "boss", label: "The Devourer", x: 0.8041666666666667, y: 0.8125 },
      ],
      lines: [{ fromIconId: 0, toIconId: 1 }],
    },
  ],
  G1_4: [
    {
      name: "N",
      image: "",
      icons: [
        { id: "entrance", label: "Clearfell", x: 0.65, y: 0.10416666666666667 },
        { id: "checkpoint", label: "", x: 0.525, y: 0.3333333333333333 },
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
        { id: "checkpoint", label: "", x: 0.5333333333333333, y: 0.75 },
        {
          id: "entrance",
          label: "The Red Vale",
          x: 0.8041666666666667,
          y: 0.9041666666666667,
        },
      ],
      lines: [{ fromIconId: 0, toIconId: 5 }],
    },
    {
      name: "S",
      image: "",
      icons: [
        { id: "entrance", label: "Clearfell", x: 0.45, y: 0.8875 },
        { id: "checkpoint", label: "", x: 0.6416666666666667, y: 0.2625 },
        { id: "checkpoint", label: "", x: 0.8416666666666667, y: 0.5 },
        {
          id: "checkpoint",
          label: "",
          x: 0.22083333333333333,
          y: 0.5041666666666667,
        },
        { id: "checkpoint", label: "", x: 0.5166666666666667, y: 0.725 },
        {
          id: "entrance",
          label: "The Red Vale",
          x: 0.32083333333333336,
          y: 0.075,
        },
      ],
      lines: [{ fromIconId: 0, toIconId: 5 }],
    },
  ],
  "": [{ name: "1", image: "", icons: [], lines: [] }],
  G1_1: [
    {
      name: "1",
      image: "",
      icons: [
        { id: "myplayer", label: "", x: 0.0625, y: 0.7583333333333333 },
        {
          id: "boss",
          label: "Miller",
          x: 0.6583333333333333,
          y: 0.36666666666666664,
        },
        {
          id: "entrance",
          label: "Clearfell Encampent",
          x: 0.8041666666666667,
          y: 0.22916666666666666,
        },
      ],
      lines: [
        { fromIconId: 0, toIconId: 1 },
        { fromIconId: 1, toIconId: 2 },
      ],
    },
  ],
  G1_5: [
    {
      name: "EW",
      image: "",
      icons: [
        { id: "entrance", label: "Clearfell", x: 0.9125, y: 0.6 },
        { id: "waypoint", label: "", x: 0.8208333333333333, y: 0.6375 },
        { id: "rustobelisk", label: "Obelisk", x: 0.45, y: 0.725 },
        {
          id: "rustobelisk",
          label: "Obelisk",
          x: 0.425,
          y: 0.44166666666666665,
        },
        {
          id: "rustobelisk",
          label: "Obelisk",
          x: 0.23333333333333334,
          y: 0.22916666666666666,
        },
      ],
      lines: [],
    },
  ],
  G1_6: [
    {
      name: "1",
      image: "",
      icons: [
        {
          id: "entrance",
          label: "Grelwood",
          x: 0.9125,
          y: 0.35833333333333334,
        },
        { id: "waypoint", label: "", x: 0.8375, y: 0.425 },
        {
          id: "boss",
          label: "The Rotten Druid",
          x: 0.5708333333333333,
          y: 0.7375,
        },
        {
          id: "entrance",
          label: "Cemetery",
          x: 0.25833333333333336,
          y: 0.2833333333333333,
        },
        { id: "runes", label: "Runes", x: 0.09583333333333334, y: 0.575 },
      ],
      lines: [
        { fromIconId: 0, toIconId: 4 },
        { fromIconId: 4, toIconId: 3 },
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

const addEmptyLayout = () => {
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

const copyLayout = (layoutIndex: number) => {
  setLayouts(
    produce(
      (s) =>
        (s[tracker.zone] = [
          ...s[tracker.zone],
          JSON.parse(JSON.stringify(s[tracker.zone][layoutIndex])),
        ]),
    ),
  );
};

const changeLayoutName = (layoutIndex: number, name: string) => {
  setLayouts(
    produce((s) => {
      s[tracker.zone][layoutIndex].name = name;
    }),
  );
};

const addIcon = (layoutIndex: number, iconType: string, iconLabel: string) => {
  if (iconType === "") return;

  setLayouts(
    produce(
      (s) =>
        (s[tracker.zone][layoutIndex]["icons"] = [
          ...s[tracker.zone][layoutIndex]["icons"],
          { id: iconType, label: iconLabel, x: 0.5, y: 0.5 },
        ]),
    ),
  );
};

const changeIconLocation = (
  layoutIndex: number,
  iconIndex: number,
  e: MouseEvent,
  rect: DOMRect,
) => {
  const xPercent = Math.max(
    0,
    Math.min(1, (e.clientX - rect.left) / rect.width),
  );
  const yPercent = Math.max(
    0,
    Math.min(1, (e.clientY - rect.top) / rect.height),
  );

  setLayouts(tracker.zone, layoutIndex, "icons", iconIndex, "x", xPercent);
  setLayouts(tracker.zone, layoutIndex, "icons", iconIndex, "y", yPercent);
};

const addLine = (
  layoutIndex: number,
  start: number | undefined,
  end: number,
) => {
  if (start === undefined) return;

  setLayouts(
    produce(
      (s) =>
        (s[tracker.zone][layoutIndex]["lines"] = [
          ...s[tracker.zone][layoutIndex]["lines"],
          { fromIconId: start, toIconId: end },
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

export {
  layouts,
  addLayout,
  addEmptyLayout,
  copyLayout,
  changeLayoutName,
  addIcon,
  changeIconLocation,
  addLine,
  deleteLayout,
  saveLayouts,
  loadLayouts,
  exportLayouts,
  importLayouts,
};
