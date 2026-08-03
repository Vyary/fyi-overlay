import { For } from "solid-js";
import { BaseWidget } from "./BaseWidget";
import { moveTownDown, moveTownUp, townOrder, towns } from "../../state/Towns";
import { setProgress, tracker } from "../../state/Tracker";

function TimelineWidget() {
  return (
    <BaseWidget
      name="townTimeline"
      defaultPos={{ x: 1150, y: 15 }}
      defaultWidth={{ w: 340 }}
      defaultTransparency={100}
    >
      <div class="py-3 px-5 max-h-200 overflow-y-auto">
        <div class="bg-base-200/40 rounded-xl">
          <ul class="timeline timeline-vertical ml-[-200px]">
            <li>
              <div class="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="text-poe-quest h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="timeline-end timeline-box">Start</div>
              <hr class="bg-poe-quest" />
            </li>

            <For each={townOrder}>
              {(townCode, i) => (
                <li>
                  <hr
                    classList={{
                      "bg-poe-quest": tracker.progress >= i(),
                    }}
                  />
                  <div class="timeline-start">
                    <div class="flex flex-col gap-1 text-base-content/40">
                      <button
                        class="hover:text-base-content"
                        onClick={() => moveTownUp(i())}
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
                        onClick={() => moveTownDown(i())}
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
                  </div>
                  <div class="timeline-middle" onClick={() => setProgress(i())}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="h-5 w-5"
                      classList={{
                        "text-poe-quest": tracker.progress >= i(),
                      }}
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div class="timeline-end timeline-box">
                    {i()}: {towns[townCode]} - {townCode}
                  </div>
                  <hr
                    classList={{
                      "bg-poe-quest": tracker.progress >= i(),
                    }}
                  />
                </li>
              )}
            </For>

            <li>
              <hr />
              <div class="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="timeline-end timeline-box">End</div>
            </li>
          </ul>
        </div>
      </div>
    </BaseWidget>
  );
}

export default TimelineWidget;
