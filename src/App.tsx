import { onMount, Show, Suspense } from "solid-js";
import "./App.css";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { ZoneWidget } from "./components/widgets/ZoneWidget";
import initTrayIcon from "./components/TrayIcon";
import {
  autoUpdate,
  SettingsWidget,
  showInventory,
  showSw,
} from "./components/widgets/SettingsWidget";
import {
  enablePassthrough,
  passthrough,
  registerPasstroughShortcut,
  togglePassthrough,
} from "./state/Passthrough";
import { unregisterAll } from "@tauri-apps/plugin-global-shortcut";
import {
  filePath,
  loadFilePath,
  showOverlay,
  startTailing,
} from "./state/File";
import Updater from "./components/Updater";
import { loadTracker, saveTracker } from "./state/Tracker";
import { loadGuide, saveGuide } from "./state/Guide";
import { loadTowns, saveTowns } from "./state/Towns";
import { loadCharacter, saveCharacter } from "./state/Character";
import { Inventory } from "./components/widgets/InventoryWidget";
import { Stopwatch } from "./components/widgets/StopwatchWidget";
import { exit } from "@tauri-apps/plugin-process";
import { error, info } from "@tauri-apps/plugin-log";
import { store } from "./state/Store";
import { Layouts } from "./components/Layouts";

function App() {
  onMount(async () => {
    const initializeApp = async () => {
      const s = performance.now();

      initTrayIcon();
      enablePassthrough();
      registerPasstroughShortcut();
      getCurrentWindow().maximize();

      const entries = await store.entries();
      const initStore = Object.fromEntries(entries) as Record<string, any>;

      loadFilePath(initStore.filePath);
      loadTracker(initStore.tracker);
      loadGuide(initStore.guide, initStore.quotes);
      loadTowns(initStore.towns);
      loadCharacter(initStore.char);

      if (!filePath()) {
        togglePassthrough();
      }

      if (filePath()) {
        startTailing();
      }

      const end = performance.now();
      const duration = (end - s).toFixed(2);
      info(`finished loading initial state in ${duration}ms`);
    };

    initializeApp();

    await getCurrentWindow().onCloseRequested(async (e) => {
      e.preventDefault();

      info("saving all state");

      unregisterAll();

      try {
        await Promise.all([
          saveTracker(),
          saveGuide(),
          saveTowns(),
          saveCharacter(),
        ]);

        await exit(0);
      } catch (e) {
        error(`Failed to save data before closing: ${e}`);
        await exit(1);
      }
    });
  });

  return (
    <main
      class="min-h-dvh min-w-dvw flex items-center justify-center gap-2"
      classList={{
        "bg-neutral-content/3": !passthrough(),
        "bg-[repeating-linear-gradient(-45deg,rgba(0,0,0,0.25)_0px,rgba(0,0,0,0.25)_2px,transparent_3px,transparent_8px)]":
          !passthrough(),
      }}
    >
      <div
        classList={
          {
            // hidden: passthrough(),
          }
        }
      >
        <Suspense>
          <SettingsWidget />
        </Suspense>

        <Layouts />

        <Show when={showInventory()}>
          <Suspense>
            <Inventory shortcut="F2" />
          </Suspense>
        </Show>
      </div>

      <Show when={autoUpdate()}>
        <Suspense>
          <Updater />
        </Suspense>
      </Show>

      <div
        classList={{
          hidden: !showOverlay() && passthrough(),
        }}
      >
        <Suspense>
          <ZoneWidget />
        </Suspense>

        <Show when={showSw()}>
          <Suspense>
            <Stopwatch />
          </Suspense>
        </Show>
      </div>
    </main>
  );
}

export default App;
