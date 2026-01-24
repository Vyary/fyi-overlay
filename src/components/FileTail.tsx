import { invoke } from "@tauri-apps/api/core";
import { listen } from "@tauri-apps/api/event";
import { Accessor, Setter } from "solid-js";

function FileTail(props: {
  filePath: Accessor<string>;
  setZone: Setter<string>;
}) {
  const startTailing = async () => {
    await listen("tail-line", (event) => {
      const line = event.payload as string;
      if (line.includes("area")) {
        const match = line.match(/"([^"]*)"/);
        const zone = match ? match[1] : line;
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
