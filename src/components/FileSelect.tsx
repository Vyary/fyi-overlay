import { open } from "@tauri-apps/plugin-dialog";
import { onMount, Setter } from "solid-js";

function FileSelect(props: { setFilePath: Setter<string> }) {
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
    if (selected) {
      localStorage.setItem("filePath", selected);
    }
  };

  onMount(() => {
    const filePath = localStorage.getItem("filePath");
    if (filePath) {
      props.setFilePath(filePath);
      console.log(filePath);
    }
  });

  return (
    <button class="btn" onClick={selectFile}>
      Select File
    </button>
  );
}

export default FileSelect;
