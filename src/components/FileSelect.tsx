import { open } from "@tauri-apps/plugin-dialog";
import { Accessor, Setter } from "solid-js";

function FileSelect(props: {
  filePath: Accessor<string>;
  setFilePath: Setter<string>;
}) {
  const selectFile = async () => {
    const selected = await open({
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
    });

    props.setFilePath(selected || "");
    console.log(props.filePath());
  };

  return (
    <button class="border p-2" onClick={selectFile}>
      Select File
    </button>
  );
}

export default FileSelect;
