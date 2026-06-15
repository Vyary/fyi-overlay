import { createStore, produce, reconcile } from "solid-js/store";

interface Tracker {
  zone: string;
  zoneLevel: number;
  prevZone: string;
  history: string[];
  flags: Record<string, Record<string, boolean>>;
}

const [tracker, setTracker] = createStore<Tracker>({
  zone: "G1_2",
  zoneLevel: 0,
  prevZone: "",
  history: [],
  flags: {},
});

const setZone = (zone: string) => {
  setTracker(
    produce((s) => {
      s.prevZone = s.zone;
      s.zone = zone;
      s.history = [zone, ...s.history];
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

export { tracker, setZone, setZoneLevel, setFlag, saveTracker, loadTracker };
