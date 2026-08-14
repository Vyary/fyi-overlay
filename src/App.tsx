import { ErrorBoundary, onMount, Show, Suspense } from "solid-js";
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
import { ErrorMessage } from "./components/ErrorMessage";
import { LayoutWidget } from "./components/widgets/LayoutWidget";

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
        classList={{
          hidden: passthrough(),
        }}
      >
        <ErrorBoundary
          fallback={(error, reset) => (
            <ErrorMessage name="SettingsWidget" error={error} reset={reset} />
          )}
        >
          <Suspense>
            <SettingsWidget />
          </Suspense>
        </ErrorBoundary>

        <Show when={showInventory()}>
          <ErrorBoundary
            fallback={(error, reset) => (
              <ErrorMessage name="Inventory " error={error} reset={reset} />
            )}
          >
            <Suspense>
              <Inventory shortcut="F2" />
            </Suspense>
          </ErrorBoundary>
        </Show>
      </div>

      <Show when={autoUpdate()}>
        <ErrorBoundary
          fallback={(error, reset) => (
            <ErrorMessage name="Updater " error={error} reset={reset} />
          )}
        >
          <Suspense>
            <Updater />
          </Suspense>
        </ErrorBoundary>
      </Show>

      <div
        classList={{
          hidden: !showOverlay() && passthrough(),
        }}
      >
        <ErrorBoundary
          fallback={(error, reset) => (
            <ErrorMessage name="ZoneWidget " error={error} reset={reset} />
          )}
        >
          <Suspense>
            <ZoneWidget />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary
          fallback={(error, reset) => (
            <ErrorMessage name="LayoutWidget" error={error} reset={reset} />
          )}
        >
          <Suspense>
            <LayoutWidget />
          </Suspense>
        </ErrorBoundary>

        <Show when={showSw()}>
          <ErrorBoundary
            fallback={(error, reset) => (
              <ErrorMessage name="Stopwatch" error={error} reset={reset} />
            )}
          >
            <Suspense>
              <Stopwatch />
            </Suspense>
          </ErrorBoundary>
        </Show>
      </div>
    </main>
  );
}

export default App;
