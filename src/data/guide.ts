export const actGuides: Record<string, { preq: string[]; tasks: string[] }[]> =
  {
    G1_1: [
      {
        preq: [],
        tasks: [
          "<span class='text-info'>Directions: Follow the river upstream</span>",
          "Kill <span class='text-poe-unique font-semibold'>The Bloated Miller</span>",
          "Speak to Renly",
          "Cut the Uncut Skill Gem",
          "Enter Clearfell",
        ],
      },
    ],
    G1_2: [
      {
        preq: [],
        tasks: [
          "Take the Uncut Skill Gem from the Mysterious Campsite (optional)",
          "Kill <span class='text-poe-unique font-semibold'>Beira of the Rotten Pack</span>",
          "Find the entrance to The Grelwood",
        ],
      },
    ],
    G1_3: [
      {
        preq: [],
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
        preq: [],
        tasks: [
          "<span class='text-info'>The four points of interest are arranged in a diamond shape</span>",
          "Find the waypoint near the Tree of Souls or The Grim Tangle",
          "Find the entrance to The Red Vale",
        ],
      },
    ],
    G1_5: [
      {
        preq: [],
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
        preq: [],
        tasks: ["Light up the Waypoint", "Go back to The Grim Tangle"],
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
        preq: [],
        tasks: [
          "Find Tomb of the Consort and Defeat <span class='text-poe-unique font-semibold'>Asinia, the Praetor's Consort</span>",
          "Find Mausoleum of the Praetor and Defeat <span class='text-poe-unique font-semibold'>Draven, the Eternal Praetor</span>",
        ],
      },
    ],
    G1_8: [
      {
        preq: [],
        tasks: [
          "Defeat <span class='text-poe-unique font-semibold'>Draven, the Eternal Praetor</span>",
          "Return to the Cemetery of the Eternals",
        ],
      },
    ],
    G1_9: [
      {
        preq: [],
        tasks: [
          "Defeat <span class='text-poe-unique font-semibold'>Asinia, the Praetor's Consort</span>",
          "Return to the Cemetery of the Eternals",
        ],
      },
    ],
    G1_11: [
      {
        preq: [],
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
        preq: [],
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
        preq: [],
        tasks: [
          "Find <span class='text-poe-quest'>Una's Lute</span>",
          "Find the entrance to the Ogham Village",
        ],
      },
    ],
    G1_13_2: [
      {
        preq: [],
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
        preq: [],
        tasks: [
          "<span class='text-info'>Directions: The zone has a U-shape</span>",
          "Find the entrance to Ogham Manor",
        ],
      },
    ],
    G1_15: [
      {
        preq: [],
        tasks: [
          "<span class='text-info'>Directions: Go Up-Right</span>",
          "Kill <span class='text-poe-unique font-semibold'>Candlemass, The Living Rite</span>",
          "<span class='text-info'>Directions: Go Down-Right</span>",
          "Find the entrance to Level 2",
          "<span class='text-info'>Directions: Head in the opposite direction of your spawn point</span>",
          "Find the entrance to Level 3",
          "<span class='text-info'>Directions: Go Up-Right</span>",
          "Take the Elevator",
          "Defeat <span class='text-poe-unique font-semibold'>Count Geonor</span>",
          "Portal to Town",
          "Speak to Una, Finn, Leitis and The Hooded One",
        ],
      },
    ],
  };
