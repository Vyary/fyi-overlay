import { Accessor, createSignal, onMount, Setter, Show } from "solid-js";
import { filePath, selectFile, startTailing, watching } from "./FileState";
import { resetPosition, resetTextSize, resetWidth } from "./ZoneWidget";
import { resetPositionSw } from "./StopwatchWidget";
import {
  enablePassthrough,
  PtSc,
  updatePasstroughShortcut,
} from "./PassthroughState";
import {
  SwSc,
  SwScReset,
  updateStopwatchShortcut,
  updateStopwatchShortcutReset,
} from "./StopwatchShortcutState";
import { character, setCharacterName } from "../state/Character";

function SettingsWidget(props: {
  showZw: Accessor<boolean>;
  setShowZw: Setter<boolean>;
  showSw: Accessor<boolean>;
  setShowSw: Setter<boolean>;
  autoUpdate: Accessor<boolean>;
  setAutoUpdate: Setter<boolean>;
}) {
  const [PtScErr, setPtScErr] = createSignal(false);
  const [SwScErr, setSwScErr] = createSignal(false);
  const [SwScResetErr, setSwScResetErr] = createSignal(false);

  onMount(() => {
    const szw = localStorage.getItem("showZw");
    if (szw) props.setShowZw(JSON.parse(szw));

    const ssw = localStorage.getItem("showSw");
    if (ssw) props.setShowSw(JSON.parse(ssw));

    const au = localStorage.getItem("autoUpdate");
    if (au) props.setAutoUpdate(JSON.parse(au));
  });

  return (
    <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 absolute right-20 top-1/10 select-none">
      <legend class="fieldset-legend">Settings</legend>

      <label class="text-base px-1">Overlay Toggle</label>
      <div class="flex flex-row items-center">
        <form class="flex flex-row">
          <input
            class="btn"
            type="checkbox"
            name="modifier"
            aria-label="Ctrl"
            value="Ctrl"
            checked={PtSc.Ctrl}
            onChange={(e) => {
              updatePasstroughShortcut(e);
            }}
          />
          <input
            class="btn"
            type="checkbox"
            name="modifier"
            aria-label="Shift"
            value="Shift"
            checked={PtSc.Shift}
            onChange={(e) => {
              updatePasstroughShortcut(e);
            }}
          />
          <input
            class="btn"
            type="checkbox"
            name="modifier"
            aria-label="Alt"
            value="Alt"
            checked={PtSc.Alt}
            onChange={(e) => {
              updatePasstroughShortcut(e);
            }}
          />
          <input
            type="text"
            placeholder="Key"
            class="input"
            classList={{
              "border border-error": PtScErr(),
            }}
            value={PtSc.Key.toUpperCase()}
            onInput={(e) => {
              if (e.target.value.trim() === "") {
                setPtScErr(true);
                return;
              }
              setPtScErr(false);
              updatePasstroughShortcut(e, true);
            }}
          />
        </form>
      </div>

      <label class="text-base px-1 pt-2">Character Name</label>
      <div class="flex flex-row items-center">
        <form class="flex flex-row">
          <input
            type="text"
            placeholder="Character Name"
            class="input"
            value={character.name}
            onInput={(e) => setCharacterName(e.target.value.trim())}
          />
        </form>
      </div>

      <div class="flex items-center justify-between px-1 pt-2">
        <label
          class="cursor-pointer text-base"
          onClick={() => {
            const isEnabled = !props.showZw();
            props.setShowZw(isEnabled);
            localStorage.setItem("showZw", JSON.stringify(isEnabled));
          }}
        >
          Zone Widget
        </label>
        <input
          type="checkbox"
          checked={props.showZw()}
          onClick={() => {
            const isEnabled = !props.showZw();
            props.setShowZw(isEnabled);
            localStorage.setItem("showZw", JSON.stringify(isEnabled));
          }}
          class="toggle toggle-md"
        />
      </div>
      <Show when={props.showZw()}>
        <div
          classList={{
            "tooltip tooltip-open tooltip-left tooltip-accent":
              !filePath().endsWith("\\Client.txt") &&
              !filePath().endsWith("/Client.txt"),
          }}
          data-tip="You need to locate the Client.txt file to enable zone tracking"
        >
          <div class="join">
            <button class="btn join-item" onClick={selectFile}>
              Select File
            </button>
            <input
              type="text"
              class="input join-item"
              placeholder="Client.txt Location"
              value={filePath()}
            />
          </div>
        </div>

        <div class="join">
          <button class="btn join-item" onClick={() => resetPosition()}>
            Reset Position
          </button>
          <button
            class="btn join-item"
            onClick={() => {
              resetWidth();
              resetTextSize();
            }}
          >
            Reset Size
          </button>
        </div>
      </Show>

      <div class="flex items-center justify-between px-1 pt-2">
        <label
          class="cursor-pointer text-base"
          onClick={() => {
            const isEnabled = !props.showSw();
            props.setShowSw(isEnabled);
            localStorage.setItem("showSw", JSON.stringify(isEnabled));
          }}
        >
          Stopwatch Widget
        </label>
        <input
          type="checkbox"
          checked={props.showSw()}
          onClick={() => {
            const isEnabled = !props.showSw();
            props.setShowSw(isEnabled);
            localStorage.setItem("showSw", JSON.stringify(isEnabled));
          }}
          class="toggle toggle-md"
        />
      </div>
      <Show when={props.showSw()}>
        <label class="text-base px-1">Stopwatch Toggle</label>
        <div class="flex flex-row items-center">
          <form class="flex flex-row">
            <input
              class="btn"
              type="checkbox"
              name="modifier"
              aria-label="Ctrl"
              value="Ctrl"
              checked={SwSc.Ctrl}
              onChange={(e) => {
                updateStopwatchShortcut(e);
              }}
            />
            <input
              class="btn"
              type="checkbox"
              name="modifier"
              aria-label="Shift"
              value="Shift"
              checked={SwSc.Shift}
              onChange={(e) => {
                updateStopwatchShortcut(e);
              }}
            />
            <input
              class="btn"
              type="checkbox"
              name="modifier"
              aria-label="Alt"
              value="Alt"
              checked={SwSc.Alt}
              onChange={(e) => {
                updateStopwatchShortcut(e);
              }}
            />
            <input
              type="text"
              placeholder="Key"
              class="input"
              classList={{
                "border border-error": SwScErr(),
              }}
              value={SwSc.Key.toUpperCase()}
              onInput={(e) => {
                if (e.target.value.trim() === "") {
                  setSwScErr(true);
                  return;
                }
                setSwScErr(false);
                updateStopwatchShortcut(e, true);
              }}
            />
          </form>
        </div>

        <label class="text-base px-1">Stopwatch Reset</label>
        <div class="flex flex-row items-center">
          <form class="flex flex-row">
            <input
              class="btn"
              type="checkbox"
              name="modifier"
              aria-label="Ctrl"
              value="Ctrl"
              checked={SwScReset.Ctrl}
              onChange={(e) => {
                updateStopwatchShortcutReset(e);
              }}
            />
            <input
              class="btn"
              type="checkbox"
              name="modifier"
              aria-label="Shift"
              value="Shift"
              checked={SwScReset.Shift}
              onChange={(e) => {
                updateStopwatchShortcutReset(e);
              }}
            />
            <input
              class="btn"
              type="checkbox"
              name="modifier"
              aria-label="Alt"
              value="Alt"
              checked={SwScReset.Alt}
              onChange={(e) => {
                updateStopwatchShortcutReset(e);
              }}
            />
            <input
              type="text"
              placeholder="Key"
              class="input"
              classList={{
                "border border-error": SwScResetErr(),
              }}
              value={SwScReset.Key.toUpperCase()}
              onInput={(e) => {
                if (e.target.value.trim() === "") {
                  setSwScResetErr(true);
                  return;
                }
                setSwScResetErr(false);
                updateStopwatchShortcutReset(e, true);
              }}
            />
          </form>
        </div>

        <div class="join pb-2">
          <button class="btn join-item" onClick={() => resetPositionSw()}>
            Reset Position
          </button>
        </div>
      </Show>

      <div class="flex items-center justify-between px-1 pt-2">
        <label
          class="cursor-pointer text-base"
          onClick={() => {
            const isEnabled = !props.autoUpdate();
            props.setAutoUpdate(isEnabled);
            localStorage.setItem("autoUpdate", JSON.stringify(isEnabled));
          }}
        >
          Auto Update
        </label>
        <input
          type="checkbox"
          checked={props.autoUpdate()}
          onClick={() => {
            const isEnabled = !props.autoUpdate();
            props.setAutoUpdate(isEnabled);
            localStorage.setItem("autoUpdate", JSON.stringify(isEnabled));
          }}
          class="toggle toggle-md"
        />
      </div>

      <button
        class="btn"
        onClick={() => {
          if (filePath()) {
            if (!watching()) {
              startTailing();
            }
            enablePassthrough();
          }
          if (!props.showZw()) {
            enablePassthrough();
          }
        }}
      >
        Close
      </button>
    </fieldset>
  );
}

export default SettingsWidget;
