import { createSignal, For, onCleanup, onMount } from "solid-js";
import {
  addGroup,
  addTask,
  changeAction,
  changeDoneQuote,
  changePreq,
  changePrev,
  changeReward,
  changeTask,
  deleteZone,
  guide,
  moveGroupDown,
  moveGroupUp,
  moveTaskDown,
  moveTaskUp,
  removeTask,
} from "../state/Guide";
import { tracker } from "../state/Tracker";
import { towns } from "../state/Towns";
import ConfirmModal from "./ConfirmModal";

function ZoneEditor(props: { left: string; top: string }) {
  const [transparency, setTransparency] = createSignal(75);

  const saveTransparency = () => {
    localStorage.setItem("transparencyZe", transparency().toString());
  };

  onMount(() => {
    const tr = localStorage.getItem("transparencyZe");
    if (tr) setTransparency(Number(tr));
  });

  onCleanup(() => saveTransparency());

  return (
    <div
      class={`absolute max-h-200 overflow-y-auto backdrop-blur-md rounded-2xl ring-1 ring-base-content/5 py-1 w-140`}
      style={{
        left: props.left,
        top: props.top,
        "background-color": `color-mix(in oklch, var(--color-base-300) ${transparency()}%, transparent)`,
      }}
    >
      <For each={guide[tracker.zone]}>
        {(z, i) => {
          const [showConfirm, setShowConfirm] = createSignal(false);
          return (
            <div class="card">
              <div class="card-body">
                <div class="flex flex-col gap-2 py-1">
                  <div class="grid grid-cols-11 gap-2">
                    <div class="flex flex-col col-span-1 items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-5 w-5 cursor-pointer"
                        onClick={() => moveGroupUp(tracker.zone, i())}
                      >
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-5 w-5 cursor-pointer"
                        onClick={() => moveGroupDown(tracker.zone, i())}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                    <div class="col-span-3 flex flex-col items-center justify-center">
                      <span class="text-sm">{towns[tracker.zone]}</span>
                      <span class="text-sm">{tracker.zone}</span>
                    </div>
                    <div class="flex flex-col items-center gap-1 col-span-3">
                      <span class="text-sm">previous</span>
                      <input
                        type="text"
                        value={z.prev || ""}
                        class="input"
                        onChange={(e) =>
                          changePrev(tracker.zone, i(), e.target.value)
                        }
                      />
                    </div>
                    <div class="flex flex-col items-center gap-1 col-span-3">
                      <span class="text-sm">prerequisite</span>
                      <input
                        type="text"
                        value={z.preq ? z.preq.join(", ") : ""}
                        class="input"
                        onChange={(e) =>
                          changePreq(tracker.zone, i(), e.target.value)
                        }
                      />
                    </div>
                    <span class="flex items-center justify-center col-span-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="96"
                        height="96"
                        w-full
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="cursor-pointer h-8 w-8 hover:text-error transition-colors"
                        onClick={() => setShowConfirm(!showConfirm())}
                      >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                      <ConfirmModal
                        classList={{
                          hidden: !showConfirm(),
                        }}
                        text="Group"
                      >
                        <button
                          class="btn btn-outline"
                          onClick={() => setShowConfirm(false)}
                        >
                          Cancel
                        </button>
                        <button
                          class="btn btn-error"
                          onClick={() => deleteZone(tracker.zone, i())}
                        >
                          Delete
                        </button>
                      </ConfirmModal>
                    </span>
                  </div>
                  <ul class="flex flex-col gap-2 text-xs mt-2">
                    <For each={z.tasks}>
                      {(t, j) => {
                        const [showConfirm, setShowConfirm] =
                          createSignal(false);

                        return (
                          <li>
                            <div class="grid grid-cols-12 gap-2">
                              <div class="flex flex-col items-center justify-center col-span-1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  class="h-4 w-4 cursor-pointer"
                                  onClick={() =>
                                    moveTaskUp(tracker.zone, i(), j())
                                  }
                                >
                                  <path d="m18 15-6-6-6 6" />
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  class="h-4 w-4 cursor-pointer"
                                  onClick={() =>
                                    moveTaskDown(tracker.zone, i(), j())
                                  }
                                >
                                  <path d="m6 9 6 6 6-6" />
                                </svg>
                              </div>

                              <div class="flex flex-col col-span-6">
                                <input
                                  type="text"
                                  value={t.text}
                                  class="input"
                                  onChange={(e) =>
                                    changeTask(
                                      tracker.zone,
                                      i(),
                                      j(),
                                      e.target.value,
                                    )
                                  }
                                />
                                <input
                                  type="text"
                                  value={t.reward || ""}
                                  class="input input-xs"
                                  onChange={(e) =>
                                    changeReward(
                                      tracker.zone,
                                      i(),
                                      j(),
                                      e.target.value,
                                    )
                                  }
                                />
                              </div>

                              <div class="flex flex-col col-span-4">
                                <select
                                  class="select select-xs max-w-20 bg-base-300"
                                  value={
                                    t.show ? "Show" : t.hide ? "Hide" : "Action"
                                  }
                                  onInput={(e) => {
                                    changeAction(
                                      tracker.zone,
                                      i(),
                                      j(),
                                      e.currentTarget.value,
                                    );
                                  }}
                                >
                                  <option disabled selected>
                                    Action
                                  </option>
                                  <option>Show</option>
                                  <option>Hide</option>
                                </select>
                                <input
                                  type="text"
                                  value={t.condition || ""}
                                  placeholder="When"
                                  class="input max-w-40"
                                  onChange={(e) =>
                                    changeDoneQuote(
                                      tracker.zone,
                                      i(),
                                      j(),
                                      e.target.value,
                                    )
                                  }
                                />
                              </div>

                              <div class="flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  class="cursor-pointer h-6 w-6 hover:text-error transition-colors col-span-1"
                                  onClick={() => setShowConfirm(!showConfirm())}
                                >
                                  <path d="M18 6 6 18" />
                                  <path d="m6 6 12 12" />
                                </svg>
                              </div>

                              <ConfirmModal
                                classList={{
                                  hidden: !showConfirm(),
                                }}
                                text="Task"
                              >
                                <button
                                  class="btn btn-outline"
                                  onClick={() => setShowConfirm(false)}
                                >
                                  Cancel
                                </button>
                                <button
                                  class="btn btn-error"
                                  onClick={() =>
                                    removeTask(tracker.zone, i(), j())
                                  }
                                >
                                  Delete
                                </button>
                              </ConfirmModal>
                            </div>
                          </li>
                        );
                      }}
                    </For>
                  </ul>

                  <button
                    class="btn btn-outline"
                    onClick={() => addTask(tracker.zone, i())}
                  >
                    add task
                  </button>
                </div>
              </div>
            </div>
          );
        }}
      </For>

      <button
        class="btn btn-outline w-full"
        onClick={() => addGroup(tracker.zone)}
      >
        add group
      </button>

      <div class="flex items-center gap-2 pt-2 border-t border-base-content/5 bg-base-300/30 px-5 py-3 w-full">
        <span class="text-lg text-base-content/20 font-medium">T</span>
        <input
          type="range"
          min={0}
          max={100}
          value={transparency()}
          class="range range-xs"
          step={1}
          onInput={(e) => {
            setTransparency(Number(e.currentTarget.value));
            saveTransparency();
          }}
        />
        <span class="text-lg text-base-content/80 font-medium">T</span>
      </div>
    </div>
  );
}

export { ZoneEditor };
