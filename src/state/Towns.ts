import { createStore, produce, reconcile } from "solid-js/store";

const [towns, setTowns] = createStore<Record<string, string>>({
  G1_town: "Clearfell Encampment",
  G1_2: "Clearfell",
  G1_1: "The Riverbank",
  G1_4: "The Grelwood",
  G1_7: "Cemetery of the Eternals",
  G1_9: "Tomb of the Consort",
  G1_8: "Mausoleum of the Praetor",
  G1_11: "Hunting Grounds",
  G1_13_1: "Ogham Farmlands",
  G1_12: "Freythorn",
  G1_13_2: "Ogham Village",
  G1_14: "The Manor Ramparts",
  G1_15: "Ogham Manor",
  G2_1: "Vastiri Outskirts",
  G2_town: "The Ardura Caravan",
  G2_3a: "The Halani Gates",
  G2_10_1: "Mawdun Quarry",
  G2_10_2: "Mawdun Mine",
  G2_2: "Traitor's Passage",
  G2_3: "The Halani Gates",
  G2_5_1: "Mastodon Badlands",
  G2_5_2: "The Bone Pits",
  G2_4_1: "Keth",
  G2_4_2: "The Lost City",
  G2_4_3: "Buried Shrines",
  G2_6: "Valley of the Titans",
  G2_7: "The Titan Grotto",
  G2_8: "Deshar",
  G2_9_1: "Path of Mourning",
  G2_9_2: "The Spires of Deshar",
  G2_12: "Dreadnought",
  G3_1: "Sandswept Marsh",
  G3_2_1: "Infested Barrens",
  G3_town: "Ziggurat Encampment",
  G3_3: "Jungle Ruins",
  G3_4: "The Venom Crypts",
  G3_6_1: "Jiquani's Machinarium",
  G3_6_2: "Jiquani's Sanctum",
  G1_6: "The Grim Tangle",
  ExpeditionSubArea_Kalguur_Act1: "Lost Catacombs",
  ExpeditionSubArea_Kalguur_Act2: "Skull of the Titan",
  G3_7: "The Azak Bog",
  G3_2_2: "The Matlan Waterways",
  ExpeditionSubArea_Kalguur_Act3: "Mystic Refuge",
  G3_8: "The Drowned City",
  G3_9: "The Molten Vault",
  G3_11: "Apex of Filth",
  G3_12: "Temple of Kopec",
  G3_14: "Utzaal",
  G2_13: "Trial of the Sekhemas",
  Sanctum_1_Foyer_1: "Trial of the Sekhemas",
  G3_10_Airlock: "The Temple of Chaos",
  G3_10: "The Trial of Chaos",
  G3_16: "Aggorat",
  G3_17: "The Black Chambers",
  G4_town: "Kingsmarch",
  G4_1_1: "Isle of Kin",
  G4_1_2: "Volcanic Warrens",
  G4_2_1: "Kedge Bay",
  G4_2_2: "Journey's End",
  HideoutCanal: "Act 4",
  G4_3_1: "Whakapanu Island",
  G4_3_2: "Singing Caverns",
  G4_7: "Shrike Island",
  G4_5_1: "Abandoned Prison",
  G4_5_2: "Solitary Confinement",
  G4_4_1: "Eye of Hinekora",
  G4_4_2: "Halls of the Dead",
  G4_4_3: "Trial of the Ancestors",
  G4_8a: "Arastas",
  G4_8b: "Arastas",
  G1_3: "Mud Burrow",
  G4_10: "The Excavation",
  G4_11_1b: "Ngakanu",
  G4_11_2: "Heart of the Tribe",
  P1_Town: "The Refuge",
  P1_1: "Scorched Farmlands",
  P1_2: "Stones of Serle",
  P1_3: "The Blackwood",
  P1_4: "Holten",
  P1_5: "Wolvenhold",
  P1_6: "Holten Estate",
  P2_Town: "The Khari Bazaar",
  P3_Town: "The Glade",
  P3_1: "Ashen Forest",
  P3_2: "Kriar Village",
  P3_3: "Glacial Tarn",
  P3_4: "Howling Caves",
  G4_13: "Plunder's Point",
  P3_5: "Kriar Peaks",
  P3_6: "Etched Ravine",
  P3_7: "The Cuachic Vault",
  P2_1: "The Khari Crossing",
  P2_2: "Pools of Khatal",
  P2_3: "Sel Khari Sanctuary ",
  P2_5: "The Galai Gates",
  P2_6: "Qimah",
  P2_7: "Qimah Reservoir",
  G_Endgame_Town: "The Ziggurat Refuge",
  G1_5: "The Red Vale",
  G3_5: "Chimeral Wetlands",
});

const [townOrder, setTownOrder] = createStore([
  "G1_1",
  "G1_town",
  "G1_2",
  "G1_4",
  "G1_5",
  "G1_town",
  "G1_4",
  "G1_6",
  "G1_7",
  "G1_9",
  "G1_8",
  "G1_11",
  "G1_13_1",
  "G1_13_2",
  "G1_14",
  "G1_15",

  "G2_1",
  "G2_town",
  "G2_3a",
  "G2_10_1",
  "G2_10_2",
  "G2_2",
  "G2_3",
  "G2_5_1",
  "G2_5_2",
  "G2_4_1",
  "G2_4_2",
  "G2_4_3",
  "G2_6",
  "G2_7",
  "G2_8",
  "G2_9_1",
  "G2_9_2",
  "G2_12",
  "G2_town",

  "G3_1",
  "G3_town",
  "G3_3",
  "G3_2_1",
  "G3_5",
  "G3_6_1",
  "G3_6_2",
  "G3_3",
  "G3_2_2",
  "G3_8",
  "G3_11",
  "G3_12",
  "G3_14",
  "G3_16",
  "G3_17",
  "G3_town",

  "G4_town",
  "G4_1_1",
  "G4_1_2",

  "G4_2_1",
  "G4_2_2",
  "G4_town",
  "G4_2_2",

  "G4_3_1",
  "G4_3_2",

  "G4_7",

  "G4_5_1",
  "G4_5_2",

  "G4_4_1",
  "G4_4_2",
  "G4_4_3",

  "G4_8b",
  "G4_10",

  "G4_11_1b",
  "G4_11_2",
  "G4_town",

  "P1_Town",
  "P1_1",
  "P1_2",
  "P1_3",
  "P1_4",
  "P1_5",
  "P1_6",
  "P2_Town",
  "P3_Town",
  "P3_1",
  "P3_2",
  "P3_3",
  "P3_4",
  "G4_13",
  "P3_5",
  "P3_6",
  "P3_7",
  "P2_1",
  "P2_2",
  "P2_3",
  "P2_5",
  "P2_6",
  "P2_7",
  "G_Endgame_Town",
]);

const addTownName = (id: string, name: string) => {
  setTowns(id, name);
};

const saveTowns = () => {
  localStorage.setItem("towns", JSON.stringify(towns));
};

const loadTowns = () => {
  const t = localStorage.getItem("towns");
  if (t) setTowns(reconcile(JSON.parse(t)));
};

const moveTownDown = (index: number) => {
  if (index < townOrder.length - 1) {
    setTownOrder(
      produce((s) => {
        [s[index + 1], s[index]] = [s[index], s[index + 1]];
      }),
    );
  }
};

const moveTownUp = (index: number) => {
  if (index > 0) {
    setTownOrder(
      produce((s) => {
        [s[index - 1], s[index]] = [s[index], s[index - 1]];
      }),
    );
  }
};

export {
  towns,
  addTownName,
  saveTowns,
  loadTowns,
  townOrder,
  moveTownDown,
  moveTownUp,
};
