import { createMemo } from "solid-js";
import { guide, Guide } from "./Guide";
import { tracker } from "./Tracker";

const content = createMemo<Guide>(
  (prev) => {
    const found = guide[tracker.zone]?.find((z) => {
      const prevCheck = z.prev == tracker.prevZone;
      const preqCheck = z.preq?.every((zone) => tracker.history.includes(zone));

      if (prevCheck && preqCheck) return true;
      if (prevCheck && !z.preq) return true;
      if (!z.prev && preqCheck) return true;
      if (!z.prev && !z.preq) return true;

      return false;
    });

    if (!found) return prev;

    const pendingTasks = found.tasks.filter((task) => {
      const conditionMet = task.condition
        ? !!tracker.flags?.[tracker.zone]?.[task.condition]
        : false;
      const preqMet = task.condition
        ?.split(", ")
        .every((zone) => tracker.history.includes(zone));

      if (task.hide) {
        return !conditionMet && !preqMet;
      }

      if (task.show) {
        return conditionMet || preqMet;
      }

      return true;
    });

    return {
      ...found,
      tasks: pendingTasks,
    };
  },
  {
    prev: "",
    preq: [],
    tasks: [{ text: "Awaiting game data... Enter a new zone" }],
  },
);

export { content };
