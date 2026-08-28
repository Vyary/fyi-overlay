import { ErrorBoundary, onMount, Show, Suspense } from "solid-js";
import "./App.css";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { ZoneWidget } from "./components/widgets/ZoneWidget";
import initTrayIcon from "./components/TrayIcon";
import {
  autoUpdate,
  SettingsWidget,
  showInventory,
  showLayout,
  showSw,
} from "./components/widgets/SettingsWidget";
import {
  enablePassthrough,
  passthrough,
  registerPasstroughShortcut,
} from "./state/Passthrough";
import { unregisterAll } from "@tauri-apps/plugin-global-shortcut";
import { loadFilePath, showOverlay } from "./state/File";
import Updater from "./components/Updater";
import { loadTracker, saveTracker } from "./state/Tracker";
import { loadGuide, saveGuide } from "./state/Guide";
import { loadTowns, saveTowns } from "./state/Towns";
import { loadCharacter, saveCharacter } from "./state/Character";
import { Inventory } from "./components/widgets/InventoryWidget";
import { Stopwatch } from "./components/widgets/StopwatchWidget";
import { exit } from "@tauri-apps/plugin-process";
import { error, info } from "@tauri-apps/plugin-log";
import { ErrorMessage } from "./components/ErrorMessage";
import { LayoutWidget } from "./components/widgets/LayoutWidget";
import { loadLayouts, saveLayouts } from "./state/Layouts";

function App() {
  onMount(async () => {
    info(Date.now().toString());

    const initializeApp = async () => {
      const s = performance.now();

      initTrayIcon();
      enablePassthrough();
      registerPasstroughShortcut();
      getCurrentWindow().maximize();

      loadFilePath();
      loadTracker();
      loadCharacter();
      loadGuide();
      loadTowns();
      loadLayouts();

      info(
        `finished loading initial state in ${(performance.now() - s).toFixed(2)}ms`,
      );
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
          saveLayouts(),
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
            <Show when={!passthrough()}>
              <ErrorMessage name="SettingsWidget" error={error} reset={reset} />
            </Show>
          )}
        >
          <Suspense>
            <SettingsWidget />
          </Suspense>
        </ErrorBoundary>

        <Show when={showInventory()}>
          <ErrorBoundary
            fallback={(error, reset) => (
              <Show when={!passthrough()}>
                <ErrorMessage name="Inventory " error={error} reset={reset} />
              </Show>
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
            <Show when={!passthrough()}>
              <ErrorMessage name="Updater " error={error} reset={reset} />
            </Show>
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
            <Show when={!passthrough()}>
              <ErrorMessage name="ZoneWidget " error={error} reset={reset} />
            </Show>
          )}
        >
          <Suspense>
            <ZoneWidget />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary
          fallback={(error, reset) => (
            <Show when={!passthrough()}>
              <ErrorMessage name="LayoutWidget" error={error} reset={reset} />
            </Show>
          )}
        >
          <Suspense>
            <Show when={showLayout()}>
              <LayoutWidget />
            </Show>
          </Suspense>
        </ErrorBoundary>

        <Show when={showSw()}>
          <ErrorBoundary
            fallback={(error, reset) => (
              <Show when={!passthrough()}>
                <ErrorMessage name="Stopwatch" error={error} reset={reset} />
              </Show>
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
