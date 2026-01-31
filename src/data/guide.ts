export const actGuides: Record<
  string,
  { prev?: string; preq?: string[]; tasks: string[] }[]
> = {
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
      tasks: [
        "Summon Asala",
        "<span class='text-info'>Directions: Follow the Wall</span>",
        "Defeat <span class='text-poe-unique font-semibold'>Jamanra, the Risen King</span>",
        "Go downstairs",
        "Portal to Town",
      ],
    },
  ],
};
