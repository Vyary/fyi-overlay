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
import { setZone, tracker } from "../state/Tracker";
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
      class={`absolute max-h-200 overflow-y-auto backdrop-blur-md rounded-2xl ring-1 ring-base-content/5 w-180`}
      style={{
        left: props.left,
        top: props.top,
        "background-color": `color-mix(in oklch, var(--color-base-300) ${transparency()}%, transparent)`,
      }}
    >
      <div class="sticky top-0 z-10 backdrop-blur-md flex items-center justify-between border-b border-base-content/5">
        <div class="form-control w-full py-3 px-5">
          <input
            type="text"
            list="towns"
            placeholder="Search or Select Zone..."
            class="input input-sm input-bordered w-full max-w-xs"
            onChange={(e) => setZone(e.currentTarget.value)}
          />

          <datalist id="towns">
            <For each={Object.entries(towns)}>
              {([tc, tn]) => <option value={tc}>{tn}</option>}
            </For>
          </datalist>
        </div>

        <div class="flex items-center gap-2 pt-2 px-5 py-3 w-full justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 text-base-content/40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2v20" />
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 text-base-content/80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
          </svg>
        </div>
      </div>

      <For each={guide[tracker.zone]}>
        {(z, i) => {
          const [showConfirm, setShowConfirm] = createSignal(false);
          return (
            <div class="bg-base-200/40 rounded-xl border border-base-content/5 p-4 flex flex-col gap-4">
              <div class="flex items-center gap-2">
                <div class="flex flex-col gap-1 text-base-content/40">
                  <button
                    class="hover:text-base-content transition-colors"
                    onClick={() => moveGroupUp(tracker.zone, i())}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                  </button>
                  <button
                    class="hover:text-base-content transition-colors"
                    onClick={() => moveGroupDown(tracker.zone, i())}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                </div>

                <div class="flex flex-col w-32">
                  <span class="text-sm font-semibold truncate">
                    {towns[tracker.zone]}
                  </span>
                  <span class="text-xs text-base-content/50 font-mono">
                    {tracker.zone}
                  </span>
                </div>

                <div class="flex flex-1 items-center gap-2">
                  <label class="flex flex-col flex-1 gap-1">
                    <span class="text-[10px] uppercase tracking-wider text-base-content/50 font-semibold pl-1">
                      Previous
                    </span>
                    <input
                      type="text"
                      value={z.prev || ""}
                      placeholder="None"
                      class="input input-sm input-bordered bg-transparent focus:bg-base-100 transition-colors w-full"
                      onChange={(e) =>
                        changePrev(tracker.zone, i(), e.target.value)
                      }
                    />
                  </label>
                  <label class="flex flex-col flex-1 gap-1">
                    <span class="text-[10px] uppercase tracking-wider text-base-content/50 font-semibold pl-1">
                      Prerequisite
                    </span>
                    <input
                      type="text"
                      value={z.preq ? z.preq.join(", ") : ""}
                      placeholder="None"
                      class="input input-sm input-bordered bg-transparent focus:bg-base-100 transition-colors w-full"
                      onChange={(e) =>
                        changePreq(tracker.zone, i(), e.target.value)
                      }
                    />
                  </label>
                </div>

                <div>
                  <button
                    class="btn btn-circle btn-ghost btn-sm text-base-content/40 hover:text-error hover:bg-error/10"
                    onClick={() => setShowConfirm(!showConfirm())}
                  >
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
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                  <ConfirmModal
                    classList={{ hidden: !showConfirm() }}
                    text="Group"
                  >
                    <button
                      class="btn btn-sm btn-ghost"
                      onClick={() => setShowConfirm(false)}
                    >
                      Cancel
                    </button>
                    <button
                      class="btn btn-sm btn-error"
                      onClick={() => deleteZone(tracker.zone, i())}
                    >
                      Delete
                    </button>
                  </ConfirmModal>
                </div>
              </div>

              <ul class="flex flex-col gap-2 text-xs">
                <For each={z.tasks}>
                  {(t, j) => {
                    const [showConfirm, setShowConfirm] = createSignal(false);

                    return (
                      <li>
                        <div class="flex items-center gap-4">
                          <div class="flex flex-col gap-1 text-base-content/40">
                            <button
                              class="hover:text-base-content"
                              onClick={() => moveTaskUp(tracker.zone, i(), j())}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="m18 15-6-6-6 6" />
                              </svg>
                            </button>
                            <button
                              class="hover:text-base-content"
                              onClick={() =>
                                moveTaskDown(tracker.zone, i(), j())
                              }
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="m6 9 6 6 6-6" />
                              </svg>
                            </button>
                          </div>

                          <div class="flex flex-col flex-1">
                            <input
                              type="text"
                              value={t.text}
                              placeholder="Task description..."
                              class="input w-full"
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
                              placeholder="Reward..."
                              class="input input-xs w-full"
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

                          <div class="flex flex-col">
                            <select
                              class="select select-xs max-w-30 bg-base-300"
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
                              placeholder="Condition..."
                              class="input"
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

                          <div>
                            <button
                              class="btn btn-circle btn-ghost btn-sm text-base-content/40 hover:text-error hover:bg-error/10"
                              onClick={() => setShowConfirm(!showConfirm())}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                              </svg>
                            </button>
                            <ConfirmModal
                              classList={{ hidden: !showConfirm() }}
                              text="Task"
                            >
                              <button
                                class="btn btn-sm btn-ghost"
                                onClick={() => setShowConfirm(false)}
                              >
                                Cancel
                              </button>
                              <button
                                class="btn btn-sm btn-error"
                                onClick={() =>
                                  removeTask(tracker.zone, i(), j())
                                }
                              >
                                Delete
                              </button>
                            </ConfirmModal>
                          </div>
                        </div>
                      </li>
                    );
                  }}
                </For>
              </ul>

              <button
                class="btn btn-sm btn-dash w-full border-base-content/20 hover:border-base-content/40 text-base-content/60 hover:text-base-content hover:bg-base-100/50  mt-2"
                onClick={() => addTask(tracker.zone, i())}
              >
                + Add Task
              </button>
            </div>
          );
        }}
      </For>

      <div class="pt-2">
        <button
          class="btn btn-dash border-base-content/30 text-base-content/70 hover:text-base-content hover:bg-base-100/50 hover:bg-base-content/5 w-full"
          onClick={() => addGroup(tracker.zone)}
        >
          + Add Zone Group
        </button>
      </div>
    </div>
  );
}

export { ZoneEditor };
