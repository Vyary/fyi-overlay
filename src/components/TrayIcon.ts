import { TrayIcon } from "@tauri-apps/api/tray";
import { Menu } from "@tauri-apps/api/menu";
import { relaunch } from "@tauri-apps/plugin-process";
import { defaultWindowIcon } from "@tauri-apps/api/app";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { togglePassthrough } from "./PassthroughState";

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
        id: "clear cache",
        text: "Clear Cache",
        action: async () => {
          localStorage.removeItem("tracker");
          await relaunch();
        },
      },
      {
        id: "reset file path",
        text: "Reset file path",
        action: async () => {
          localStorage.removeItem("filePath");
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
