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
      prev: "G1_1",
      tasks: ["Speak to Renly", "Cut the Uncut Skill Gem", "Enter Clearfell"],
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
      prev: "G1_12",
      tasks: [
        "Travel or Find Ogham Farmlands",
        "Find <span class='text-poe-quest'>Una's Lute</span>",
        "Find the entrance to the Ogham Village",
      ],
    },
    {
      prev: "G1_15",
      tasks: ["Speak to Una, Finn, Leitis and The Hooded One"],
    },
  ],
  G1_2: [
    {
      tasks: [
        "Take the Uncut Skill Gem from the Mysterious Campsite (optional)",
        "Kill <span class='text-poe-unique font-semibold'>Beira of the Rotten Pack</span>",
        "Find the entrance to The Grelwood",
      ],
    },
  ],
  G1_3: [
    {
      tasks: [
        "Kill <span class='text-poe-unique font-semibold'>The Devourer</span> (optional)",
      ],
    },
  ],
  G1_4: [
    {
      preq: ["G1_5", "G1_town"],
      tasks: [
        "Break the Runic Seals on the Tree of Souls",
        "Travel to Town",
        "Speak to Una",
        "Travel to or Find The Grim Tangle",
      ],
    },
    {
      tasks: [
        "<span class='text-info'>The four points of interest are arranged in a diamond shape</span>",
        "Find the waypoint near the Tree of Souls or The Grim Tangle",
        "Find the entrance to The Red Vale",
      ],
    },
  ],
  G1_5: [
    {
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
      tasks: [
        "Speak to Una",
        "Use Respawn at Checkpoint to skip animation (optional)",
        "<span class='text-info'>Directions: Head in the opposite direction of your spawn point</span>",
        "Find the entrance to the Cemetery of the Eternals",
      ],
    },
    {
      tasks: [
        "Light up the Waypoint",
        "Go back to The Grelwood",
        "Find the entrance to The Red Vale",
      ],
    },
  ],
  G1_7: [
    {
      preq: ["G1_8", "G1_9"],
      tasks: [
        "Open the Memorial Gate",
        "Use Respawn at Checkpoint to skip animation (optional)",
        "Kill <span class='text-poe-unique font-semibold'>Lachlann of Endless Lament</span>",
        "Enter Hunting Grounds",
      ],
    },
    {
      tasks: [
        "Find Tomb of the Consort and Defeat <span class='text-poe-unique font-semibold'>Asinia, the Praetor's Consort</span>",
        "Find Mausoleum of the Praetor and Defeat <span class='text-poe-unique font-semibold'>Draven, the Eternal Praetor</span>",
      ],
    },
  ],
  G1_8: [
    {
      tasks: [
        "Defeat <span class='text-poe-unique font-semibold'>Draven, the Eternal Praetor</span>",
        "Return to the Cemetery of the Eternals",
      ],
    },
  ],
  G1_9: [
    {
      tasks: [
        "Defeat <span class='text-poe-unique font-semibold'>Asinia, the Praetor's Consort</span>",
        "Return to the Cemetery of the Eternals",
      ],
    },
  ],
  G1_11: [
    {
      tasks: [
        "<span class='text-info'>Directions: The points of interest are in the corners</span>",
        "Find Ogham Farmlands, activate the waypoint and go back",
        "Kill <span class='text-poe-unique font-semibold'>Crowbell</span>",
        "Find the entrance to Freythorn",
      ],
    },
  ],
  G1_12: [
    {
      tasks: [
        "Clear the 3 Rituals",
        "Defeat <span class='text-poe-unique font-semibold'>King of the Mists</span>",
        "Portal to Town",
        "Travel to Ogham Farmlands",
      ],
    },
  ],
  G1_13_1: [
    {
      preq: ["G1_12"],
      tasks: [
        "Find <span class='text-poe-quest'>Una's Lute</span>",
        "Find the entrance to the Ogham Village",
      ],
    },
    {
      tasks: ["Activate the waypoint", "Go back to Hunting Grounds"],
    },
  ],
  G1_13_2: [
    {
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
      tasks: [
        "<span class='text-info'>Directions: The zone has a U-shape</span>",
        "Find the entrance to Ogham Manor",
      ],
    },
  ],
  G1_15: [
    {
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
      prev: "G2_9_2",
      tasks: [
        "Speak with Shambrin",
        "Use the Desert Map and travel to The Dreadnought",
      ],
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
      prev: "G2_4_3",
      tasks: ["Use the Desert Map and travel to Valley of the Titans"],
    },
    {
      prev: "G2_5_2",
      zone: "The Ardura Caravan",
      tasks: ["Use the Desert Map and travel to Keth"],
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
        "Speak with Sekhema Asala",
        "Portal to Town",
        "Use the Desert Map and travel to Mawdun Quarry",
      ],
    },
  ],
  G2_3a: [
    {
      tasks: [
        "Speak with Sekhema Asala",
        "Portal to Town",
        "Use the Desert Map and travel to Mawdun Quarry",
      ],
    },
  ],
  G2_10_1: [
    {
      tasks: ["Find the entrance to the Mawdun Mine"],
    },
  ],
  G2_10_2: [
    {
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
        "Speak Sekhema Asala",
        "Use the Desert Map and travel to Mastodon Badlands",
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
        "Find the entrace to Path of Mourning",
      ],
    },
  ],
  G2_9_1: [
    {
      zone: "Path of Mourning",
      tasks: ["Find the entrace to The Spires of Deshar"],
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
      tasks: ["Find the entrace to the Dreadnought Vanguard"],
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
        "Find the entrace to The Venom Crypts",
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
      prev: "G4_11_2",
      tasks: ["Speak with The Hooded One"],
    },
    {
      prev: "G4_11_1b",
      tasks: ["Return to Ngakanu"],
    },
    {
      prev: "G4_10",
      tasks: ["Return to The Excavation"],
    },
    {
      prev: "G4_8b",
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
      tasks: ["Speak with Navali", "Return to Ship", "Set Sail to Arastas"],
    },
  ],
  G4_8b: [
    {
      zone: "Arastas",
      tasks: [
        "Speak with Missionary Lorandis",
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
      ],
    },
  ],
};
