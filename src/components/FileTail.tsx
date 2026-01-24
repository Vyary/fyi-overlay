import { invoke } from "@tauri-apps/api/core";
import { listen } from "@tauri-apps/api/event";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { Accessor, Setter } from "solid-js";

function FileTail(props: {
  filePath: Accessor<string>;
  setZone: Setter<string>;
  setPrevZones: Setter<string[]>;
  setPassthrough: Setter<boolean>;
}) {
  const startTailing = async () => {
    props.setPassthrough(true);
    getCurrentWindow().setIgnoreCursorEvents(true);

    await listen("tail-line", (event) => {
      const line = event.payload as string;
      if (line.includes("area")) {
        const match = line.match(/"([^"]*)"/);
        const zone = match ? match[1] : line;
        props.setPrevZones((prev) => [...prev, zone]);
        props.setZone(zone);
      }
    });

    props.setZone(" ");
    await invoke("tail_file", { filePath: props.filePath() }).catch((err) => {
      console.error(err);
    });
  };

  return (
    <button class="btn" onClick={startTailing}>
      Trail File
    </button>
  );
}

export default FileTail;
