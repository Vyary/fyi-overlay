export interface Guide {
  prev?: string;
  preq?: string[];
  zone?: string;
  tasks: string[];
}

export const actGuides: Record<string, Guide[]> = {
  G1_1: [
    {
      tasks: [
        "<span class='text-info'>Directions: Follow the river upstream</span>",
        "Kill <span class='text-poe-unique font-semibold'>The Bloated Miller</span>",
        "Enter Clearfell Encampment",
        "Speak to Renly",
        "Cut the Uncut Skill Gem",
        "Enter Clearfell",
      ],
    },
  ],
  G1_town: [
    {
      prev: "G1_15",
      tasks: ["Speak to Una, Finn, Leitis and The Hooded One"],
    },
    {
      prev: "G1_14",
      tasks: ["Return to The Manor Ramparts"],
    },
    {
      prev: "G1_13_2",
      tasks: ["Return to Ogham Village"],
    },
    {
      prev: "G1_13_1",
      tasks: ["Return to Ogham Farmlands"],
    },
    {
      prev: "G1_12",
      tasks: ["Travel or Find Ogham Farmlands"],
    },
    {
      preq: ["G1_12"],
      tasks: ["Find the entrance to Ogham Farmlands"],
    },
    {
      prev: "G1_11",
      tasks: ["Return to Hunting Grounds"],
    },
    {
      prev: "G1_6",
      tasks: ["Return to The Grim Tangle"],
    },
    {
      prev: "G1_5",
      tasks: ["Speak to Renly", "Travel to The Grelwood"],
    },
    {
      prev: "G1_4",
      preq: ["G1_5"],
      tasks: ["Speak to Una", "Travel to or Find The Grim Tangle"],
    },
    {
      prev: "G1_4",
      tasks: ["Return to The Grelwood"],
    },
    {
      prev: "G1_2",
      tasks: ["Return to Clearfell"],
    },
    {
      prev: "G1_1",
      tasks: ["Speak to Renly", "Cut the Uncut Skill Gem", "Enter Clearfell"],
    },
  ],
  G1_2: [
    {
      zone: "Clearfell",
      tasks: [
        "Take the Uncut Skill Gem from the Mysterious Campsite (optional)",
        "Kill <span class='text-poe-unique font-semibold'>Beira of the Rotten Pack</span>",
        "Find the entrance to The Grelwood",
      ],
    },
  ],
  G1_3: [
    {
      zone: "Mud Burrow",
      tasks: [
        "Kill <span class='text-poe-unique font-semibold'>The Devourer</span> (optional)",
      ],
    },
  ],
  G1_4: [
    {
      preq: ["G1_5", "G1_town"],
      zone: "The Grelwood",
      tasks: [
        "Break the Runic Seals on the Tree of Souls",
        "Travel to Town",
        "Speak to Una",
        "Travel to or Find The Grim Tangle",
      ],
    },
    {
      zone: "The Grelwood",
      tasks: [
        "<span class='text-info'>The four points of interest are arranged in a diamond shape</span>",
        "Find the waypoint near the Tree of Souls or The Grim Tangle",
        "Find the entrance to The Red Vale",
      ],
    },
  ],
  G1_5: [
    {
      zone: "The Red Vale",
      tasks: [
        "Complete all 3 Obelisk of Rust",
        "Portal to Town",
        "Speak to Renly",
        "Travel to The Grelwood or The Grim Tangle",
      ],
    },
  ],
  G1_6: [
    {
      preq: ["G1_5"],
      zone: "The Grim Tangle",
      tasks: [
        "Speak to Una",
        "Use Respawn at Checkpoint to skip animation (optional)",
        "<span class='text-info'>Directions: Head in the opposite direction of your spawn point</span>",
        "Find the entrance to the Cemetery of the Eternals",
      ],
    },
    {
      zone: "The Grim Tangle",
      tasks: [
        "Light up the Waypoint",
        "Go back to The Grelwood",
        "Find the entrance to The Red Vale",
      ],
    },
  ],
  G1_7: [
    {
      prev: "G1_11",
      zone: "Cemetery of the Eternals",
      tasks: ["Enter Hunting Grounds"],
    },
    {
      preq: ["G1_8", "G1_9"],
      zone: "Cemetery of the Eternals",
      tasks: [
        "Open the Memorial Gate",
        "Use Respawn at Checkpoint to skip animation (optional)",
        "Kill <span class='text-poe-unique font-semibold'>Lachlann of Endless Lament</span>",
        "Enter Hunting Grounds",
      ],
    },
    {
      zone: "Cemetery of the Eternals",
      tasks: [
        "Find Tomb of the Consort and Defeat <span class='text-poe-unique font-semibold'>Asinia, the Praetor's Consort</span>",
        "Find Mausoleum of the Praetor and Defeat <span class='text-poe-unique font-semibold'>Draven, the Eternal Praetor</span>",
      ],
    },
  ],
  G1_8: [
    {
      zone: "Mausoleum of the Praetor",
      tasks: [
        "Defeat <span class='text-poe-unique font-semibold'>Draven, the Eternal Praetor</span>",
        "Return to the Cemetery of the Eternals",
      ],
    },
  ],
  G1_9: [
    {
      zone: "Tomb of the Consort",
      tasks: [
        "Defeat <span class='text-poe-unique font-semibold'>Asinia, the Praetor's Consort</span>",
        "Return to the Cemetery of the Eternals",
      ],
    },
  ],
  G1_11: [
    {
      preq: ["G1_12, G1_13_1"],
      zone: "Hunting Grounds",
      tasks: ["Travel to Ogham Farmlands"],
    },
    {
      prev: "G1_12",
      zone: "Hunting Grounds",
      tasks: [
        "<span class='text-info'>Directions: The points of interest are in the corners</span>",
        "Kill <span class='text-poe-unique font-semibold'>Crowbell</span>",
        "Find the entrance to Ogham Farmlands",
      ],
    },
    {
      prev: "G1_13_1",
      preq: ["G1_12"],
      zone: "Hunting Grounds",
      tasks: [
        "<span class='text-info'>Directions: The points of interest are in the corners</span>",
        "Kill <span class='text-poe-unique font-semibold'>Crowbell</span>",
      ],
    },
    {
      prev: "G1_13_1",
      zone: "Hunting Grounds",
      tasks: [
        "<span class='text-info'>Directions: The points of interest are in the corners</span>",
        "Kill <span class='text-poe-unique font-semibold'>Crowbell</span>",
        "Find the entrance to Freythorn",
      ],
    },
    {
      zone: "Hunting Grounds",
      tasks: [
        "<span class='text-info'>Directions: The points of interest are in the corners</span>",
        "Kill <span class='text-poe-unique font-semibold'>Crowbell</span>",
        "Find Ogham Farmlands, activate the waypoint and go back",
        "Find the entrance to Freythorn",
      ],
    },
  ],
  G1_12: [
    {
      zone: "Freythorn",
      tasks: [
        "Clear the 3 Rituals",
        "Defeat <span class='text-poe-unique font-semibold'>King of the Mists</span>",
        "Portal to Town",
      ],
    },
  ],
  G1_13_1: [
    {
      preq: ["G1_12"],
      zone: "Ogham Farmlands",
      tasks: [
        "Find <span class='text-poe-quest'>Una's Lute</span>",
        "Find the entrance to the Ogham Village",
      ],
    },
    {
      zone: "Ogham Farmlands",
      tasks: ["Activate the waypoint", "Go back to Hunting Grounds"],
    },
  ],
  G1_13_2: [
    {
      zone: "Ogham Village",
      tasks: [
        "<span class='text-info'>Directions: Go Up-Left</span>",
        "Kill <span class='text-poe-unique font-semibold'>The Executioner</span>",
        "Pull the Leaver",
        "Enter The Manor Ramparts",
      ],
    },
  ],
  G1_14: [
    {
      zone: "The Manor Ramparts",
      tasks: [
        "<span class='text-info'>Directions: The zone has a U-shape</span>",
        "Find the entrance to Ogham Manor",
      ],
    },
  ],
  G1_15: [
    {
      zone: "Ogham Manor",
      tasks: [
        "<span class='text-info'>Directions: Go Up-Right</span>",
        "Kill <span class='text-poe-unique font-semibold'>Candlemass, The Living Rite</span>",
        "Find the entrance to Level 2",
        "Find the entrance to Level 3",
        "Take the Elevator",
        "Defeat <span class='text-poe-unique font-semibold'>Count Geonor</span>",
        "Portal to Town",
        "Speak to Una, Finn, Leitis and The Hooded One",
      ],
    },
  ],
  G2_1: [
    {
      zone: "Vastiri Outskirts",
      tasks: [
        "Kill <span class='text-poe-unique font-semibold'>The Rathbreaker</span>",
        "Portal to Town",
        "Speak with Zarka",
        "Enter The Ardura Caravan",
      ],
    },
  ],
  G2_town: [
    {
      prev: "G2_12_2",
      tasks: [
        "Exit the Caravan and Speak with The Hooded One",
        "Speak Sekhema Asala",
      ],
    },
    {
      prev: "G2_12_1",
      tasks: ["Return to The Dreadnought"],
    },
    {
      prev: "G2_10_1",
      tasks: ["Return to Mawdun Quarry"],
    },
    {
      prev: "G2_9_2",
      tasks: [
        "Speak with Shambrin",
        "Use the Desert Map and travel to The Dreadnought",
      ],
    },
    {
      prev: "G2_9_1",
      tasks: ["Return to Path of Mourning"],
    },
    {
      prev: "G2_8",
      tasks: ["Return to Deshar"],
    },
    {
      prev: "G2_7",
      tasks: [
        "Speak with Zarka",
        "Speak Sekhema Asala",
        "Use the Desert Map and travel to Traitor's Passage",
        "Use the Horn of the Vastiri",
        "Speak with Sekhema Asala",
        "Use the Desert Map and travel to Deshar",
      ],
    },
    {
      prev: "G2_6",
      tasks: ["Return to Valley of the Titans"],
    },
    {
      prev: "G2_4_3",
      tasks: ["Use the Desert Map and travel to Valley of the Titans"],
    },
    {
      prev: "G2_4_2",
      tasks: ["Return to The Lost City"],
    },
    {
      prev: "G2_4_1",
      tasks: ["Return to Keth"],
    },
    {
      prev: "G2_5_2",
      tasks: ["Use the Desert Map and travel to Keth"],
    },
    {
      prev: "G2_5_1",
      tasks: ["Return to Mastodon Badlands"],
    },
    {
      prev: "G2_3",
      tasks: [
        "Speak Sekhema Asala",
        "Use the Desert Map and travel to Mastodon Badlands",
      ],
    },
    {
      prev: "G2_10_2",
      tasks: [
        "Speak with Risu and Sekhema Asala",
        "Use the Desert Map and travel to Traitor's Passage",
      ],
    },
    {
      prev: "G2_3a",
      tasks: ["Use the Desert Map and travel to Mawdun Quarry"],
    },
    {
      prev: "G2_1",
      tasks: [
        "Speak with Sekhema Asala",
        "Use the Desert Map and travel to Halani Gates",
      ],
    },
  ],
  G2_3a: [
    {
      zone: "The Halani Gates",
      tasks: ["Speak with Sekhema Asala", "Portal to Town"],
    },
  ],
  G2_10_1: [
    {
      zone: "Mawdun Quarry",
      tasks: ["Find the entrance to the Mawdun Mine"],
    },
  ],
  G2_10_2: [
    {
      zone: "Mawdun Mine",
      tasks: [
        "<span class='text-info'>Directions: Boss is located on top-right of the map</span>",
        "Kill <span class='text-poe-unique font-semibold'>Rudja, the Dread Engineer</span>",
        "Speak with Risu (cage on top left)",
        "Portal to Town",
      ],
    },
  ],
  G2_2: [
    {
      zone: "Traitor's Passage",
      tasks: [
        "Find Forgotten Prison of the Traitor and Break the Ancient and Runic Seals",
        "Kill <span class='text-poe-unique font-semibold'>Balbala, the Traitor</span>",
        "Find the entrance to The Halani Gates",
      ],
    },
  ],
  G2_3: [
    {
      zone: "The Halani Gates",
      tasks: [
        "Summon Asala",
        "<span class='text-info'>Directions: Follow the Wall</span>",
        "Defeat <span class='text-poe-unique font-semibold'>Jamanra, the Risen King</span>",
        "Go downstairs",
        "Portal to Town",
      ],
    },
  ],
  G2_5_1: [
    {
      zone: "Mastodon Badlands",
      tasks: ["Find the entrance to The Bone Pits"],
    },
  ],
  G2_5_2: [
    {
      zone: "The Bone Pits",
      tasks: [
        "Find the <span class='text-poe-quest'>Sun Clan Relic</span>",
        "Kill <span class='text-poe-unique font-semibold'>Iktab and Ekbab</span>",
        "Portal to Town",
        "Use the Desert Map and travel to Keth",
      ],
    },
  ],
  G2_4_1: [
    {
      zone: "Keth",
      tasks: [
        "Kill <span class='text-poe-unique font-semibold'>Kabala, Constrictor Queen</span>",
        "Find the <span class='text-poe-quest'>Kabala Clan Relic</span>",
        "Find the entrance to The Lost City",
      ],
    },
  ],
  G2_4_2: [
    {
      zone: "The Lost City",
      tasks: ["Find the entrance to the Buried Shrines"],
    },
  ],
  G2_4_3: [
    {
      zone: "Buried Shrines",
      tasks: [
        "Find the entrance to The Heart of Keth",
        "Kill <span class='text-poe-unique font-semibold'>Azarian, the Forsaken Son</span>",
        "Speak to The Water Goddess",
        "Take the Everburning Cinders",
        "Ignite the Goddess",
        "Open a portal",
        "Take <span class='text-poe-quest'>The Essence of Water</span>",
        "Portal to Town",
      ],
    },
  ],
  G2_6: [
    {
      zone: "Valley of the Titans",
      tasks: [
        "Find and Activate all Ancient Seals",
        "Find the Offering to Amrit and Insert the Relics",
        "Find the Clasped Entry",
        "Enter The Titan Grotto",
      ],
    },
  ],
  G2_7: [
    {
      zone: "The Titan Grotto",
      tasks: [
        "Kill <span class='text-poe-unique font-semibold'>Zalmarath, the Colossus</span>",
        "Portal to Town",
      ],
    },
  ],
  G2_8: [
    {
      zone: "Deshar",
      tasks: [
        "Find the <span class='text-poe-quest'>Fallen Dekhara</span>",
        "Find the entrance to Path of Mourning",
      ],
    },
  ],
  G2_9_1: [
    {
      zone: "Path of Mourning",
      tasks: ["Find the entrance to The Spires of Deshar"],
    },
  ],
  G2_9_2: [
    {
      zone: "The Spires of Deshar",
      tasks: [
        "Find and Activate the Sisters of Garukhan",
        "Kill <span class='text-poe-unique font-semibold'>Tor Gul, the Defiler</span>",
        "Portal to Town",
      ],
    },
  ],
  G2_12_1: [
    {
      zone: "The Dreadnought",
      tasks: ["Find the entrance to the Dreadnought Vanguard"],
    },
  ],
  G2_12_2: [
    {
      zone: "Dreadnought Vanguard",
      tasks: [
        "Kill <span class='text-poe-unique font-semibold'>Jamanra, the Risen King</span>",
        "Speak Sekhema Asala",
        "Portal to Town",
      ],
    },
  ],
  G3_1: [
    {
      zone: "Sandswept Marsh",
      tasks: ["Find the entrance to Ziggurat Encampment"],
    },
  ],
  G3_town: [
    {
      preq: ["G3_17"],
      tasks: ["Speak with Doryani", "Speak with Alva and Travel to Kingsmarch"],
    },
    {
      preq: ["G3_12"],
      tasks: [
        "Speak with Servi",
        "Use the Gateway",
        "<span class='text-info'>Directions: Go downstairs</span>",
        "Enter the Utzaal",
      ],
    },
    {
      preq: ["G3_11"],
      tasks: [
        "<span class='text-info'>Directions: Go downstairs</span>",
        "Use the <span class='text-poe-quest'>Temple Door Idol</span>",
        "Enter the Temple of Kopec",
      ],
    },
    {
      preq: ["G3_2_2"],
      tasks: [
        "<span class='text-info'>Directions: Go downstairs</span>",
        "Speak with Alva",
        "Enter The Drowned City",
      ],
    },
    {
      preq: ["G3_6_2"],
      tasks: ["Travel to Infested Barrens"],
    },
    {
      prev: "G3_7",
      preq: ["G3_5"],
      tasks: ["Travel to Chimeral Wetlands"],
    },
    {
      prev: "G3_7",
      tasks: ["Travel to Infested Barrens"],
    },
    {
      tasks: ["Enter the Jungle Ruins"],
    },
  ],
  G3_3: [
    {
      preq: ["G3_4"],
      zone: "Jungle Ruins",
      tasks: ["Find the entrance to the Infested Barrens"],
    },
    {
      zone: "Jungle Ruins",
      tasks: [
        "Kill the <span class='text-poe-unique font-semibold'>Mighty Silverfist</span>",
        "Find the entrance to The Venom Crypts",
      ],
    },
  ],
  G3_4: [
    {
      zone: "The Venom Crypts",
      tasks: [
        "Find the <span class='text-poe-quest'>Corpse</span> in the Den of the Serpent Priestess",
        "Take the <span class='text-poe-quest'>Corpse-Snake Venom</span>",
        "Travel back to the Jungle Ruins",
      ],
    },
  ],
  G3_2_1: [
    {
      preq: ["G3_6_2"],
      zone: "Infested Barrens",
      tasks: [
        "Activate the Stone Altar using the <span class='text-poe-quest'>Large Soul Core</span>",
        "Enter The Matlan Waterways",
      ],
    },
    {
      preq: ["G3_7"],
      zone: "Infested Barrens",
      tasks: ["Find Chimeral Wetlands"],
    },
    {
      zone: "Infested Barrens",
      tasks: [
        "Find the Waypoint in the zone",
        "Find Chimeral Wetlands activate the Waypoint and go back",
        "Find the entrance to The Azak Bog",
      ],
    },
  ],
  G3_7: [
    {
      zone: "The Azak Bog",
      tasks: [
        "Kill the <span class='text-poe-unique font-semibold'>Ignagduk, the Bog Witch</span>",
        "Portal to Town",
      ],
    },
  ],
  G3_5: [
    {
      zone: "Chimeral Wetlands",
      tasks: [
        "Kill the <span class='text-poe-unique font-semibold'>Xyclucian, the Chimera</span>",
        "Enter Jiquani's Machinarium (left of the boss arena)",
      ],
    },
  ],
  G3_6_1: [
    {
      zone: "Jiquani's Machinarium",
      tasks: [
        "Find <span class='text-poe-quest'>Small Soul Core</span>",
        "Activate the Stone Altar",
        "Find 2 more <span class='text-poe-quest'>Small Soul Core</span>",
        "Kill the <span class='text-poe-unique font-semibold'>Blackjaw, the Remnant</span>",
        "Find the entrance to Jiquani's Sanctum",
      ],
    },
  ],
  G3_6_2: [
    {
      zone: "Jiquani's Sanctum",
      tasks: [
        "Find 2 <span class='text-poe-quest'>Medium Soul Cores</span> and Activate the 2 Generators",
        "Go back to the starting point and Activate the <span class='text-poe-quest'>Large Soul Core</span>",
        "Kill the <span class='text-poe-unique font-semibold'>Zicoatl, Warden of the Core</span>",
        "Take the <span class='text-poe-quest'>Large Soul Core</span>",
        "Use the Waypoint and go back to Infested Barrens",
      ],
    },
  ],
  G3_2_2: [
    {
      zone: "The Matlan Waterways",
      tasks: [
        "Keep forward until you reach Reservoir Mechanism and use the Canal Lever",
        "Portal to Town",
      ],
    },
  ],
  G3_8: [
    {
      zone: "The Drowned City",
      tasks: ["Find the Apex of Filth"],
    },
  ],
  G3_11: [
    {
      zone: "Apex of Filth",
      tasks: [
        "Find and Kill <span class='text-poe-unique font-semibold'>The Queen of Filth</span>",
        "Take the <span class='text-poe-quest'>Temple Door Idol</span>",
        "Portal to Town",
      ],
    },
  ],
  G3_12: [
    {
      zone: "Temple of Kopec",
      tasks: [
        "Find the Stairs to level 2",
        "Find the Stairs to level 3",
        "Kill <span class='text-poe-unique font-semibold'>Ketzuli, High Priest of the Sun</span>",
        "Speak with Alva",
        "Portal to Town",
      ],
    },
  ],
  G3_14: [
    {
      zone: "Utzaal",
      tasks: [
        "Kill <span class='text-poe-unique font-semibold'>Viper Napuatzi</span>",
        "Find the entrance to Aggorat",
      ],
    },
  ],
  G3_16: [
    {
      zone: "Aggorat",
      tasks: [
        "Find the <span class='text-poe-quest'>Sacrificial Heart</span>",
        "Find the <span class='text-poe-quest'>Sacrificial Dagger</span>",
        "Go back to Sacrificial Dais, Place and Stab the Sacrificial Heart",
        "Find the entrance to The Black Chambers",
      ],
    },
  ],
  G3_17: [
    {
      zone: "The Black Chambers",
      tasks: [
        "Defeat <span class='text-poe-unique font-semibold'>Doryani, Royal Thaumaturge</span>",
        "Portal to Town",
        "Speak with Doryani",
      ],
    },
  ],
  G4_town: [
    {
      prev: "P3_Town",
      tasks: ["Speak with The Hooded One"],
    },
    {
      prev: "P2_Town",
      tasks: ["Speak with The Hooded One"],
    },
    {
      prev: "P1_Town",
      tasks: ["Speak with The Hooded One"],
    },
    {
      prev: "G4_11_2",
      tasks: ["Speak with The Hooded One"],
    },
    {
      prev: "G4_11_1b",
      tasks: ["Return to Ngakanu"],
    },
    {
      prev: "G4_10",
      tasks: ["Set Sail to Ngakanu"],
    },
    {
      prev: "G4_8b",
      tasks: ["Return to Arastas"],
    },
    {
      prev: "G4_8a",
      tasks: ["Return to Arastas"],
    },
    {
      prev: "G4_4_3",
      tasks: ["Return to Trial of the Ancestors"],
    },
    {
      prev: "G4_4_2",
      tasks: ["Return to Halls of the Dead"],
    },
    {
      prev: "G4_4_1",
      tasks: ["Return to Eye of Hinekora"],
    },
    {
      prev: "G4_3_2",
      tasks: ["Return to Singing Caverns"],
    },
    {
      prev: "G4_3_1",
      tasks: ["Return to Whakapanu Island"],
    },
    {
      prev: "G4_5_2",
      tasks: ["Return to Solitary Confinement"],
    },
    {
      prev: "G4_5_1",
      tasks: ["Return to Abandoned Prison"],
    },
    {
      prev: "G4_7",
      tasks: ["Return to Shrike Island"],
    },
    {
      prev: "G4_2_2",
      tasks: ["Speak with Dannig", "Use the Waypoint to Journey's End"],
    },
    {
      prev: "G4_2_1",
      tasks: ["Return to Kedge Bay"],
    },
    {
      prev: "G4_1_2",
      tasks: ["Return to Volcanic Warrens"],
    },
    {
      prev: "G4_1_2",
      tasks: ["Return to Volcanic Warrens"],
    },
    {
      prev: "G4_1_1",
      tasks: ["Return to Isle of Kin"],
    },
    {
      prev: "G3_town",
      tasks: [
        "Speak with Doryani",
        "Speak with Alva",
        "Speak with Makoru",
        "Set Sail to Isle of Kin",
      ],
    },
  ],
  G4_1_1: [
    {
      prev: "G4_1_2",
      zone: "Isle of Kin",
      tasks: ["Set Sail to Kedge Bay"],
    },
    {
      zone: "Isle of Kin",
      tasks: [
        "Find and Kill <span class='text-poe-unique font-semibold'>The Blind Beast</span> (optional)",
        "Find the entrance to the Volcanic Warrens",
      ],
    },
  ],
  G4_1_2: [
    {
      zone: "Volcanic Warrens",
      tasks: [
        "Find and Kill <span class='text-poe-unique font-semibold'>Krutog, Lord of Kin</span>",
        "Be on the lookout for Matiki",
        "Speak with The Hooded One",
        "Return to Ship",
        "Set Sail to Kedge Bay",
      ],
    },
  ],
  G4_2_1: [
    {
      prev: "G4_2_2",
      zone: "Kedge Bay",
      tasks: ["Set Sail to Shrike Island"],
    },
    {
      zone: "Kedge Bay",
      tasks: ["Find the entrance to Journey's End"],
    },
  ],
  G4_2_2: [
    {
      prev: "G4_town",
      zone: "Journey's End",
      tasks: [
        "Speak with Freya Hartlin",
        "Click on Karui Totem",
        "Survive the Madness",
        "Return to Ship",
        "Set Sail to Shrike Island",
      ],
    },
    {
      zone: "Journey's End",
      tasks: [
        "Summon Tujen",
        "Speak with Tujen",
        "Find and Kill <span class='text-poe-unique font-semibold'>Captain Hartun</span>",
        "Portal to Town",
      ],
    },
  ],
  G4_7: [
    {
      zone: "Shrike Island",
      tasks: [
        "Find and Kill <span class='text-poe-unique font-semibold'>Scourge of the Skies</span>",
        "Be on the lookout for Matiki",
        "Return to Ship",
        "Set Sail to Abandoned Prison",
      ],
    },
  ],
  G4_5_1: [
    {
      prev: "G4_5_2",
      zone: "Abandoned Prison",
      tasks: ["Set Sail to Whakapanu Island"],
    },
    {
      zone: "Abandoned Prison",
      tasks: [
        "Find the <span class='text-poe-quest'>Chapel Key</span>",
        "Enter the Chapel",
        "Click on Goddess of Justice",
        "Find the entrance to the Solitary Confinement",
      ],
    },
  ],
  G4_5_2: [
    {
      zone: "Solitary Confinement",
      tasks: [
        "Find and Kill <span class='text-poe-unique font-semibold'>The Prisoner</span>",
        "Be on the lookout for Matiki",
        "Speak with The Hooded One",
        "Return to Ship",
        "Set Sail to Whakapanu Island",
      ],
    },
  ],
  G4_3_1: [
    {
      prev: "G4_3_2",
      zone: "Whakapanu Island",
      tasks: ["Set Sail to Eye of Hinekora"],
    },
    {
      zone: "Whakapanu Island",
      tasks: ["Find the entrance to the Singing Caverns"],
    },
  ],
  G4_3_2: [
    {
      zone: "Singing Caverns",
      tasks: [
        "Find and Kill <span class='text-poe-unique font-semibold'>Diamora, Song of Death</span>",
        "Be on the lookout for Matiki",
        "Return to Ship",
        "Set Sail to Eye of Hinekora",
      ],
    },
  ],
  G4_4_1: [
    {
      prev: "G4_4_3",
      zone: "Eye of Hinekora",
      tasks: ["Set Sail to Arastas"],
    },
    {
      zone: "Eye of Hinekora",
      tasks: [
        "Enter the Passageway",
        "Speak with Matiki",
        "Peer into the Well of Passing",
        "Go through the Trials",
        "Pay your respects",
        "Speak with Navali",
        "Find the entrance to Halls of the Dead",
      ],
    },
  ],
  G4_4_2: [
    {
      zone: "Halls of the Dead",
      tasks: [
        "Complete Tawhoa's Test",
        "Complete Tasalio's Test",
        "Complete Ngamahu's Test",
        "Defeat <span class='text-poe-unique font-semibold'>Yama The White</span>",
        "Enter the Trial of the Ancestors",
      ],
    },
  ],
  G4_4_3: [
    {
      zone: "Trial of the Ancestors",
      tasks: [
        "Speak with Navali",
        "Return to Ship",
        "Speak with Makoru",
        "Set Sail to Arastas",
      ],
    },
  ],
  G4_8a: [
    {
      zone: "Arastas",
      tasks: ["Speak with Makoru"],
    },
  ],
  G4_8b: [
    {
      zone: "Arastas",
      tasks: [
        "Speak with Missionary Lorandis and follow him",
        "Find and Kill <span class='text-poe-unique font-semibold'>Torvian, Hand of the Saviour</span>",
        "Enter The Excavation",
      ],
    },
  ],
  G4_10: [
    {
      zone: "The Excavation",
      tasks: [
        "Find and Kill <span class='text-poe-unique font-semibold'>Benedictus, First Herald of Utopia</span>",
        "Portal to Town",
        "Set Sail to Ngakanu",
      ],
    },
  ],
  G4_11_1b: [
    {
      zone: "Ngakanu",
      tasks: ["Find the entrance to the Heart of the Tribe"],
    },
  ],
  G4_11_2: [
    {
      zone: "Heart of the Tribe",
      tasks: [
        "Defeat <span class='text-poe-unique font-semibold'>Tavakai, the Fallen</span>",
        "Return to Kingsmarch",
      ],
    },
  ],
  P1_Town: [
    {
      preq: ["P1_6"],
      tasks: ["Speak with Renly", "Speak with The Hooded One"],
    },
    {
      tasks: ["Enter Scorched Farmlands"],
    },
  ],
  P1_1: [
    {
      preq: ["P1_2"],
      zone: "Scorched Farmlands",
      tasks: ["Find the entrance to The Blackwood"],
    },
    {
      zone: "Scorched Farmlands",
      tasks: [
        "Defeat <span class='text-poe-unique font-semibold'>Isolde of the White Shroud</span> and <span class='text-poe-unique font-semibold'>Heldra of the Black Pyre</span>",
        "Find the entrance to Stones of Serle",
      ],
    },
  ],
  P1_2: [
    {
      zone: "Stones of Serle",
      tasks: [
        "Activate all Magaliths",
        "Defeat <span class='text-poe-unique font-semibold'>Siora, Blade of the Mists</span>",
        "Go back to Scorched Farmlands",
      ],
    },
  ],
  P1_3: [
    {
      zone: "The Blackwood",
      tasks: ["Find the entrance to Holten"],
    },
  ],
  P1_4: [
    {
      preq: ["P1_6"],
      zone: "Holten",
      tasks: ["Find the entrance to Wolvenhold"],
    },
    {
      zone: "Holten",
      tasks: [
        "Find the entrance to Wolvenhold",
        "Find the entrance to Holten Estate",
      ],
    },
  ],
  P1_5: [
    {
      zone: "Wolvenhold",
      tasks: [
        "Defeat <span class='text-poe-unique font-semibold'>Oswin, The Dread Warden</span>",
      ],
    },
  ],
  P1_6: [
    {
      zone: "Holten Estate",
      tasks: [
        "Find the Stairs to level 2",
        "Find the Stairs to enter the courtyard",
        "Defeat <span class='text-poe-unique font-semibold'>Thane Wulfric</span> and <span class='text-poe-unique font-semibold'>Lady Elswyth</span>",
        "Portal to Town",
      ],
    },
  ],
  P2_Town: [
    {
      preq: ["P2_7"],
      tasks: ["Speak with Risu", "Speak with The Hooded One"],
    },
    {
      prev: "P2_3",
      tasks: ["Enter The Khari Crossing from Top-Left"],
    },
    {
      tasks: [
        "<span class='text-info'>Directions: Enter The Khari Crossing from Down-Right for Bonuses</span>",
        "<span class='text-info'>Directions: Enter The Khari Crossing from Down-Left for Pools of Khatal</span>",
      ],
    },
  ],
  P2_1: [
    {
      preq: ["P2_3"],
      zone: "The Khari Crossing",
      tasks: [
        "<span class='text-info'>Directions: Go streight from Top-Left exit from The Khari Bazaar</span>",
        "Find the entrance to The Galai Gates",
      ],
    },
    {
      zone: "The Khari Crossing",
      tasks: [
        "<span class='text-info'>Directions: Go Up-Right for Akthi and Anundr</span>",
        "Find and Defeat <span class='text-poe-unique font-semibold'>Akthi, the Final Sting</span> and <span class='text-poe-unique font-semibold'>Anundr, the Sandworm</span>",
        "<span class='text-info'>Directions: Go Up-Left for Skullmaw Stairway</span>",
        "Find the Skullmaw Stairway",
        "Take the <span class='text-poe-quest'>Molten One's Gift</span>",
        "Portal to Town",
        "Find the entrance to Pools of Khatal",
      ],
    },
  ],
  P2_2: [
    {
      zone: "Pools of Khatal",
      tasks: ["Find the entrance to Sel Khari Sanctuary"],
    },
  ],
  P2_3: [
    {
      zone: "Sel Khari Sanctuary",
      tasks: [
        "Defeat <span class='text-poe-unique font-semibold'>Elzarah, the Cobra Lord</span>",
        "Speak with Sekhema Asala",
        "Portal to Town",
      ],
    },
  ],
  P2_5: [
    {
      zone: "The Khari Crossing",
      tasks: [
        "Defeat <span class='text-poe-unique font-semibold'>Vornas, the Fell Flame</span>",
        "Enter Qimah",
      ],
    },
  ],
  P2_6: [
    {
      zone: "Qimah",
      tasks: [
        "Find the Seven Pillars and choose a Boon",
        "Summon and Speak with Jado",
        "Enter Qimah Reservoir",
      ],
    },
  ],
  P2_7: [
    {
      zone: "Qimah Reservoir",
      tasks: [
        "Defeat <span class='text-poe-unique font-semibold'>Azmadi, the Faridun Prince</span>",
        "Click on Grand Barya",
        "Speak with Jado",
        "Portal to Town",
      ],
    },
  ],
  P3_Town: [
    {
      prev: "P3_7",
      tasks: ["Travel to Kingsmarch"],
    },
    {
      prev: "P3_3",
      tasks: ["Return to Glacial Tarn"],
    },
    {
      prev: "P3_4",
      tasks: ["Speak with Hilda", "Travel to Glacial Tarn"],
    },
    {
      tasks: ["Enter Ashen Forest"],
    },
  ],
  P3_1: [
    {
      zone: "Ashen Forest",
      tasks: ["Find the entrance to Kriar Village"],
    },
  ],
  P3_2: [
    {
      zone: "Kriar Village",
      tasks: [
        "Find and Defeat <span class='text-poe-unique font-semibold'>Lythara, the Wayward Spear</span>",
        "Enter Glacial Tarn",
      ],
    },
  ],
  P3_3: [
    {
      preq: ["P3_4"],
      zone: "Glacial Tarn",
      tasks: [
        "Find and Defeat <span class='text-poe-unique font-semibold'>Rakkar, the Frozen Talon</span>",
        "Enter Kriar Peaks",
      ],
    },
    {
      zone: "Glacial Tarn",
      tasks: [
        "Find the entrance to Howling Caves",
        "Find and Defeat <span class='text-poe-unique font-semibold'>Rakkar, the Frozen Talon</span>",
        "Enter Kriar Peaks",
      ],
    },
  ],
  P3_4: [
    {
      zone: "Howling Caves",
      tasks: [
        "Find and Defeat <span class='text-poe-unique font-semibold'>The Abominable Yeti</span>",
        "Portal to Town",
      ],
    },
  ],
  P3_5: [
    {
      zone: "Kriar Peaks",
      tasks: [
        "Speak with Elder Madox for an unique item (optional)",
        "Find the entrance Etched Ravine",
      ],
    },
  ],
  P3_6: [
    {
      zone: "Etched Ravine",
      tasks: [
        "Find and Defeat <span class='text-poe-unique font-semibold'>Stormgore, the Guardian</span>",
        "Enter the Cuachic Vault",
      ],
    },
  ],
  P3_7: [
    {
      zone: "Cuachic Vault",
      tasks: [
        "Find and Defeat <span class='text-poe-unique font-semibold'>Zelina, Blood Priestess</span> and <span class='text-poe-unique font-semibold'>Zolin, Blood Priest</span>",
        "Summon and Speak with Doryani",
        "Portal to Town",
      ],
    },
  ],
};
