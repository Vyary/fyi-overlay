import { open } from "@tauri-apps/plugin-dialog";
import { invoke } from "@tauri-apps/api/core";
import { listen } from "@tauri-apps/api/event";
import { createSignal } from "solid-js";

const [filePath, setFilePath] = createSignal("");
const [zone, setZone] = createSignal("");
const [prevZones, setPrevZones] = createSignal<string[]>([]);
const [watching, setWatching] = createSignal(false);

const startTailing = async () => {
  await listen("tail-line", (event) => {
    const line = event.payload as string;
    if (line.includes("area")) {
      const match = line.match(/"([^"]*)"/);
      const zone = match ? match[1] : line;

      setPrevZones((prev) => [...prev, zone]);
      setZone(zone);

      localStorage.setItem("zone", zone);
      localStorage.setItem("prevZones", JSON.stringify(prevZones()));
    }
  });

  setWatching(true);

  await invoke("tail_file", { filePath: filePath() }).catch((err) => {
    console.error(err);
  });
};

const selectFile = async () => {
  const selected =
    (await open({
      multiple: false,
      directory: false,
      defaultPath:
        "C:\\Program Files (x86)\\Steam\\steamapps\\common\\Path of Exile 2\\logs\\Client.txt",
      filters: [
        {
          name: "Log Files",
          extensions: ["txt"],
        },
      ],
    })) || "";

  if (selected.endsWith("\\Client.txt") || selected.endsWith("/Client.txt")) {
    setFilePath(selected);
    if (selected) {
      localStorage.setItem("filePath", selected);
    }

    startTailing();
  }
};

export {
  filePath,
  setFilePath,
  zone,
  setZone,
  prevZones,
  watching,
  setWatching,
  setPrevZones,
  startTailing,
  selectFile,
};
