import { createStore, produce, reconcile } from "solid-js/store";

interface Tracker {
  zone: string;
  zoneLevel: number;
  prevZone: string;
  progressZone: string;
  history: string[];
  flags: Record<string, Record<string, boolean>>;
}

const [tracker, setTracker] = createStore<Tracker>({
  zone: "",
  zoneLevel: 0,
  prevZone: "",
  progressZone: "",
  history: [],
  flags: {},
});

const zoneCompare = (zone: string, progressZone: string) => {
  const pattern = /G(?<act>\d)_(?<level>\d+)_(?<sublevel>\d+)/;

  if (!progressZone) return zone;

  const m1 = zone.match(pattern)?.groups;
  const m2 = progressZone.match(pattern)?.groups;

  if (!m1 && !m2) return progressZone;

  const z1 = {
    act: parseInt(m1.act, 10),
    level: parseInt(m1.level, 10),
    sublevel: m1.sublevel ? parseInt(m1.sublevel, 10) : 0,
  };

  const z2 = {
    act: parseInt(m2.act, 10),
    level: parseInt(m2.level, 10),
    sublevel: m2.sublevel ? parseInt(m2.sublevel, 10) : 0,
  };

  console.log("zone: ", z1);
  console.log("progress: ", z2);

  if (z1.act !== z2.act) return z1.act > z2.act ? zone : progressZone;
  if (z1.level !== z2.level) return z1.level > z2.level ? zone : progressZone;
  if (z1.sublevel !== z2.sublevel)
    return z1.sublevel > z2.sublevel ? zone : progressZone;

  return progressZone;
};

const setZone = (zone: string) => {
  setTracker(
    produce((s) => {
      s.prevZone = s.zone;
      s.zone = zone;
      s.history = [zone, ...s.history];
      s.progressZone = zoneCompare(s.zone, s.progressZone);

      console.log("progress zone is now: ", s.progressZone);
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
