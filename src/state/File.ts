import { open } from "@tauri-apps/plugin-dialog";
import { invoke } from "@tauri-apps/api/core";
import { listen } from "@tauri-apps/api/event";
import { createSignal } from "solid-js";
import { setFlag, setZone, setZoneLevel, tracker } from "./Tracker";
import { addTown, quotes } from "./Guide";
import { character, updateCharacterLevel } from "./Character";
import { store } from "./Store";
import { error, info } from "@tauri-apps/plugin-log";

const [filePath, setFilePath] = createSignal("");
const [watching, setWatching] = createSignal(false);
const [showOverlay, setShowOverlay] = createSignal(false);

const startTailing = async () => {
  await listen("tail-line", (event) => {
    try {
      const line = event.payload as string;
      if (line.includes("[WINDOW] Gained focus")) {
        setShowOverlay(true);
      }

      if (line.includes("[WINDOW] Lost focus")) {
        setShowOverlay(false);
      }

      if (line.includes("Closing game gracefully")) {
        setShowOverlay(false);
      }

      if (line.includes("area")) {
        const match = line.match(/level (?<level>\d+) area "(?<zone>\w+)"/)!;
        const { level, zone } = match.groups!;

        if (!zone.toLowerCase().includes("hideout")) {
          setZone(zone);
          setZoneLevel(Number(level));
          addTown(zone);
        }
      }

      if (line.includes(character.name) && line.includes("is now level")) {
        const match = line.match(/level (?<charLevel>\d*)/)!;
        const { charLevel } = match?.groups!;
        updateCharacterLevel(Number(charLevel));
      }

      // if (line.includes("LOADING SCREEN")) {
      //   const match = line.match(/LOADING SCREEN\] \((?<zoneName>[^)]+)/)!;
      //   const { zoneName } = match.groups!;
      //   addTownName(tracker.zone, zoneName);
      // }

      const quoteArray = line.split(": ");
      let quote = quoteArray[quoteArray.length - 1];

      if (character.name != "" && quote.includes(character.name)) {
        quote = quote.replace(character.name, "Character");
        info(quote);
      }
      if (quotes?.[tracker.zone]?.[quote]) {
        setFlag(quote);
        info("quote found");
      }
    } catch (e) {
      error("tailing file: " + e);
    }
  });

  setWatching(true);

  await invoke("tail_file", { filePath: filePath() }).catch((e) => {
    error("invoking tail_file: " + e);
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

  if (!selected) {
    info("client file selecting cancelled");
    return;
  }

  if (selected.endsWith("\\Client.txt") || selected.endsWith("/Client.txt")) {
    setFilePath(selected);
    if (selected) {
      saveFilePath(selected);
    }

    startTailing();
  }
};

const saveFilePath = async (filePath: string) => {
  await store.set("filePath", filePath);
  await store.save();
};

const loadFilePath = async (fp: string) => {
  if (fp) setFilePath(fp);
};

export {
  filePath,
  setFilePath,
  saveFilePath,
  loadFilePath,
  watching,
  setWatching,
  startTailing,
  selectFile,
  showOverlay,
};
