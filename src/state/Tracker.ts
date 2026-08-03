import { createStore, produce, reconcile } from "solid-js/store";
import { townOrder } from "./Towns";

interface Tracker {
  zone: string;
  zoneLevel: number;
  prevZone: string;
  progress: number;
  history: string[];
  flags: Record<string, Record<string, boolean>>;
}

const [tracker, setTracker] = createStore<Tracker>({
  zone: "",
  zoneLevel: 0,
  prevZone: "",
  progress: 0,
  history: [],
  flags: {},
});

const updateProgress = (index: number, zone: string) => {
  const i = index + 1;
  const j = index + 2;

  if (townOrder[i] == zone) {
    return i;
  }

  if (townOrder[j] == zone) {
    return j;
  }

  return index;
};

const setProgress = (index: number) => {
  setTracker(produce((s) => (s.progress = index)));
};

const setZone = (zone: string) => {
  setTracker(
    produce((s) => {
      s.prevZone = s.zone;
      s.zone = zone;
      s.history = [zone, ...s.history];
      s.progress = updateProgress(s.progress, zone);
    }),
  );
};

const setZoneLevel = (level: number) => {
  setTracker("zoneLevel", level);
};

const setFlag = (quote: string) => {
  setTracker("flags", tracker.zone, {});
  setTracker("flags", tracker.zone, quote, true);
};

const saveTracker = () => {
  localStorage.setItem("tracker", JSON.stringify(tracker));
};

const loadTracker = () => {
  const t = localStorage.getItem("tracker");
  if (t) setTracker(reconcile(JSON.parse(t)));
};

export {
  tracker,
  setZone,
  setZoneLevel,
  setFlag,
  setProgress,
  saveTracker,
  loadTracker,
};
