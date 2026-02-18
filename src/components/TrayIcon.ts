import { TrayIcon } from "@tauri-apps/api/tray";
import { Menu } from "@tauri-apps/api/menu";
import { exit, relaunch } from "@tauri-apps/plugin-process";
import { defaultWindowIcon } from "@tauri-apps/api/app";

async function initTrayIcon() {
  const menu = await Menu.new({
    items: [
      {
        id: "reset widget position",
        text: "Reset Widget Position",
        action: async () => {
          localStorage.removeItem("pos");
          await relaunch();
        },
      },
      {
        id: "reset widget size",
        text: "Reset Widget Size",
        action: async () => {
          localStorage.removeItem("size");
          await relaunch();
        },
      },
      {
        id: "clear cache",
        text: "Clear Cache",
        action: async () => {
          localStorage.removeItem("zone");
          localStorage.removeItem("prevZones");
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
        action: async () => await exit(0),
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
