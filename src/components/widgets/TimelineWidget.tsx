import { For } from "solid-js";
import { BaseWidget } from "./BaseWidget";
import { moveTownDown, moveTownUp, townOrder, towns } from "../../state/Towns";
import { passthrough } from "../../state/Passthrough";

function TimelineWidget() {
  return (
    <BaseWidget
      name="townTimeline"
      show={!passthrough()}
      defaultPos={{ x: 0, y: 0 }}
      defaultWidth={{ w: 200 }}
      defaultTransparency={100}
    >
      <div class="bg-base-200/50">
        <ul class="timeline timeline-vertical ml-[-200px]">
          <li>
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
            <div class="timeline-end timeline-box">Start</div>
            <hr />
          </li>

          <For each={townOrder}>
            {(townCode, i) => (
              <li>
                <hr />
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
                <div class="timeline-end timeline-box">
                  {towns[townCode]} - {townCode}
                </div>
                <hr />
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
    </BaseWidget>
  );
}

export default TimelineWidget;
