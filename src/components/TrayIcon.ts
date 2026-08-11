import { TrayIcon } from "@tauri-apps/api/tray";
import { Menu } from "@tauri-apps/api/menu";
import { relaunch } from "@tauri-apps/plugin-process";
import { defaultWindowIcon } from "@tauri-apps/api/app";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { togglePassthrough } from "../state/Passthrough";
import { exportGuide, importGuide } from "../state/Guide";
import { store } from "../state/Store";

async function initTrayIcon() {
  const menu = await Menu.new({
    items: [
      {
        id: "settings",
        text: "Settings",
        action: async () => {
          togglePassthrough();
        },
      },
      {
        id: "export-guid",
        text: "Export Guide",
        action: async () => {
          exportGuide();
        },
      },
      {
        id: "import-guid",
        text: "Import Guide",
        action: async () => {
          importGuide();
        },
      },
      {
        id: "clear tracker",
        text: "Clear Progression",
        action: async () => {
          store.delete("tracker");
          await relaunch();
        },
      },
      {
        id: "clear all data",
        text: "Clear All Data",
        action: async () => {
          store.clear();
          await relaunch();
        },
      },
      {
        id: "reset file path",
        text: "Reset file path",
        action: async () => {
          store.delete("filePath");
          await relaunch();
        },
      },
      {
        id: "quit",
        text: "Quit",
        action: async () => await getCurrentWindow().close(),
      },
      {
        id: " ",
        text: " ",
      },
    ],
  });

  const options = {
    menu,
    menuOnLeftClick: false,
    icon: await defaultWindowIcon(),
  };

  await TrayIcon.new(options);
}

export default initTrayIcon;
