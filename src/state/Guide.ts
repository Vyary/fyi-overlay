import { createStore, produce, reconcile } from "solid-js/store";

export interface Guide {
  prev?: string;
  preq?: string[];
  tasks: { text: string; show?: boolean; hide?: boolean; condition?: string }[];
}

const [guide, setGuide] = createStore<Record<string, Guide[]>>({
  G1_1: [
    {
      tasks: [
        {
          text: "Talk to the Wounded Man",
          hide: true,
          condition: "Reach... Clearfell... Find the Miller...",
        },
        {
          text: "<span class='text-info'>Directions: Follow the river upstream</span>",
          hide: true,
          condition: "Well done! Please come inside.",
        },
        {
          text: "Kill <span class='text-poe-unique font-semibold'>The Bloated Miller</span>",
          hide: true,
          condition: "Well done! Please come inside.",
        },
        {
          text: "Enter Clearfell Encampment",
        },
      ],
    },
  ],
  G1_town: [
    {
      prev: "G1_15",
      tasks: [
        {
          text: "Speak to Una, Finn, Leitis, Farrow and The Hooded One",
        },
      ],
    },
    {
      prev: "G1_14",
      tasks: [
        {
          text: "Return to The Manor Ramparts",
        },
      ],
    },
    {
      prev: "G1_13_2",
      tasks: [
        {
          text: "Return to Ogham Village",
        },
      ],
    },
    {
      prev: "G1_13_1",
      tasks: [
        {
          text: "Return to Ogham Farmlands",
        },
      ],
    },
    {
      prev: "G1_12",
      tasks: [
        {
          text: "Travel or Find Ogham Farmlands",
        },
      ],
    },
    {
      preq: ["G1_12"],
      tasks: [
        {
          text: "Find the entrance to Ogham Farmlands",
        },
      ],
    },
    {
      prev: "G1_11",
      tasks: [
        {
          text: "Return to Hunting Grounds",
        },
      ],
    },
    {
      prev: "G1_6",
      tasks: [
        {
          text: "Return to The Grim Tangle",
        },
      ],
    },
    {
      prev: "G1_5",
      tasks: [
        {
          text: "Speak to Renly",
        },
        {
          text: "Travel to The Grelwood",
        },
      ],
    },
    {
      prev: "G1_4",
      preq: ["G1_5"],
      tasks: [
        {
          text: "Speak to Una",
        },
        {
          text: "Travel to or Find The Grim Tangle",
        },
      ],
    },
    {
      prev: "G1_4",
      tasks: [
        {
          text: "Return to The Grelwood",
        },
      ],
    },
    {
      prev: "G1_2",
      tasks: [
        {
          text: "Return to Clearfell",
        },
      ],
    },
    {
      prev: "G1_1",
      tasks: [
        {
          text: "Speak to Renly",
        },
        {
          text: "Cut the Uncut Skill Gem",
        },
        {
          text: "Enter Clearfell",
        },
      ],
    },
  ],
  G1_2: [
    {
      tasks: [
        {
          text: "Speak with Farrow",
          condition: "Good on you.",
        },
        {
          text: "Complete the Ezomyte Remnant",
          hide: true,
          condition: "See? I told you we'd make a fine team!",
        },
        {
          text: "<span class='text-info'>Directions: The Grelwood is straight right from the Ezomyte Remnant</span>",
        },
        {
          text: "Take the Uncut Skill Gem from the Mysterious Campsite (optional)",
        },
        {
          text: "Kill <span class='text-poe-unique font-semibold'>Beira of the Rotten Pack</span> (<span class=\"text-poe-quest\">+10% to Cold Resistance</span>)",
          hide: true,
          condition:
            "TheMindlessSeer has received +10% to [Resistances|Cold Resistance].",
        },
        {
          text: "Find the entrance to The Grelwood",
        },
      ],
    },
  ],
  G1_3: [
    {
      tasks: [
        {
          text: "Kill <span class='text-poe-unique font-semibold'>The Devourer</span> (optional)",
        },
      ],
    },
  ],
  G1_4: [
    {
      preq: ["G1_6", "G1_11", "G1_13_1"],
      tasks: [
        {
          text: "Summon Farrow and Enter the Lost Catacombs",
        },
      ],
    },
    {
      preq: ["G1_5", "G1_town"],
      tasks: [
        {
          text: "Break the Runic Seals on the Tree of Souls",
        },
        {
          text: "Travel to Town",
        },
        {
          text: "Speak to Una",
        },
        {
          text: "Travel to or Find The Grim Tangle",
        },
      ],
    },
    {
      tasks: [
        {
          text: "<span class='text-info'>The four points of interest are arranged in a diamond shape</span>",
        },
        {
          text: "Find the waypoint near the Tree of Souls or The Grim Tangle",
        },
        {
          text: "Find the entrance to The Red Vale",
        },
      ],
    },
  ],
  G1_5: [
    {
      tasks: [
        {
          text: "Complete all 3 Obelisk of Rust",
        },
        {
          text: "Portal to Town",
        },
        {
          text: "Speak to Renly",
        },
        {
          text: "Travel to The Grelwood or The Grim Tangle",
        },
      ],
    },
  ],
  G1_6: [
    {
      preq: ["G1_5"],
      tasks: [
        {
          text: "Speak to Una",
          hide: true,
          condition:
            "Una: The old magicks still thrive! The way is open. Please, hurry.",
        },
        {
          text: "Use Respawn at Checkpoint to skip animation (optional)",
          hide: true,
          condition:
            "Una: The old magicks still thrive! The way is open. Please, hurry.",
        },
        {
          text: "Find the Runestones (Farrow quest)",
          hide: true,
          condition: "Keep up the search.",
        },
        {
          text: "Find the entrance to the Cemetery of the Eternals",
        },
      ],
    },
    {
      tasks: [
        {
          text: "Light up the Waypoint",
        },
        {
          text: "Go back to The Grelwood",
        },
        {
          text: "Find the entrance to The Red Vale",
        },
      ],
    },
  ],
  G1_7: [
    {
      prev: "G1_11",
      tasks: [
        {
          text: "Enter Hunting Grounds",
        },
      ],
    },
    {
      preq: ["G1_8", "G1_9"],
      tasks: [
        {
          text: "Open the Memorial Gate",
          hide: true,
          condition: "At last! It's open! Praise the First Ones!",
        },
        {
          text: "Use Respawn at Checkpoint to skip animation (optional)",
          hide: true,
          condition: "I must make them <i>{suffer!} ",
        },
        {
          text: "Kill <span class='text-poe-unique font-semibold'>Lachlann of Endless Lament</span>",
          hide: true,
          condition: "Together... at last...",
        },
        {
          text: "Enter Hunting Grounds",
        },
      ],
    },
    {
      prev: "G1_8",
      tasks: [
        {
          text: "Find Tomb of the Consort and Defeat <span class='text-poe-unique font-semibold'>Asinia, the Praetor's Consort</span>",
        },
      ],
    },
    {
      prev: "G1_9",
      tasks: [
        {
          text: "Find Mausoleum of the Praetor and Defeat <span class='text-poe-unique font-semibold'>Draven, the Eternal Praetor</span>",
        },
      ],
    },
    {
      tasks: [
        {
          text: "Find Tomb of the Consort and Defeat <span class='text-poe-unique font-semibold'>Asinia, the Praetor's Consort</span>",
        },
        {
          text: "Find Mausoleum of the Praetor and Defeat <span class='text-poe-unique font-semibold'>Draven, the Eternal Praetor</span>",
        },
      ],
    },
  ],
  G1_8: [
    {
      tasks: [
        {
          text: "Defeat <span class='text-poe-unique font-semibold'>Draven, the Eternal Praetor</span>",
        },
        {
          text: "Return to the Cemetery of the Eternals",
        },
      ],
    },
  ],
  G1_9: [
    {
      tasks: [
        {
          text: "Defeat <span class='text-poe-unique font-semibold'>Asinia, the Praetor's Consort</span>",
        },
        {
          text: "Return to the Cemetery of the Eternals",
        },
      ],
    },
  ],
  G1_11: [
    {
      preq: ["G1_12", "G1_13_1"],
      tasks: [
        {
          text: "Find the Runestones (Farrow quest)",
          hide: true,
          condition: "Good Work!",
        },
        {
          text: "Travel to Ogham Farmlands",
        },
      ],
    },
    {
      prev: "G1_12",
      tasks: [
        {
          text: "Find the Runestones (Farrow quest)",
          hide: true,
          condition: "Good Work!",
        },
        {
          text: "<span class='text-info'>Directions: The points of interest are in the corners</span>",
        },
        {
          text: "Kill <span class='text-poe-unique font-semibold'>Crowbell</span>",
          hide: true,
          condition: "You have received 2 Passive Skill Points.",
        },
        {
          text: "Find the entrance to Ogham Farmlands",
        },
      ],
    },
    {
      prev: "G1_13_1",
      preq: ["G1_12"],
      tasks: [
        {
          text: "Find the Runestones (Farrow quest)",
          hide: true,
          condition: "Good Work!",
        },
        {
          text: "<span class='text-info'>Directions: The points of interest are in the corners</span>",
        },
        {
          text: "Kill <span class='text-poe-unique font-semibold'>Crowbell</span>",
          hide: true,
          condition: "You have received 2 Passive Skill Points.",
        },
      ],
    },
    {
      prev: "G1_13_1",
      tasks: [
        {
          text: "Find the Runestones (Farrow quest)",
          hide: true,
          condition: "Good Work!",
        },
        {
          text: "<span class='text-info'>Directions: The points of interest are in the corners</span>",
        },
        {
          text: "Kill <span class='text-poe-unique font-semibold'>Crowbell</span>",
          hide: true,
          condition: "You have received 2 Passive Skill Points.",
        },
        {
          text: "Find the entrance to Freythorn",
        },
      ],
    },
    {
      tasks: [
        {
          text: "Find the Runestones (Farrow quest)",
          hide: true,
          condition: "Good Work!",
        },
        {
          text: "<span class='text-info'>Directions: The points of interest are in the corners</span>",
        },
        {
          text: "Kill <span class='text-poe-unique font-semibold'>Crowbell</span>",
          hide: true,
          condition: "You have received 2 Passive Skill Points.",
        },
        {
          text: "Find Ogham Farmlands, activate the waypoint and go back",
        },
        {
          text: "Find the entrance to Freythorn",
        },
      ],
    },
  ],
  G1_12: [
    {
      tasks: [
        {
          text: "Clear the 3 Rituals",
          hide: true,
          condition: "Find me, Maji... return to my embrace...",
        },
        {
          text: " <span class='text-info'>Directions: After Compliting the First Ritual trails of locusts will point to the remaining ones</span>",
          hide: true,
          condition: "Find me, Maji... return to my embrace...",
        },
        {
          text: "Defeat <span class='text-poe-unique font-semibold'>King of the Mists</span>",
        },
        {
          text: "Portal to Town",
        },
      ],
    },
  ],
  G1_13_1: [
    {
      preq: ["G1_12"],
      tasks: [
        {
          text: "Find the Runestones (Farrow quest)",
        },
        {
          text: '<span class="text-warning">If you have found all 3 Runestones sites you can go back to The Grelwood and enter the Lost Catacombs</span>',
        },
        {
          text: 'Find <span class="text-poe-quest">Una\'s Lute</span>',
        },
        {
          text: "Find the entrance to the Ogham Village",
        },
      ],
    },
    {
      tasks: [
        {
          text: "Activate the waypoint",
        },
        {
          text: "Go back to Hunting Grounds",
        },
      ],
    },
  ],
  G1_13_2: [
    {
      tasks: [
        {
          text: "<span class='text-poe-quest'>Find the Smithing Tools</span>",
        },
        {
          text: "<span class='text-info'>Directions: Go Up-Left</span>",
        },
        {
          text: "Kill <span class='text-poe-unique font-semibold'>The Executioner</span>",
        },
        {
          text: "Pull the Leaver",
        },
        {
          text: "Enter The Manor Ramparts",
        },
      ],
    },
  ],
  G1_14: [
    {
      tasks: [
        {
          text: "<span class='text-info'>Directions: The zone has a U-shape</span>",
        },
        {
          text: "Find the entrance to Ogham Manor",
        },
      ],
    },
  ],
  G1_15: [
    {
      tasks: [
        {
          text: "Kill <span class='text-poe-unique font-semibold'>Candlemass, The Living Rite</span> (<span class=\"text-poe-quest\">+20 to maximum Life</span>)",
          hide: true,
          condition: "TheMindlessSeer has received +20 to maximum Life.",
        },
        {
          text: "<span class='text-info'>Directions: Go Down Stairs until you can take the Take the Elevator</span>",
          hide: true,
          condition: "Allow me to clear your mind, if only for a moment.",
        },
        {
          text: "Defeat <span class='text-poe-unique font-semibold'>Count Geonor</span>",
          hide: true,
          condition: "Allow me to clear your mind, if only for a moment.",
        },
        {
          text: "Portal to Town",
        },
        {
          text: "Speak to Una, Finn, Leitis and The Hooded One",
        },
      ],
    },
  ],
  G2_1: [
    {
      tasks: [
        {
          text: "Kill <span class='text-poe-unique font-semibold'>The Rathbreaker</span>",
        },
        {
          text: "Portal to Town",
        },
        {
          text: "Speak with Zarka",
        },
        {
          text: "Enter The Ardura Caravan",
        },
      ],
    },
  ],
  G2_town: [
    {
      prev: "G2_12",
      tasks: [
        {
          text: "Exit the Caravan and Speak with The Hooded One",
        },
        {
          text: "Speak with Sekhema Asala",
        },
      ],
    },
    {
      prev: "G2_10_1",
      tasks: [
        {
          text: "Return to Mawdun Quarry",
        },
      ],
    },
    {
      prev: "G2_9_2",
      tasks: [
        {
          text: "Speak with Shambrin",
        },
        {
          text: "Use the Desert Map and travel to The Dreadnought",
        },
      ],
    },
    {
      prev: "G2_9_1",
      tasks: [
        {
          text: "Return to Path of Mourning",
        },
      ],
    },
    {
      prev: "G2_8",
      tasks: [
        {
          text: "Return to Deshar",
        },
      ],
    },
    {
      prev: "G2_7",
      tasks: [
        {
          text: "Speak with Zarka",
        },
        {
          text: "Speak with Sekhema Asala",
        },
        {
          text: "Use the Desert Map and travel to Traitor's Passage",
        },
        {
          text: "Use the Horn of the Vastiri",
        },
        {
          text: "Speak with Sekhema Asala",
        },
        {
          text: "Use the Desert Map and travel to Deshar",
        },
      ],
    },
    {
      prev: "G2_6",
      tasks: [
        {
          text: "Return to Valley of the Titans",
        },
      ],
    },
    {
      prev: "G2_4_3",
      tasks: [
        {
          text: "Use the Desert Map and travel to Valley of the Titans",
        },
      ],
    },
    {
      prev: "G2_4_2",
      tasks: [
        {
          text: "Return to The Lost City",
        },
      ],
    },
    {
      prev: "G2_4_1",
      tasks: [
        {
          text: "Return to Keth",
        },
      ],
    },
    {
      prev: "G2_5_2",
      tasks: [
        {
          text: "Use the Desert Map and travel to Keth",
        },
      ],
    },
    {
      prev: "G2_5_1",
      tasks: [
        {
          text: "Return to Mastodon Badlands",
        },
      ],
    },
    {
      prev: "G2_3",
      tasks: [
        {
          text: "Speak with Zarka",
        },
        {
          text: "Speak with Sekhema Asala",
        },
        {
          text: "Use the Desert Map and travel to Mastodon Badlands",
        },
      ],
    },
    {
      prev: "G2_10_2",
      tasks: [
        {
          text: "Speak with Risu and Sekhema Asala",
        },
        {
          text: "Use the Desert Map and travel to Traitor's Passage",
        },
      ],
    },
    {
      prev: "G2_3a",
      tasks: [
        {
          text: "Use the Desert Map and travel to Mawdun Quarry",
        },
      ],
    },
    {
      prev: "G2_1",
      tasks: [
        {
          text: "Speak with Sekhema Asala",
        },
        {
          text: "Use the Desert Map and travel to Halani Gates",
        },
      ],
    },
  ],
  G2_3a: [
    {
      tasks: [
        {
          text: "Speak with Sekhema Asala",
        },
        {
          text: "Portal to Town",
        },
      ],
    },
  ],
  G2_10_1: [
    {
      tasks: [
        {
          text: "Find the entrance to the Mawdun Mine",
        },
      ],
    },
  ],
  G2_10_2: [
    {
      tasks: [
        {
          text: "<span class='text-info'>Directions: Boss is located on top-right of the map</span>",
        },
        {
          text: "Kill <span class='text-poe-unique font-semibold'>Rudja, the Dread Engineer</span>",
        },
        {
          text: "Speak with Risu (cage on top left)",
        },
        {
          text: "Portal to Town",
        },
      ],
    },
  ],
  G2_2: [
    {
      tasks: [
        {
          text: "Find Forgotten Prison of the Traitor and Break the Ancient and Runic Seals",
        },
        {
          text: "Kill <span class='text-poe-unique font-semibold'>Balbala, the Traitor</span>",
        },
        {
          text: "Find the entrance to The Halani Gates",
        },
      ],
    },
  ],
  G2_3: [
    {
      tasks: [
        {
          text: "Summon Asala",
          hide: true,
          condition: "Hold them back while I open the gate!",
        },
        {
          text: "<span class='text-info'>Directions: Follow the Wall</span>",
          hide: true,
          condition: "We will finish this, but not today.",
        },
        {
          text: "Defeat <span class='text-poe-unique font-semibold'>Jamanra, the Risen King</span>",
          hide: true,
          condition: "We will finish this, but not today.",
        },
        {
          text: "Go downstairs",
        },
        {
          text: "Portal to Town",
        },
      ],
    },
  ],
  G2_5_1: [
    {
      tasks: [
        {
          text: "Find the entrance to The Bone Pits",
        },
      ],
    },
  ],
  G2_5_2: [
    {
      tasks: [
        {
          text: "Find the Runestones (Farrow quest)",
          hide: true,
          condition: "What an inscription!",
        },
        {
          text: "Find the <span class='text-poe-quest'>Sun Clan Relic</span>",
        },
        {
          text: "Kill <span class='text-poe-unique font-semibold'>Iktab and Ekbab</span>",
        },
        {
          text: "Portal to Town",
        },
        {
          text: "Use the Desert Map and travel to Keth",
        },
      ],
    },
  ],
  G2_4_1: [
    {
      tasks: [
        {
          text: "Find the Runestones (Farrow quest)",
        },
        {
          text: "Kill <span class='text-poe-unique font-semibold'>Kabala, Constrictor Queen</span>",
          hide: true,
          condition: "You have received 2 Passive Skill Points.",
        },
        {
          text: "Find the <span class='text-poe-quest'>Kabala Clan Relic</span>",
        },
        {
          text: "Find the entrance to The Lost City",
        },
      ],
    },
  ],
  G2_4_2: [
    {
      tasks: [
        {
          text: "Find the entrance to the Buried Shrines",
        },
      ],
    },
  ],
  G2_4_3: [
    {
      tasks: [
        {
          text: "Find the entrance to The Heart of Keth",
          hide: true,
          condition: "She didn't... want me...",
        },
        {
          text: "Kill <span class='text-poe-unique font-semibold'>Azarian, the Forsaken Son</span>",
          hide: true,
          condition: "She didn't... want me...",
        },
        {
          text: "Speak to The Water Goddess",
          hide: true,
          condition: "At last... death... Thank you...",
        },
        {
          text: "Take the Everburning Cinders",
          hide: true,
          condition: "At last... death... Thank you...",
        },
        {
          text: "Ignite the Goddess",
          hide: true,
          condition: "At last... death... Thank you...",
        },
        {
          text: "Open a Portal",
        },
        {
          text: "Take <span class='text-poe-quest'>The Essence of Water</span>",
        },
        {
          text: "Portal to Town",
        },
      ],
    },
  ],
  G2_6: [
    {
      tasks: [
        {
          text: "Find and Activate all Ancient Seals",
        },
        {
          text: "Find the Offering to Amrit and Insert the Relics",
          hide: true,
          condition:
            "TheMindlessSeer has received 30% increased [Charm] Charges gained.",
        },
        {
          text: "Return to the Clasped Entry",
        },
        {
          text: "Enter The Titan Grotto",
        },
      ],
    },
  ],
  G2_7: [
    {
      tasks: [
        {
          text: "Kill <span class='text-poe-unique font-semibold'>Zalmarath, the Colossus</span>",
        },
        {
          text: "<span class='text-poe-quest'>Pick up The Flame Ruby</span>",
        },
        {
          text: "Portal to Town",
        },
      ],
    },
  ],
  G2_8: [
    {
      tasks: [
        {
          text: "Find the Runestones (Farrow quest)",
        },
        {
          text: "If you have found all 3 Runestones you can now travel to the Skull of the Titan using the Ardura Caravan",
        },
        {
          text: "Find the <span class='text-poe-quest'>Fallen Dekhara</span>",
        },
        {
          text: "Find the entrance to Path of Mourning",
        },
      ],
    },
  ],
  G2_9_1: [
    {
      tasks: [
        {
          text: "Find the entrance to The Spires of Deshar",
        },
      ],
    },
  ],
  G2_9_2: [
    {
      tasks: [
        {
          text: "Find and Activate the Sisters of Garukhan",
          hide: true,
          condition:
            "TheMindlessSeer has received +10% to [Resistances|Lightning Resistance].",
        },
        {
          text: "Kill <span class='text-poe-unique font-semibold'>Tor Gul, the Defiler</span>",
        },
        {
          text: "Portal to Town",
        },
      ],
    },
  ],
  G2_12_1: [
    {
      tasks: [
        {
          text: "Find the entrance to the Dreadnought Vanguard",
        },
      ],
    },
  ],
  G2_12_2: [
    {
      tasks: [
        {
          text: "Kill <span class='text-poe-unique font-semibold'>Jamanra, the Risen King</span>",
        },
        {
          text: "Speak Sekhema Asala",
        },
        {
          text: "Portal to Town",
        },
      ],
    },
  ],
  G3_1: [
    {
      tasks: [
        {
          text: "Find the entrance to Ziggurat Encampment",
        },
      ],
    },
  ],
  G3_town: [
    {
      preq: ["G3_17"],
      tasks: [
        {
          text: "Speak with Doryani",
        },
        {
          text: "Speak with Alva and Travel to Kingsmarch",
        },
      ],
    },
    {
      preq: ["G3_12"],
      tasks: [
        {
          text: "Speak with Servi",
        },
        {
          text: "Use the Gateway",
        },
        {
          text: "<span class='text-info'>Directions: Go downstairs</span>",
        },
        {
          text: "Enter the Utzaal",
        },
      ],
    },
    {
      preq: ["G3_11"],
      tasks: [
        {
          text: "<span class='text-info'>Directions: Go downstairs</span>",
        },
        {
          text: "Use the <span class='text-poe-quest'>Temple Door Idol</span>",
        },
        {
          text: "Enter the Temple of Kopec",
        },
      ],
    },
    {
      prev: "G3_7",
      tasks: [
        {
          text: "Travel back to The Matlan Waterways",
        },
      ],
    },
    {
      preq: ["G3_2_2"],
      tasks: [
        {
          text: "<span class='text-info'>Directions: Go downstairs</span>",
        },
        {
          text: "Speak with Alva",
        },
        {
          text: "Enter The Drowned City",
        },
      ],
    },
    {
      tasks: [
        {
          text: "Enter the Jungle Ruins (located at the top)",
        },
      ],
    },
  ],
  G3_3: [
    {
      preq: ["G3_6_2"],
      tasks: [
        {
          text: "Activate the Stone Altar using the <span class='text-poe-quest'>Large Soul Core</span>",
        },
        {
          text: "Enter The Matlan Waterways",
        },
      ],
    },
    {
      preq: ["G3_4"],
      tasks: [
        {
          text: "Find the Runestones (Farrow quest)",
        },
        {
          text: "Kill the <span class='text-poe-unique font-semibold'>Mighty Silverfist</span>",
          hide: true,
          condition: "You have received 2 Passive Skill Points.",
        },
        {
          text: "<span class='text-info'>Directions: If you find the a camp of explorers helping them will show you the entrance to the Infested Barrens</span>",
        },
        {
          text: "Find the entrance to the Infested Barrens",
        },
      ],
    },
    {
      tasks: [
        {
          text: "Find the Runestones (Farrow quest)",
        },
        {
          text: "Find the entrance to The Venom Crypts (It's close to the waypoint)",
        },
        {
          text: "Kill the <span class='text-poe-unique font-semibold'>Mighty Silverfist</span>",
          hide: true,
          condition: "You have received 2 Passive Skill Points.",
        },
      ],
    },
  ],
  G3_4: [
    {
      tasks: [
        {
          text: "Find the Runestones (Farrow quest)",
        },
        {
          text: "Find the <span class='text-poe-quest'>Corpse</span> in the Den of the Serpent Priestess",
        },
        {
          text: "Take the <span class='text-poe-quest'>Corpse-Snake Venom</span>",
        },
        {
          text: "Go back to the Jungle Ruins",
        },
      ],
    },
  ],
  G3_2_1: [
    {
      tasks: [
        {
          text: "<span class='text-info'>Directions: If you find the a camp of explorers helping them will show you the entrance to the Chimeral Wetlands</span>",
        },
        {
          text: "Find Chimeral Wetlands",
        },
      ],
    },
  ],
  G3_7: [
    {
      tasks: [
        {
          text: "Find the Runestones (Farrow quest)",
          condition: "Well done!",
        },
        {
          text: "Kill the <span class='text-poe-unique font-semibold'>Ignagduk, the Bog Witch</span>",
          hide: true,
          condition: "TheMindlessSeer has received +30 to [Spirit|Spirit].",
        },
        {
          text: "Portal to Town",
        },
      ],
    },
  ],
  G3_5: [
    {
      tasks: [
        {
          text: "Kill the <span class='text-poe-unique font-semibold'>Xyclucian, the Chimera</span>",
        },
        {
          text: "Enter Jiquani's Machinarium (left of the boss arena)",
        },
      ],
    },
  ],
  G3_6_1: [
    {
      tasks: [
        {
          text: "Find <span class='text-poe-quest'>Small Soul Core</span>",
          hide: true,
          condition:
            "TheMindlessSeer has received +10% to [Resistances|Fire Resistance].",
        },
        {
          text: "Activate the Stone Altar",
          hide: true,
          condition:
            "TheMindlessSeer has received +10% to [Resistances|Fire Resistance].",
        },
        {
          text: "Find 2 more <span class='text-poe-quest'>Small Soul Core</span>",
          hide: true,
          condition:
            "TheMindlessSeer has received +10% to [Resistances|Fire Resistance].",
        },
        {
          text: "Kill the <span class='text-poe-unique font-semibold'>Blackjaw, the Remnant</span>",
          hide: true,
          condition:
            "TheMindlessSeer has received +10% to [Resistances|Fire Resistance].",
        },
        {
          text: "Find the entrance to Jiquani's Sanctum",
        },
      ],
    },
  ],
  G3_6_2: [
    {
      tasks: [
        {
          text: "Find 2 <span class='text-poe-quest'>Medium Soul Cores</span>",
          hide: true,
          condition: "The Soul Core is charged! Why don't you do the honours?",
        },
        {
          text: "Activate the 2 Generators located on top-left and top-right",
          hide: true,
          condition: "The Soul Core is charged! Why don't you do the honours?",
        },
        {
          text: "Go back to the starting point and Activate the <span class='text-poe-quest'>Large Soul Core</span>",
          hide: true,
          condition: "The Soul Core is charged! Why don't you do the honours?",
        },
        {
          text: "Kill the <span class='text-poe-unique font-semibold'>Zicoatl, Warden of the Core</span>",
        },
        {
          text: "Take the <span class='text-poe-quest'>Large Soul Core</span>",
        },
        {
          text: "Use the Waypoint and go back to Jungle Ruins",
        },
      ],
    },
  ],
  G3_2_2: [
    {
      preq: ["G3_7"],
      tasks: [
        {
          text: "Go right and Keep forward",
        },
        {
          text: "Activate the Canal Mechanism",
        },
        {
          text: "Portal to Town",
        },
        {
          text: "",
        },
      ],
    },
    {
      tasks: [
        {
          text: "Keep forward until you reach the Ravaged Corpse Tablet",
        },
        {
          text: "Go left and Enter The Azak Bog",
        },
      ],
    },
  ],
  G3_8: [
    {
      tasks: [
        {
          text: "Find the Apex of Filth",
        },
      ],
    },
  ],
  G3_11: [
    {
      tasks: [
        {
          text: "Find and Kill <span class='text-poe-unique font-semibold'>The Queen of Filth</span>",
        },
        {
          text: "Take the <span class='text-poe-quest'>Temple Door Idol</span>",
        },
        {
          text: "Portal to Town",
        },
      ],
    },
  ],
  G3_12: [
    {
      tasks: [
        {
          text: "Find the Stairs to level 2",
        },
        {
          text: "Find the Stairs to level 3",
        },
        {
          text: "Kill <span class='text-poe-unique font-semibold'>Ketzuli, High Priest of the Sun</span>",
        },
        {
          text: "Speak with Alva",
        },
        {
          text: "Portal to Town",
        },
      ],
    },
  ],
  G3_14: [
    {
      tasks: [
        {
          text: "Kill <span class='text-poe-unique font-semibold'>Viper Napuatzi</span>",
        },
        {
          text: "Find the entrance to Aggorat",
        },
      ],
    },
  ],
  G3_16: [
    {
      tasks: [
        {
          text: "Find the <span class='text-poe-quest'>Sacrificial Heart</span>",
        },
        {
          text: "Find the <span class='text-poe-quest'>Sacrificial Dagger</span>",
        },
        {
          text: "Go back to Sacrificial Dais, Place and Stab the Sacrificial Heart",
        },
        {
          text: "Find the entrance to The Black Chambers",
        },
      ],
    },
  ],
  G3_17: [
    {
      tasks: [
        {
          text: "Defeat <span class='text-poe-unique font-semibold'>Doryani, Royal Thaumaturge</span>",
        },
        {
          text: "Portal to Town",
        },
        {
          text: "Speak with Doryani",
        },
      ],
    },
  ],
  P1_Town: [
    {
      tasks: [
        {
          text: "Speak with Renly",
          condition: "",
        },
        {
          text: "Speak with The Hooded One",
          condition: "",
        },
      ],
      preq: ["P1_6"],
    },
    {
      tasks: [
        {
          text: "Enter Scorched Farmlands",
          condition: "P1_4",
          show: false,
          hide: true,
        },
        {
          text: "Return to Holten",
          condition: "P1_4",
          show: true,
          hide: false,
        },
      ],
    },
  ],
  P1_1: [
    {
      tasks: [
        {
          text: "Defeat <span class='text-poe-unique font-semibold'>Isolde of the White Shroud</span> and <span class='text-poe-unique font-semibold'>Heldra of the Black Pyre</span>",
          condition: "P1_2",
          show: false,
          hide: true,
        },
        {
          text: "Find the entrance to Stones of Serle",
          condition: "P1_2",
          show: false,
          hide: true,
        },
        {
          text: "Find the entrance to The Blackwood",
          condition: "P1_2",
          show: true,
          hide: false,
        },
      ],
    },
  ],
  P1_2: [
    {
      tasks: [
        {
          text: "Activate all Magaliths",
        },
        {
          text: "Defeat <span class='text-poe-unique font-semibold'>Siora, Blade of the Mists</span>",
        },
        {
          text: "Speak with Una",
          condition: "",
        },
        {
          text: "Go back to Scorched Farmlands",
        },
      ],
    },
  ],
  P1_3: [
    {
      tasks: [
        {
          text: "Find the entrance to Holten",
        },
      ],
    },
  ],
  P1_4: [
    {
      tasks: [
        {
          text: "Find the entrance to Wolvenhold",
          condition: "P1_5",
          show: false,
          hide: true,
        },
        {
          text: "Find the entrance to Holten Estate",
        },
      ],
    },
  ],
  P1_5: [
    {
      tasks: [
        {
          text: "Defeat <span class='text-poe-unique font-semibold'>Oswin, The Dread Warden</span>",
        },
      ],
    },
  ],
  P1_6: [
    {
      tasks: [
        {
          text: "Find the Stairs to enter the courtyard",
        },
        {
          text: "Defeat <span class='text-poe-unique font-semibold'>Thane Wulfric</span> and <span class='text-poe-unique font-semibold'>Lady Elswyth</span>",
        },
        {
          text: "Portal to Town",
        },
      ],
    },
  ],
  P2_Town: [
    {
      preq: ["P2_7"],
      tasks: [
        {
          text: "Speak with Risu",
        },
        {
          text: "Speak with The Hooded One",
        },
      ],
    },
    {
      tasks: [
        {
          text: "<span class='text-info'>Directions: Exit from the North for The Galai Gates</span>",
          condition: "",
        },
      ],
      preq: ["P2_3"],
    },
    {
      tasks: [
        {
          text: "<span class='text-info'>Directions: Exit from the South</span>",
        },
        {
          text: "<span class='text-info'>Directions: Exit from the West for the Pools of Khatal</span>",
          condition: "",
        },
      ],
    },
  ],
  P2_1: [
    {
      preq: ["P2_3"],
      tasks: [
        {
          text: "<span class='text-info'>Directions: Go streight from North exit from The Khari Bazaar</span>",
        },
        {
          text: "Find the entrance to The Galai Gates",
        },
      ],
    },
    {
      tasks: [
        {
          text: "<span class='text-info'>Directions: Go Right and follow the dried river bed</span>",
          show: false,
          hide: true,
          condition: "TheMindlessSeer has received 5% increased maximum Life.",
        },
        {
          text: "Find and Defeat <span class='text-poe-unique font-semibold'>Akthi, the Final Sting</span> and <span class='text-poe-unique font-semibold'>Anundr, the Sandworm</span>",
          show: false,
          hide: true,
          condition: "TheMindlessSeer has received 5% increased maximum Life.",
        },
        {
          text: "<span class='text-info'>Directions: Go Northwest for the Skullmaw Stairway</span>",
          show: false,
          hide: true,
          condition: "TheMindlessSeer has received 5% increased maximum Life.",
        },
        {
          text: "Find the Skullmaw Stairway",
          show: false,
          hide: true,
          condition: "TheMindlessSeer has received 5% increased maximum Life.",
        },
        {
          text: "Take the <span class='text-poe-quest'>Molten One's Gift</span>",
          show: false,
          hide: true,
          condition: "TheMindlessSeer has received 5% increased maximum Life.",
        },
        {
          text: "Portal to Town",
          condition: "TheMindlessSeer has received 5% increased maximum Life.",
          show: false,
          hide: true,
        },
        {
          text: "Find the entrance to Pools of Khatal",
        },
        {
          text: "<span class='text-info'>Directions: Keep West from the West exit from The Khari Bazaar</span>",
          condition: "TheMindlessSeer has received 5% increased maximum Life.",
          show: true,
          hide: false,
        },
      ],
    },
  ],
  P2_2: [
    {
      tasks: [
        {
          text: "Find the entrance to Sel Khari Sanctuary",
        },
      ],
    },
  ],
  P2_3: [
    {
      tasks: [
        {
          text: "Defeat <span class='text-poe-unique font-semibold'>Elzarah, the Cobra Lord</span>",
        },
        {
          text: "Speak with Sekhema Asala",
        },
        {
          text: "Portal to Town",
        },
      ],
    },
  ],
  P2_5: [
    {
      tasks: [
        {
          text: "Find and Defeat <span class='text-poe-unique font-semibold'>Vornas, the Fell Flame</span>",
        },
        {
          text: "Enter Qimah",
        },
      ],
    },
  ],
  P2_6: [
    {
      tasks: [
        {
          text: "Find the Seven Pillars and choose a Boon",
        },
        {
          text: "Summon and Speak with Jado",
        },
        {
          text: "Enter Qimah Reservoir",
        },
      ],
    },
  ],
  P2_7: [
    {
      tasks: [
        {
          text: "Defeat <span class='text-poe-unique font-semibold'>Azmadi, the Faridun Prince</span>",
        },
        {
          text: "Click on Grand Barya",
        },
        {
          text: "Speak with Jado",
        },
        {
          text: "Portal to Town",
        },
      ],
    },
  ],
  P3_Town: [
    {
      prev: "",
      tasks: [
        {
          text: "Travel to Kingsmarch",
        },
      ],
      preq: ["P3_7"],
    },
    {
      prev: "P3_4",
      tasks: [
        {
          text: "Speak with Hilda",
        },
        {
          text: "Travel to Glacial Tarn",
        },
      ],
    },
    {
      tasks: [
        {
          text: "Enter Ashen Forest",
          condition: "P3_3",
          show: false,
          hide: true,
        },
        {
          text: "Speak with Hilda",
          condition: "P3_4",
          show: true,
          hide: false,
        },
        {
          text: "Return to Glacial Tarn",
          condition: "P3_3",
          show: true,
          hide: false,
        },
      ],
    },
  ],
  P3_1: [
    {
      tasks: [
        {
          text: "Find the entrance to Kriar Village",
        },
      ],
    },
  ],
  P3_2: [
    {
      tasks: [
        {
          text: "Find and Defeat <span class='text-poe-unique font-semibold'>Lythara, the Wayward Spear</span>",
          show: false,
          hide: true,
          condition: "TheMindlessSeer has received +40 to [Spirit|Spirit].",
        },
        {
          text: "Enter Glacial Tarn",
        },
      ],
    },
  ],
  P3_3: [
    {
      tasks: [
        {
          text: "Find the entrance to Howling Caves",
          show: false,
          hide: true,
          condition: "P3_4",
        },
        {
          text: "Find and Defeat <span class='text-poe-unique font-semibold'>Rakkar, the Frozen Talon</span>",
        },
        {
          text: "Enter Kriar Peaks",
        },
      ],
    },
  ],
  P3_4: [
    {
      tasks: [
        {
          text: "Find and Defeat <span class='text-poe-unique font-semibold'>The Abominable Yeti</span>",
        },
        {
          text: "Portal to Town",
        },
      ],
    },
  ],
  P3_5: [
    {
      tasks: [
        {
          text: "Find Elder Madox for a free unique item",
        },
        {
          text: "Find the entrance to Etched Ravine",
        },
      ],
    },
  ],
  P3_6: [
    {
      tasks: [
        {
          text: "Find and Defeat <span class='text-poe-unique font-semibold'>Stormgore, the Guardian</span>",
        },
        {
          text: "Enter the Cuachic Vault",
        },
      ],
    },
  ],
  P3_7: [
    {
      tasks: [
        {
          text: "Find and Defeat <span class='text-poe-unique font-semibold'>Zelina, Blood Priestess</span> and <span class='text-poe-unique font-semibold'>Zolin, Blood Priest</span>",
        },
        {
          text: "Summon and Speak with Doryani",
        },
        {
          text: "Portal to Town",
        },
      ],
    },
  ],
  HideoutCanal: [
    {
      tasks: [
        {
          text: "",
        },
      ],
    },
  ],
  HideoutLimestone: [
    {
      tasks: [
        {
          text: "",
        },
      ],
    },
  ],
  HideoutShoreline: [
    {
      tasks: [
        {
          text: "",
        },
      ],
    },
  ],
  HideoutFelled: [
    {
      tasks: [
        {
          text: "",
        },
      ],
    },
  ],
  HideoutDreadnought: [
    {
      tasks: [
        {
          text: "",
        },
      ],
    },
  ],
  G2_12: [
    {
      tasks: [
        {
          text: "Kill <span class='text-poe-unique font-semibold'>Jamanra, the Risen King</span>",
          hide: true,
          condition: "Die... foolish <i>{Sekhema}!",
        },
        {
          text: "Speak Sekhema Asala",
        },
        {
          text: "Portal to Town",
        },
      ],
    },
  ],
  G3_10_Airlock: [
    {
      tasks: [
        {
          text: "",
        },
      ],
    },
  ],
  ExpeditionSubArea_Kalguur_Act1: [
    {
      tasks: [
        {
          text: "Enter the Runic Vault",
        },
      ],
    },
  ],
  ExpeditionSubArea_Kalguur_Act2: [
    {
      tasks: [
        {
          text: "Enter the Cave Mouth",
        },
        {
          text: "Enter the Runic Vault",
        },
      ],
    },
  ],
  G4_town: [
    {
      tasks: [
        {
          text: "Set Sail to Ngakanu",
          condition: "G4_11_2",
          show: false,
          hide: true,
        },
        {
          text: "Speak with The Hooded One",
          condition: "G4_11_2",
          show: true,
          hide: false,
        },
      ],
      preq: ["G4_10"],
    },
    {
      preq: [],
      tasks: [
        {
          text: "Speak with Dannig",
          condition: "",
        },
        {
          text: "Use the Waypoint to Journey's End",
          condition: "",
        },
      ],
      prev: "G4_2_2",
    },
    {
      preq: ["G4_2_1", "G4_3_2", "G4_7", "G4_5_2"],
      tasks: [
        {
          text: "Set Sail to Eye of Hinekora",
          condition: "G4_4_3",
          show: false,
          hide: true,
        },
        {
          text: "Speak with The Hooded One",
        },
        {
          text: "Set Sail to Arastas",
        },
      ],
    },
    {
      tasks: [
        {
          text: "Set Sail to Kedge Bay",
          condition: "G4_2_1",
          show: false,
          hide: true,
        },
        {
          text: "Set Sail to Whakapanu Island",
          condition: "G4_3_2",
          show: false,
          hide: true,
        },
        {
          text: "Set Sail to Shrike Island",
          condition: "G4_7",
          show: false,
          hide: true,
        },
        {
          text: "Set Sail to Abandoned Prison",
          condition: "G4_5_2",
          show: false,
          hide: true,
        },
      ],
      preq: ["G4_1_2"],
    },
    {
      tasks: [
        {
          text: "Speak with Doryani",
          condition: "G4_1_2",
          show: false,
          hide: true,
        },
        {
          text: "Speak with Alva",
          condition: "G4_1_2",
          show: false,
          hide: true,
        },
        {
          text: "Speak with Makoru",
          condition: "G4_1_2",
          show: false,
          hide: true,
        },
        {
          text: "Set Sail to Isle of Kin",
          condition: "G4_1_2",
          show: false,
          hide: true,
        },
      ],
    },
  ],
  G4_1_1: [
    {
      tasks: [
        {
          text: 'Find the <span class="text-poe-quest">Flayed Sailor</span> and take the <span class="text-poe-quest">Torn Map Piece</span> (Farrow quest)',
          condition: "G4_1_2",
          show: false,
          hide: true,
        },
        {
          text: 'If you have collected all 4 <span class="text-poe-quest">Map Pieces</span> you can travel to Plunderer\'s Point',
          condition: "G4_1_1, G4_2_1, G4_3_1, G4_7",
          show: true,
          hide: false,
        },
        {
          text: "Find and Kill <span class='text-poe-unique font-semibold'>The Blind Beast</span> (optional)",
          condition: "G4_1_2",
          show: false,
          hide: true,
        },
        {
          text: "Find the entrance to the Volcanic Warrens",
          condition: "G4_1_2",
          show: false,
          hide: true,
        },
        {
          text: "Set Sail to Whakapanu Island",
          condition: "G4_1_2",
          show: true,
          hide: false,
        },
      ],
    },
  ],
  G4_1_2: [
    {
      tasks: [
        {
          text: "Find and Kill <span class='text-poe-unique font-semibold'>Krutog, Lord of Kin</span>",
        },
        {
          text: "Return to Ship",
        },
        {
          text: "Set Sail to Whakapanu Island",
        },
      ],
    },
  ],
  G4_3_1: [
    {
      tasks: [
        {
          text: 'Find the <span class="text-poe-quest">Petrified Pirate</span> and take the <span class="text-poe-quest">Frayed Map Piece</span> (Farrow quest)',
          condition: "G4_3_2",
          show: false,
          hide: true,
        },
        {
          text: 'If you have collected all 4 <span class="text-poe-quest">Map Pieces</span> you can travel to Plunderer\'s Point',
          condition: "G4_1_1, G4_2_1, G4_3_1, G4_7",
          show: true,
          hide: false,
        },
        {
          text: "Find the entrance to the Singing Caverns",
          condition: "G4_3_2",
          show: false,
          hide: true,
        },
        {
          text: "Set Sail to Shrike Island",
          condition: "G4_3_2",
          show: true,
          hide: false,
        },
      ],
    },
  ],
  G4_3_2: [
    {
      tasks: [
        {
          text: "Find and Kill <span class='text-poe-unique font-semibold'>Diamora, Song of Death</span>",
        },
        {
          text: "Speak with Matiki",
        },
        {
          text: "Return to Ship",
        },
      ],
    },
  ],
  G4_7: [
    {
      tasks: [
        {
          text: 'Find the <span class="text-poe-quest">Corpse Nest</span> and take the <span class="text-poe-quest">Ragged Map Piece</span> (Farrow quest)',
        },
        {
          text: 'If you have collected all 4 <span class="text-poe-quest">Map Pieces</span> you can travel to Plunderer\'s Point',
          condition: "G4_1_1, G4_2_1, G4_3_1, G4_7",
          show: true,
          hide: false,
        },
        {
          text: "Find and Kill <span class='text-poe-unique font-semibold'>Scourge of the Skies</span>",
        },
        {
          text: "Return to Ship",
        },
        {
          text: "Set Sail to Abandoned Prison",
        },
      ],
    },
  ],
  G4_5_1: [
    {
      tasks: [
        {
          text: "Find the <span class='text-poe-quest'>Chapel Key</span>",
          condition:
            "TheMindlessSeer has received 30% increased Life Recovery from [Flask|Flasks].",
          show: false,
          hide: true,
        },
        {
          text: "Find the Chapel",
          condition:
            "TheMindlessSeer has received 30% increased Life Recovery from [Flask|Flasks].",
          show: false,
          hide: true,
        },
        {
          text: "Select a Blessing from the Goddess of Justice",
          condition:
            "TheMindlessSeer has received 30% increased Life Recovery from [Flask|Flasks].",
          show: false,
          hide: true,
        },
        {
          text: "Find the entrance to the Solitary Confinement",
          condition: "G4_5_2",
          show: false,
          hide: true,
        },
        {
          text: "Set Sail to Eye of Hinekora",
          condition: "G4_5_2",
          show: true,
          hide: false,
        },
      ],
    },
  ],
  G4_5_2: [
    {
      tasks: [
        {
          text: "Find and Kill <span class='text-poe-unique font-semibold'>The Prisoner</span>",
        },
        {
          text: "Return to Ship",
        },
        {
          text: "Set Sail to Eye of Hinekora",
        },
      ],
    },
  ],
  G4_4_1: [
    {
      tasks: [
        {
          text: "Enter the Passageway",
          condition: "Ahh! There you are!",
          show: false,
          hide: true,
        },
        {
          text: "Speak with Matiki",
          condition: "Now we test your mettle... Rise, warriors of Ngamahu!",
          show: false,
          hide: true,
        },
        {
          text: "Peer into the Well of Passing",
          condition: "Now we test your mettle... Rise, warriors of Ngamahu!",
          show: false,
          hide: true,
        },
        {
          text: "Go through the Trials",
          condition:
            "The Ancestors see you. You are welcome... in our Halls of the Dead.",
          show: false,
          hide: true,
        },
        {
          text: "Pay your respects",
          condition: "TheMindlessSeer has received 5% increased maximum Mana.",
          show: false,
          hide: true,
        },
        {
          text: "Speak with Navali",
          condition: "G4_4_3",
          show: false,
          hide: true,
        },
        {
          text: "Find the entrance to Halls of the Dead",
          condition: "G4_4_3",
          show: false,
          hide: true,
        },
        {
          text: "Portal to Town and Speak with The Hooded One",
          condition: "G4_4_3",
          show: true,
          hide: false,
        },
        {
          text: "Set Sail to Arastas",
          condition: "G4_4_3",
          show: true,
          hide: false,
        },
      ],
    },
  ],
  G4_4_2: [
    {
      tasks: [
        {
          text: "Complete Tawhoa's Test",
          condition:
            "The cycle of life continues. The lone traveller journeys on.",
          show: false,
          hide: true,
        },
        {
          text: "Complete Tasalio's Test",
          condition: "The sea holds many secrets for those who seek.",
          show: false,
          hide: true,
        },
        {
          text: "Complete Ngamahu's Test",
          condition: "The warrior emerges from the caldera, born anew.",
          show: false,
          hide: true,
        },
        {
          text: "Defeat <span class='text-poe-unique font-semibold'>Yama The White</span>",
          condition: "Ahhh! Okay, okay. Yama sees you. You are worthy.",
          show: false,
          hide: true,
        },
        {
          text: "Enter the Trial of the Ancestors",
        },
      ],
    },
  ],
  G4_4_3: [
    {
      tasks: [
        {
          text: "Speak with Navali",
          condition: "You have received 2 Passive Skill Points.",
          show: false,
          hide: true,
        },
        {
          text: "Portal to Town",
        },
        {
          text: "Return to Town and Speak with The Hooded One",
        },
        {
          text: "Set Sail to Arastas",
        },
      ],
    },
  ],
  G4_8a: [
    {
      tasks: [
        {
          text: "Return to Town and Speak with The Hooded One",
        },
      ],
    },
  ],
  G4_8b: [
    {
      tasks: [
        {
          text: "Speak with Missionary Lorandis and follow him",
          condition: "Your timing is quite remarkable, you know!",
          show: false,
          hide: true,
        },
        {
          text: "Explore Arastas and be on the lookout for the Evening Bell",
          condition: "Utopia demands...",
          show: false,
          hide: true,
        },
        {
          text: "Find and Kill <span class='text-poe-unique font-semibold'>Torvian, Hand of the Saviour</span>",
          condition: "Utopia demands...",
          show: false,
          hide: true,
        },
        {
          text: "Enter The Excavation",
          condition: "G4_10",
          show: false,
          hide: true,
        },
        {
          text: "Set Sail to Ngakanu",
          condition: "G4_10",
          show: true,
          hide: false,
        },
      ],
    },
  ],
  G4_2_1: [
    {
      tasks: [
        {
          text: 'Find the <span class="text-poe-quest">Dead Man\'s Chest</span> and take the <span class="text-poe-quest">Ripped Map Piece</span> (Farrow quest)',
          show: false,
          hide: true,
          condition: "G4_2_2",
        },
        {
          text: 'If you have collected all 4 <span class="text-poe-quest">Map Pieces</span> you can travel to Plunderer\'s Point',
          condition: "G4_1_1, G4_2_1, G4_3_1, G4_7",
          show: true,
          hide: false,
        },
        {
          text: "Find the entrance to Journey's End",
          condition: "G4_2_2",
          show: false,
          hide: true,
        },
        {
          text: "Set Sail to Whakapanu Island",
          condition: "G4_2_2",
          show: true,
          hide: false,
        },
      ],
    },
  ],
  G4_2_2: [
    {
      tasks: [
        {
          text: "Speak with Freya Hartlin",
          condition: "Heh heh... thank you kindly... I am finally free!",
          show: false,
          hide: true,
        },
        {
          text: "Click on Karui Totem",
          condition: "Heh heh... thank you kindly... I am finally free!",
          show: false,
          hide: true,
        },
        {
          text: "Survive the Madness",
          condition: "",
        },
        {
          text: "Return to Ship",
          condition: "",
        },
        {
          text: "Set Sail to Whakapanu Island",
          condition: "",
        },
      ],
      prev: "G4_town",
    },
    {
      tasks: [
        {
          text: "Summon Tujen",
          show: false,
          hide: true,
          condition: "Do not... believe his lies...",
        },
        {
          text: "Speak with Tujen",
          condition: "Do not... believe his lies...",
          show: false,
          hide: true,
        },
        {
          text: "Find and Kill <span class='text-poe-unique font-semibold'>Captain Hartun</span>",
          condition: "Do not... believe his lies...",
          show: false,
          hide: true,
        },
        {
          text: "Portal to Town",
          condition: "",
        },
      ],
    },
  ],
  G4_10: [
    {
      tasks: [
        {
          text: "Find and Kill <span class='text-poe-unique font-semibold'>Benedictus, First Herald of Utopia</span>",
          show: false,
          hide: true,
          condition: "Hyaaahhh!",
        },
        {
          text: "Explore the Forge",
          condition: "",
        },
        {
          text: "Portal to Town",
          condition: "",
        },
        {
          text: "Set Sail to Ngakanu",
          condition: "",
        },
      ],
    },
  ],
  G4_11_1b: [
    {
      tasks: [
        {
          text: "Find the entrance to the Heart of the Tribe",
        },
      ],
    },
  ],
  G4_11_2: [
    {
      tasks: [
        {
          text: "Defeat <span class='text-poe-unique font-semibold'>Tavakai, the Fallen</span>",
          show: false,
          hide: true,
          condition: "What... what have I done?",
        },
        {
          text: "Return to Kingsmarch",
          condition: "",
        },
      ],
    },
  ],
  G4_13: [
    {
      tasks: [
        {
          text: "Enter Deserted Post",
          condition: "",
        },
      ],
    },
  ],
  G_Endgame_Town: [
    {
      tasks: [
        {
          text: "",
        },
      ],
    },
  ],
});

const [quotes, setQuotes] = createStore<
  Record<string, Record<string, boolean>>
>({
  G1_1: {
    "Reach... Clearfell... Find the Miller...": true,
    "Well done! Please come inside.": true,
  },
  G1_2: {
    "Good on you.": true,
    "See? I told you we'd make a fine team!": true,
    "TheMindlessSeer has received +10% to [Resistances|Cold Resistance].": true,
  },
  G1_5: {
    "Una: The old magicks still thrive! The way is open. Please, hurry.": true,
    "Keep up the search.": true,
  },
  G1_7: {
    "At last! It's open! Praise the First Ones!": true,
    "I must make them <i>{suffer!} ": true,
    "Together... at last...": true,
  },
  G1_11: {
    "You have received 2 Passive Skill Points.": true,
  },
  G1_12: {
    "Find me, Maji... return to my embrace...": true,
  },
  G1_15: {
    "TheMindlessSeer has received +20 to maximum Life.": true,
    "Allow me to clear your mind, if only for a moment.": true,
  },
  G2_3: {
    "Hold them back while I open the gate!": true,
    "We will finish this, but not today.": true,
  },
  G2_4_1: {
    "You have received 2 Passive Skill Points.": true,
  },
  G2_4_3: {
    "She didn't... want me...": true,
    "At last... death... Thank you...": true,
  },
  G2_6: {
    "TheMindlessSeer has received 30% increased [Charm] Charges gained.": true,
  },
  G2_9_2: {
    "TheMindlessSeer has received 30% increased [Charm] Charges gained.": true,
  },
  G3_3: {
    "You have received 2 Passive Skill Points.": true,
  },
  G3_6_1: {
    "TheMindlessSeer has received +10% to [Resistances|Fire Resistance].": true,
  },
  G4_1_1: {
    G4_1_2: true,
    "Set Sail to Whakapanu Island": true,
    "G4_1_1, G4_2_1, G4_3_1, G4_7": true,
  },
  G4_town: {
    G4_1_2: true,
    G4_3_2: true,
    G4_7: true,
    G4_5_2: true,
    "G4_3_2, ": true,
    "G4_3_2, G4_7": true,
    "": true,
    G4_4_3: true,
    G4_2_1: true,
    G4_10: true,
    G4_11_2: true,
  },
  G4_3_1: {
    G4_3_2: true,
    "G4_1_1, G4_2_1, G4_3_1, G4_7": true,
  },
  G4_5_1: {
    "TheMindlessSeer has received 30% increased Life Recovery from [Flask|Flasks].": true,
    G4_5_2: true,
  },
  G4_4_1: {
    "Ahh! There you are!": true,
    "Now we test your mettle... Rise, warriors of Ngamahu!": true,
    "The Ancestors see you. You are welcome... in our Halls of the Dead.": true,
    "TheMindlessSeer has received 5% increased maximum Mana.": true,
    G4_4_3: true,
  },
  G4_4_2: {
    "The cycle of life continues. The lone traveller journeys on.": true,
    "The sea holds many secrets for those who seek.": true,
    "The warrior emerges from the caldera, born anew.": true,
    "Ahhh! Okay, okay. Yama sees you. You are worthy.": true,
  },
  G4_4_3: {
    "You have received 2 Passive Skill Points.": true,
  },
  G4_8b: {
    "Your timing is quite remarkable, you know!": true,
    "Utopia demands...": true,
    G4_10: true,
  },
  G4_2_2: {
    "Do not... believe his lies...": true,
    "Heh heh... thank you kindly... I am finally free!": true,
  },
  G4_2_1: {
    G4_2_2: true,
    "G4_1_1, G4_2_1, G4_3_1, G4_7": true,
  },
  G4_7: {
    "G4_1_1, G4_2_1, G4_3_1, G4_7": true,
  },
  G4_10: {
    "Hyaaahhh!": true,
    Hyaaahhh: true,
  },
  G4_11_2: {
    "What... what have I done?": true,
  },
  P1_1: {
    P1_2: true,
  },
  P1_4: {
    P1_5: true,
  },
  P1_Town: {
    P1_4: true,
    P1_6: true,
  },
  P3_2: {
    "TheMindlessSeer has received +40 to [Spirit|Spirit].": true,
  },
  P3_3: {
    P3_4: true,
  },
  P3_Town: {
    P3_3: true,
    P3_4: true,
  },
  P2_1: {
    "TheMindlessSeer has received 5% increased maximum Life.": true,
  },
});

const addTown = (town: string) => {
  if (!guide[town]) {
    setGuide(town, [
      {
        tasks: [{ text: "" }],
      },
    ]);
  }
};

const addGroup = (zone: string) => {
  setGuide(
    produce((s) => {
      s[zone].push({
        tasks: [],
      });
    }),
  );
};

const moveGroupUp = (zone: string, groupIndex: number) => {
  setGuide(
    produce((s) => {
      const groups = s[zone];

      if (groupIndex > 0) {
        [groups[groupIndex - 1], groups[groupIndex]] = [
          groups[groupIndex],
          groups[groupIndex - 1],
        ];
      }
    }),
  );

  saveGuide();
};

const moveGroupDown = (zone: string, groupIndex: number) => {
  setGuide(
    produce((s) => {
      const groups = s[zone];

      if (groupIndex < groups.length - 1) {
        [groups[groupIndex + 1], groups[groupIndex]] = [
          groups[groupIndex],
          groups[groupIndex + 1],
        ];
      }
    }),
  );

  saveGuide();
};

const deleteZone = (zone: string, index: number) => {
  setGuide(
    produce((s) => {
      s[zone].splice(index, 1);
    }),
  );
};

const addTask = (zone: string, zoneIndex: number) => {
  setGuide(
    produce((s) => {
      s[zone][zoneIndex].tasks.push({ text: "", condition: "" });
    }),
  );
};

const removeTask = (zone: string, zoneIndex: number, taskIndex: number) => {
  setGuide(
    produce((s) => {
      s[zone][zoneIndex].tasks.splice(taskIndex, 1);
    }),
  );
};

const changeTask = (
  zone: string,
  zoneIndex: number,
  taskIndex: number,
  text: string,
) => {
  setGuide(
    produce((s) => {
      s[zone][zoneIndex].tasks[taskIndex].text = text;
    }),
  );

  saveGuide();
};

const moveTaskUp = (zone: string, zoneIndex: number, taskIndex: number) => {
  setGuide(
    produce((s) => {
      const tasks = s[zone][zoneIndex].tasks;

      if (taskIndex > 0) {
        [tasks[taskIndex - 1], tasks[taskIndex]] = [
          tasks[taskIndex],
          tasks[taskIndex - 1],
        ];
      }
    }),
  );

  saveGuide();
};

const moveTaskDown = (zone: string, zoneIndex: number, taskIndex: number) => {
  setGuide(
    produce((s) => {
      const tasks = s[zone][zoneIndex].tasks;

      if (taskIndex < tasks.length - 1) {
        [tasks[taskIndex + 1], tasks[taskIndex]] = [
          tasks[taskIndex],
          tasks[taskIndex + 1],
        ];
      }
    }),
  );

  saveGuide();
};

const changeAction = (
  zone: string,
  zoneIndex: number,
  taskIndex: number,
  action: string,
) => {
  setGuide(
    produce((s) => {
      if (action == "Show") {
        s[zone][zoneIndex].tasks[taskIndex].show = true;
        s[zone][zoneIndex].tasks[taskIndex].hide = false;
      }

      if (action == "Hide") {
        s[zone][zoneIndex].tasks[taskIndex].show = false;
        s[zone][zoneIndex].tasks[taskIndex].hide = true;
      }
    }),
  );
};

const changeDoneQuote = (
  zone: string,
  zoneIndex: number,
  taskIndex: number,
  text: string,
) => {
  setGuide(
    produce((s) => {
      s[zone][zoneIndex].tasks[taskIndex].condition = text;
    }),
  );
  if (!quotes?.[zone]?.[text]) {
    setQuotes(zone, {});
    setQuotes(zone, text, true);
  }

  saveGuide();
};

const changePrev = (zone: string, zoneIndex: number, text: string) => {
  setGuide(
    produce((s) => {
      s[zone][zoneIndex].prev = text;
    }),
  );
};

const changePreq = (zone: string, zoneIndex: number, text: string) => {
  setGuide(
    produce((s) => {
      s[zone][zoneIndex].preq = text === "" ? [] : text.split(", ");
    }),
  );
};

const saveGuide = () => {
  localStorage.setItem("guide", JSON.stringify(guide));
  localStorage.setItem("quotes", JSON.stringify(quotes));
};

const loadGuide = () => {
  const g = localStorage.getItem("guide");
  if (g) setGuide(reconcile(JSON.parse(g)));

  const q = localStorage.getItem("quotes");
  if (q) setQuotes(reconcile(JSON.parse(q)));
};

export {
  quotes,
  guide,
  addTown,
  deleteZone,
  addGroup,
  moveGroupUp,
  moveGroupDown,
  addTask,
  removeTask,
  changeTask,
  moveTaskUp,
  moveTaskDown,
  changeAction,
  changeDoneQuote,
  changePrev,
  changePreq,
  saveGuide,
  loadGuide,
};
