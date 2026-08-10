import { open } from "@tauri-apps/plugin-dialog";
import { save } from "@tauri-apps/plugin-dialog";
import { readTextFile, writeTextFile } from "@tauri-apps/plugin-fs";
import { createStore, produce, reconcile } from "solid-js/store";

export interface Guide {
  progress?: number;
  prev?: string;
  preq?: string[];
  tasks: {
    text: string;
    reward?: string;
    show?: boolean;
    hide?: boolean;
    condition?: string;
  }[];
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
          text: "<span class='text-info italic'>Directions: Follow the river upstream</span>",
          hide: true,
          condition: "Well done! Please come inside.",
        },
        {
          text: "Kill <span class='text-poe-unique font-semibold'>The Bloated Miller</span>",
          hide: true,
          condition: "Well done! Please come inside.",
        },
        { text: "Enter Clearfell Encampment" },
      ],
    },
  ],
  G1_town: [
    {
      tasks: [{ text: "Travel to Kingsmarch (Act 4)" }],
      preq: ["G4_town"],
    },
    {
      tasks: [
        {
          text: "Travel to the Sandswept Marsh (Act 3)",
          hide: true,
          condition: "G3_town",
        },
        {
          text: "Travel to the Ziggurat Encampment (Act 3)",
          show: true,
          condition: "G3_town",
        },
      ],

      preq: ["G3_1"],
    },
    {
      tasks: [
        {
          text: "Travel to the Vastiri Outskirts (Act 2)",
          hide: true,
          condition: "G2_town",
        },
        {
          text: "Travel to The Ardura Caravan (Act 2)",
          show: true,
          condition: "G2_town",
        },
      ],

      preq: ["G2_1"],
    },
    {
      prev: "G1_15",
      tasks: [{ text: "Speak to Una, Leitis, Farrow and The Hooded One" }],
    },
    {
      tasks: [{ text: "Return to the Ogham Manor" }],

      preq: ["G1_15"],
    },
    {
      tasks: [{ text: "Return to The Manor Ramparts" }],
      preq: ["G1_14"],
    },
    {
      tasks: [{ text: "Return to Ogham Village" }],
      preq: ["G1_13_2"],
    },
    {
      tasks: [{ text: "Return to Ogham Farmlands" }],
      preq: ["G1_13_1"],
    },
    {
      prev: "G1_12",
      tasks: [
        { text: "Speak with Finn" },
        { text: "Return to the Hunting Grounds" },
      ],
    },
    {
      tasks: [{ text: "Return to the Hunting Grounds" }],
      preq: ["G1_11"],
    },
    {
      tasks: [{ text: "Return to the Cemetery of the Eternals" }],
      preq: ["G1_7"],
    },
    {
      prev: "G1_5",
      tasks: [{ text: "Speak to Renly" }, { text: "Travel to The Grelwood" }],
    },
    { prev: "G1_4", tasks: [{ text: "Return to The Grelwood" }] },
    {
      tasks: [{ text: "Return to The Grelwood" }],
      prev: "G1_3",
      preq: ["G1_4"],
    },
    {
      tasks: [{ text: "Return to The Grelwood" }],
      prev: "G1_2",
      preq: ["G1_4"],
    },
    {
      tasks: [{ text: "Speak to Una" }, { text: "Travel to The Grim Tangle" }],
      preq: ["G1_5", "G1_6"],
    },
    {
      tasks: [{ text: "Return to The Red Vale" }],
      preq: ["G1_5"],
    },
    {
      tasks: [{ text: "Return to The Grelwood" }],
      preq: ["G1_4"],
    },
    {
      tasks: [{ text: "Return to Clearfell" }],
      preq: ["G1_2"],
    },
    {
      tasks: [
        { text: "Speak to Renly" },
        { text: "Cut the Uncut Skill Gem" },
        { text: "Enter Clearfell" },
      ],
    },
  ],
  G1_2: [
    {
      tasks: [
        {
          text: "Speak with Farrow",
          hide: true,
          condition: "Thanks for the help.",
        },
        {
          text: "Complete the Ezomyte Remnant",
          hide: true,
          condition: "See? I told you we'd make a fine team!",
          reward: "Orb of Augmentation",
        },
        {
          text: "<span class='text-warning italic'>Optional: Find the Mysterious Campsite</span>",
          reward: "Uncut Skill Gem (Level 1)",
        },
        {
          text: "Kill <span class='text-poe-unique font-semibold'>Beira of the Rotten Pack</span>",
          reward: '<span class="text-poe-quest">+10% to Cold Resistance</span>',
          hide: true,
          condition:
            "Character has received +10% to [Resistances|Cold Resistance].",
        },
        { text: "Find the entrance to The Grelwood" },
      ],
    },
  ],
  G1_3: [
    {
      tasks: [
        {
          text: "<span class='text-warning italic'>Optional: Kill <span class='text-poe-unique font-semibold'>The Devourer</span></span>",
          reward: "Uncut Skill Gem (Level 2)",
        },
      ],
    },
  ],
  G1_4: [
    {
      preq: ["G1_6", "G1_11", "G1_13_1"],
      tasks: [{ text: "Summon Farrow and Enter the Lost Catacombs" }],
    },
    {
      tasks: [
        {
          text: "<span class='text-info italic'>Directions: The points of interest are arranged in a diamond shape</span>",
        },
        {
          text: "<span class='text-warning italic'>Optional: Find the Areagne's Hut</span>",
          reward: "Medium Life and Mana Flasks",
        },
        {
          text: "<span class='text-warning italic'>Optional: Kill Areagne, Forgotten Witch</span>",
          reward: "Uncut Support Gem (Level 1)",
        },
        {
          text: "<span class='text-warning italic'>Optional: Kill <span class='text-poe-unique font-semibold'>The Brambleghast</span></span>",
          reward: "Uncut Skill Gem (Level 2)",
        },
        {
          text: "Find the Waypoint near the Tree of Souls",
          hide: true,
          condition: "G1_5",
        },
        {
          text: "Find the entrance to The Red Vale",
          hide: true,
          condition: "G1_5",
        },
        {
          text: "<span class='text-info italic'>Directions: If you find the river follow it upstream to find The Red Vale</span>",
          condition: "G1_5",
          hide: true,
        },
        {
          text: "Break the Runic Seals on the Tree of Souls",
          condition: "G1_5, G1_town",
          show: true,
        },
        {
          text: "Find The Grim Tangle",
          condition: "G1_5, G1_town",
          show: true,
        },
      ],
    },
  ],
  G1_5: [
    {
      tasks: [
        {
          text: "<span class='text-warning italic'>Optional: Click on Refined Arms</span>",
          reward: "Weapons",
        },
        { text: "Complete all 3 Obelisk of Rust" },
        { text: "Portal to Town" },
      ],
    },
  ],
  G1_6: [
    {
      preq: ["G1_5"],
      tasks: [
        {
          text: "Portal to Town",
          condition:
            "The old magicks still thrive! The way is open. Please, hurry.",
          hide: true,
        },
        {
          text: "Summon and Speak to Una",
          hide: true,
          condition:
            "The old magicks still thrive! The way is open. Please, hurry.",
        },
        {
          text: "<span class='text-warning italic'>Optional: Use Respawn at Checkpoint to Skip the Animation</span>",
          hide: true,
          condition:
            "The old magicks still thrive! The way is open. Please, hurry.",
        },
        {
          text: "Find the Runestones",
          hide: true,
          condition: "Keep up the search.",
          reward: "Farrow Quest",
        },
        {
          text: "<span class='text-warning italic'>Optional: Kill <span class='text-poe-unique font-semibold'>The Rotten Druid</span></span>",
          reward: "Uncut Support Gem (Level 1)",
        },
        { text: "Find the entrance to the Cemetery of the Eternals" },
      ],
    },
    {
      tasks: [
        { text: "Light up the Waypoint" },
        { text: "Go back to The Grelwood" },
        { text: "Find the entrance to The Red Vale" },
      ],
    },
  ],
  G1_7: [
    { prev: "G1_11", tasks: [{ text: "Enter Hunting Grounds" }] },
    {
      preq: ["G1_8", "G1_9"],
      tasks: [
        {
          text: "Open the Memorial Gate",
          hide: true,
          condition: "At last! It's open! Praise the First Ones!",
        },
        {
          text: "<span class='text-warning italic'>Optional: Use Respawn at Checkpoint to Skip the Animation</span>",
          hide: true,
          condition: "I must make them <i>{suffer!} ",
        },
        {
          text: "Kill <span class='text-poe-unique font-semibold'>Lachlann of Endless Lament</span>",
          hide: true,
          condition: "Together... at last...",
        },
        { text: "Enter Hunting Grounds" },
      ],
    },
    {
      tasks: [
        {
          text: "<span class='text-warning italic'>Optional: Find the Sarcophagus</span>",
          reward: "Normal Rarity Ring",
        },
        {
          text: "Find Tomb of the Consort",
          hide: true,
          condition: "G1_9",
        },
        {
          text: "Find Mausoleum of the Praetor",
          hide: true,
          condition: "G1_8",
        },
      ],
    },
  ],
  G1_8: [
    {
      tasks: [
        {
          text: "<span class='text-warning italic'>Optional: Find the Forgotten Riches</span>",
          reward: "Gold",
        },
        {
          text: "Defeat <span class='text-poe-unique font-semibold'>Draven, the Eternal Praetor</span>",
        },
        { text: "Return to the Cemetery of the Eternals" },
      ],
    },
  ],
  G1_9: [
    {
      tasks: [
        {
          text: "<span class='text-warning italic'>Optional: Find the Haunted Treasure</span>",
          reward: "Uncut Support Gem (Level 1)",
        },
        {
          text: "Defeat <span class='text-poe-unique font-semibold'>Asinia, the Praetor's Consort</span>",
        },
        { text: "Return to the Cemetery of the Eternals" },
      ],
    },
  ],
  G1_11: [
    {
      tasks: [
        {
          text: "<span class='text-info italic'>Directions: The points of interest are in the corners</span>",
        },
        {
          text: "<span class='text-warning italic'>Optional: Find the Dryadic Ritual</span>",
          reward: "Uncut Support Gem (Level 1)",
        },
        {
          text: "<span class='text-warning italic'>Optional: Complete Ritual Altar</span>",
          reward: "Uncut Skill Gem (Level 4)",
          hide: true,
          condition: "Well, this is ominous.",
        },
        {
          text: "Kill <span class='text-poe-unique font-semibold'>Crowbell</span>",
          hide: true,
          condition: "You have received 2 Passive Skill Points.",
          reward:
            "<span class='text-poe-quest'>+2 Weapon Set Skill Points</span>",
        },
        {
          text: "Find the entrance to Freythorn",
          hide: true,
          condition: "G1_12",
        },
        {
          text: "Find the Runestones",
          hide: true,
          condition: "Good work!",
          reward: "Farrow Quest",
        },
        {
          text: "Find the Ogham Farmlands",
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
          text: " <span class='text-info italic'>Directions: After compliting a Ritual trails of locusts will point to the remaining ones</span>",
          hide: true,
          condition: "Find me, Maji... return to my embrace...",
        },
        {
          text: "Defeat <span class='text-poe-unique font-semibold'>King of the Mists</span>",
          reward: "<span class='text-poe-quest'>+30 to Maximum Spirit</span>",
          hide: true,
          condition: "Character has received +30 to [Spirit|Spirit].",
        },
        { text: "Portal to Town" },
      ],
    },
  ],
  G1_13_1: [
    {
      tasks: [
        {
          text: 'Find <span class="text-poe-quest">Una\'s Lute</span>',
          reward:
            "<span class='text-poe-quest'>+2 Weapon Set Skill Points</span>",
        },
        {
          text: "<span class='text-warning italic'>Optional: Find Crop Circle</span>",
          reward: "Uncut Skill Gem (Level 4)",
        },
        {
          text: "Find the Runestones",
          reward: "Farrow Quest",
          condition: "That's it! The last one!",
          hide: true,
        },
        {
          text: '<span class="text-info italic">If you have found all 3 Runestones sites you can go back to The Grelwood and enter the Lost Catacombs</span>',
        },
        { text: "Find the entrance to the Ogham Village" },
      ],
    },
  ],
  G1_13_2: [
    {
      tasks: [
        {
          text: "Find the <span class='text-poe-quest'>Smithing Tools</span>",
          reward: "Unlocks Salvage Bench",
        },
        {
          text: "<span class='text-warning italic'>Optional: Find Blacksmith's Chest</span>",
          reward: "<span class='text-poe-quest'>Blank Rune</span>",
        },
        {
          text: "Kill <span class='text-poe-unique font-semibold'>The Executioner</span>",
        },
        { text: "Pull the Leaver" },
        { text: "Enter The Manor Ramparts" },
      ],
    },
  ],
  G1_14: [
    {
      tasks: [
        {
          text: "<span class='text-info italic'>Directions: The zone has a U-shape</span>",
        },
        {
          text: "<span class='text-warning italic'>Optional: Find The Gallows</span>",
          reward: "Uncut Support Gem (Level 1)",
        },
        { text: "Find the entrance to Ogham Manor" },
      ],
    },
  ],
  G1_15: [
    {
      tasks: [
        {
          text: "Kill <span class='text-poe-unique font-semibold'>Candlemass, The Living Rite</span>",
          hide: true,
          condition: "Character has received +20 to maximum Life.",
          reward: "<span class='text-poe-quest'>+20 to Maximum Life</span>",
        },
        {
          text: "<span class='text-info italic'>Directions: Go Down Stairs until you can take the Take the Elevator</span>",
          hide: true,
          condition: "Allow me to clear your mind, if only for a moment.",
        },
        {
          text: "Defeat <span class='text-poe-unique font-semibold'>Count Geonor</span>",
          hide: true,
          condition: "Allow me to clear your mind, if only for a moment.",
        },
        { text: "Portal to Town" },
      ],
    },
  ],
  G2_1: [
    {
      tasks: [
        {
          text: "<span class='text-warning italic'>Optional: Find the Raided Camp</span>",
          reward: "Gold",
        },
        {
          text: "Kill <span class='text-poe-unique font-semibold'>The Rathbreaker</span>",
        },
        { text: "Portal to Town" },
        { text: "Speak with Zarka" },
        { text: "Enter The Ardura Caravan" },
      ],
    },
  ],
  G2_town: [
    {
      tasks: [{ text: "Travel to Kingsmarch (Act 4)" }],

      preq: ["G4_town"],
    },
    {
      tasks: [
        {
          text: "Travel to the Sandswept Marsh (Act 3)",
          hide: true,
          condition: "G3_town",
        },
        {
          text: "Travel to the Ziggurat Encampment (Act 3)",
          show: true,
          condition: "G3_town",
        },
      ],

      preq: ["G3_1"],
    },
    {
      prev: "G2_12",
      tasks: [
        { text: "Exit the Caravan and Speak with The Hooded One" },
        {
          text: "<span class='text-warning italic'>Optional: Relog to Return to the Caravan</span>",
        },
        { text: "Speak with Sekhema Asala" },
      ],
    },
    {
      tasks: [{ text: "Return to Dreadnought" }],

      preq: ["G2_12"],
    },
    {
      prev: "G2_9_2",
      tasks: [
        { text: "Speak with Shambrin" },
        { text: "Use the Desert Map and travel to The Dreadnought" },
      ],
    },
    {
      tasks: [{ text: "Return to The Spires of Deshar" }],

      preq: ["G2_9_2"],
    },
    {
      tasks: [{ text: "Return to Path of Mourning" }],

      preq: ["G2_9_1"],
    },
    {
      tasks: [{ text: "Return to Deshar" }],

      preq: ["G2_8"],
    },
    {
      prev: "G2_7",
      tasks: [
        { text: "Speak with Zarka" },
        { text: "Use the Desert Map and travel to Traitor's Passage" },
        { text: "Use the Horn of the Vastiri" },
        { text: "Use the Desert Map and travel to Deshar" },
      ],
    },
    {
      tasks: [{ text: "Return to The Titan Grotto" }],

      preq: ["G2_7"],
    },
    {
      tasks: [{ text: "Return to Valley of the Titans" }],

      preq: ["G2_6"],
    },
    {
      prev: "G2_4_3",
      tasks: [
        { text: "Speak with Zarka" },
        { text: "Use the Desert Map and travel to Valley of the Titans" },
      ],
    },
    {
      tasks: [{ text: "Return to the Buried Shrines" }],

      preq: ["G2_4_3"],
    },
    {
      tasks: [{ text: "Return to The Lost City" }],

      preq: ["G2_4_2"],
    },
    {
      tasks: [{ text: "Return to Keth" }],

      preq: ["G2_4_1"],
    },
    {
      prev: "G2_5_2",
      tasks: [
        { text: "Speak with Zarka" },
        { text: "Use the Desert Map and travel to Keth" },
      ],
    },
    {
      tasks: [{ text: "Return to The Bone Pits" }],

      preq: ["G2_5_2"],
    },
    {
      tasks: [{ text: "Return to Mastodon Badlands" }],

      preq: ["G2_5_1"],
    },
    {
      prev: "G2_3",
      tasks: [
        { text: "Speak with Zarka" },
        { text: "Use the Desert Map and travel to Mastodon Badlands" },
      ],
    },
    {
      tasks: [{ text: "Return to The Halani Gates" }],

      preq: ["G2_3"],
    },
    {
      tasks: [{ text: "Return to Traitor's Passage" }],
      preq: ["G2_2"],
    },
    {
      prev: "G2_10_2",
      tasks: [
        { text: "Speak with Risu and Sekhema Asala" },
        { text: "Use the Desert Map and travel to Traitor's Passage" },
      ],
    },
    {
      tasks: [{ text: "Return to the Mawdun Mine" }],
      preq: ["G2_10_2"],
    },
    {
      tasks: [{ text: "Return to the Mawdun Quarry" }],
      preq: ["G2_10_1"],
    },
    {
      tasks: [{ text: "Use the Desert Map and travel to Mawdun Quarry" }],
      preq: ["G2_3a"],
    },
    {
      tasks: [
        { text: "Speak with Sekhema Asala" },
        { text: "Use the Desert Map and travel to Halani Gates" },
      ],
    },
  ],
  G2_3a: [
    {
      tasks: [{ text: "Speak with Sekhema Asala" }, { text: "Portal to Town" }],
    },
  ],
  G2_10_1: [
    {
      tasks: [
        {
          text: "<span class='text-warning italic'>Optional: Find the Faridun War Cache</span>",
          reward: "Artificer's Orb",
        },
        { text: "Find the entrance to the Mawdun Mine" },
      ],
    },
  ],
  G2_10_2: [
    {
      tasks: [
        {
          text: "<span class='text-warning italic'>Optional: Use Respawn at Checkpoint to Skip the Animation</span>",
        },
        {
          text: "<span class='text-info italic'>Directions: Boss is located on top-right of the map</span>",
        },
        {
          text: "Kill <span class='text-poe-unique font-semibold'>Rudja, the Dread Engineer</span>",
        },
        { text: "Speak with Risu", reward: "cage top-left" },
        { text: "Portal to Town" },
      ],
    },
  ],
  G2_2: [
    {
      tasks: [
        {
          text: "<span class='text-warning italic'>Optional: Find the Bell Chest</span>",
          reward: "Uncut Skill Gem (Level 6)",
        },
        { text: "Find Forgotten Prison of the Traitor" },
        {
          text: "Kill <span class='text-poe-unique font-semibold'>Balbala, the Traitor</span>",
          reward: "<span class='text-poe-quest'>Balbala's Barya</span>",
        },
        { text: "Find the entrance to The Halani Gates" },
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
          text: "<span class='text-info italic'>Directions: Follow the Wall</span>",
          hide: true,
          condition: "We will finish this, but not today.",
        },
        {
          text: "Defeat <span class='text-poe-unique font-semibold'>Jamanra, the Risen King</span>",
          hide: true,
          condition: "We will finish this, but not today.",
        },
        { text: "Go downstairs" },
        { text: "Portal to Town" },
      ],
    },
  ],
  G2_5_1: [
    {
      tasks: [
        {
          text: "<span class='text-warning italic'>Optional: Complete the Abyss</span>",
          reward: "XP",
        },
        {
          text: "<span class='text-warning italic'>Optional: Find the Fossilised Memorial</span>",
          reward: "Uncut Support Gem (Level 2)",
        },
        { text: "Find the Lightless Passage", reward: "The Well of Souls" },
        { text: "Find the entrance to The Bone Pits" },
      ],
    },
  ],
  G2_5_2: [
    {
      tasks: [
        {
          text: "Find the Runestones",
          hide: true,
          condition:
            "Well done! Now... there's still more to find... keep searching!",
          reward: "Farrow Quest",
        },
        { text: "Find the <span class='text-poe-quest'>Sun Clan Relic</span>" },
        {
          text: "Kill <span class='text-poe-unique font-semibold'>Iktab and Ekbab</span>",
        },
        { text: "Portal to Town" },
      ],
    },
  ],
  G2_4_1: [
    {
      tasks: [
        {
          text: "<span class='text-warning italic'>Optional: Find The Shrine of Hotak</span>",
          reward: "<span class='text-poe-magic'>Magic Amulet</span>",
        },
        {
          text: "Find the Runestones",
          reward: "Farrow Quest",
          hide: true,
          condition: "Well done!",
        },
        {
          text: "Kill <span class='text-poe-unique font-semibold'>Kabala, Constrictor Queen</span>",
          hide: true,
          condition: "You have received 2 Passive Skill Points.",
          reward:
            "<span class='text-poe-quest'>+2 Weapon Set Skill Points</span>",
        },
        {
          text: "Find the <span class='text-poe-quest'>Kabala Clan Relic</span>",
        },
        { text: "Find the entrance to The Lost City" },
      ],
    },
  ],
  G2_4_2: [
    {
      tasks: [
        {
          text: "<span class='text-warning italic'>Optional: Find the Golden Tomb</span>",
          reward: "Uncut Spirit Gem (Level 7)",
        },
        { text: "Find the entrance to the Buried Shrines" },
      ],
    },
  ],
  G2_4_3: [
    {
      tasks: [
        {
          text: "<span class='text-warning italic'>Optional: Find the Elemental Offering</span>",
          reward:
            "<span class='text-poe-magic'>Magic Elemental Ring + Lesser Rune</span>",
        },
        {
          text: "<span class='text-warning italic'>Optional: Find the Suspicious Sarcophagus</span>",
          reward: "Uncut Support Gem (Level 2)",
        },
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
        { text: "Open a Portal" },
        {
          text: "Take <span class='text-poe-quest'>The Essence of Water</span>",
        },
        { text: "Portal to Town" },
      ],
    },
  ],
  G2_6: [
    {
      tasks: [
        {
          text: "<span class='text-warning italic'>Optional: Complete the Abyss</span>",
          reward: "XP",
        },
        { text: "Find and Activate all Ancient Seals" },
        {
          text: "Find the Offering to Amrit and Insert the <span class='text-poe-quest'>Relics</span>",
          hide: true,
          condition:
            "Character has received 30% increased [Charm] Charges gained.",
        },
        { text: "Return to the Clasped Entry" },
        { text: "Enter The Titan Grotto" },
      ],
    },
  ],
  G2_7: [
    {
      tasks: [
        {
          text: "<span class='text-warning italic'>Optional: Find the Titan's Sword</span>",
          reward: "Lesser Rune",
        },
        {
          text: "Kill <span class='text-poe-unique font-semibold'>Zalmarath, the Colossus</span>",
        },
        { text: "Pick up <span class='text-poe-quest'>The Flame Ruby</span>" },
        { text: "Portal to Town" },
      ],
    },
  ],
  G2_8: [
    {
      tasks: [
        {
          text: "<span class='text-warning italic'>Optional: Find the The Forgotten Hollow</span>",
          reward: "Artificer's Orb",
        },
        {
          text: "<span class='text-warning italic'>Optional: Find the Forgotten Corpses</span>",
          reward: "Djinn Barya",
        },
        {
          text: "Find the Runestones",
          reward: "Farrow Quest",
          hide: true,
          condition: "There we go!",
        },
        {
          text: '<span class="text-info italic">If you have found all 3 Runestones you can now travel to the Skull of the Titan using the Ardura Caravan</span>',
        },
        {
          text: "Find the <span class='text-poe-quest'>Fallen Dekhara</span>",
          reward:
            "<span class='text-poe-quest'>+2 Weapon Set Skill Points</span>",
        },
        { text: "Find the entrance to Path of Mourning" },
      ],
    },
  ],
  G2_9_1: [
    {
      tasks: [
        {
          text: "<span class='text-warning italic'>Optional: Find the Hushed Urn</span>",
          reward: "Uncut Skill Gem (Level 8)",
        },
        { text: "Find the entrance to The Spires of Deshar" },
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
            "Character has received +10% to [Resistances|Lightning Resistance].",
          reward:
            "<span class='text-poe-quest'>+10% to Lightning Resistance</span>",
        },
        {
          text: "Kill <span class='text-poe-unique font-semibold'>Tor Gul, the Defiler</span>",
        },
        { text: "Portal to Town" },
      ],
    },
  ],
  G2_12_1: [
    { tasks: [{ text: "Find the entrance to the Dreadnought Vanguard" }] },
  ],
  G2_12_2: [
    {
      tasks: [
        {
          text: "Kill <span class='text-poe-unique font-semibold'>Jamanra, the Risen King</span>",
        },
        { text: "Speak Sekhema Asala" },
        { text: "Portal to Town" },
      ],
    },
  ],
  G3_1: [
    {
      tasks: [
        {
          text: "<span class='text-warning italic'>Optional: Kill <span class='text-poe-unique font-semibold'>Rootdredge</span></span>",
          reward: "Uncut Skill Gem (Level 9)",
        },
        {
          text: "<span class='text-warning italic'>Optional: Find the Orok Campfire</span>",
          reward: "Lesser Jeweller's Orb",
        },
        {
          text: "<span class='text-warning italic'>Optional: Find the Hanging Tree</span>",
          reward: "<span class='text-poe-magic'>Magic Ring</span>",
        },
        { text: "Find the entrance to Ziggurat Encampment" },
      ],
    },
  ],
  G3_town: [
    {
      tasks: [{ text: "Travel to Kingsmarch (Act 4)" }],
      preq: ["G4_town"],
    },
    {
      tasks: [
        { text: "Speak with Doryani" },
        { text: "Speak with Alva and Travel to Kingsmarch" },
      ],
      prev: "G3_17",
    },
    {
      tasks: [{ text: "Return to The Black Chambers" }],
      preq: ["G3_17"],
    },
    {
      tasks: [{ text: "Return to the Aggorat" }],
      preq: ["G3_16"],
    },
    {
      tasks: [{ text: "Return to the Utzaal " }],
      preq: ["G3_14"],
    },
    {
      tasks: [
        { text: "Speak with Servi" },
        { text: "Use the Gateway" },
        {
          text: "<span class='text-info italic'>Directions: Go downstairs</span>",
        },
        { text: "Enter the Utzaal" },
      ],
      prev: "G3_12",
    },
    {
      tasks: [{ text: "Return to the Temple of Kopec" }],
      preq: ["G3_12"],
    },
    {
      tasks: [
        {
          text: "<span class='text-info italic'>Directions: Go downstairs</span>",
        },
        {
          text: "Use the <span class='text-poe-quest'>Temple Door Idol</span>",
        },
        { text: "Enter the Temple of Kopec" },
      ],
      prev: "G3_11",
    },
    {
      tasks: [{ text: "Return to the Apex of Filth" }],
      preq: ["G3_11"],
    },
    {
      tasks: [
        { text: "Speak with Oswald" },
        { text: "Return to The Drowned City" },
      ],
      prev: "G3_9",
    },
    {
      tasks: [{ text: "Return to The Drowned City" }],
      preq: ["G3_8"],
    },
    {
      tasks: [
        {
          text: "<span class='text-info italic'>Directions: Go downstairs</span>",
        },
        { text: "Speak with Alva" },
        { text: "Enter The Drowned City" },
      ],

      prev: "G3_2_2",
    },
    { prev: "G3_7", tasks: [{ text: "Travel back to The Matlan Waterways" }] },
    {
      tasks: [{ text: "Return to The Matlan Waterways" }],

      preq: ["G3_2_2"],
    },
    { tasks: [{ text: "Travel to the Jungle Ruins" }], prev: "G3_6_2" },
    {
      tasks: [{ text: "Return to the Jiquani's Sanctum" }],
      preq: ["G3_6_2"],
    },
    {
      tasks: [{ text: "Return to the Jiquani's Machinarium" }],
      preq: ["G3_6_1"],
    },
    {
      tasks: [{ text: "Return to the Chimeral Wetlands" }],
      preq: ["G3_5"],
    },
    {
      tasks: [{ text: "Return to the Infested Barrens" }],
      preq: ["G3_2_1"],
    },
    { tasks: [{ text: "Return to the Jungle Ruins" }], preq: ["G3_3"] },
    { tasks: [{ text: "Enter the Jungle Ruins", reward: "located top-left" }] },
  ],
  G3_3: [
    {
      preq: ["G3_6_2"],
      tasks: [
        {
          text: "Activate the Stone Altar using the <span class='text-poe-quest'>Large Soul Core</span>",
        },
        { text: "Enter The Matlan Waterways" },
      ],
    },
    {
      tasks: [
        {
          text: "Find the Runestones",
          reward: "Farrow Quest",
          hide: true,
          condition: "Nice spotting!",
        },
        {
          text: "Find the entrance to The Venom Crypts",
          hide: true,
          condition: "G3_4",
          reward: "near the waypoint",
        },
        {
          text: "Kill the <span class='text-poe-unique font-semibold'>Mighty Silverfist</span>",
          hide: true,
          condition: "You have received 2 Passive Skill Points.",
          reward:
            "<span class='text-poe-quest'>+2 Weapon Set Skill Points</span>",
        },
        {
          text: "<span class='text-info italic'>Directions: If you find the Camp of Explorers helping them will show you the entrance to the Infested Barrens</span>",
        },
        { text: "Find the entrance to the Infested Barrens" },
      ],
    },
  ],
  G3_4: [
    {
      tasks: [
        {
          text: "<span class='text-warning italic'>Optional: Complete the Abyss</span>",
          reward: "XP",
        },
        {
          text: "Find the Runestones",
          reward: "Farrow Quest",
          hide: true,
          condition: "Well Done!",
        },
        {
          text: "Find the <span class='text-poe-quest'>Corpse</span> in the Den of the Serpent Priestess",
        },
        {
          text: "Take the <span class='text-poe-quest'>Corpse-Snake Venom</span>",
        },
        { text: "Go back to the Jungle Ruins" },
      ],
    },
  ],
  G3_2_1: [
    {
      tasks: [
        {
          text: "<span class='text-info italic'>Directions: If you find the Camp of Explorers helping them will show you the entrance to the Chimeral Wetlands</span>",
        },
        {
          text: "<span class='text-warning italic'>Optional: Find Larva Hollow</span>",
          reward: "XP",
        },
        { text: "Find Chimeral Wetlands" },
      ],
    },
  ],
  G3_7: [
    {
      tasks: [
        {
          text: "Find the Runestones",
          condition: "Well done!",
          reward: "Farrow Quest",
        },
        {
          text: "Kill the <span class='text-poe-unique font-semibold'>Ignagduk, the Bog Witch</span>",
          hide: true,
          condition: "Character has received +30 to [Spirit|Spirit].",
          reward: "<span class='text-poe-quest'>+30 to Maximum Spirit</span>",
        },
        { text: "Portal to Town" },
      ],
    },
  ],
  G3_5: [
    {
      tasks: [
        {
          text: "<span class='text-warning italic'>Optional: Find the Ravaged Camp</span>",
          reward:
            "2 <span class='text-poe-magic'>magic</span> and 1 <span class='text-poe-rare'>rare</span> chest",
        },
        {
          text: "Kill the <span class='text-poe-unique font-semibold'>Xyclucian, the Chimera</span>",
        },
        {
          text: "Enter Jiquani's Machinarium",
          reward: "left of the boss arena",
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
            "Character has received +10% to [Resistances|Fire Resistance].",
        },
        {
          text: "Activate the Stone Altar",
          hide: true,
          condition:
            "Character has received +10% to [Resistances|Fire Resistance].",
        },
        {
          text: "Find 2 more <span class='text-poe-quest'>Small Soul Core</span>",
          hide: true,
          condition:
            "Character has received +10% to [Resistances|Fire Resistance].",
        },
        {
          text: "Kill the <span class='text-poe-unique font-semibold'>Blackjaw, the Remnant</span>",
          hide: true,
          condition:
            "Character has received +10% to [Resistances|Fire Resistance].",
          reward: "<span class='text-poe-quest'>+10% to Fire Resistance</span>",
        },
        { text: "Find the entrance to Jiquani's Sanctum" },
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
          text: "Activate the 2 Generators",
          hide: true,
          condition: "The Soul Core is charged! Why don't you do the honours?",
          reward: "top-left and top-right",
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
        { text: "Use the Waypoint and go back to Jungle Ruins" },
      ],
    },
  ],
  G3_2_2: [
    {
      tasks: [
        {
          text: "<span class='text-warning italic'>Optional: Find the Shaman's Hut</span>",
          reward:
            "<span class='text-poe-rare'>Rare Item</span>/Gargantuan flask",
        },
        {
          text: "Keep forward until you reach the Ravaged Corpse Tablet",
          condition: "G3_7",
          hide: true,
        },
        {
          text: "Summon and Speak with Servi",
          reward: "<span class='text-poe-rare'>Rare Belt</span>",
          condition: "G3_7",
          hide: true,
        },
        {
          text: "Enter The Azak Bog",
          reward: "on the left",
          condition: "G3_7",
          hide: true,
        },
        { text: "Go right" },
        {
          text: "Activate the Canal Mechanism",
        },
        { text: "Portal to Town" },
      ],
    },
  ],
  G3_8: [
    {
      tasks: [
        {
          text: "<span class='text-warning italic'>Optional: Find Foul Quarters</span>",
          reward: "Gold",
        },
        {
          text: "Find the The Molten Vault",
          reward: "Reforging Bench",
          hide: true,
          condition: "G3_9",
        },
        { text: "Find the Apex of Filth" },
      ],
    },
  ],
  G3_11: [
    {
      tasks: [
        {
          text: "Kill <span class='text-poe-unique font-semibold'>The Queen of Filth</span>",
        },
        {
          text: "Take the <span class='text-poe-quest'>Temple Door Idol</span>",
        },
        { text: "Portal to Town" },
      ],
    },
  ],
  G3_12: [
    {
      tasks: [
        { text: "Take the Stairs to level 3" },
        {
          text: "Kill <span class='text-poe-unique font-semibold'>Ketzuli, High Priest of the Sun</span>",
        },
        { text: "Speak with Alva" },
        { text: "Portal to Town" },
      ],
    },
  ],
  G3_14: [
    {
      tasks: [
        {
          text: "<span class='text-warning italic'>Optional: Find the Napuatzi's Quarters</span>",
          reward:
            "<span class='text-poe-quest'>Golden Idol</span> (vendors for 3000 Gold)",
        },
        {
          text: "<span class='text-warning italic'>Optional: Find the Azcapa's Quarters</span>",
          reward:
            "<span class='text-poe-quest'>Grand Idol</span> (vendors for 4000 Gold)",
        },
        {
          text: "<span class='text-warning italic'>Optional: Find the Uromoti's Quarters</span>",
          reward:
            "<span class='text-poe-quest'>Glorious Idol</span> (vendors for 6000 Gold)",
        },
        {
          text: "Kill <span class='text-poe-unique font-semibold'>Viper Napuatzi</span>",
        },
        { text: "Find the entrance to Aggorat" },
      ],
    },
  ],
  G3_16: [
    {
      tasks: [
        {
          text: "Find the <span class='text-poe-quest'>Sacrificial Heart</span>",
          hide: true,
          condition: "You have received 2 Passive Skill Points.",
        },
        {
          text: "Find the Sacrificial Dais, Place and Stab the Sacrificial Heart",
          reward:
            "<span class='text-poe-quest'>+2 Weapon Set Skill Points</span>",
          hide: true,
          condition: "You have received 2 Passive Skill Points.",
        },
        { text: "Find the entrance to The Black Chambers" },
      ],
    },
  ],
  G3_17: [
    {
      tasks: [
        {
          text: "Defeat <span class='text-poe-unique font-semibold'>Doryani, Royal Thaumaturge</span>",
        },
        { text: "Portal to Town" },
      ],
    },
  ],
  P1_Town: [
    {
      tasks: [
        { text: "Speak with Renly" },
        { text: "Speak with The Hooded One" },
      ],
      preq: ["P1_6"],
    },
    {
      tasks: [
        {
          text: "Enter Scorched Farmlands",
          condition: "P1_4",
          hide: true,
        },
        {
          text: "Return to Holten",
          condition: "P1_4",
          show: true,
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
          hide: true,
        },
        {
          text: "Find the entrance to Stones of Serle",
          condition: "P1_2",
          hide: true,
        },
        {
          text: "Find the entrance to The Blackwood",
          condition: "P1_2",
          show: true,
        },
      ],
    },
  ],
  P1_2: [
    {
      tasks: [
        { text: "Activate all Magaliths" },
        {
          text: "Defeat <span class='text-poe-unique font-semibold'>Siora, Blade of the Mists</span>",
        },
        { text: "Speak with Una" },
        { text: "Go back to Scorched Farmlands" },
      ],
    },
  ],
  P1_3: [{ tasks: [{ text: "Find the entrance to Holten" }] }],
  P1_4: [
    {
      tasks: [
        {
          text: "Find the entrance to Wolvenhold",
          condition: "P1_5",
          hide: true,
        },
        { text: "Find the entrance to Holten Estate" },
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
        { text: "Find the Stairs to enter the courtyard" },
        {
          text: "Defeat <span class='text-poe-unique font-semibold'>Thane Wulfric</span> and <span class='text-poe-unique font-semibold'>Lady Elswyth</span>",
        },
        { text: "Portal to Town" },
      ],
    },
  ],
  P2_Town: [
    {
      preq: ["P2_7"],
      tasks: [
        { text: "Speak with Risu" },
        { text: "Speak with The Hooded One" },
      ],
    },
    {
      tasks: [
        {
          text: "<span class='text-info'>Directions: Exit from the North for The Galai Gates</span>",
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
        { text: "Find the entrance to The Galai Gates" },
      ],
    },
    {
      tasks: [
        {
          text: "<span class='text-info'>Directions: Go Right and follow the dried river bed</span>",
          hide: true,
          condition: "Character has received 5% increased maximum Life.",
        },
        {
          text: "Find and Defeat <span class='text-poe-unique font-semibold'>Akthi, the Final Sting</span> and <span class='text-poe-unique font-semibold'>Anundr, the Sandworm</span>",
          hide: true,
          condition: "Character has received 5% increased maximum Life.",
        },
        {
          text: "<span class='text-info'>Directions: Go Northwest for the Skullmaw Stairway</span>",
          hide: true,
          condition: "Character has received 5% increased maximum Life.",
        },
        {
          text: "Find the Skullmaw Stairway",
          hide: true,
          condition: "Character has received 5% increased maximum Life.",
        },
        {
          text: "Take the <span class='text-poe-quest'>Molten One's Gift</span>",
          hide: true,
          condition: "Character has received 5% increased maximum Life.",
        },
        {
          text: "Portal to Town",
          condition: "Character has received 5% increased maximum Life.",
          hide: true,
        },
        { text: "Find the entrance to Pools of Khatal" },
        {
          text: "<span class='text-info'>Directions: Keep West from the West exit from The Khari Bazaar</span>",
          condition: "Character has received 5% increased maximum Life.",
          show: true,
        },
      ],
    },
  ],
  P2_2: [{ tasks: [{ text: "Find the entrance to Sel Khari Sanctuary" }] }],
  P2_3: [
    {
      tasks: [
        {
          text: "Defeat <span class='text-poe-unique font-semibold'>Elzarah, the Cobra Lord</span>",
        },
        { text: "Speak with Sekhema Asala" },
        { text: "Portal to Town" },
      ],
    },
  ],
  P2_5: [
    {
      tasks: [
        {
          text: "Find and Defeat <span class='text-poe-unique font-semibold'>Vornas, the Fell Flame</span>",
        },
        { text: "Enter Qimah" },
      ],
    },
  ],
  P2_6: [
    {
      tasks: [
        { text: "Find the Seven Pillars and choose a Boon" },
        { text: "Summon and Speak with Jado" },
        { text: "Enter Qimah Reservoir" },
      ],
    },
  ],
  P2_7: [
    {
      tasks: [
        {
          text: "Defeat <span class='text-poe-unique font-semibold'>Azmadi, the Faridun Prince</span>",
        },
        { text: "Click on Grand Barya" },
        { text: "Speak with Jado" },
        { text: "Portal to Town" },
      ],
    },
  ],
  P3_Town: [
    { tasks: [{ text: "Travel to Kingsmarch" }], preq: ["P3_7"] },
    {
      prev: "P3_4",
      tasks: [{ text: "Speak with Hilda" }, { text: "Travel to Glacial Tarn" }],
    },
    {
      tasks: [
        {
          text: "Enter Ashen Forest",
          condition: "P3_3",
          hide: true,
        },
        {
          text: "Speak with Hilda",
          condition: "P3_4",
          show: true,
        },
        {
          text: "Return to Glacial Tarn",
          condition: "P3_3",
          show: true,
        },
      ],
    },
  ],
  P3_1: [{ tasks: [{ text: "Find the entrance to Kriar Village" }] }],
  P3_2: [
    {
      tasks: [
        {
          text: "Find and Defeat <span class='text-poe-unique font-semibold'>Lythara, the Wayward Spear</span>",
          hide: true,
          condition: "Character has received +40 to [Spirit|Spirit].",
        },
        { text: "Enter Glacial Tarn" },
      ],
    },
  ],
  P3_3: [
    {
      tasks: [
        {
          text: "Find the entrance to Howling Caves",
          hide: true,
          condition: "P3_4",
        },
        {
          text: "Find and Defeat <span class='text-poe-unique font-semibold'>Rakkar, the Frozen Talon</span>",
        },
        { text: "Enter Kriar Peaks" },
      ],
    },
  ],
  P3_4: [
    {
      tasks: [
        {
          text: "Find and Defeat <span class='text-poe-unique font-semibold'>The Abominable Yeti</span>",
        },
        { text: "Portal to Town" },
      ],
    },
  ],
  P3_5: [
    {
      tasks: [
        { text: "Find Elder Madox for a free unique item" },
        { text: "Find the entrance to Etched Ravine" },
      ],
    },
  ],
  P3_6: [
    {
      tasks: [
        {
          text: "Find and Defeat <span class='text-poe-unique font-semibold'>Stormgore, the Guardian</span>",
        },
        { text: "Enter the Cuachic Vault" },
      ],
    },
  ],
  P3_7: [
    {
      tasks: [
        {
          text: "Find and Defeat <span class='text-poe-unique font-semibold'>Zelina, Blood Priestess</span> and <span class='text-poe-unique font-semibold'>Zolin, Blood Priest</span>",
        },
        { text: "Summon and Speak with Doryani" },
        { text: "Portal to Town" },
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
        { text: "Speak Sekhema Asala" },
        { text: "Portal to Town" },
      ],
    },
  ],
  G3_10_Airlock: [{ tasks: [{ text: "" }] }],
  ExpeditionSubArea_Kalguur_Act1: [
    { tasks: [{ text: "Enter the Runic Vault" }] },
  ],
  ExpeditionSubArea_Kalguur_Act2: [
    {
      tasks: [
        { text: "Enter the Cave Mouth" },
        { text: "Enter the Runic Vault" },
      ],
    },
  ],
  G4_town: [
    {
      tasks: [{ text: "Speak with Tujen" }],
      preq: ["G_Endgame_Town"],
    },
    {
      tasks: [
        { text: "Speak with Kaimana", condition: "", hide: true },
        {
          text: "Speak with The Hooded One",
          condition: "",
          hide: true,
        },
      ],

      prev: "G4_11_2",
    },
    {
      tasks: [{ text: "Return to the Heart of the Tribe" }],
      preq: ["G4_11_2"],
    },
    {
      tasks: [{ text: "Return to Ngakanu" }],
      preq: ["G4_11_1b"],
    },
    {
      tasks: [{ text: "Return to The Excavation" }],
      preq: ["G4_10"],
    },
    {
      tasks: [
        { text: "Speak with The Hooded One" },
        { text: "Set Sail to Arastas" },
      ],
      prev: "G4_8a",
    },
    {
      preq: ["G4_4_1"],
      tasks: [
        {
          text: "Return to Eye of Hinekora",
          condition: "G4_4_3",
          hide: true,
        },
        {
          text: "Speak with The Hooded One",
          show: true,
          condition: "G4_4_3",
        },
        {
          text: "Set Sail to Arastas",
          show: true,
          condition: "G4_4_3",
        },
      ],
    },
    {
      tasks: [{ text: "Return to Solitary Confinement" }],
      preq: ["G4_5_2"],
    },
    {
      tasks: [{ text: "Return to the Abandoned Prison" }],
      preq: ["G4_5_1"],
    },
    {
      tasks: [{ text: "Return to Shrike Island" }],
      preq: ["G4_7"],
    },
    {
      tasks: [{ text: "Return to the Singing Caverns" }],
      preq: ["G4_3_2"],
    },
    {
      tasks: [{ text: "Set Sail to Whakapanu Island" }],
      preq: ["G4_3_1"],
    },
    {
      tasks: [
        { text: "Speak with Dannig" },
        { text: "Use the Waypoint to Journey's End" },
      ],

      prev: "G4_2_2",
    },
    {
      tasks: [{ text: "Return to Journey's End" }],
      preq: ["G4_2_2"],
    },
    { tasks: [{ text: "Return to Kedge Bay" }], preq: ["G4_2_1"] },
    {
      tasks: [
        {
          text: "Return to the Volcanic Warrens",
          condition: "G4_2_1",
          hide: true,
        },
      ],

      preq: ["G4_1_2"],
    },
    {
      tasks: [{ text: "Return to the Isle of Kin" }],
      preq: ["G4_1_1"],
    },
    {
      tasks: [
        {
          text: "Speak with Doryani",
          condition: "G4_1_2",
          hide: true,
        },
        {
          text: "Speak with  Alva and Take the <span class='text-poe-quest'>Boat Charter</span> from Rog",
        },
        {
          text: "Speak with Makoru",
          condition: "G4_1_2",
          hide: true,
        },
        {
          text: "Set Sail to Isle of Kin",
          condition: "G4_1_2",
          hide: true,
        },
      ],
    },
  ],
  G4_1_1: [
    {
      tasks: [
        {
          text: "<span class='text-warning italic'>Optional: Kill <span class='text-poe-unique'>The Blind Beast</span></span>",
          condition: "G4_1_2",
          hide: true,
          reward: "<span class='text-poe-quest'>Blank Greater Rune</span>",
        },
        {
          text: "<span class='text-warning italic'>Optional: Find the Fossiled Formation</span>",
          reward: "Lesser Jeweller's Orb",

          hide: true,
          condition: "G4_1_2",
        },
        {
          text: "<span class='text-warning italic'>Optional: Find the Beast Pen</span>",
          reward: "Uncut Support Gem (level 4)",

          hide: true,
          condition: "G4_1_2",
        },
        {
          text: 'Find the <span class="text-poe-quest">Flayed Sailor</span> and take the <span class="text-poe-quest">Torn Map Piece</span>',
          condition: "G4_1_2",

          hide: true,
          reward: "Farrow Quest",
        },
        {
          text: "<span class='text-info italic'>If you have collected all 4 <span class=\"text-poe-quest\">Map Pieces</span> you can travel to Plunderer's Point</span>",
          condition: "G4_1_1, G4_2_1, G4_3_1, G4_7",
          show: true,
        },
        {
          text: "Find the entrance to the Volcanic Warrens",
          condition: "G4_1_2",

          hide: true,
        },
        {
          text: "Set Sail to Kedge Bay",
          condition: "G4_1_2",
          show: true,
        },
      ],
    },
  ],
  G4_1_2: [
    {
      tasks: [
        {
          text: "<span class='text-warning italic'>Optional: Find the Volcanic Nest</span>",
          reward: "<span class='text-poe-rare'>Rare Ring</span>",
        },
        {
          text: "Kill <span class='text-poe-unique font-semibold'>Krutog, Lord of Kin</span>",
        },
        { text: "Return to Ship" },
        {
          text: "Set Sail to Kedge Bay",
          condition: "",

          hide: true,
        },
      ],
    },
  ],
  G4_3_1: [
    {
      tasks: [
        {
          text: "<span class='text-warning italic'>Optional: Find the Crabshell Cavern</span>",
          reward: "Uncut Support Gem (level 4)",
          condition: "G4_3_2",

          hide: true,
        },
        {
          text: 'Find the <span class="text-poe-quest">Petrified Pirate</span> and take the <span class="text-poe-quest">Frayed Map Piece</span>',
          condition: "G4_3_2",

          hide: true,
          reward: "Farrow Quest",
        },
        {
          text: 'Kill the <span class="text-poe-unique">Great White One</span>',
          condition: "G4_3_2",

          hide: true,
          reward: "<span class='text-poe-quest'>Shark Fin</span>",
        },
        {
          text: "<span class='text-info italic'>If you have collected all 4 <span class=\"text-poe-quest\">Map Pieces</span> you can travel to Plunderer's Point</span>",
          condition: "G4_1_1, G4_2_1, G4_3_1, G4_7",
          show: true,
        },
        {
          text: "Find the entrance to the Singing Caverns",
          condition: "G4_3_2",

          hide: true,
        },
        {
          text: "Set Sail to Shrike Island",
          condition: "G4_3_2",
          show: true,
        },
      ],
    },
  ],
  G4_3_2: [
    {
      tasks: [
        {
          text: "<span class='text-warning italic'>Optional: Find the Beckoning Clam</span>",
          reward: "Pearlescent Amulet",
        },
        {
          text: "<span class='text-warning italic'>Optional: Find the Egg Cave</span>",
          reward: "Uncut Support Gem (level 4)",
        },
        {
          text: "Find and Kill <span class='text-poe-unique font-semibold'>Diamora, Song of Death</span>",
        },
        { text: "Speak with Matiki" },
        { text: "Return to Ship" },
        { text: "Set Sail to Shrike Island" },
      ],
    },
  ],
  G4_7: [
    {
      tasks: [
        {
          text: 'Find the <span class="text-poe-quest">Corpse Nest</span> and take the <span class="text-poe-quest">Ragged Map Piece</span>',
          reward: "Farrow Quest",
        },
        {
          text: "<span class='text-info italic'>If you have collected all 4 <span class=\"text-poe-quest\">Map Pieces</span> you can travel to Plunderer's Point</span>",
          condition: "G4_1_1, G4_2_1, G4_3_1, G4_7",
          show: true,
        },
        {
          text: "Kill <span class='text-poe-unique font-semibold'>Scourge of the Skies</span>",
        },
        { text: "Return to Ship" },
        { text: "Set Sail to Abandoned Prison" },
      ],
    },
  ],
  G4_5_1: [
    {
      tasks: [
        {
          text: "Find the <span class='text-poe-quest'>Chapel Key</span>",
          condition:
            "Character has received 30% increased Life Recovery from [Flask|Flasks].",

          hide: true,
        },
        {
          text: "Find the Chapel",
          condition:
            "Character has received 30% increased Life Recovery from [Flask|Flasks].",

          hide: true,
        },
        {
          text: "Select a Blessing from the Goddess of Justice",
          condition:
            "Character has received 30% increased Life Recovery from [Flask|Flasks].",

          hide: true,
        },
        {
          text: "Find the entrance to the Solitary Confinement",
          condition: "G4_5_2",

          hide: true,
        },
        {
          text: "Set Sail to Eye of Hinekora",
          condition: "G4_5_2",
          show: true,
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
        { text: "Speak with The Hooded One" },
        { text: "Return to Ship" },
        { text: "Set Sail to Eye of Hinekora" },
      ],
    },
  ],
  G4_4_1: [
    {
      tasks: [
        {
          text: "Enter the Passageway",
          condition: "Ahh! There you are!",

          hide: true,
        },
        {
          text: "Speak with Matiki",
          condition: "Now we test your mettle... Rise, warriors of Ngamahu!",

          hide: true,
        },
        {
          text: "Peer into the Well of Passing",
          condition: "Now we test your mettle... Rise, warriors of Ngamahu!",

          hide: true,
        },
        {
          text: "Go through the Trials",
          condition:
            "The Ancestors see you. You are welcome... in our Halls of the Dead.",

          hide: true,
        },
        {
          text: "<span class='text-warning italic'>Optional: Find the Shrouded Falls</span>",
          reward: "Uncut Spirit Gem (level 12)",
          condition: "G4_4_3",

          hide: true,
        },
        {
          text: "Pay your respects",
          condition: "Character has received 5% increased maximum Mana.",

          hide: true,
          reward:
            "<span class='text-poe-quest'>5% increased maximum Mana</span>",
        },
        {
          text: "Speak with Navali",
          condition: "G4_4_3",

          hide: true,
        },
        {
          text: "Find the entrance to Halls of the Dead",
          condition: "G4_4_3",

          hide: true,
        },
        {
          text: "Set Sail to Arastas",
          condition: "G4_4_3",
          show: true,
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

          hide: true,
          reward:
            "<span class='text-poe-quest'>+5% Lightning Resistance</span>",
        },
        {
          text: "Complete Tasalio's Test",
          condition: "The sea holds many secrets for those who seek.",

          hide: true,
          reward: "<span class='text-poe-quest'>+5% Cold Resistance</span>",
        },
        {
          text: "Complete Ngamahu's Test",
          condition: "The warrior emerges from the caldera, born anew.",

          hide: true,
          reward: "<span class='text-poe-quest'>+5% Fire Resistance</span>",
        },
        {
          text: "Defeat <span class='text-poe-unique font-semibold'>Yama The White</span>",
          condition: "Ahhh! Okay, okay. Yama sees you. You are worthy.",

          hide: true,
          reward:
            "<span class='text-poe-quest'>+2 Weapon Set Skill Points</span>",
        },
        { text: "Enter the Trial of the Ancestors" },
      ],
    },
  ],
  G4_4_3: [
    {
      tasks: [
        {
          text: "Speak with Navali",
          condition: "You have received 2 Passive Skill Points.",

          hide: true,
        },
        { text: "Return to Ship" },
      ],
    },
  ],
  G4_8a: [
    { tasks: [{ text: "Return to Town and Speak with The Hooded One" }] },
  ],
  G4_8b: [
    {
      tasks: [
        {
          text: "Speak with Missionary Lorandis and Follow him",
          condition: "Your timing is quite remarkable, you know!",

          hide: true,
        },
        {
          text: "<span class='text-warning italic'>Optional: Find the Morning Bell</span>",
          condition: "Utopia demands...",

          hide: true,
          reward: "3 Regal Orbs",
        },
        {
          text: "<span class='text-warning italic'>Optional: Find the Evening Bell</span>",
          reward: "3 Exalted Orbs",
        },
        {
          text: "Find and Kill <span class='text-poe-unique font-semibold'>Torvian, Hand of the Saviour</span>",
          condition: "Utopia demands...",

          hide: true,
        },
        {
          text: "Enter The Excavation",
          condition: "G4_10",

          hide: true,
        },
        {
          text: "Set Sail to Ngakanu",
          condition: "G4_10",
          show: true,
        },
      ],
    },
  ],
  G4_2_1: [
    {
      tasks: [
        {
          text: 'Find the <span class="text-poe-quest">Dead Man\'s Chest</span> and take the <span class="text-poe-quest">Ripped Map Piece</span>',

          hide: true,
          condition: "G4_2_2",
          reward: "Farrow Quest",
        },
        {
          text: "<span class='text-info italic'>If you have collected all 4 <span class=\"text-poe-quest\">Map Pieces</span> you can travel to Plunderer's Point</span>",
          condition: "G4_1_1, G4_2_1, G4_3_1, G4_7",
          show: true,
        },
        {
          text: "Find the entrance to Journey's End",
          condition: "G4_2_2",

          hide: true,
        },
        {
          text: "Set Sail to Whakapanu Island",
          condition: "G4_2_2",
          show: true,
        },
      ],
    },
  ],
  G4_2_2: [
    {
      tasks: [
        {
          text: "Summon and Speak with Tujen",
          condition: "Heh heh... thank you kindly... I am finally free!",

          hide: true,
        },
        {
          text: "Speak with Freya",
          condition: "Heh heh... thank you kindly... I am finally free!",

          hide: true,
        },
        {
          text: "Click on Karui Totem",
          condition: "Heh heh... thank you kindly... I am finally free!",

          hide: true,
        },
        { text: "Survive the Madness" },
        { text: "Return to Ship" },
        { text: "Set Sail to Whakapanu Island" },
      ],
      prev: "G4_town",
    },
    {
      tasks: [
        {
          text: "Find and Kill <span class='text-poe-unique font-semibold'>Captain Hartun</span>",
          condition: "Do not... believe his lies...",

          hide: true,
        },
        { text: "Portal to Town" },
      ],
    },
  ],
  G4_10: [
    {
      tasks: [
        {
          text: "Find and Kill <span class='text-poe-unique font-semibold'>Benedictus, First Herald of Utopia</span>",

          hide: true,
          condition: "Hyaaahhh!",
        },
        { text: "Explore the Forge" },
        { text: "Portal to Town" },
      ],
    },
  ],
  G4_11_1b: [
    {
      tasks: [
        {
          text: "<span class='text-warning italic'>Optional: Find the Mad Butcher</span>",
          reward: "Uncut Spirit Gem (level 13)",
        },
        {
          text: "<span class='text-warning italic'>Optional: Complete the Abyss</span>",
          reward: "XP",
        },
        {
          text: "<span class='text-info italic'>Directions: Keep right</span>",
        },
        { text: "Find the entrance to the Heart of the Tribe" },
      ],
    },
  ],
  G4_11_2: [
    {
      tasks: [
        {
          text: "Defeat <span class='text-poe-unique font-semibold'>Tavakai, the Fallen</span>",

          hide: true,
          condition: "What... what have I done?",
        },
        { text: "Return to Kingsmarch" },
      ],
    },
  ],
  G4_13: [{ tasks: [{ text: "Enter Deserted Post" }] }],
  G_Endgame_Town: [
    {
      tasks: [
        {
          text: "<span class='text-info'>Directions: Speak with The Hooded One (northeast from the waypoint)</span>",
        },
        { text: "Speak with Farrow" },
        { text: "Travel to Kingsmarch" },
      ],
    },
  ],
  G3_9: [
    {
      tasks: [
        {
          text: "Kill <span class='text-poe-unique font-semibold'>Mektul, the Forgemaster</span>",
        },
        {
          text: "Take <span class='text-poe-quest'>The Hammer of Kamasa</span>",
          reward: "Unlocks the Reforging Bench",
        },
        { text: "Portal to Town" },
      ],
    },
  ],
  ExpeditionSubArea_Kalguur_Act3: [{ tasks: [{ text: "" }] }],
  G2_13: [{ tasks: [{ text: "" }] }],
  Sanctum_1_Foyer_1: [{ tasks: [{ text: "" }] }],
  G3_10: [{ tasks: [{ text: "" }] }],
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
    "Character has received +10% to [Resistances|Cold Resistance].": true,
    "Thanks for the help.": true,
    "See? I told you we'd make a fine team! ": true,
  },
  G1_6: {
    "The old magicks still thrive! The way is open. Please, hurry.": true,
    "Keep up the search.": true,
  },
  G1_7: {
    "At last! It's open! Praise the First Ones!": true,
    "I must make them <i>{suffer!} ": true,
    "Together... at last...": true,
  },
  G1_11: {
    "You have received 2 Passive Skill Points.": true,
    "Good work!": true,
    "Well, this is ominous.": true,
  },
  G1_12: {
    "Find me, Maji... return to my embrace...": true,
    "Character has received +30 to [Spirit|Spirit].": true,
  },
  G1_15: {
    "Character has received +20 to maximum Life.": true,
    "Allow me to clear your mind, if only for a moment.": true,
  },
  G2_3: {
    "Hold them back while I open the gate!": true,
    "We will finish this, but not today.": true,
  },
  G2_4_1: {
    "You have received 2 Passive Skill Points.": true,
    "Well done!": true,
  },
  G2_4_3: {
    "She didn't... want me...": true,
    "At last... death... Thank you...": true,
  },
  G2_6: {
    "Character has received 30% increased [Charm] Charges gained.": true,
  },
  G2_9_2: {
    "Character has received 30% increased [Charm] Charges gained.": true,
    "Character has received +10% to [Resistances|Lightning Resistance]": true,
    "Character has received +10% to [Resistances|Lightning Resistance].": true,
  },
  G3_3: {
    "You have received 2 Passive Skill Points.": true,
    "Nice spotting!": true,
  },
  G3_6_1: {
    "Character has received +10% to [Resistances|Fire Resistance].": true,
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
  G4_3_1: { G4_3_2: true, "G4_1_1, G4_2_1, G4_3_1, G4_7": true },
  G4_5_1: {
    "Character has received 30% increased Life Recovery from [Flask|Flasks].": true,
    G4_5_2: true,
  },
  G4_4_1: {
    "Ahh! There you are!": true,
    "Now we test your mettle... Rise, warriors of Ngamahu!": true,
    "The Ancestors see you. You are welcome... in our Halls of the Dead.": true,
    "Character has received 5% increased maximum Mana.": true,
    G4_4_3: true,
  },
  G4_4_2: {
    "The cycle of life continues. The lone traveller journeys on.": true,
    "The sea holds many secrets for those who seek.": true,
    "The warrior emerges from the caldera, born anew.": true,
    "Ahhh! Okay, okay. Yama sees you. You are worthy.": true,
  },
  G4_4_3: { "You have received 2 Passive Skill Points.": true },
  G4_8b: {
    "Your timing is quite remarkable, you know!": true,
    "Utopia demands...": true,
    G4_10: true,
  },
  G4_2_2: {
    "Do not... believe his lies...": true,
    "Heh heh... thank you kindly... I am finally free!": true,
  },
  G4_2_1: { G4_2_2: true, "G4_1_1, G4_2_1, G4_3_1, G4_7": true },
  G4_7: { "G4_1_1, G4_2_1, G4_3_1, G4_7": true },
  G4_10: { "Hyaaahhh!": true, Hyaaahhh: true },
  G4_11_2: { "What... what have I done?": true },
  P1_1: { P1_2: true },
  P1_4: { P1_5: true },
  P1_Town: { P1_4: true, P1_6: true },
  P3_2: { "Character has received +40 to [Spirit|Spirit].": true },
  P3_3: { P3_4: true },
  P3_Town: { P3_3: true, P3_4: true },
  P2_1: { "Character has received 5% increased maximum Life.": true },
  G1_13_1: { "That's it! The last one!": true },
  G2_5_2: {
    "Well done! Now... there's still more to find... keep searching!": true,
  },
  G2_8: { "There we go!": true },
  G1_town: { G2_town: true, G3_town: true },
  G2_town: { G3_town: true },
  G3_4: { "Well Done!": true },
  G3_2_2: { "": true },
  G3_16: { "You have received 2 Passive Skill Points.": true },
  G1_4: { G1_5: true, "G1_5, G1_town": true },
  G4_1_2: { G4_2_2: true, "": true },
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

  saveGuide();
};

const addTask = (zone: string, zoneIndex: number) => {
  setGuide(
    produce((s) => {
      s[zone][zoneIndex].tasks.push({ text: "" });
    }),
  );

  saveGuide();
};

const removeTask = (zone: string, zoneIndex: number, taskIndex: number) => {
  setGuide(
    produce((s) => {
      s[zone][zoneIndex].tasks.splice(taskIndex, 1);
    }),
  );

  saveGuide();
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

const changeReward = (
  zone: string,
  zoneIndex: number,
  taskIndex: number,
  text: string,
) => {
  setGuide(
    produce((s) => {
      s[zone][zoneIndex].tasks[taskIndex].reward = text;
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

const changeProgress = (zone: string, zoneIndex: number, index: number) => {
  setGuide(
    produce((s) => {
      s[zone][zoneIndex].progress = index;
    }),
  );

  saveGuide();
};

const changePrev = (zone: string, zoneIndex: number, text: string) => {
  setGuide(
    produce((s) => {
      s[zone][zoneIndex].prev = text;
    }),
  );

  saveGuide();
};

const changePreq = (zone: string, zoneIndex: number, text: string) => {
  setGuide(
    produce((s) => {
      s[zone][zoneIndex].preq = text === "" ? [] : text.split(", ");
    }),
  );

  saveGuide();
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

const exportGuide = async () => {
  try {
    const filePath = await save({
      filters: [
        {
          name: "JSON",
          extensions: ["json"],
        },
      ],
      defaultPath: "guide.json",
    });

    if (!filePath) {
      console.log("Export cancelled");
      return;
    }

    await writeTextFile(
      filePath,
      JSON.stringify({ guide: guide, quotes: quotes }),
    );
  } catch (e) {
    console.log(e);
  }
};

const importGuide = async () => {
  try {
    const filePath = await open({
      multiple: false,
      directory: false,
      filters: [
        {
          name: "JSON",
          extensions: ["json"],
        },
      ],
    });

    if (!filePath) {
      console.log("Import cancelled");
      return;
    }

    const rawFile = await readTextFile(filePath);
    const file = JSON.parse(rawFile);

    setGuide(reconcile(file["guide"]));
    setQuotes(reconcile(file["quotes"]));
  } catch (e) {
    console.log(e);
  }
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
  changeReward,
  moveTaskUp,
  moveTaskDown,
  changeAction,
  changeDoneQuote,
  changeProgress,
  changePrev,
  changePreq,
  saveGuide,
  loadGuide,
  exportGuide,
  importGuide,
};
