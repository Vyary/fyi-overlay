import { TrayIcon } from "@tauri-apps/api/tray";
import { Menu } from "@tauri-apps/api/menu";
import { exit } from "@tauri-apps/plugin-process";
import { defaultWindowIcon } from "@tauri-apps/api/app";

async function initTrayIcon() {
  const menu = await Menu.new({
    items: [
      {
        id: "quit",
        text: "Quit",
        action: async () => await exit(0),
      },
    ],
  });

  const options = {
    menu,
    menuOnLeftClick: true,
    icon: await defaultWindowIcon(),
  };

  await TrayIcon.new(options);
}

export default initTrayIcon;
