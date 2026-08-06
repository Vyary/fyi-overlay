import { open } from "@tauri-apps/plugin-dialog";
import { invoke } from "@tauri-apps/api/core";
import { listen } from "@tauri-apps/api/event";
import { createSignal } from "solid-js";
import { setFlag, setZone, setZoneLevel, tracker } from "./Tracker";
import { addTown, quotes } from "./Guide";
import { addTownName } from "./Towns";
import { character, updateCharacterLevel } from "./Character";

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
        console.log(quote);
      }
      if (quotes?.[tracker.zone]?.[quote]) {
        setFlag(quote);
        console.log("quote found");
      }
    } catch (e) {
      console.log(e);
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

  if (!selected) {
    console.log("Client file selecting cancelled");
    return;
  }

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
  watching,
  setWatching,
  startTailing,
  selectFile,
  showOverlay,
};
