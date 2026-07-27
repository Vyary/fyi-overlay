export interface ItemInfo {
  id: string;
  name: string;
  image: string;
  category: string;
  detailsId: string;
  quantity?: number;
  prices?: {
    divine: number;
    exalted: number;
    chaos: number;
  };
}

export type ItemRecord = Record<string, ItemInfo>;

export const ItemsRecord: ItemRecord = {
  "Chaos Orb": {
    id: "chaos",
    name: "Chaos Orb",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lSZXJvbGxSYXJlIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/c0ca392a78/CurrencyRerollRare.png",
    category: "Currency",
    detailsId: "chaos-orb",
  },
  "Vaal Armourer's Infuser": {
    id: "vaal-armourers-infuser",
    name: "Vaal Armourer's Infuser",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvSW5jdXJzaW9uQ3JhZnRpbmdPcmJzL1ZhYWtBcm1vdXJlcnNTY3JhcCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/f9e1c7e389/VaakArmourersScrap.png",
    category: "Vaal",
    detailsId: "vaal-armourers-infuser",
  },
  "Blacksmith's Whetstone": {
    id: "whetstone",
    name: "Blacksmith's Whetstone",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lXZWFwb25RdWFsaXR5Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/18715ea7be/CurrencyWeaponQuality.png",
    category: "Currency",
    detailsId: "blacksmiths-whetstone",
  },
  "Exalted Orb": {
    id: "exalted",
    name: "Exalted Orb",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lBZGRNb2RUb1JhcmUiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/ad7c366789/CurrencyAddModToRare.png",
    category: "Currency",
    detailsId: "exalted-orb",
  },
  "Orb of Extraction": {
    id: "orb-of-extraction",
    name: "Orb of Extraction",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvSW5jdXJzaW9uQ3JhZnRpbmdPcmJzL0luY3Vyc2lvblNvY2tldGFibGVFeHRyYWN0b3JDdXJyZW5jeSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/dae9dfbb5e/IncursionSocketableExtractorCurrency.png",
    category: "Vaal",
    detailsId: "orb-of-extraction",
  },
  "Arcanist's Etcher": {
    id: "etcher",
    name: "Arcanist's Etcher",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lXZWFwb25NYWdpY1F1YWxpdHkiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/516e8f1131/CurrencyWeaponMagicQuality.png",
    category: "Currency",
    detailsId: "arcanists-etcher",
  },
  "Scroll of Wisdom": {
    id: "wisdom",
    name: "Scroll of Wisdom",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lJZGVudGlmaWNhdGlvbiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/884f7bc58b/CurrencyIdentification.png",
    category: "Currency",
    detailsId: "scroll-of-wisdom",
  },
  "Orb of Augmentation": {
    id: "aug",
    name: "Orb of Augmentation",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lBZGRNb2RUb01hZ2ljIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/c8ad0ddc84/CurrencyAddModToMagic.png",
    category: "Currency",
    detailsId: "orb-of-augmentation",
  },
  "Divine Orb": {
    id: "divine",
    name: "Divine Orb",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lNb2RWYWx1ZXMiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/2986e220b3/CurrencyModValues.png",
    category: "Currency",
    detailsId: "divine-orb",
  },
  "Kopec's Orb of Sacrifice": {
    id: "kopecs-orb-of-sacrifice",
    name: "Kopec's Orb of Sacrifice",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvSW5jdXJzaW9uQ3JhZnRpbmdPcmJzL0luY3Vyc2lvbkNvcnJ1cHRpb25PcmIyIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/911b28ea18/IncursionCorruptionOrb2.png",
    category: "Vaal",
    detailsId: "kopecs-orb-of-sacrifice",
  },
  "Vaal Cultivation Orb": {
    id: "vaal-cultivation-orb",
    name: "Vaal Cultivation Orb",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvSW5jdXJzaW9uQ3JhZnRpbmdPcmJzL0luY3Vyc2lvbkhpc3RvcmljVmFhbE9yYiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/07d4d75931/IncursionHistoricVaalOrb.png",
    category: "Vaal",
    detailsId: "vaal-cultivation-orb",
  },
  "Vaal Orb": {
    id: "vaal",
    name: "Vaal Orb",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lWYWFsIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/72bc84396c/CurrencyVaal.png",
    category: "Currency",
    detailsId: "vaal-orb",
  },
  "Orb of Alchemy": {
    id: "alch",
    name: "Orb of Alchemy",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lVcGdyYWRlVG9SYXJlIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/9b80b44821/CurrencyUpgradeToRare.png",
    category: "Currency",
    detailsId: "orb-of-alchemy",
  },
  "Orb of Chance": {
    id: "chance",
    name: "Orb of Chance",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lVcGdyYWRlVG9VbmlxdWUiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/93c6cc8d5b/CurrencyUpgradeToUnique.png",
    category: "Currency",
    detailsId: "orb-of-chance",
  },
  "Perfect Exalted Orb": {
    id: "perfect-exalted-orb",
    name: "Perfect Exalted Orb",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lBZGRNb2RUb1JhcmUiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/ad7c366789/CurrencyAddModToRare.png",
    category: "Currency",
    detailsId: "perfect-exalted-orb",
  },
  "Gemcutter's Prism": {
    id: "gcp",
    name: "Gemcutter's Prism",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lHZW1RdWFsaXR5Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/f4bace18d7/CurrencyGemQuality.png",
    category: "Currency",
    detailsId: "gemcutters-prism",
  },
  "Regal Orb": {
    id: "regal",
    name: "Regal Orb",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lVcGdyYWRlTWFnaWNUb1JhcmUiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/e8fb148e80/CurrencyUpgradeMagicToRare.png",
    category: "Currency",
    detailsId: "regal-orb",
  },
  "Perfect Regal Orb": {
    id: "perfect-regal-orb",
    name: "Perfect Regal Orb",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lVcGdyYWRlTWFnaWNUb1JhcmUiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/e8fb148e80/CurrencyUpgradeMagicToRare.png",
    category: "Currency",
    detailsId: "perfect-regal-orb",
  },
  "Kamasa's Orb of Sacrifice": {
    id: "kamasas-orb-of-sacrifice",
    name: "Kamasa's Orb of Sacrifice",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvSW5jdXJzaW9uQ3JhZnRpbmdPcmJzL0luY3Vyc2lvbkNvcnJ1cHRpb25PcmIzIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/00e0cd1060/IncursionCorruptionOrb3.png",
    category: "Vaal",
    detailsId: "kamasas-orb-of-sacrifice",
  },
  "Yugul's Orb of Sacrifice": {
    id: "yuguls-orb-of-sacrifice",
    name: "Yugul's Orb of Sacrifice",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvSW5jdXJzaW9uQ3JhZnRpbmdPcmJzL0luY3Vyc2lvbkNvcnJ1cHRpb25PcmI0Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/5102a7c2f5/IncursionCorruptionOrb4.png",
    category: "Vaal",
    detailsId: "yuguls-orb-of-sacrifice",
  },
  "Orb of Transmutation": {
    id: "transmute",
    name: "Orb of Transmutation",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lVcGdyYWRlVG9NYWdpYyIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/2f8e1ff9f8/CurrencyUpgradeToMagic.png",
    category: "Currency",
    detailsId: "orb-of-transmutation",
  },
  "Perfect Chaos Orb": {
    id: "perfect-chaos-orb",
    name: "Perfect Chaos Orb",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lSZXJvbGxSYXJlIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/c0ca392a78/CurrencyRerollRare.png",
    category: "Currency",
    detailsId: "perfect-chaos-orb",
  },
  "Fracturing Orb": {
    id: "fracturing-orb",
    name: "Fracturing Orb",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRnJhY3R1cmluZ09yYiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/8b85ed1dc2/FracturingOrb.png",
    category: "Currency",
    detailsId: "fracturing-orb",
  },
  "Perfect Jeweller's Orb": {
    id: "perfect-jewellers-orb",
    name: "Perfect Jeweller's Orb",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lSZXJvbGxTb2NrZXROdW1iZXJzMDMiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/ac6398e6a0/CurrencyRerollSocketNumbers03.png",
    category: "Currency",
    detailsId: "perfect-jewellers-orb",
  },
  "Ancient Infuser": {
    id: "ancient-infuser",
    name: "Ancient Infuser",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvSW5jdXJzaW9uQ3JhZnRpbmdPcmJzL0luY3Vyc2lvbkFuY2llbnRJbmZ1c2lvbiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/7d23730590/IncursionAncientInfusion.png",
    category: "Vaal",
    detailsId: "ancient-infuser",
  },
  "Glassblower's Bauble": {
    id: "bauble",
    name: "Glassblower's Bauble",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lGbGFza1F1YWxpdHkiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/1cec279e01/CurrencyFlaskQuality.png",
    category: "Currency",
    detailsId: "glassblowers-bauble",
  },
  "Artificer's Orb": {
    id: "artificers",
    name: "Artificer's Orb",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lBZGRFcXVpcG1lbnRTb2NrZXQiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/5131fd4774/CurrencyAddEquipmentSocket.png",
    category: "Currency",
    detailsId: "artificers-orb",
  },
  "Greater Orb of Transmutation": {
    id: "greater-orb-of-transmutation",
    name: "Greater Orb of Transmutation",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lVcGdyYWRlVG9NYWdpYyIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/2f8e1ff9f8/CurrencyUpgradeToMagic.png",
    category: "Currency",
    detailsId: "greater-orb-of-transmutation",
  },
  "Greater Chaos Orb": {
    id: "greater-chaos-orb",
    name: "Greater Chaos Orb",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lSZXJvbGxSYXJlIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/c0ca392a78/CurrencyRerollRare.png",
    category: "Currency",
    detailsId: "greater-chaos-orb",
  },
  "Perfect Orb of Transmutation": {
    id: "perfect-orb-of-transmutation",
    name: "Perfect Orb of Transmutation",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lVcGdyYWRlVG9NYWdpYyIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/2f8e1ff9f8/CurrencyUpgradeToMagic.png",
    category: "Currency",
    detailsId: "perfect-orb-of-transmutation",
  },
  "Vaal Catalysing Infuser": {
    id: "vaal-catalysing-infuser",
    name: "Vaal Catalysing Infuser",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvSW5jdXJzaW9uQ3JhZnRpbmdPcmJzL1ZhYWxDYXRhbHlzdCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/1c9f7be28c/VaalCatalyst.png",
    category: "Vaal",
    detailsId: "vaal-catalysing-infuser",
  },
  "Architect's Orb": {
    id: "architects-orb",
    name: "Architect's Orb",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvSW5jdXJzaW9uQ3JhZnRpbmdPcmJzL0luY3Vyc2lvbkdyZWF0ZXJWYWFsT3JiIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/7ba6f79f63/IncursionGreaterVaalOrb.png",
    category: "Vaal",
    detailsId: "architects-orb",
  },
  "Cryptic Key": {
    id: "cryptic-key",
    name: "Cryptic Key",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvU3Ryb25nYm94U2tlbGV0b25LZXkiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/ae08d02326/StrongboxSkeletonKey.png",
    category: "Currency",
    detailsId: "cryptic-key",
  },
  "Vaal Blacksmith's Infuser": {
    id: "vaal-blacksmiths-infuser",
    name: "Vaal Blacksmith's Infuser",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvSW5jdXJzaW9uQ3JhZnRpbmdPcmJzL1ZhYWxCbGFja3NtaXRoc1doZXRzdG9uZSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/193a2f8085/VaalBlacksmithsWhetstone.png",
    category: "Vaal",
    detailsId: "vaal-blacksmiths-infuser",
  },
  "Greater Exalted Orb": {
    id: "greater-exalted-orb",
    name: "Greater Exalted Orb",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lBZGRNb2RUb1JhcmUiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/ad7c366789/CurrencyAddModToRare.png",
    category: "Currency",
    detailsId: "greater-exalted-orb",
  },
  "Crystallised Corruption": {
    id: "crystallised-corruption",
    name: "Crystallised Corruption",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvSW5jdXJzaW9uQ3JhZnRpbmdPcmJzL0luY3Vyc2lvbkNyeXN0YWxsaXNlZENvcnJ1cHRpb24iLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/7bb759396f/IncursionCrystallisedCorruption.png",
    category: "Vaal",
    detailsId: "crystallised-corruption",
  },
  "Greater Orb of Augmentation": {
    id: "greater-orb-of-augmentation",
    name: "Greater Orb of Augmentation",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lBZGRNb2RUb01hZ2ljIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/c8ad0ddc84/CurrencyAddModToMagic.png",
    category: "Currency",
    detailsId: "greater-orb-of-augmentation",
  },
  "Mirror of Kalandra": {
    id: "mirror",
    name: "Mirror of Kalandra",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lEdXBsaWNhdGUiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/26bc31680e/CurrencyDuplicate.png",
    category: "Currency",
    detailsId: "mirror-of-kalandra",
  },
  "Greater Regal Orb": {
    id: "greater-regal-orb",
    name: "Greater Regal Orb",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lVcGdyYWRlTWFnaWNUb1JhcmUiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/e8fb148e80/CurrencyUpgradeMagicToRare.png",
    category: "Currency",
    detailsId: "greater-regal-orb",
  },
  "Core Destabiliser": {
    id: "core-destabiliser",
    name: "Core Destabiliser",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvSW5jdXJzaW9uQ3JhZnRpbmdPcmJzL0luY3Vyc2lvbkNvcmVEZXN0YWJsaXNlciIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/e613c14ed7/IncursionCoreDestabliser.png",
    category: "Vaal",
    detailsId: "core-destabiliser",
  },
  "Hinekora's Lock": {
    id: "hinekoras-lock",
    name: "Hinekora's Lock",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvSGluZWtvcmFzTG9jayIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/ab2163ae06/HinekorasLock.png",
    category: "Currency",
    detailsId: "hinekoras-lock",
  },
  "Chance Shard": {
    id: "chance-shard",
    name: "Chance Shard",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lVcGdyYWRlVG9VbmlxdWVTaGFyZCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/9828a70270/CurrencyUpgradeToUniqueShard.png",
    category: "Currency",
    detailsId: "chance-shard",
  },
  "Perfect Orb of Augmentation": {
    id: "perfect-orb-of-augmentation",
    name: "Perfect Orb of Augmentation",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lBZGRNb2RUb01hZ2ljIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/c8ad0ddc84/CurrencyAddModToMagic.png",
    category: "Currency",
    detailsId: "perfect-orb-of-augmentation",
  },
  "Vaal Arcanist's Infuser": {
    id: "vaal-arcanists-infuser",
    name: "Vaal Arcanist's Infuser",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvSW5jdXJzaW9uQ3JhZnRpbmdPcmJzL1ZhYWxBcmNhbmlzdHNFdGNoZXIiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/3eb344ecc5/VaalArcanistsEtcher.png",
    category: "Vaal",
    detailsId: "vaal-arcanists-infuser",
  },
  "Lesser Jeweller's Orb": {
    id: "lesser-jewellers-orb",
    name: "Lesser Jeweller's Orb",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lSZXJvbGxTb2NrZXROdW1iZXJzMDEiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/b0b9a43ed8/CurrencyRerollSocketNumbers01.png",
    category: "Currency",
    detailsId: "lesser-jewellers-orb",
  },
  "Armourer's Scrap": {
    id: "scrap",
    name: "Armourer's Scrap",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lBcm1vdXJRdWFsaXR5Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/d5868f596d/CurrencyArmourQuality.png",
    category: "Currency",
    detailsId: "armourers-scrap",
  },
  "Yaomac's Orb of Sacrifice": {
    id: "yaomacs-orb-of-sacrifice",
    name: "Yaomac's Orb of Sacrifice",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvSW5jdXJzaW9uQ3JhZnRpbmdPcmJzL0luY3Vyc2lvbkNvcnJ1cHRpb25PcmIxIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/d8bf3af5d5/IncursionCorruptionOrb1.png",
    category: "Vaal",
    detailsId: "yaomacs-orb-of-sacrifice",
  },
  "Greater Jeweller's Orb": {
    id: "greater-jewellers-orb",
    name: "Greater Jeweller's Orb",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lSZXJvbGxTb2NrZXROdW1iZXJzMDIiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/7dd6ee75be/CurrencyRerollSocketNumbers02.png",
    category: "Currency",
    detailsId: "greater-jewellers-orb",
  },
  "Orb of Annulment": {
    id: "annul",
    name: "Orb of Annulment",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQW5udWxsT3JiIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/2daba8ccca/AnnullOrb.png",
    category: "Currency",
    detailsId: "orb-of-annulment",
  },
  "Vaal Siphoner": {
    id: "vaal-siphoner",
    name: "Vaal Siphoner",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvSW5jdXJzaW9uQ3JhZnRpbmdPcmJzL0luY3Vyc2lvblZhYWxTaXBob25lciIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/070fd020d7/IncursionVaalSiphoner.png",
    category: "Vaal",
    detailsId: "vaal-siphoner",
  },
  "Artificer's Shard": {
    id: "artificers-shard",
    name: "Artificer's Shard",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lBZGRFcXVpcG1lbnRTb2NrZXRTaGFyZCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/cdcdd8bf3f/CurrencyAddEquipmentSocketShard.png",
    category: "Currency",
    detailsId: "artificers-shard",
  },
  "Regal Shard": {
    id: "regal-shard",
    name: "Regal Shard",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lVcGdyYWRlTWFnaWNUb1JhcmVTaGFyZCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/e4128abe92/CurrencyUpgradeMagicToRareShard.png",
    category: "Currency",
    detailsId: "regal-shard",
  },
  "Simulacrum Splinter": {
    id: "simulacrum-splinter",
    name: "Simulacrum Splinter",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9EZWxpcml1bVNwbGludGVyIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/81906b3522/DeliriumSplinter.png",
    category: "Delirium",
    detailsId: "simulacrum-splinter",
  },
  "Victorious Fate": {
    id: "victorious-fate",
    name: "Victorious Fate",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvU291bENvcmVzL1RyaWFsbWFzdGVyS2V5MyIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/0270951a73/TrialmasterKey3.png",
    category: "Fragments",
    detailsId: "victorious-fate",
  },
  "Ritualistic Reliquary Key": {
    id: "ritualistic-reliquary-key",
    name: "Ritualistic Reliquary Key",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9Ud2lsaWdodE9yZGVyUmVsaXF1YXJ5S2V5Uml0dWFsIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/d4d4229ab8/TwilightOrderReliquaryKeyRitual.png",
    category: "Fragments",
    detailsId: "ritualistic-reliquary-key",
  },
  "Breachlord Sac": {
    id: "breachlord-sac",
    name: "Breachlord Sac",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVlc3RJdGVtcy9CcmVhY2hsb3JkU2FjIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/07670f51fe/BreachlordSac.png",
    category: "Fragments",
    detailsId: "breachlord-sac",
  },
  "Xesht's Reliquary Key": {
    id: "xeshts-reliquary-key",
    name: "Xesht's Reliquary Key",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9Ud2lsaWdodE9yZGVyUmVsaXF1YXJ5S2V5QnJlYWNoIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/866c9d5c45/TwilightOrderReliquaryKeyBreach.png",
    category: "Fragments",
    detailsId: "xeshts-reliquary-key",
  },
  "Call of the Shadows": {
    id: "call-of-the-shadows",
    name: "Call of the Shadows",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUml0dWFsL1JpdHVhbEVmZmlneVBpZWNlcyIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/6fb287c8f4/RitualEffigyPieces.png",
    category: "Ritual",
    detailsId: "call-of-the-shadows",
  },
  "Twilight Reliquary Key": {
    id: "twilight-reliquary-key",
    name: "Twilight Reliquary Key",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9Ud2lsaWdodE9yZGVyUmVsaXF1YXJ5S2V5V29ybGQiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/27f2d492e7/TwilightOrderReliquaryKeyWorld.png",
    category: "Fragments",
    detailsId: "twilight-reliquary-key",
  },
  "Faded Crisis Fragment": {
    id: "faded-crisis-fragment",
    name: "Faded Crisis Fragment",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVlc3RJdGVtcy9QaW5uYWNsZUtleTIiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/5709c39ee7/PinnacleKey2.png",
    category: "Fragments",
    detailsId: "faded-crisis-fragment",
  },
  Simulacrum: {
    id: "simulacrum",
    name: "Simulacrum",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9EZWxpcml1bUZyYWdtZW50Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/9298d81279/DeliriumFragment.png",
    category: "Delirium",
    detailsId: "simulacrum",
  },
  "The Trialmaster's Reliquary Key": {
    id: "the-trialmasters-reliquary-key",
    name: "The Trialmaster's Reliquary Key",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9Ud2lsaWdodE9yZGVyUmVsaXF1YXJ5S2V5VWx0aW1hdHVtIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/92ccd5ad96/TwilightOrderReliquaryKeyUltimatum.png",
    category: "Fragments",
    detailsId: "the-trialmasters-reliquary-key",
  },
  "Deadly Fate": {
    id: "deadly-fate",
    name: "Deadly Fate",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvU291bENvcmVzL1RyaWFsbWFzdGVyS2V5MiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/cccae44832/TrialmasterKey2.png",
    category: "Fragments",
    detailsId: "deadly-fate",
  },
  "Origin Cradle": {
    id: "origin-cradle",
    name: "Origin Cradle",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUHJlY3Vyc29yRWdnIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/c386e361d1/PrecursorEgg.png",
    category: "Fragments",
    detailsId: "origin-cradle",
  },
  "Kulemak's Invitation": {
    id: "kulemaks-invitation",
    name: "Kulemak's Invitation",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvS3VsZW1ha3NJbnZpdGF0aW9uIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/c7e6e86681/KulemaksInvitation.png",
    category: "Fragments",
    detailsId: "kulemaks-invitation",
  },
  "The Arbiter's Reliquary Key": {
    id: "the-arbiters-reliquary-key",
    name: "The Arbiter's Reliquary Key",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9Ud2lsaWdodE9yZGVyUmVsaXF1YXJ5S2V5UGlubmFjbGUiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/c2e7758a33/TwilightOrderReliquaryKeyPinnacle.png",
    category: "Fragments",
    detailsId: "the-arbiters-reliquary-key",
  },
  "Ancient Crisis Fragment": {
    id: "ancient-crisis-fragment",
    name: "Ancient Crisis Fragment",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVlc3RJdGVtcy9QaW5uYWNsZUtleTEiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/ef329c74d1/PinnacleKey1.png",
    category: "Fragments",
    detailsId: "ancient-crisis-fragment",
  },
  "Azmeri Reliquary Key": {
    id: "azmeri-reliquary-key",
    name: "Azmeri Reliquary Key",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9Ud2lsaWdodE9yZGVyUmVsaXF1YXJ5S2V5QXptZXJpIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/cf47ea370f/TwilightOrderReliquaryKeyAzmeri.png",
    category: "Fragments",
    detailsId: "azmeri-reliquary-key",
  },
  "Origin Core": {
    id: "origin-core",
    name: "Origin Core",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUHJlY3Vyc29yU2VlZEVnZ0NvbWJpbmVkIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/789160e327/PrecursorSeedEggCombined.png",
    category: "Fragments",
    detailsId: "origin-core",
  },
  "Cowardly Fate": {
    id: "cowardly-fate",
    name: "Cowardly Fate",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvU291bENvcmVzL1RyaWFsbWFzdGVyS2V5MSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/661ab60074/TrialmasterKey1.png",
    category: "Fragments",
    detailsId: "cowardly-fate",
  },
  "Origin Spark": {
    id: "origin-spark",
    name: "Origin Spark",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUHJlY3Vyc29yU2VlZCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/550527bcd4/PrecursorSeed.png",
    category: "Fragments",
    detailsId: "origin-spark",
  },
  "Weathered Crisis Fragment": {
    id: "weathered-crisis-fragment",
    name: "Weathered Crisis Fragment",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVlc3RJdGVtcy9QaW5uYWNsZUtleTMiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/32e6544250/PinnacleKey3.png",
    category: "Fragments",
    detailsId: "weathered-crisis-fragment",
  },
  "Tangmazu's Reliquary Key": {
    id: "tangmazus-reliquary-key",
    name: "Tangmazu's Reliquary Key",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9Ud2lsaWdodE9yZGVyUmVsaXF1YXJ5S2V5RGVsaXJpdW0iLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/1a87e735c6/TwilightOrderReliquaryKeyDelirium.png",
    category: "Fragments",
    detailsId: "tangmazus-reliquary-key",
  },
  "Zarokh's Reliquary Key: Against the Darkness": {
    id: "against-the-darkness",
    name: "Zarokh's Reliquary Key: Against the Darkness",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9Ud2lsaWdodE9yZGVyUmVsaXF1YXJ5S2V5U2FuY3R1bTIiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/a9e91de8f5/TwilightOrderReliquaryKeySanctum2.png",
    category: "Fragments",
    detailsId: "zarokhs-reliquary-key:-against-the-darkness",
  },
  "Olroth's Reliquary Key": {
    id: "olroths-reliquary-key",
    name: "Olroth's Reliquary Key",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9Ud2lsaWdodE9yZGVyUmVsaXF1YXJ5S2V5RXhwZWRpdGlvbiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/0433c7beb8/TwilightOrderReliquaryKeyExpedition.png",
    category: "Fragments",
    detailsId: "olroths-reliquary-key",
  },
  "Ancient Collarbone": {
    id: "ancient-collarbone",
    name: "Ancient Collarbone",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQWJ5c3MvQW5jaWVudENsYXZpY2xlIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/86b2c7a29a/AncientClavicle.png",
    category: "Abyss",
    detailsId: "ancient-collarbone",
  },
  "Preserved Rib": {
    id: "preserved-rib",
    name: "Preserved Rib",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQWJ5c3MvUHJlc2VydmVkUmlicyIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/3676729ba0/PreservedRibs.png",
    category: "Abyss",
    detailsId: "preserved-rib",
  },
  "Preserved Cranium": {
    id: "preserved-cranium",
    name: "Preserved Cranium",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQWJ5c3MvUHJlc2VydmVkQ3Jhbml1bSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/791fdae503/PreservedCranium.png",
    category: "Abyss",
    detailsId: "preserved-cranium",
  },
  "Ulaman's Gaze": {
    id: "ulamans-gaze",
    name: "Ulaman's Gaze",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQWJ5c3NhbEV5ZVNvY2tldGFibGVzL1VsYW1hbnNHYXplIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/b39b0a03bc/UlamansGaze.png",
    category: "Abyss",
    detailsId: "ulamans-gaze",
  },
  "Gnawed Jawbone": {
    id: "gnawed-jawbone",
    name: "Gnawed Jawbone",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQWJ5c3MvR25hd2VkSmF3Ym9uZSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/6d343a5e8d/GnawedJawbone.png",
    category: "Abyss",
    detailsId: "gnawed-jawbone",
  },
  "Ancient Rib": {
    id: "ancient-rib",
    name: "Ancient Rib",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQWJ5c3MvQW5jaWVudFJpYnMiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/0c779c5d3f/AncientRibs.png",
    category: "Abyss",
    detailsId: "ancient-rib",
  },
  "Amanamu's Gaze": {
    id: "amanamus-gaze",
    name: "Amanamu's Gaze",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQWJ5c3NhbEV5ZVNvY2tldGFibGVzL0FtYW5hbXVzR2F6ZSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/53ba66a7d4/AmanamusGaze.png",
    category: "Abyss",
    detailsId: "amanamus-gaze",
  },
  "Gnawed Collarbone": {
    id: "gnawed-collarbone",
    name: "Gnawed Collarbone",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQWJ5c3MvR25hd2VkQ2xhdmljbGUiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/ff42f1ab47/GnawedClavicle.png",
    category: "Abyss",
    detailsId: "gnawed-collarbone",
  },
  "Preserved Jawbone": {
    id: "preserved-jawbone",
    name: "Preserved Jawbone",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQWJ5c3MvUHJlc2VydmVkSmF3Ym9uZSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/2bb7939b21/PreservedJawbone.png",
    category: "Abyss",
    detailsId: "preserved-jawbone",
  },
  "Kurgal's Gaze": {
    id: "kurgals-gaze",
    name: "Kurgal's Gaze",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQWJ5c3NhbEV5ZVNvY2tldGFibGVzL0t1cmdhbHNHYXplIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/c21eb07bab/KurgalsGaze.png",
    category: "Abyss",
    detailsId: "kurgals-gaze",
  },
  "Preserved Collarbone": {
    id: "preserved-collarbone",
    name: "Preserved Collarbone",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQWJ5c3MvUHJlc2VydmVkQ2FsdmljbGUiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/6f63f7462d/PreservedCalvicle.png",
    category: "Abyss",
    detailsId: "preserved-collarbone",
  },
  "Ancient Jawbone": {
    id: "ancient-jawbone",
    name: "Ancient Jawbone",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQWJ5c3MvQW5jaWVudEphd2JvbmUiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/bff68187a6/AncientJawbone.png",
    category: "Abyss",
    detailsId: "ancient-jawbone",
  },
  "Gnawed Rib": {
    id: "gnawed-rib",
    name: "Gnawed Rib",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQWJ5c3MvR25hd2VkUmlicyIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/b0581454e6/GnawedRibs.png",
    category: "Abyss",
    detailsId: "gnawed-rib",
  },
  "Altered Collarbone": {
    id: "altered-collarbone",
    name: "Altered Collarbone",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQnJlYWNoL0JyZWFjaERlc2VjcmF0aW9uIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/7f4a69e367/BreachDesecration.png",
    category: "Abyss",
    detailsId: "altered-collarbone",
  },
  "Tecrod's Gaze": {
    id: "tecrods-gaze",
    name: "Tecrod's Gaze",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQWJ5c3NhbEV5ZVNvY2tldGFibGVzL1RlY3JvZHNHYXplIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/ef2a9355b4/TecrodsGaze.png",
    category: "Abyss",
    detailsId: "tecrods-gaze",
  },
  "Uncut Spirit Gem (Level 13)": {
    id: "uncut-spirit-gem-13",
    name: "Uncut Spirit Gem (Level 13)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFNraWxsR2VtQnVmZiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/ab25e9aa3b/UncutSkillGemBuff.png",
    category: "UncutGems",
    detailsId: "uncut-spirit-gem-level-13",
  },
  "Uncut Skill Gem (Level 11)": {
    id: "uncut-skill-gem-11",
    name: "Uncut Skill Gem (Level 11)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFNraWxsR2VtIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/97f0ceba15/UncutSkillGem.png",
    category: "UncutGems",
    detailsId: "uncut-skill-gem-level-11",
  },
  "Uncut Skill Gem (Level 18)": {
    id: "uncut-skill-gem-18",
    name: "Uncut Skill Gem (Level 18)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFNraWxsR2VtIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/97f0ceba15/UncutSkillGem.png",
    category: "UncutGems",
    detailsId: "uncut-skill-gem-level-18",
  },
  "Uncut Skill Gem (Level 6)": {
    id: "uncut-skill-gem-6",
    name: "Uncut Skill Gem (Level 6)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFNraWxsR2VtIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/97f0ceba15/UncutSkillGem.png",
    category: "UncutGems",
    detailsId: "uncut-skill-gem-level-6",
  },
  "Uncut Support Gem (Level 5)": {
    id: "uncut-support-gem-5",
    name: "Uncut Support Gem (Level 5)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFN1cHBvcnRHZW0iLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/d1ffe1c951/UncutSupportGem.png",
    category: "UncutGems",
    detailsId: "uncut-support-gem-level-5",
  },
  "Uncut Spirit Gem (Level 12)": {
    id: "uncut-spirit-gem-12",
    name: "Uncut Spirit Gem (Level 12)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFNraWxsR2VtQnVmZiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/ab25e9aa3b/UncutSkillGemBuff.png",
    category: "UncutGems",
    detailsId: "uncut-spirit-gem-level-12",
  },
  "Uncut Spirit Gem (Level 19)": {
    id: "uncut-spirit-gem-19",
    name: "Uncut Spirit Gem (Level 19)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFNraWxsR2VtQnVmZiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/ab25e9aa3b/UncutSkillGemBuff.png",
    category: "UncutGems",
    detailsId: "uncut-spirit-gem-level-19",
  },
  "Uncut Skill Gem (Level 20)": {
    id: "uncut-skill-gem-20",
    name: "Uncut Skill Gem (Level 20)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFNraWxsR2VtIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/97f0ceba15/UncutSkillGem.png",
    category: "UncutGems",
    detailsId: "uncut-skill-gem-level-20",
  },
  "Uncut Skill Gem (Level 17)": {
    id: "uncut-skill-gem-17",
    name: "Uncut Skill Gem (Level 17)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFNraWxsR2VtIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/97f0ceba15/UncutSkillGem.png",
    category: "UncutGems",
    detailsId: "uncut-skill-gem-level-17",
  },
  "Uncut Skill Gem (Level 14)": {
    id: "uncut-skill-gem-14",
    name: "Uncut Skill Gem (Level 14)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFNraWxsR2VtIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/97f0ceba15/UncutSkillGem.png",
    category: "UncutGems",
    detailsId: "uncut-skill-gem-level-14",
  },
  "Uncut Skill Gem (Level 4)": {
    id: "uncut-skill-gem-4",
    name: "Uncut Skill Gem (Level 4)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFNraWxsR2VtIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/97f0ceba15/UncutSkillGem.png",
    category: "UncutGems",
    detailsId: "uncut-skill-gem-level-4",
  },
  "Uncut Skill Gem (Level 15)": {
    id: "uncut-skill-gem-15",
    name: "Uncut Skill Gem (Level 15)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFNraWxsR2VtIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/97f0ceba15/UncutSkillGem.png",
    category: "UncutGems",
    detailsId: "uncut-skill-gem-level-15",
  },
  "Uncut Skill Gem (Level 3)": {
    id: "uncut-skill-gem-3",
    name: "Uncut Skill Gem (Level 3)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFNraWxsR2VtIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/97f0ceba15/UncutSkillGem.png",
    category: "UncutGems",
    detailsId: "uncut-skill-gem-level-3",
  },
  "Uncut Support Gem (Level 3)": {
    id: "uncut-support-gem-3",
    name: "Uncut Support Gem (Level 3)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFN1cHBvcnRHZW0iLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/d1ffe1c951/UncutSupportGem.png",
    category: "UncutGems",
    detailsId: "uncut-support-gem-level-3",
  },
  "Uncut Spirit Gem (Level 11)": {
    id: "uncut-spirit-gem-11",
    name: "Uncut Spirit Gem (Level 11)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFNraWxsR2VtQnVmZiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/ab25e9aa3b/UncutSkillGemBuff.png",
    category: "UncutGems",
    detailsId: "uncut-spirit-gem-level-11",
  },
  "Uncut Support Gem (Level 1)": {
    id: "uncut-support-gem-1",
    name: "Uncut Support Gem (Level 1)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFN1cHBvcnRHZW0iLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/d1ffe1c951/UncutSupportGem.png",
    category: "UncutGems",
    detailsId: "uncut-support-gem-level-1",
  },
  "Uncut Spirit Gem (Level 14)": {
    id: "uncut-spirit-gem-14",
    name: "Uncut Spirit Gem (Level 14)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFNraWxsR2VtQnVmZiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/ab25e9aa3b/UncutSkillGemBuff.png",
    category: "UncutGems",
    detailsId: "uncut-spirit-gem-level-14",
  },
  "Uncut Spirit Gem (Level 15)": {
    id: "uncut-spirit-gem-15",
    name: "Uncut Spirit Gem (Level 15)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFNraWxsR2VtQnVmZiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/ab25e9aa3b/UncutSkillGemBuff.png",
    category: "UncutGems",
    detailsId: "uncut-spirit-gem-level-15",
  },
  "Uncut Skill Gem (Level 2)": {
    id: "uncut-skill-gem-2",
    name: "Uncut Skill Gem (Level 2)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFNraWxsR2VtIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/97f0ceba15/UncutSkillGem.png",
    category: "UncutGems",
    detailsId: "uncut-skill-gem-level-2",
  },
  "Uncut Spirit Gem (Level 5)": {
    id: "uncut-spirit-gem-5",
    name: "Uncut Spirit Gem (Level 5)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFNraWxsR2VtQnVmZiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/ab25e9aa3b/UncutSkillGemBuff.png",
    category: "UncutGems",
    detailsId: "uncut-spirit-gem-level-5",
  },
  "Uncut Spirit Gem (Level 18)": {
    id: "uncut-spirit-gem-18",
    name: "Uncut Spirit Gem (Level 18)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFNraWxsR2VtQnVmZiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/ab25e9aa3b/UncutSkillGemBuff.png",
    category: "UncutGems",
    detailsId: "uncut-spirit-gem-level-18",
  },
  "Uncut Spirit Gem (Level 20)": {
    id: "uncut-spirit-gem-20",
    name: "Uncut Spirit Gem (Level 20)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFNraWxsR2VtQnVmZiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/ab25e9aa3b/UncutSkillGemBuff.png",
    category: "UncutGems",
    detailsId: "uncut-spirit-gem-level-20",
  },
  "Uncut Skill Gem (Level 16)": {
    id: "uncut-skill-gem-16",
    name: "Uncut Skill Gem (Level 16)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFNraWxsR2VtIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/97f0ceba15/UncutSkillGem.png",
    category: "UncutGems",
    detailsId: "uncut-skill-gem-level-16",
  },
  "Uncut Skill Gem (Level 9)": {
    id: "uncut-skill-gem-9",
    name: "Uncut Skill Gem (Level 9)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFNraWxsR2VtIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/97f0ceba15/UncutSkillGem.png",
    category: "UncutGems",
    detailsId: "uncut-skill-gem-level-9",
  },
  "Uncut Skill Gem (Level 19)": {
    id: "uncut-skill-gem-19",
    name: "Uncut Skill Gem (Level 19)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFNraWxsR2VtIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/97f0ceba15/UncutSkillGem.png",
    category: "UncutGems",
    detailsId: "uncut-skill-gem-level-19",
  },
  "Uncut Spirit Gem (Level 8)": {
    id: "uncut-spirit-gem-8",
    name: "Uncut Spirit Gem (Level 8)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFNraWxsR2VtQnVmZiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/ab25e9aa3b/UncutSkillGemBuff.png",
    category: "UncutGems",
    detailsId: "uncut-spirit-gem-level-8",
  },
  "Uncut Skill Gem (Level 1)": {
    id: "uncut-skill-gem-1",
    name: "Uncut Skill Gem (Level 1)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFNraWxsR2VtIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/97f0ceba15/UncutSkillGem.png",
    category: "UncutGems",
    detailsId: "uncut-skill-gem-level-1",
  },
  "Uncut Spirit Gem (Level 4)": {
    id: "uncut-spirit-gem-4",
    name: "Uncut Spirit Gem (Level 4)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFNraWxsR2VtQnVmZiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/ab25e9aa3b/UncutSkillGemBuff.png",
    category: "UncutGems",
    detailsId: "uncut-spirit-gem-level-4",
  },
  "Uncut Skill Gem (Level 7)": {
    id: "uncut-skill-gem-7",
    name: "Uncut Skill Gem (Level 7)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFNraWxsR2VtIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/97f0ceba15/UncutSkillGem.png",
    category: "UncutGems",
    detailsId: "uncut-skill-gem-level-7",
  },
  "Uncut Spirit Gem (Level 17)": {
    id: "uncut-spirit-gem-17",
    name: "Uncut Spirit Gem (Level 17)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFNraWxsR2VtQnVmZiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/ab25e9aa3b/UncutSkillGemBuff.png",
    category: "UncutGems",
    detailsId: "uncut-spirit-gem-level-17",
  },
  "Uncut Support Gem (Level 2)": {
    id: "uncut-support-gem-2",
    name: "Uncut Support Gem (Level 2)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFN1cHBvcnRHZW0iLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/d1ffe1c951/UncutSupportGem.png",
    category: "UncutGems",
    detailsId: "uncut-support-gem-level-2",
  },
  "Uncut Skill Gem (Level 12)": {
    id: "uncut-skill-gem-12",
    name: "Uncut Skill Gem (Level 12)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFNraWxsR2VtIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/97f0ceba15/UncutSkillGem.png",
    category: "UncutGems",
    detailsId: "uncut-skill-gem-level-12",
  },
  "Uncut Spirit Gem (Level 7)": {
    id: "uncut-spirit-gem-7",
    name: "Uncut Spirit Gem (Level 7)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFNraWxsR2VtQnVmZiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/ab25e9aa3b/UncutSkillGemBuff.png",
    category: "UncutGems",
    detailsId: "uncut-spirit-gem-level-7",
  },
  "Uncut Spirit Gem (Level 16)": {
    id: "uncut-spirit-gem-16",
    name: "Uncut Spirit Gem (Level 16)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFNraWxsR2VtQnVmZiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/ab25e9aa3b/UncutSkillGemBuff.png",
    category: "UncutGems",
    detailsId: "uncut-spirit-gem-level-16",
  },
  "Uncut Skill Gem (Level 13)": {
    id: "uncut-skill-gem-13",
    name: "Uncut Skill Gem (Level 13)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFNraWxsR2VtIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/97f0ceba15/UncutSkillGem.png",
    category: "UncutGems",
    detailsId: "uncut-skill-gem-level-13",
  },
  "Uncut Spirit Gem (Level 10)": {
    id: "uncut-spirit-gem-10",
    name: "Uncut Spirit Gem (Level 10)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFNraWxsR2VtQnVmZiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/ab25e9aa3b/UncutSkillGemBuff.png",
    category: "UncutGems",
    detailsId: "uncut-spirit-gem-level-10",
  },
  "Uncut Spirit Gem (Level 6)": {
    id: "uncut-spirit-gem-6",
    name: "Uncut Spirit Gem (Level 6)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFNraWxsR2VtQnVmZiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/ab25e9aa3b/UncutSkillGemBuff.png",
    category: "UncutGems",
    detailsId: "uncut-spirit-gem-level-6",
  },
  "Uncut Support Gem (Level 4)": {
    id: "uncut-support-gem-4",
    name: "Uncut Support Gem (Level 4)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFN1cHBvcnRHZW0iLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/d1ffe1c951/UncutSupportGem.png",
    category: "UncutGems",
    detailsId: "uncut-support-gem-level-4",
  },
  "Uncut Spirit Gem (Level 9)": {
    id: "uncut-spirit-gem-9",
    name: "Uncut Spirit Gem (Level 9)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFNraWxsR2VtQnVmZiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/ab25e9aa3b/UncutSkillGemBuff.png",
    category: "UncutGems",
    detailsId: "uncut-spirit-gem-level-9",
  },
  "Uncut Skill Gem (Level 5)": {
    id: "uncut-skill-gem-5",
    name: "Uncut Skill Gem (Level 5)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFNraWxsR2VtIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/97f0ceba15/UncutSkillGem.png",
    category: "UncutGems",
    detailsId: "uncut-skill-gem-level-5",
  },
  "Uncut Skill Gem (Level 10)": {
    id: "uncut-skill-gem-10",
    name: "Uncut Skill Gem (Level 10)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFNraWxsR2VtIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/97f0ceba15/UncutSkillGem.png",
    category: "UncutGems",
    detailsId: "uncut-skill-gem-level-10",
  },
  "Uncut Skill Gem (Level 8)": {
    id: "uncut-skill-gem-8",
    name: "Uncut Skill Gem (Level 8)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9VbmN1dFNraWxsR2VtIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/97f0ceba15/UncutSkillGem.png",
    category: "UncutGems",
    detailsId: "uncut-skill-gem-level-8",
  },
  "Olroth's Conviction": {
    id: "olroths-conviction",
    name: "Olroth's Conviction",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL09scm90aHNDb252aWN0aW9uIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/1c1940061e/OlrothsConviction.png",
    category: "LineageSupportGems",
    detailsId: "olroths-conviction",
  },
  "Vorana's Siege": {
    id: "voranas-siege",
    name: "Vorana's Siege",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL1ZvcmFuYXNTaWVnZSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/c3df9f3c9a/VoranasSiege.png",
    category: "LineageSupportGems",
    detailsId: "voranas-siege",
  },
  "Oisín's Oath": {
    id: "oisins-oath",
    name: "Oisín's Oath",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL1dhbGtlcm9mdGhlV2lsZHMiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/50c27082f9/WalkeroftheWilds.png",
    category: "LineageSupportGems",
    detailsId: "oisins-oath",
  },
  "Ailith's Chimes": {
    id: "ailiths-chimes",
    name: "Ailith's Chimes",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL01vbmFzdGljIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/795375ce2d/Monastic.png",
    category: "LineageSupportGems",
    detailsId: "ailiths-chimes",
  },
  "Uul-Netol's Embrace": {
    id: "uul-netols-embrace",
    name: "Uul-Netol's Embrace",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0xpbmVhZ2VVdWxOZXRvbCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/751151f142/LineageUulNetol.png",
    category: "LineageSupportGems",
    detailsId: "uul-netols-embrace",
  },
  "Romira's Requital": {
    id: "romiras-requital",
    name: "Romira's Requital",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0xpbmVhZ2VSb21pcmEiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/62c07d95f0/LineageRomira.png",
    category: "LineageSupportGems",
    detailsId: "romiras-requital",
  },
  "Styrn's Ferocity": {
    id: "styrns-ferocity",
    name: "Styrn's Ferocity",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0tuaWdodHNGZXJvY2l0eSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/e015819246/KnightsFerocity.png",
    category: "LineageSupportGems",
    detailsId: "styrns-ferocity",
  },
  "Mórrigan's Insight": {
    id: "mórrigans-insight",
    name: "Mórrigan's Insight",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL01vcnJpZ2Fuc1JlZnVnZSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/38291028f0/MorrigansRefuge.png",
    category: "LineageSupportGems",
    detailsId: "morrigans-insight",
  },
  "Tacati's Ire": {
    id: "tacatis-ire",
    name: "Tacati's Ire",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0xpbmVhZ2VUYWNhdGkiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/d5ded1baa6/LineageTacati.png",
    category: "LineageSupportGems",
    detailsId: "tacatis-ire",
  },
  "Morgana's Tempest": {
    id: "morganas-tempest",
    name: "Morgana's Tempest",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL01vcmdhbmFzVGVtcGVzdCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/55ddb1bfc8/MorganasTempest.png",
    category: "LineageSupportGems",
    detailsId: "morganas-tempest",
  },
  "Daresso's Passion": {
    id: "daressos-passion",
    name: "Daresso's Passion",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0xpbmVhZ2VEYXJlc3NvIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/31805870df/LineageDaresso.png",
    category: "LineageSupportGems",
    detailsId: "daressos-passion",
  },
  "Breachlord's Amalgam": {
    id: "breachlords-amalgam",
    name: "Breachlord's Amalgam",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0JyZWFjaGxvcmRzQW1hbGdhbSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/bdbefcb65b/BreachlordsAmalgam.png",
    category: "LineageSupportGems",
    detailsId: "breachlords-amalgam",
  },
  "Tangmazu's Thurible": {
    id: "tangmazus-thurible",
    name: "Tangmazu's Thurible",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL1RhbmdtYXp1c1RodXJpYmxlIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/ae244c7e9f/TangmazusThurible.png",
    category: "LineageSupportGems",
    detailsId: "tangmazus-thurible",
  },
  "Zerphi's Infamy": {
    id: "zerphis-infamy",
    name: "Zerphi's Infamy",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL1plcnBoaXNMZWdhY3kiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/3b039ea679/ZerphisLegacy.png",
    category: "LineageSupportGems",
    detailsId: "zerphis-infamy",
  },
  "Amanamu's Tithe": {
    id: "amanamus-tithe",
    name: "Amanamu's Tithe",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0xpbmVhZ2VBbWFuYW11Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/715766340e/LineageAmanamu.png",
    category: "LineageSupportGems",
    detailsId: "amanamus-tithe",
  },
  "Kalisa's Crescendo": {
    id: "kalisas-crescendo",
    name: "Kalisa's Crescendo",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0xpbmVhZ2VLYWxpc2FDaG9ydXMiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/1d60b0db2f/LineageKalisaChorus.png",
    category: "LineageSupportGems",
    detailsId: "kalisas-crescendo",
  },
  "Trickster's Shard": {
    id: "tricksters-shard",
    name: "Trickster's Shard",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL1RyaWNrc3RlcnNTaGFyZCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/ad689de215/TrickstersShard.png",
    category: "LineageSupportGems",
    detailsId: "tricksters-shard",
  },
  "Her Declaration": {
    id: "her-declaration",
    name: "Her Declaration",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL01vdGhlcnNEZWNsYXJhdGlvbiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/b3b8f71aec/MothersDeclaration.png",
    category: "LineageSupportGems",
    detailsId: "her-declaration",
  },
  "Sione's Temper": {
    id: "siones-temper",
    name: "Sione's Temper",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL1dpbGRzaGFyZHMiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/6d700adf17/Wildshards.png",
    category: "LineageSupportGems",
    detailsId: "siones-temper",
  },
  "Atalui's Bloodletting": {
    id: "ataluis-bloodletting",
    name: "Atalui's Bloodletting",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0xpbmVhZ2VMaWZldGFwIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/4d9a20ab28/LineageLifetap.png",
    category: "LineageSupportGems",
    detailsId: "ataluis-bloodletting",
  },
  "Zarokh's Refrain": {
    id: "zarokhs-refrain",
    name: "Zarokh's Refrain",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL1phcm9raCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/78c9566961/Zarokh.png",
    category: "LineageSupportGems",
    detailsId: "zarokhs-refrain",
  },
  "Uruk's Smelting": {
    id: "uruks-smelting",
    name: "Uruk's Smelting",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0xpbmVhZ2VBcm1vdXJCcmVhayIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/821e3c1334/LineageArmourBreak.png",
    category: "LineageSupportGems",
    detailsId: "uruks-smelting",
  },
  "Ahn's Citadel": {
    id: "ahns-citadel",
    name: "Ahn's Citadel",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0xpbmVhZ2VBaG5DaGlzZWwiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/5e34f72a34/LineageAhnChisel.png",
    category: "LineageSupportGems",
    detailsId: "ahns-citadel",
  },
  "Atziri's Communion": {
    id: "atziris-communion",
    name: "Atziri's Communion",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0F0emlyaUNvbW11bmlvbiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/10509800d7/AtziriCommunion.png",
    category: "LineageSupportGems",
    detailsId: "atziris-communion",
  },
  "Uhtred's Constellation": {
    id: "uhtreds-constellation",
    name: "Uhtred's Constellation",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL1VodHJlZHNDb25zdGVsbGF0aW9uIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/feb7bc09b0/UhtredsConstellation.png",
    category: "LineageSupportGems",
    detailsId: "uhtreds-constellation",
  },
  "Atziri's Allure": {
    id: "atziris-allure",
    name: "Atziri's Allure",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0xpbmVhZ2VBdHppcmkiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/422053dc32/LineageAtziri.png",
    category: "LineageSupportGems",
    detailsId: "atziris-allure",
  },
  "Ratha's Assault": {
    id: "rathas-assault",
    name: "Ratha's Assault",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0F6YWRpYW4iLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/a77457eef2/Azadian.png",
    category: "LineageSupportGems",
    detailsId: "rathas-assault",
  },
  "Uhtred's Exodus": {
    id: "uhtreds-exodus",
    name: "Uhtred's Exodus",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0xpbmVhZ2VVaHRyZWRMZXNzZXIiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/b286006915/LineageUhtredLesser.png",
    category: "LineageSupportGems",
    detailsId: "uhtreds-exodus",
  },
  "Arakaali's Lust": {
    id: "arakaalis-lust",
    name: "Arakaali's Lust",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0xpbmVhZ2VBcmFrYWFsaSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/be37cb2c77/LineageArakaali.png",
    category: "LineageSupportGems",
    detailsId: "arakaalis-lust",
  },
  "Arjun's Medal": {
    id: "arjuns-medal",
    name: "Arjun's Medal",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0FtbW9Db25zZXJ2YXRpb24iLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/8220863d61/AmmoConservation.png",
    category: "LineageSupportGems",
    detailsId: "arjuns-medal",
  },
  "Uhtred's Augury": {
    id: "uhtreds-augury",
    name: "Uhtred's Augury",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0xpbmVhZ2VVaHRyZWRHcmVhdGVyIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/207f49bf94/LineageUhtredGreater.png",
    category: "LineageSupportGems",
    detailsId: "uhtreds-augury",
  },
  "Doedre's Undoing": {
    id: "doedres-undoing",
    name: "Doedre's Undoing",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0xpbmVhZ2VEb2VkcmUiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/83dad35313/LineageDoedre.png",
    category: "LineageSupportGems",
    detailsId: "doedres-undoing",
  },
  "Kaom's Madness": {
    id: "kaoms-madness",
    name: "Kaom's Madness",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0xpbmVhZ2VLYW9tIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/82eacd9fdc/LineageKaom.png",
    category: "LineageSupportGems",
    detailsId: "kaoms-madness",
  },
  "Uhtred's Rite": {
    id: "uhtreds-rite",
    name: "Uhtred's Rite",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL1V0aHJlZHNDaGFsaWNlIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/484fb5bdbb/UthredsChalice.png",
    category: "LineageSupportGems",
    detailsId: "uhtreds-rite",
  },
  "Xoph's Pyre": {
    id: "xophs-pyre",
    name: "Xoph's Pyre",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0xpbmVhZ2VYb3BoIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/09f4b817dc/LineageXoph.png",
    category: "LineageSupportGems",
    detailsId: "xophs-pyre",
  },
  "Guatelitzi's Ablation": {
    id: "guatelitzis-ablation",
    name: "Guatelitzi's Ablation",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0d1YXRlbGl0emkiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/8ea2f0077d/Guatelitzi.png",
    category: "LineageSupportGems",
    detailsId: "guatelitzis-ablation",
  },
  "Kurgal's Leash": {
    id: "kurgals-leash",
    name: "Kurgal's Leash",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0FieXNzS3VyZ2FsIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/3fbc251a84/AbyssKurgal.png",
    category: "LineageSupportGems",
    detailsId: "kurgals-leash",
  },
  "Paquate's Pact": {
    id: "paquates-pact",
    name: "Paquate's Pact",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL1BhcXVhdGUiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/48c3b0fca2/Paquate.png",
    category: "LineageSupportGems",
    detailsId: "paquates-pact",
  },
  "Khatal's Rejuvenation": {
    id: "khatals-rejuvenation",
    name: "Khatal's Rejuvenation",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0xpbmVhZ2VLaGF0YWwiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/e67d6a908e/LineageKhatal.png",
    category: "LineageSupportGems",
    detailsId: "khatals-rejuvenation",
  },
  "Zarokh's Revolt": {
    id: "zarokhs-revolt",
    name: "Zarokh's Revolt",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL1phcm9raHNSZXZvbHQiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/a611b32c57/ZarokhsRevolt.png",
    category: "LineageSupportGems",
    detailsId: "zarokhs-revolt",
  },
  "Tul's Avalanche": {
    id: "tuls-avalanche",
    name: "Tul's Avalanche",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL1R1bHNQcm9nZW55Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/c0458a3aa3/TulsProgeny.png",
    category: "LineageSupportGems",
    detailsId: "tuls-avalanche",
  },
  "Dominus' Grasp": {
    id: "dominus-grasp",
    name: "Dominus' Grasp",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0xpbmVhZ2VNZXJjeSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/38123ca95d/LineageMercy.png",
    category: "LineageSupportGems",
    detailsId: "dominus-grasp",
  },
  "Arbiter's Ignition": {
    id: "arbiters-ignition",
    name: "Arbiter's Ignition",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0xpbmVhZ2VBcmJpdGVyIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/52bc86c140/LineageArbiter.png",
    category: "LineageSupportGems",
    detailsId: "arbiters-ignition",
  },
  "Arbiter's Reach": {
    id: "arbiters-reach",
    name: "Arbiter's Reach",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL01vdGhlcnNXYXJkIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/3da74f1c62/MothersWard.png",
    category: "LineageSupportGems",
    detailsId: "arbiters-reach",
  },
  "Tasalio's Rhythm": {
    id: "tasalios-rhythm",
    name: "Tasalio's Rhythm",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0xpbmVhZ2VUYXNhbGlvIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/19f9a64786/LineageTasalio.png",
    category: "LineageSupportGems",
    detailsId: "tasalios-rhythm",
  },
  "Einhar's Beastrite": {
    id: "einhars-beastrite",
    name: "Einhar's Beastrite",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0xpbmVhZ2VFaW5oYXIiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/aec9088873/LineageEinhar.png",
    category: "LineageSupportGems",
    detailsId: "einhars-beastrite",
  },
  "Tecrod's Revenge": {
    id: "tecrods-revenge",
    name: "Tecrod's Revenge",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0xpbmVhZ2VUZWNyb2QiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/783b026592/LineageTecrod.png",
    category: "LineageSupportGems",
    detailsId: "tecrods-revenge",
  },
  "Tawhoa's Tending": {
    id: "tawhoas-tending",
    name: "Tawhoa's Tending",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL1R1a29oYW1hIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/8b469f3f5e/Tukohama.png",
    category: "LineageSupportGems",
    detailsId: "tawhoas-tending",
  },
  "Hayoxi's Fulmination": {
    id: "hayoxis-fulmination",
    name: "Hayoxi's Fulmination",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0hheW94aSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/e0817c923c/Hayoxi.png",
    category: "LineageSupportGems",
    detailsId: "hayoxis-fulmination",
  },
  "Bhatair's Vengeance": {
    id: "bhatairs-vengeance",
    name: "Bhatair's Vengeance",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL1NoYXR0ZXJlZEZhbmciLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/ed794a9e4b/ShatteredFang.png",
    category: "LineageSupportGems",
    detailsId: "bhatairs-vengeance",
  },
  "Brutus' Brain": {
    id: "brutus-brain",
    name: "Brutus' Brain",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0xpbmVhZ2VNZWF0c2hpZWxkIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/115edf7e2f/LineageMeatshield.png",
    category: "LineageSupportGems",
    detailsId: "brutus-brain",
  },
  "Styrn's Mountain": {
    id: "styrns-mountain",
    name: "Styrn's Mountain",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0tuaWdodHNMZWdhY3kiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/2564cea11c/KnightsLegacy.png",
    category: "LineageSupportGems",
    detailsId: "styrns-mountain",
  },
  "Seraph's Heart": {
    id: "seraphs-heart",
    name: "Seraph's Heart",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL1NlcmFwaHNIZWFydCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/b24b182f0b/SeraphsHeart.png",
    category: "LineageSupportGems",
    detailsId: "seraphs-heart",
  },
  "Ixchel's Torment": {
    id: "ixchels-torment",
    name: "Ixchel's Torment",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL1RyaWFsbWFzdGVyIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/231195f1b3/Trialmaster.png",
    category: "LineageSupportGems",
    detailsId: "ixchels-torment",
  },
  "Uhtred's Omen": {
    id: "uhtreds-omen",
    name: "Uhtred's Omen",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0xpbmVhZ2VVaHRyZWRTdGFuZGFyZCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/2e603483a5/LineageUhtredStandard.png",
    category: "LineageSupportGems",
    detailsId: "uhtreds-omen",
  },
  "Xibaqua's Rending": {
    id: "xibaquas-rending",
    name: "Xibaqua's Rending",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0xpbmVhZ2VYaWJhcXVhIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/e4e4642563/LineageXibaqua.png",
    category: "LineageSupportGems",
    detailsId: "xibaquas-rending",
  },
  "Esh's Radiance": {
    id: "eshs-radiance",
    name: "Esh's Radiance",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0xpbmVhZ2VFc2giLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/2bdbf8be07/LineageEsh.png",
    category: "LineageSupportGems",
    detailsId: "eshs-radiance",
  },
  "Catha's Brilliance": {
    id: "cathas-brilliance",
    name: "Catha's Brilliance",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0NhdGhhc0JyaWxsaWFuY2UiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/101f7491fe/CathasBrilliance.png",
    category: "LineageSupportGems",
    detailsId: "cathas-brilliance",
  },
  "Esh's Prowess": {
    id: "eshs-prowess",
    name: "Esh's Prowess",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0VzaHNQcm93ZXNzIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/5deb667226/EshsProwess.png",
    category: "LineageSupportGems",
    detailsId: "eshs-prowess",
  },
  "Tul's Stillness": {
    id: "tuls-stillness",
    name: "Tul's Stillness",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0xpbmVhZ2VUdWwiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/cff647542b/LineageTul.png",
    category: "LineageSupportGems",
    detailsId: "tuls-stillness",
  },
  "Vruun's Inevitability": {
    id: "vruuns-inevitability",
    name: "Vruun's Inevitability",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL1ZydXVuc1NwaWtlIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/13d2115682/VruunsSpike.png",
    category: "LineageSupportGems",
    detailsId: "vruuns-inevitability",
  },
  "Medved's Felling": {
    id: "medveds-felling",
    name: "Medved's Felling",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL01lZHZlZHNGZWxsaW5nIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/e4c502b452/MedvedsFelling.png",
    category: "LineageSupportGems",
    detailsId: "medveds-felling",
  },
  "Olroth's Hubris": {
    id: "olroths-hubris",
    name: "Olroth's Hubris",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL09scm90aHNIdWJyaXMiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/60d750261f/OlrothsHubris.png",
    category: "LineageSupportGems",
    detailsId: "olroths-hubris",
  },
  "Rakiata's Flow": {
    id: "rakiatas-flow",
    name: "Rakiata's Flow",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL1Jha2lhdGEiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/20a70b7bd3/Rakiata.png",
    category: "LineageSupportGems",
    detailsId: "rakiatas-flow",
  },
  "Rigwald's Ferocity": {
    id: "rigwalds-ferocity",
    name: "Rigwald's Ferocity",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL1JpZ3dhbGQiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/a053a2b077/Rigwald.png",
    category: "LineageSupportGems",
    detailsId: "rigwalds-ferocity",
  },
  "Garukhan's Resolve": {
    id: "garukhans-resolve",
    name: "Garukhan's Resolve",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0dhcnVraGFuIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/392773e9fd/Garukhan.png",
    category: "LineageSupportGems",
    detailsId: "garukhans-resolve",
  },
  "Breachlord's Rift": {
    id: "breachlords-rift",
    name: "Breachlord's Rift",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0JyZWFjaGxvcmRzUmVtb3JzZSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/6a18a03016/BreachlordsRemorse.png",
    category: "LineageSupportGems",
    detailsId: "breachlords-rift",
  },
  "Dialla's Desire": {
    id: "diallas-desire",
    name: "Dialla's Desire",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0RpYWxsYSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/1b959c86b4/Dialla.png",
    category: "LineageSupportGems",
    detailsId: "diallas-desire",
  },
  "Cirel's Cultivation": {
    id: "cirels-cultivation",
    name: "Cirel's Cultivation",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0dyZWF0d29vZCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/9d2739c22d/Greatwood.png",
    category: "LineageSupportGems",
    detailsId: "cirels-cultivation",
  },
  "Vilenta's Propulsion": {
    id: "vilentas-propulsion",
    name: "Vilenta's Propulsion",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0xpbmVhZ2VWaWxlbnRhIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/abda900f3c/LineageVilenta.png",
    category: "LineageSupportGems",
    detailsId: "vilentas-propulsion",
  },
  "Varashta's Blessing": {
    id: "varashtas-blessing",
    name: "Varashta's Blessing",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0xpbmVhZ2VEamlubiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/62882cee00/LineageDjinn.png",
    category: "LineageSupportGems",
    detailsId: "varashtas-blessing",
  },
  "Atziri's Impatience": {
    id: "atziris-impatience",
    name: "Atziri's Impatience",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0F0emlyaUltcGF0aWVuY2UiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/9598c10260/AtziriImpatience.png",
    category: "LineageSupportGems",
    detailsId: "atziris-impatience",
  },
  "Prototype Seventeen": {
    id: "prototype-seventeen",
    name: "Prototype Seventeen",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL1Byb3RvdHlwZVNldmVudGVlbiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/85059c19da/PrototypeSeventeen.png",
    category: "LineageSupportGems",
    detailsId: "prototype-seventeen",
  },
  "Kulemak's Dominion": {
    id: "kulemaks-dominion",
    name: "Kulemak's Dominion",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL0xpbmVhZ2VLdWxlbWFrU3BpcmUiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/7f63599d16/LineageKulemakSpire.png",
    category: "LineageSupportGems",
    detailsId: "kulemaks-dominion",
  },
  "Vruun's Aftermath": {
    id: "vruuns-aftermath",
    name: "Vruun's Aftermath",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9OZXcvTmV3U3VwcG9ydC9MaW5lYWdlL1ZydXVuc0FmdGVybWF0aCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/209e0d5270/VruunsAftermath.png",
    category: "LineageSupportGems",
    detailsId: "vruuns-aftermath",
  },
  "Perfect Essence of Battle": {
    id: "perfect-essence-of-battle",
    name: "Perfect Essence of Battle",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9BdHRhY2tFc3NlbmNlUGVyZmVjdCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/4e86ee5d8d/AttackEssencePerfect.png",
    category: "Essences",
    detailsId: "perfect-essence-of-battle",
  },
  "Perfect Essence of Alacrity": {
    id: "perfect-essence-of-alacrity",
    name: "Perfect Essence of Alacrity",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9TcGVlZENhc3RlckVzc2VuY2VQZXJmZWN0Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/7108cba28f/SpeedCasterEssencePerfect.png",
    category: "Essences",
    detailsId: "perfect-essence-of-alacrity",
  },
  "Greater Essence of Seeking": {
    id: "greater-essence-of-seeking",
    name: "Greater Essence of Seeking",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9HcmVhdGVyQ3JpdGljYWxFc3NlbmNlIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/db4eadee00/GreaterCriticalEssence.png",
    category: "Essences",
    detailsId: "greater-essence-of-seeking",
  },
  "Greater Essence of the Body": {
    id: "greater-essence-of-the-body",
    name: "Greater Essence of the Body",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9HcmVhdGVyTGlmZUVzc2VuY2UiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/8906b401fe/GreaterLifeEssence.png",
    category: "Essences",
    detailsId: "greater-essence-of-the-body",
  },
  "Greater Essence of Ice": {
    id: "greater-essence-of-ice",
    name: "Greater Essence of Ice",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9HcmVhdGVyQ29sZEVzc2VuY2UiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/e5224bace0/GreaterColdEssence.png",
    category: "Essences",
    detailsId: "greater-essence-of-ice",
  },
  "Essence of Insanity": {
    id: "essence-of-insanity",
    name: "Essence of Insanity",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9Db3JydXB0ZWRFc3NlbmNlSW5zYW5pdHkiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/2231419c93/CorruptedEssenceInsanity.png",
    category: "Essences",
    detailsId: "essence-of-insanity",
  },
  "Essence of Enhancement": {
    id: "essence-of-enhancement",
    name: "Essence of Enhancement",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9EZWZlbmNlc0Vzc2VuY2UiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/e1e5c1ccb8/DefencesEssence.png",
    category: "Essences",
    detailsId: "essence-of-enhancement",
  },
  "Essence of the Abyss": {
    id: "essence-of-the-abyss",
    name: "Essence of the Abyss",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9BYnlzc2FsRXNzZW5jZSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/3a286394d4/AbyssalEssence.png",
    category: "Essences",
    detailsId: "essence-of-the-abyss",
  },
  "Perfect Essence of Sorcery": {
    id: "perfect-essence-of-sorcery",
    name: "Perfect Essence of Sorcery",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9DYXN0ZXJFc3NlbmNlUGVyZmVjdCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/5aa3698010/CasterEssencePerfect.png",
    category: "Essences",
    detailsId: "perfect-essence-of-sorcery",
  },
  "Perfect Essence of Haste": {
    id: "perfect-essence-of-haste",
    name: "Perfect Essence of Haste",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9TcGVlZEVzc2VuY2VQZXJmZWN0Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/93df0c5b25/SpeedEssencePerfect.png",
    category: "Essences",
    detailsId: "perfect-essence-of-haste",
  },
  "Greater Essence of Sorcery": {
    id: "greater-essence-of-sorcery",
    name: "Greater Essence of Sorcery",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9HcmVhdGVyQ2FzdGVyRXNzZW5jZSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/14b7e4c8ef/GreaterCasterEssence.png",
    category: "Essences",
    detailsId: "greater-essence-of-sorcery",
  },
  "Essence of Delirium": {
    id: "essence-of-delirium",
    name: "Essence of Delirium",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9Db3JydXB0ZWRFc3NlbmNlRGVsaXJpdW0iLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/d67329e6ed/CorruptedEssenceDelirium.png",
    category: "Essences",
    detailsId: "essence-of-delirium",
  },
  "Perfect Essence of Seeking": {
    id: "perfect-essence-of-seeking",
    name: "Perfect Essence of Seeking",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9Dcml0aWNhbEVzc2VuY2VQZXJmZWN0Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/3d5125e9d6/CriticalEssencePerfect.png",
    category: "Essences",
    detailsId: "perfect-essence-of-seeking",
  },
  "Perfect Essence of Electricity": {
    id: "perfect-essence-of-electricity",
    name: "Perfect Essence of Electricity",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9MaWdodG5pbmdFc3NlbmNlUGVyZmVjdCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/8c53c73716/LightningEssencePerfect.png",
    category: "Essences",
    detailsId: "perfect-essence-of-electricity",
  },
  "Perfect Essence of Opulence": {
    id: "perfect-essence-of-opulence",
    name: "Perfect Essence of Opulence",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9SYXJpdHlSZXNpc3RhbmNlRXNzZW5jZVBlcmZlY3QiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/86dd0d0b4d/RarityResistanceEssencePerfect.png",
    category: "Essences",
    detailsId: "perfect-essence-of-opulence",
  },
  "Greater Essence of Grounding": {
    id: "greater-essence-of-grounding",
    name: "Greater Essence of Grounding",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9HcmVhdGVyTGlnaHRuaW5nUmVzaXN0YW5jZUVzc2VuY2UiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/fd9d91c76a/GreaterLightningResistanceEssence.png",
    category: "Essences",
    detailsId: "greater-essence-of-grounding",
  },
  "Greater Essence of Opulence": {
    id: "greater-essence-of-opulence",
    name: "Greater Essence of Opulence",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9HcmVhdGVyUmFyaXR5UmVzaXN0YW5jZUVzc2VuY2UiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/dfc7c22676/GreaterRarityResistanceEssence.png",
    category: "Essences",
    detailsId: "greater-essence-of-opulence",
  },
  "Greater Essence of the Mind": {
    id: "greater-essence-of-the-mind",
    name: "Greater Essence of the Mind",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9HcmVhdGVyTWFuYUVzc2VuY2UiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/f9e17e6d47/GreaterManaEssence.png",
    category: "Essences",
    detailsId: "greater-essence-of-the-mind",
  },
  "Perfect Essence of Thawing": {
    id: "perfect-essence-of-thawing",
    name: "Perfect Essence of Thawing",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9Db2xkUmVzaXN0YW5jZUVzc2VuY2VQZXJmZWN0Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/71b05376d6/ColdResistanceEssencePerfect.png",
    category: "Essences",
    detailsId: "perfect-essence-of-thawing",
  },
  "Essence of the Breach": {
    id: "essence-of-the-breach",
    name: "Essence of the Breach",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9CcmVhY2hFc3NlbmNlIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/60e81fa5eb/BreachEssence.png",
    category: "Essences",
    detailsId: "essence-of-the-breach",
  },
  "Perfect Essence of the Infinite": {
    id: "perfect-essence-of-the-infinite",
    name: "Perfect Essence of the Infinite",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9BdHRyaWJ1dGVFc3NlbmNlUGVyZmVjdCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/ed201cbcb3/AttributeEssencePerfect.png",
    category: "Essences",
    detailsId: "perfect-essence-of-the-infinite",
  },
  "Greater Essence of the Infinite": {
    id: "greater-essence-of-the-infinite",
    name: "Greater Essence of the Infinite",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9HcmVhdGVyQXR0cmlidXRlRXNzZW5jZSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/8a8cb823af/GreaterAttributeEssence.png",
    category: "Essences",
    detailsId: "greater-essence-of-the-infinite",
  },
  "Essence of Grounding": {
    id: "essence-of-grounding",
    name: "Essence of Grounding",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9MaWdodG5pbmdSZXNpc3RhbmNlRXNzZW5jZSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/f752fa5ed2/LightningResistanceEssence.png",
    category: "Essences",
    detailsId: "essence-of-grounding",
  },
  "Greater Essence of Insulation": {
    id: "greater-essence-of-insulation",
    name: "Greater Essence of Insulation",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9HcmVhdGVyRmlyZVJlc2lzdGFuY2VFc3NlbmNlIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/e5b663f414/GreaterFireResistanceEssence.png",
    category: "Essences",
    detailsId: "greater-essence-of-insulation",
  },
  "Greater Essence of Command": {
    id: "greater-essence-of-command",
    name: "Greater Essence of Command",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9HcmVhdGVyQWxseUVzc2VuY2UiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/55b6ba3361/GreaterAllyEssence.png",
    category: "Essences",
    detailsId: "greater-essence-of-command",
  },
  "Essence of Ruin": {
    id: "essence-of-ruin",
    name: "Essence of Ruin",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9DaGFvc0Vzc2VuY2UiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/5f0d3c7014/ChaosEssence.png",
    category: "Essences",
    detailsId: "essence-of-ruin",
  },
  "Greater Essence of Thawing": {
    id: "greater-essence-of-thawing",
    name: "Greater Essence of Thawing",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9HcmVhdGVyQ29sZFJlc2lzdGFuY2VFc3NlbmNlIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/acdbacca0f/GreaterColdResistanceEssence.png",
    category: "Essences",
    detailsId: "greater-essence-of-thawing",
  },
  "Essence of Abrasion": {
    id: "essence-of-abrasion",
    name: "Essence of Abrasion",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9QaHlzaWNhbEVzc2VuY2UiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/e52cd05eeb/PhysicalEssence.png",
    category: "Essences",
    detailsId: "essence-of-abrasion",
  },
  "Perfect Essence of Ice": {
    id: "perfect-essence-of-ice",
    name: "Perfect Essence of Ice",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9Db2xkRXNzZW5jZVBlcmZlY3QiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/f4d0008973/ColdEssencePerfect.png",
    category: "Essences",
    detailsId: "perfect-essence-of-ice",
  },
  "Greater Essence of Enhancement": {
    id: "greater-essence-of-enhancement",
    name: "Greater Essence of Enhancement",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9HcmVhdGVyRGVmZW5jZXNFc3NlbmNlIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/a0ed2df82c/GreaterDefencesEssence.png",
    category: "Essences",
    detailsId: "greater-essence-of-enhancement",
  },
  "Essence of Horror": {
    id: "essence-of-horror",
    name: "Essence of Horror",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9Db3JydXB0ZWRFc3NlbmNlSG9ycm9yIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/6b3b256279/CorruptedEssenceHorror.png",
    category: "Essences",
    detailsId: "essence-of-horror",
  },
  "Perfect Essence of the Body": {
    id: "perfect-essence-of-the-body",
    name: "Perfect Essence of the Body",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9MaWZlRXNzZW5jZVBlcmZlY3QiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/09083af8bb/LifeEssencePerfect.png",
    category: "Essences",
    detailsId: "perfect-essence-of-the-body",
  },
  "Perfect Essence of Enhancement": {
    id: "perfect-essence-of-enhancement",
    name: "Perfect Essence of Enhancement",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9EZWZlbmNlc0Vzc2VuY2VQZXJmZWN0Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/dd5b00f215/DefencesEssencePerfect.png",
    category: "Essences",
    detailsId: "perfect-essence-of-enhancement",
  },
  "Perfect Essence of Command": {
    id: "perfect-essence-of-command",
    name: "Perfect Essence of Command",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9BbGx5RXNzZW5jZVBlcmZlY3QiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/0e06dceedc/AllyEssencePerfect.png",
    category: "Essences",
    detailsId: "perfect-essence-of-command",
  },
  "Essence of Hysteria": {
    id: "essence-of-hysteria",
    name: "Essence of Hysteria",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9Db3JydXB0ZWRFc3NlbmNlSHlzdGVyaWEiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/91e94f1413/CorruptedEssenceHysteria.png",
    category: "Essences",
    detailsId: "essence-of-hysteria",
  },
  "Greater Essence of Alacrity": {
    id: "greater-essence-of-alacrity",
    name: "Greater Essence of Alacrity",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9HcmVhdGVyU3BlZWRDYXN0ZXJFc3NlbmNlIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/b77c25162f/GreaterSpeedCasterEssence.png",
    category: "Essences",
    detailsId: "greater-essence-of-alacrity",
  },
  "Perfect Essence of Grounding": {
    id: "perfect-essence-of-grounding",
    name: "Perfect Essence of Grounding",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9MaWdodG5pbmdSZXNpc3RhbmNlRXNzZW5jZVBlcmZlY3QiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/10c362c717/LightningResistanceEssencePerfect.png",
    category: "Essences",
    detailsId: "perfect-essence-of-grounding",
  },
  "Essence of Seeking": {
    id: "essence-of-seeking",
    name: "Essence of Seeking",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9Dcml0aWNhbEVzc2VuY2UiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/febf231da7/CriticalEssence.png",
    category: "Essences",
    detailsId: "essence-of-seeking",
  },
  "Greater Essence of Abrasion": {
    id: "greater-essence-of-abrasion",
    name: "Greater Essence of Abrasion",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9HcmVhdGVyUGh5c2ljYWxFc3NlbmNlIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/a28c932def/GreaterPhysicalEssence.png",
    category: "Essences",
    detailsId: "greater-essence-of-abrasion",
  },
  "Essence of Electricity": {
    id: "essence-of-electricity",
    name: "Essence of Electricity",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9MaWdodG5pbmdFc3NlbmNlIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/2c3725fdad/LightningEssence.png",
    category: "Essences",
    detailsId: "essence-of-electricity",
  },
  "Greater Essence of Haste": {
    id: "greater-essence-of-haste",
    name: "Greater Essence of Haste",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9HcmVhdGVyU3BlZWRFc3NlbmNlIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/5a72f95c24/GreaterSpeedEssence.png",
    category: "Essences",
    detailsId: "greater-essence-of-haste",
  },
  "Greater Essence of Ruin": {
    id: "greater-essence-of-ruin",
    name: "Greater Essence of Ruin",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9HcmVhdGVyQ2hhb3NFc3NlbmNlIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/5c71ec7418/GreaterChaosEssence.png",
    category: "Essences",
    detailsId: "greater-essence-of-ruin",
  },
  "Perfect Essence of Insulation": {
    id: "perfect-essence-of-insulation",
    name: "Perfect Essence of Insulation",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9GaXJlUmVzaXN0YW5jZUVzc2VuY2VQZXJmZWN0Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/133d10b42e/FireResistanceEssencePerfect.png",
    category: "Essences",
    detailsId: "perfect-essence-of-insulation",
  },
  "Lesser Essence of Grounding": {
    id: "lesser-essence-of-grounding",
    name: "Lesser Essence of Grounding",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9MaWdodG5pbmdSZXNpc3RhbmNlRXNzZW5jZUxlc3NlciIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/fa8f1431fb/LightningResistanceEssenceLesser.png",
    category: "Essences",
    detailsId: "lesser-essence-of-grounding",
  },
  "Essence of Sorcery": {
    id: "essence-of-sorcery",
    name: "Essence of Sorcery",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9DYXN0ZXJFc3NlbmNlIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/6bb099115a/CasterEssence.png",
    category: "Essences",
    detailsId: "essence-of-sorcery",
  },
  "Essence of Alacrity": {
    id: "essence-of-alacrity",
    name: "Essence of Alacrity",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9TcGVlZENhc3RlckVzc2VuY2UiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/2a866d411b/SpeedCasterEssence.png",
    category: "Essences",
    detailsId: "essence-of-alacrity",
  },
  "Lesser Essence of the Mind": {
    id: "lesser-essence-of-the-mind",
    name: "Lesser Essence of the Mind",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9NYW5hRXNzZW5jZUxlc3NlciIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/35a1d11465/ManaEssenceLesser.png",
    category: "Essences",
    detailsId: "lesser-essence-of-the-mind",
  },
  "Perfect Essence of Flames": {
    id: "perfect-essence-of-flames",
    name: "Perfect Essence of Flames",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9GaXJlRXNzZW5jZVBlcmZlY3QiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/d5669e7c9c/FireEssencePerfect.png",
    category: "Essences",
    detailsId: "perfect-essence-of-flames",
  },
  "Essence of the Infinite": {
    id: "essence-of-the-infinite",
    name: "Essence of the Infinite",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9BdHRyaWJ1dGVFc3NlbmNlIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/58f9516082/AttributeEssence.png",
    category: "Essences",
    detailsId: "essence-of-the-infinite",
  },
  "Lesser Essence of Haste": {
    id: "lesser-essence-of-haste",
    name: "Lesser Essence of Haste",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9TcGVlZEVzc2VuY2VMZXNzZXIiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/e01693a14c/SpeedEssenceLesser.png",
    category: "Essences",
    detailsId: "lesser-essence-of-haste",
  },
  "Lesser Essence of Electricity": {
    id: "lesser-essence-of-electricity",
    name: "Lesser Essence of Electricity",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9MaWdodG5pbmdFc3NlbmNlTGVzc2VyIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/49193c5226/LightningEssenceLesser.png",
    category: "Essences",
    detailsId: "lesser-essence-of-electricity",
  },
  "Essence of Ice": {
    id: "essence-of-ice",
    name: "Essence of Ice",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9Db2xkRXNzZW5jZSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/73d9fd8619/ColdEssence.png",
    category: "Essences",
    detailsId: "essence-of-ice",
  },
  "Essence of Opulence": {
    id: "essence-of-opulence",
    name: "Essence of Opulence",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9SYXJpdHlSZXNpc3RhbmNlRXNzZW5jZSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/1b79acb619/RarityResistanceEssence.png",
    category: "Essences",
    detailsId: "essence-of-opulence",
  },
  "Essence of Haste": {
    id: "essence-of-haste",
    name: "Essence of Haste",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9TcGVlZEVzc2VuY2UiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/affda36f07/SpeedEssence.png",
    category: "Essences",
    detailsId: "essence-of-haste",
  },
  "Lesser Essence of Flames": {
    id: "lesser-essence-of-flames",
    name: "Lesser Essence of Flames",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9GaXJlRXNzZW5jZUxlc3NlciIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/2e190c2f7f/FireEssenceLesser.png",
    category: "Essences",
    detailsId: "lesser-essence-of-flames",
  },
  "Perfect Essence of Ruin": {
    id: "perfect-essence-of-ruin",
    name: "Perfect Essence of Ruin",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9DaGFvc0Vzc2VuY2VQZXJmZWN0Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/ab17828e71/ChaosEssencePerfect.png",
    category: "Essences",
    detailsId: "perfect-essence-of-ruin",
  },
  "Perfect Essence of the Mind": {
    id: "perfect-essence-of-the-mind",
    name: "Perfect Essence of the Mind",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9NYW5hRXNzZW5jZVBlcmZlY3QiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/84410174b2/ManaEssencePerfect.png",
    category: "Essences",
    detailsId: "perfect-essence-of-the-mind",
  },
  "Lesser Essence of Abrasion": {
    id: "lesser-essence-of-abrasion",
    name: "Lesser Essence of Abrasion",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9QaHlzaWNhbEVzc2VuY2VMZXNzZXIiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/21723a9133/PhysicalEssenceLesser.png",
    category: "Essences",
    detailsId: "lesser-essence-of-abrasion",
  },
  "Essence of Battle": {
    id: "essence-of-battle",
    name: "Essence of Battle",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9BdHRhY2tFc3NlbmNlIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/3cece29e19/AttackEssence.png",
    category: "Essences",
    detailsId: "essence-of-battle",
  },
  "Lesser Essence of the Infinite": {
    id: "lesser-essence-of-the-infinite",
    name: "Lesser Essence of the Infinite",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9BdHRyaWJ1dGVFc3NlbmNlTGVzc2VyIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/6110d3af93/AttributeEssenceLesser.png",
    category: "Essences",
    detailsId: "lesser-essence-of-the-infinite",
  },
  "Lesser Essence of Alacrity": {
    id: "lesser-essence-of-alacrity",
    name: "Lesser Essence of Alacrity",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9TcGVlZENhc3RlckVzc2VuY2VMZXNzZXIiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/837a9c2d66/SpeedCasterEssenceLesser.png",
    category: "Essences",
    detailsId: "lesser-essence-of-alacrity",
  },
  "Lesser Essence of Sorcery": {
    id: "lesser-essence-of-sorcery",
    name: "Lesser Essence of Sorcery",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9DYXN0ZXJFc3NlbmNlTGVzc2VyIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/8b5c055fc7/CasterEssenceLesser.png",
    category: "Essences",
    detailsId: "lesser-essence-of-sorcery",
  },
  "Greater Essence of Electricity": {
    id: "greater-essence-of-electricity",
    name: "Greater Essence of Electricity",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9HcmVhdGVyTGlnaHRuaW5nRXNzZW5jZSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/c6df464bb9/GreaterLightningEssence.png",
    category: "Essences",
    detailsId: "greater-essence-of-electricity",
  },
  "Essence of the Body": {
    id: "essence-of-the-body",
    name: "Essence of the Body",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9MaWZlRXNzZW5jZSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/638d6c4cbe/LifeEssence.png",
    category: "Essences",
    detailsId: "essence-of-the-body",
  },
  "Lesser Essence of Enhancement": {
    id: "lesser-essence-of-enhancement",
    name: "Lesser Essence of Enhancement",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9EZWZlbmNlc0Vzc2VuY2VMZXNzZXIiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/ec9da3aad1/DefencesEssenceLesser.png",
    category: "Essences",
    detailsId: "lesser-essence-of-enhancement",
  },
  "Perfect Essence of Abrasion": {
    id: "perfect-essence-of-abrasion",
    name: "Perfect Essence of Abrasion",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9QaHlzaWNhbEVzc2VuY2VQZXJmZWN0Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/9690e5eb39/PhysicalEssencePerfect.png",
    category: "Essences",
    detailsId: "perfect-essence-of-abrasion",
  },
  "Lesser Essence of the Body": {
    id: "lesser-essence-of-the-body",
    name: "Lesser Essence of the Body",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9MaWZlRXNzZW5jZUxlc3NlciIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/fb88bb3951/LifeEssenceLesser.png",
    category: "Essences",
    detailsId: "lesser-essence-of-the-body",
  },
  "Essence of Command": {
    id: "essence-of-command",
    name: "Essence of Command",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9BbGx5RXNzZW5jZSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/7150f695c2/AllyEssence.png",
    category: "Essences",
    detailsId: "essence-of-command",
  },
  "Lesser Essence of Seeking": {
    id: "lesser-essence-of-seeking",
    name: "Lesser Essence of Seeking",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9Dcml0aWNhbEVzc2VuY2VMZXNzZXIiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/beef996420/CriticalEssenceLesser.png",
    category: "Essences",
    detailsId: "lesser-essence-of-seeking",
  },
  "Greater Essence of Flames": {
    id: "greater-essence-of-flames",
    name: "Greater Essence of Flames",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9HcmVhdGVyRmlyZUVzc2VuY2UiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/9b8d6e7b4e/GreaterFireEssence.png",
    category: "Essences",
    detailsId: "greater-essence-of-flames",
  },
  "Essence of the Mind": {
    id: "essence-of-the-mind",
    name: "Essence of the Mind",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9NYW5hRXNzZW5jZSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/c881e6273c/ManaEssence.png",
    category: "Essences",
    detailsId: "essence-of-the-mind",
  },
  "Essence of Insulation": {
    id: "essence-of-insulation",
    name: "Essence of Insulation",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9GaXJlUmVzaXN0YW5jZUVzc2VuY2UiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/228d48a458/FireResistanceEssence.png",
    category: "Essences",
    detailsId: "essence-of-insulation",
  },
  "Greater Essence of Battle": {
    id: "greater-essence-of-battle",
    name: "Greater Essence of Battle",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9HcmVhdGVyQXR0YWNrRXNzZW5jZSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/e2bb5332b8/GreaterAttackEssence.png",
    category: "Essences",
    detailsId: "greater-essence-of-battle",
  },
  "Lesser Essence of Ruin": {
    id: "lesser-essence-of-ruin",
    name: "Lesser Essence of Ruin",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9DaGFvc0Vzc2VuY2VMZXNzZXIiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/39ed21f57a/ChaosEssenceLesser.png",
    category: "Essences",
    detailsId: "lesser-essence-of-ruin",
  },
  "Essence of Flames": {
    id: "essence-of-flames",
    name: "Essence of Flames",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9GaXJlRXNzZW5jZSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/add6c12f64/FireEssence.png",
    category: "Essences",
    detailsId: "essence-of-flames",
  },
  "Lesser Essence of Command": {
    id: "lesser-essence-of-command",
    name: "Lesser Essence of Command",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9BbGx5RXNzZW5jZUxlc3NlciIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/3681453df4/AllyEssenceLesser.png",
    category: "Essences",
    detailsId: "lesser-essence-of-command",
  },
  "Lesser Essence of Opulence": {
    id: "lesser-essence-of-opulence",
    name: "Lesser Essence of Opulence",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9SYXJpdHlSZXNpc3RhbmNlRXNzZW5jZUxlc3NlciIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/9d85275442/RarityResistanceEssenceLesser.png",
    category: "Essences",
    detailsId: "lesser-essence-of-opulence",
  },
  "Essence of Thawing": {
    id: "essence-of-thawing",
    name: "Essence of Thawing",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9Db2xkUmVzaXN0YW5jZUVzc2VuY2UiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/d36e512699/ColdResistanceEssence.png",
    category: "Essences",
    detailsId: "essence-of-thawing",
  },
  "Soul Core of Zalatl": {
    id: "soul-core-of-zalatl",
    name: "Soul Core of Zalatl",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvU291bENvcmVzL0dyZWF0ZXJTb3VsQ29yZU1hbmEiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/1437190de2/GreaterSoulCoreMana.png",
    category: "Vaal",
    detailsId: "soul-core-of-zalatl",
  },
  "Soul Core of Topotante": {
    id: "soul-core-of-topotante",
    name: "Soul Core of Topotante",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvU291bENvcmVzL0dyZWF0ZXJTb3VsQ29yZVRyaUVsZW1lbnQiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/ae7a949b3a/GreaterSoulCoreTriElement.png",
    category: "Vaal",
    detailsId: "soul-core-of-topotante",
  },
  "Soul Core of Tzamoto": {
    id: "soul-core-of-tzamoto",
    name: "Soul Core of Tzamoto",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvU291bENvcmVzL0dyZWF0ZXJTb3VsQ29yZUNvbGQiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/d437c04d5e/GreaterSoulCoreCold.png",
    category: "Vaal",
    detailsId: "soul-core-of-tzamoto",
  },
  "Soul Core of Tacati": {
    id: "soul-core-of-tacati",
    name: "Soul Core of Tacati",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvU291bENvcmVzL0dyZWF0ZXJTb3VsQ29yZUNoYW9zIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/cd9c4fb0a7/GreaterSoulCoreChaos.png",
    category: "Vaal",
    detailsId: "soul-core-of-tacati",
  },
  "Topotante's Soul Core of Dampening": {
    id: "topotantes-soul-core-of-dampening",
    name: "Topotante's Soul Core of Dampening",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvU291bENvcmVzL05ld1NvdWxDb3JlRmlyZSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/3657368a8c/NewSoulCoreFire.png",
    category: "Vaal",
    detailsId: "topotantes-soul-core-of-dampening",
  },
  "Xopec's Soul Core of Power": {
    id: "xopecs-soul-core-of-power",
    name: "Xopec's Soul Core of Power",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvU291bENvcmVzL05ld1NvdWxDb3JlUG93ZXJDaGFyZ2UiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/083d39a63b/NewSoulCorePowerCharge.png",
    category: "Vaal",
    detailsId: "xopecs-soul-core-of-power",
  },
  "Quipolatl's Thesis": {
    id: "quipolatls-thesis",
    name: "Quipolatl's Thesis",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUGVyZmVjdFNvdWxDb3Jlcy9Tb3VsQ29yZVNjaWVuY2UiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/2ab351d258/SoulCoreScience.png",
    category: "Vaal",
    detailsId: "quipolatls-thesis",
  },
  "Soul Core of Jiquani": {
    id: "soul-core-of-jiquani",
    name: "Soul Core of Jiquani",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvU291bENvcmVzL0dyZWF0ZXJTb3VsQ29yZUxpZmUiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/bb83a9f337/GreaterSoulCoreLife.png",
    category: "Vaal",
    detailsId: "soul-core-of-jiquani",
  },
  "Soul Core of Azcapa": {
    id: "soul-core-of-azcapa",
    name: "Soul Core of Azcapa",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvU291bENvcmVzL0dyZWF0ZXJTb3VsQ29yZVdlYWx0aFJhcml0eSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/6a69033a04/GreaterSoulCoreWealthRarity.png",
    category: "Vaal",
    detailsId: "soul-core-of-azcapa",
  },
  "Soul Core of Citaqualotl": {
    id: "soul-core-of-citaqualotl",
    name: "Soul Core of Citaqualotl",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvU291bENvcmVzL0dyZWF0ZXJTb3VsQ29yZUVsZW1lbnRhbFJlc2lzdCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/b8926e8826/GreaterSoulCoreElementalResist.png",
    category: "Vaal",
    detailsId: "soul-core-of-citaqualotl",
  },
  "Opiloti's Soul Core of Assault": {
    id: "opilotis-soul-core-of-assault",
    name: "Opiloti's Soul Core of Assault",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvU291bENvcmVzL05ld1NvdWxDb3JlRnJlbnp5Q2hhcmdlIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/ce5c1bdfdc/NewSoulCoreFrenzyCharge.png",
    category: "Vaal",
    detailsId: "opilotis-soul-core-of-assault",
  },
  "Soul Core of Quipolatl": {
    id: "soul-core-of-quipolatl",
    name: "Soul Core of Quipolatl",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvU291bENvcmVzL0dyZWF0ZXJTb3VsQ29yZVNwZWVkIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/d4967ad0f1/GreaterSoulCoreSpeed.png",
    category: "Vaal",
    detailsId: "soul-core-of-quipolatl",
  },
  "Zalatl's Soul Core of Insulation": {
    id: "zalatls-soul-core-of-insulation",
    name: "Zalatl's Soul Core of Insulation",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvU291bENvcmVzL05ld1NvdWxDb3JlTGlnaHRuaW5nIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/80c455f775/NewSoulCoreLightning.png",
    category: "Vaal",
    detailsId: "zalatls-soul-core-of-insulation",
  },
  "Guatelitzi's Soul Core of Endurance": {
    id: "guatelitzis-soul-core-of-endurance",
    name: "Guatelitzi's Soul Core of Endurance",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvU291bENvcmVzL05ld1NvdWxDb3JlRW5kdXJhbmNlQ2hhcmdlIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/8da8c1e799/NewSoulCoreEnduranceCharge.png",
    category: "Vaal",
    detailsId: "guatelitzis-soul-core-of-endurance",
  },
  "Soul Core of Ticaba": {
    id: "soul-core-of-ticaba",
    name: "Soul Core of Ticaba",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvU291bENvcmVzL0dyZWF0ZXJTb3VsQ29yZUNyaXQiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/b453416064/GreaterSoulCoreCrit.png",
    category: "Vaal",
    detailsId: "soul-core-of-ticaba",
  },
  "Raven-Touched Shard": {
    id: "raven-touched-shard",
    name: "Raven-Touched Shard",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRGVsaXJpdW0vRGVsaXJpdW1FbmRnYW1lU29ja2V0YWJsZSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/8ad4972b7b/DeliriumEndgameSocketable.png",
    category: "Ritual",
    detailsId: "raven-touched-shard",
  },
  "Atmohua's Soul Core of Retreat": {
    id: "atmohuas-soul-core-of-retreat",
    name: "Atmohua's Soul Core of Retreat",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvU291bENvcmVzL05ld1NvdWxDb3JlRW5lcmd5U2hpZWxkIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/10e16bc3ea/NewSoulCoreEnergyShield.png",
    category: "Vaal",
    detailsId: "atmohuas-soul-core-of-retreat",
  },
  "Estazunti's Soul Core of Convalescence": {
    id: "estazuntis-soul-core-of-convalescence",
    name: "Estazunti's Soul Core of Convalescence",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvU291bENvcmVzL05ld1NvdWxDb3JlVGltZVNsb3ciLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/c32a5b3a47/NewSoulCoreTimeSlow.png",
    category: "Vaal",
    detailsId: "estazuntis-soul-core-of-convalescence",
  },
  "Quipolatl's Soul Core of Flow": {
    id: "quipolatls-soul-core-of-flow",
    name: "Quipolatl's Soul Core of Flow",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvU291bENvcmVzL05ld1NvdWxDb3JlVGltZUNvb2xkb3duIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/dab6d943f3/NewSoulCoreTimeCooldown.png",
    category: "Vaal",
    detailsId: "quipolatls-soul-core-of-flow",
  },
  "Guatelitzi's Thesis": {
    id: "guatelitzis-thesis",
    name: "Guatelitzi's Thesis",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUGVyZmVjdFNvdWxDb3Jlcy9Tb3VsQ29yZUJsb29kIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/eaea6fa77d/SoulCoreBlood.png",
    category: "Vaal",
    detailsId: "guatelitzis-thesis",
  },
  "Hayoxi's Soul Core of Heatproofing": {
    id: "hayoxis-soul-core-of-heatproofing",
    name: "Hayoxi's Soul Core of Heatproofing",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvU291bENvcmVzL05ld1NvdWxDb3JlSWNlIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/6d8455bff0/NewSoulCoreIce.png",
    category: "Vaal",
    detailsId: "hayoxis-soul-core-of-heatproofing",
  },
  "Soul Core of Cholotl": {
    id: "soul-core-of-cholotl",
    name: "Soul Core of Cholotl",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvU291bENvcmVzL0dyZWF0ZXJTb3VsQ29yZURleCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/c732c8a579/GreaterSoulCoreDex.png",
    category: "Vaal",
    detailsId: "soul-core-of-cholotl",
  },
  "Uromoti's Soul Core of Attenuation": {
    id: "uromotis-soul-core-of-attenuation",
    name: "Uromoti's Soul Core of Attenuation",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvU291bENvcmVzL05ld1NvdWxDb3JlQ3Vyc2VzMiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/25919ac93d/NewSoulCoreCurses2.png",
    category: "Vaal",
    detailsId: "uromotis-soul-core-of-attenuation",
  },
  "Citaqualotl's Soul Core of Foulness": {
    id: "citaqualotls-soul-core-of-foulness",
    name: "Citaqualotl's Soul Core of Foulness",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvU291bENvcmVzL05ld1NvdWxDb3JlQ2hhb3MyIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/002059f8f5/NewSoulCoreChaos2.png",
    category: "Vaal",
    detailsId: "citaqualotls-soul-core-of-foulness",
  },
  "Soul Core of Zantipi": {
    id: "soul-core-of-zantipi",
    name: "Soul Core of Zantipi",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvU291bENvcmVzL0dyZWF0ZXJTb3VsQ29yZWludCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/bf932f7001/GreaterSoulCoreint.png",
    category: "Vaal",
    detailsId: "soul-core-of-zantipi",
  },
  "Soul Core of Opiloti": {
    id: "soul-core-of-opiloti",
    name: "Soul Core of Opiloti",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvU291bENvcmVzL0dyZWF0ZXJTb3VsQ29yZVBoeXNpY2FsIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/366f87b8f2/GreaterSoulCorePhysical.png",
    category: "Vaal",
    detailsId: "soul-core-of-opiloti",
  },
  "Citaqualotl's Thesis": {
    id: "citaqualotls-thesis",
    name: "Citaqualotl's Thesis",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUGVyZmVjdFNvdWxDb3Jlcy9Tb3VsQ29yZVNhY3JpZmljZSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/3992461883/SoulCoreSacrifice.png",
    category: "Vaal",
    detailsId: "citaqualotls-thesis",
  },
  "Cholotl's Soul Core of War": {
    id: "cholotls-soul-core-of-war",
    name: "Cholotl's Soul Core of War",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvU291bENvcmVzL05ld1NvdWxDb3JlUHJvamVjdGlsZSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/dfc35bed7f/NewSoulCoreProjectile.png",
    category: "Vaal",
    detailsId: "cholotls-soul-core-of-war",
  },
  "Xipocado's Soul Core of Dominion": {
    id: "xipocados-soul-core-of-dominion",
    name: "Xipocado's Soul Core of Dominion",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvU291bENvcmVzL05ld1NvdWxDb3JlTWluaW9uIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/b1e7975db2/NewSoulCoreMinion.png",
    category: "Vaal",
    detailsId: "xipocados-soul-core-of-dominion",
  },
  "Tzamoto's Soul Core of Ferocity": {
    id: "tzamotos-soul-core-of-ferocity",
    name: "Tzamoto's Soul Core of Ferocity",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvU291bENvcmVzL05ld1NvdWxDb3JlUmFnZSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/7bbacc1706/NewSoulCoreRage.png",
    category: "Vaal",
    detailsId: "tzamotos-soul-core-of-ferocity",
  },
  "Soul Core of Xopec": {
    id: "soul-core-of-xopec",
    name: "Soul Core of Xopec",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvU291bENvcmVzL0dyZWF0ZXJTb3VsQ29yZUxpZ2h0bmluZyIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/3dffadfa9a/GreaterSoulCoreLightning.png",
    category: "Vaal",
    detailsId: "soul-core-of-xopec",
  },
  "Soul Core of Puhuarte": {
    id: "soul-core-of-puhuarte",
    name: "Soul Core of Puhuarte",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvU291bENvcmVzL0dyZWF0ZXJTb3VsQ29yZUZpcmUiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/6390ebeaa6/GreaterSoulCoreFire.png",
    category: "Vaal",
    detailsId: "soul-core-of-puhuarte",
  },
  "Soul Core of Atmohua": {
    id: "soul-core-of-atmohua",
    name: "Soul Core of Atmohua",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvU291bENvcmVzL0dyZWF0ZXJTb3VsQ29yZVN0cmVuZ3RoIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/1b37135049/GreaterSoulCoreStrength.png",
    category: "Vaal",
    detailsId: "soul-core-of-atmohua",
  },
  "Tacati's Soul Core of Affliction": {
    id: "tacatis-soul-core-of-affliction",
    name: "Tacati's Soul Core of Affliction",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvU291bENvcmVzL05ld1NvdWxDb3JlQ2hhb3MxIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/276b585906/NewSoulCoreChaos1.png",
    category: "Vaal",
    detailsId: "tacatis-soul-core-of-affliction",
  },
  "Jiquani's Thesis": {
    id: "jiquanis-thesis",
    name: "Jiquani's Thesis",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUGVyZmVjdFNvdWxDb3Jlcy9Tb3VsQ29yZVNvdWwiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/a45ab2bca2/SoulCoreSoul.png",
    category: "Vaal",
    detailsId: "jiquanis-thesis",
  },
  "Idol of Egrin": {
    id: "idol-of-egrin",
    name: "Idol of Egrin",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvVG9ybWVudGVkU3Bpcml0U29ja2V0YWJsZXMvQXptZXJpU29ja2V0YWJsZUNhdFNwZWNpYWwiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/16657ca6fc/AzmeriSocketableCatSpecial.png",
    category: "Ritual",
    detailsId: "idol-of-egrin",
  },
  "Rabbit Idol": {
    id: "rabbit-idol",
    name: "Rabbit Idol",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvVG9ybWVudGVkU3Bpcml0U29ja2V0YWJsZXMvQXptZXJpU29ja2V0YWJsZVJhYmJpdCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/d578d6d700/AzmeriSocketableRabbit.png",
    category: "Ritual",
    detailsId: "rabbit-idol",
  },
  "Stag Idol": {
    id: "stag-idol",
    name: "Stag Idol",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvVG9ybWVudGVkU3Bpcml0U29ja2V0YWJsZXMvQXptZXJpU29ja2V0YWJsZVN0YWciLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/2a0668f95a/AzmeriSocketableStag.png",
    category: "Ritual",
    detailsId: "stag-idol",
  },
  "Idol of Greust": {
    id: "idol-of-greust",
    name: "Idol of Greust",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvVG9ybWVudGVkU3Bpcml0U29ja2V0YWJsZXMvSWRvbG9mR3JldXN0Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/04513fa428/IdolofGreust.png",
    category: "Ritual",
    detailsId: "idol-of-greust",
  },
  "Carved Mischief": {
    id: "carved-mischief",
    name: "Carved Mischief",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUml0dWFsL1JpdHVhbE1pc2NoaWV2b3VzQ3JlYXR1cmVzIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/de172a5b3c/RitualMischievousCreatures.png",
    category: "Expedition",
    detailsId: "carved-mischief",
  },
  "Primate Idol": {
    id: "primate-idol",
    name: "Primate Idol",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvVG9ybWVudGVkU3Bpcml0U29ja2V0YWJsZXMvQXptZXJpU29ja2V0YWJsZU1vbmtleSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/77a4554895/AzmeriSocketableMonkey.png",
    category: "Ritual",
    detailsId: "primate-idol",
  },
  "Idol of Thruldana": {
    id: "idol-of-thruldana",
    name: "Idol of Thruldana",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvVG9ybWVudGVkU3Bpcml0U29ja2V0YWJsZXMvQXptZXJpU29ja2V0YWJsZVNuYWtlU3BlY2lhbCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/f44ebc01aa/AzmeriSocketableSnakeSpecial.png",
    category: "Ritual",
    detailsId: "idol-of-thruldana",
  },
  "Idol of Sirrius": {
    id: "idol-of-sirrius",
    name: "Idol of Sirrius",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvVG9ybWVudGVkU3Bpcml0U29ja2V0YWJsZXMvQXptZXJpU29ja2V0YWJsZVdvbGZTcGVjaWFsIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/53db9f9ba3/AzmeriSocketableWolfSpecial.png",
    category: "Ritual",
    detailsId: "idol-of-sirrius",
  },
  "Owl Idol": {
    id: "owl-idol",
    name: "Owl Idol",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvVG9ybWVudGVkU3Bpcml0U29ja2V0YWJsZXMvQXptZXJpU29ja2V0YWJsZU93bCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/dfe1212549/AzmeriSocketableOwl.png",
    category: "Ritual",
    detailsId: "owl-idol",
  },
  "Snake Idol": {
    id: "snake-idol",
    name: "Snake Idol",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvVG9ybWVudGVkU3Bpcml0U29ja2V0YWJsZXMvQXptZXJpU29ja2V0YWJsZVNuYWtlIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/752d762312/AzmeriSocketableSnake.png",
    category: "Ritual",
    detailsId: "snake-idol",
  },
  "Carved Cunning": {
    id: "carved-cunning",
    name: "Carved Cunning",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUml0dWFsL1JpdHVhbEFtYnVzaFByZWRhdG9ycyIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/b065fee0b1/RitualAmbushPredators.png",
    category: "Expedition",
    detailsId: "carved-cunning",
  },
  "Idol of Eeshta": {
    id: "idol-of-eeshta",
    name: "Idol of Eeshta",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvVG9ybWVudGVkU3Bpcml0U29ja2V0YWJsZXMvQXptZXJpU29ja2V0YWJsZU93bFNwZWNpYWwiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/8965465ce6/AzmeriSocketableOwlSpecial.png",
    category: "Ritual",
    detailsId: "idol-of-eeshta",
  },
  "Idol of the Sycophant": {
    id: "idol-of-the-sycophant",
    name: "Idol of the Sycophant",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvVG9ybWVudGVkU3Bpcml0U29ja2V0YWJsZXMvUml0dWFsQ29ycnVwdGVkSWRvbDEiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/cac5e993bc/RitualCorruptedIdol1.png",
    category: "Ritual",
    detailsId: "idol-of-the-sycophant",
  },
  "Idol of Ralakesh": {
    id: "idol-of-ralakesh",
    name: "Idol of Ralakesh",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvVG9ybWVudGVkU3Bpcml0U29ja2V0YWJsZXMvQXptZXJpU29ja2V0YWJsZU1vbmtleVNwZWNpYWwiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/8ffc9986a0/AzmeriSocketableMonkeySpecial.png",
    category: "Ritual",
    detailsId: "idol-of-ralakesh",
  },
  "Idol of Alira": {
    id: "idol-of-alira",
    name: "Idol of Alira",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvVG9ybWVudGVkU3Bpcml0U29ja2V0YWJsZXMvSWRvbG9BbGlyYSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/e42de4138f/IdoloAlira.png",
    category: "Ritual",
    detailsId: "idol-of-alira",
  },
  "Idol of Silk": {
    id: "idol-of-silk",
    name: "Idol of Silk",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvVG9ybWVudGVkU3Bpcml0U29ja2V0YWJsZXMvSWRvbG9mU2lsayIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/79679b0f2b/IdolofSilk.png",
    category: "Ritual",
    detailsId: "idol-of-silk",
  },
  "Carved Tenacity": {
    id: "carved-tenacity",
    name: "Carved Tenacity",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUml0dWFsL1JpdHVhbFRlbmFjaW91c0JlYXN0cyIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/af56b6ff5d/RitualTenaciousBeasts.png",
    category: "Expedition",
    detailsId: "carved-tenacity",
  },
  "Boar Idol": {
    id: "boar-idol",
    name: "Boar Idol",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvVG9ybWVudGVkU3Bpcml0U29ja2V0YWJsZXMvQXptZXJpU29ja2V0YWJsZUJvYXIiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/5e04714fc6/AzmeriSocketableBoar.png",
    category: "Ritual",
    detailsId: "boar-idol",
  },
  "Idol of Maxarius": {
    id: "idol-of-maxarius",
    name: "Idol of Maxarius",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvVG9ybWVudGVkU3Bpcml0U29ja2V0YWJsZXMvQXptZXJpU29ja2V0YWJsZVN0YWdTcGVjaWFsIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/f012409342/AzmeriSocketableStagSpecial.png",
    category: "Ritual",
    detailsId: "idol-of-maxarius",
  },
  "Bear Idol": {
    id: "bear-idol",
    name: "Bear Idol",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvVG9ybWVudGVkU3Bpcml0U29ja2V0YWJsZXMvQXptZXJpU29ja2V0YWJsZUJlYXIiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/2d494d1054/AzmeriSocketableBear.png",
    category: "Ritual",
    detailsId: "bear-idol",
  },
  "Idol of Oak": {
    id: "idol-of-oak",
    name: "Idol of Oak",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvVG9ybWVudGVkU3Bpcml0U29ja2V0YWJsZXMvSWRvbG9mT2FrIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/3b899a4269/IdolofOak.png",
    category: "Ritual",
    detailsId: "idol-of-oak",
  },
  "Idol of Kraityn": {
    id: "idol-of-kraityn",
    name: "Idol of Kraityn",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvVG9ybWVudGVkU3Bpcml0U29ja2V0YWJsZXMvSWRvbG9LcmFpdHluIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/06571f7a6a/IdoloKraityn.png",
    category: "Ritual",
    detailsId: "idol-of-kraityn",
  },
  "Idol of Eramir": {
    id: "idol-of-eramir",
    name: "Idol of Eramir",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvVG9ybWVudGVkU3Bpcml0U29ja2V0YWJsZXMvSWRvbG9mRXJhbWlyIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/16c654b06e/IdolofEramir.png",
    category: "Ritual",
    detailsId: "idol-of-eramir",
  },
  "Idol of Yeena": {
    id: "idol-of-yeena",
    name: "Idol of Yeena",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvVG9ybWVudGVkU3Bpcml0U29ja2V0YWJsZXMvSWRvbG9mWWVlbmEiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/f9671c2da7/IdolofYeena.png",
    category: "Ritual",
    detailsId: "idol-of-yeena",
  },
  "Carved Majesty": {
    id: "carved-majesty",
    name: "Carved Majesty",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUml0dWFsL1JpdHVhbE1hamVzdGljQmVhc3RzIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/db3cfd505d/RitualMajesticBeasts.png",
    category: "Expedition",
    detailsId: "carved-majesty",
  },
  "Fox Idol": {
    id: "fox-idol",
    name: "Fox Idol",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvVG9ybWVudGVkU3Bpcml0U29ja2V0YWJsZXMvQXptZXJpU29ja2V0YWJsZUZveCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/9d48a79d56/AzmeriSocketableFox.png",
    category: "Ritual",
    detailsId: "fox-idol",
  },
  "Idol of the Pharisee": {
    id: "idol-of-the-pharisee",
    name: "Idol of the Pharisee",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvVG9ybWVudGVkU3Bpcml0U29ja2V0YWJsZXMvUml0dWFsQ29ycnVwdGVkSWRvbDMiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/8555a2a109/RitualCorruptedIdol3.png",
    category: "Ritual",
    detailsId: "idol-of-the-pharisee",
  },
  "Idol of the Martyr": {
    id: "idol-of-the-martyr",
    name: "Idol of the Martyr",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvVG9ybWVudGVkU3Bpcml0U29ja2V0YWJsZXMvUml0dWFsQ29ycnVwdGVkSWRvbDIiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/3d4b0cf485/RitualCorruptedIdol2.png",
    category: "Ritual",
    detailsId: "idol-of-the-martyr",
  },
  "Ox Idol": {
    id: "ox-idol",
    name: "Ox Idol",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvVG9ybWVudGVkU3Bpcml0U29ja2V0YWJsZXMvQXptZXJpU29ja2V0YWJsZU94Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/5ebdb092f5/AzmeriSocketableOx.png",
    category: "Ritual",
    detailsId: "ox-idol",
  },
  "Cat Idol": {
    id: "cat-idol",
    name: "Cat Idol",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvVG9ybWVudGVkU3Bpcml0U29ja2V0YWJsZXMvQXptZXJpU29ja2V0YWJsZUNhdCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/3d5bc70405/AzmeriSocketableCat.png",
    category: "Ritual",
    detailsId: "cat-idol",
  },
  "Idol of Grold": {
    id: "idol-of-grold",
    name: "Idol of Grold",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvVG9ybWVudGVkU3Bpcml0U29ja2V0YWJsZXMvQXptZXJpU29ja2V0YWJsZUJlYXJTcGVjaWFsIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/363a2de335/AzmeriSocketableBearSpecial.png",
    category: "Ritual",
    detailsId: "idol-of-grold",
  },
  "Wolf Idol": {
    id: "wolf-idol",
    name: "Wolf Idol",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvVG9ybWVudGVkU3Bpcml0U29ja2V0YWJsZXMvQXptZXJpU29ja2V0YWJsZVdvbGYiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/c0deeb6d94/AzmeriSocketableWolf.png",
    category: "Ritual",
    detailsId: "wolf-idol",
  },
  "Ancient Rune of Discovery": {
    id: "ancient-rune-of-discovery",
    name: "Ancient Rune of Discovery",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRW5kZ2FtZVJ1bmU3Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/2e401c0dba/EndgameRune7.png",
    category: "Runes",
    detailsId: "ancient-rune-of-discovery",
  },
  "Rune of Renown": {
    id: "rune-of-renown",
    name: "Rune of Renown",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRWFybHlNeXRoaWNSdW5lNSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/9af5cf6ac2/EarlyMythicRune5.png",
    category: "Runes",
    detailsId: "rune-of-renown",
  },
  "Rune of the Blossom": {
    id: "rune-of-the-blossom",
    name: "Rune of the Blossom",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRWFybHlNeXRoaWNSdW5lOSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/b36a935747/EarlyMythicRune9.png",
    category: "Runes",
    detailsId: "rune-of-the-blossom",
  },
  "Perfect Glacial Rune": {
    id: "perfect-glacial-rune",
    name: "Perfect Glacial Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvUGVyZmVjdFJ1bmVDb2xkIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/5f8f2f9b29/PerfectRuneCold.png",
    category: "Runes",
    detailsId: "perfect-glacial-rune",
  },
  "Masterwork Rune": {
    id: "masterwork-rune",
    name: "Masterwork Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvVXBncmFkZVJ1bmUiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/3f224b0821/UpgradeRune.png",
    category: "Runes",
    detailsId: "masterwork-rune",
  },
  "Rune of Foundations": {
    id: "rune-of-foundations",
    name: "Rune of Foundations",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRWFybHlNeXRoaWNSdW5lNyIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/3798b31b1e/EarlyMythicRune7.png",
    category: "Runes",
    detailsId: "rune-of-foundations",
  },
  "Uhtred's Sidereus": {
    id: "uhtreds-sidereus",
    name: "Uhtred's Sidereus",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvR2FtZVdhcnBSdW5lVGltZSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/63a40dc79d/GameWarpRuneTime.png",
    category: "Runes",
    detailsId: "uhtreds-sidereus",
  },
  "Thane Girt's Rune of Wildness": {
    id: "thane-girts-rune-of-wildness",
    name: "Thane Girt's Rune of Wildness",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvTmV3UnVuZTE1Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/d76b01cd40/NewRune15.png",
    category: "Runes",
    detailsId: "thane-girts-rune-of-wildness",
  },
  "Ancient Rune of Decay": {
    id: "ancient-rune-of-decay",
    name: "Ancient Rune of Decay",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRW5kZ2FtZVJ1bmU4Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/286c9a8814/EndgameRune8.png",
    category: "Runes",
    detailsId: "ancient-rune-of-decay",
  },
  "Countess Seske's Rune of Archery": {
    id: "countess-seskes-rune-of-archery",
    name: "Countess Seske's Rune of Archery",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvTmV3UnVuZTE0Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/8e738ce3cb/NewRune14.png",
    category: "Runes",
    detailsId: "countess-seskes-rune-of-archery",
  },
  "Warding Rune of Stability": {
    id: "warding-rune-of-stability",
    name: "Warding Rune of Stability",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvUnVuaWNXYXJkMTAiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/089be64017/RunicWard10.png",
    category: "Runes",
    detailsId: "warding-rune-of-stability",
  },
  "Perfect Ward Rune": {
    id: "perfect-ward-rune",
    name: "Perfect Ward Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvQWRkZWRXYXJkUGVyZmVjdCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/aea05784dd/AddedWardPerfect.png",
    category: "Runes",
    detailsId: "perfect-ward-rune",
  },
  "Warding Rune of Protection": {
    id: "warding-rune-of-protection",
    name: "Warding Rune of Protection",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvUnVuaWNXYXJkMiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/f81320137b/RunicWard2.png",
    category: "Runes",
    detailsId: "warding-rune-of-protection",
  },
  "Warding Rune of Symbiosis": {
    id: "warding-rune-of-symbiosis",
    name: "Warding Rune of Symbiosis",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvUnVuaWNXYXJkOCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/5aefb386bc/RunicWard8.png",
    category: "Runes",
    detailsId: "warding-rune-of-symbiosis",
  },
  "Thane Grannell's Rune of Mastery": {
    id: "thane-grannells-rune-of-mastery",
    name: "Thane Grannell's Rune of Mastery",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvTmV3UnVuZTEyIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/8fddac42a1/NewRune12.png",
    category: "Runes",
    detailsId: "thane-grannells-rune-of-mastery",
  },
  "Katla's Gloom": {
    id: "katlas-gloom",
    name: "Katla's Gloom",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvR2FtZVdhcnBSdW5lQ2hhb3MiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/c59f912034/GameWarpRuneChaos.png",
    category: "Runes",
    detailsId: "katlas-gloom",
  },
  "Perfect Adept Rune": {
    id: "perfect-adept-rune",
    name: "Perfect Adept Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvUGVyZmVjdFJ1bmVEZXh0ZXJpdHkiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/33ddcdf769/PerfectRuneDexterity.png",
    category: "Runes",
    detailsId: "perfect-adept-rune",
  },
  "Ancient Rune of Witchcraft": {
    id: "ancient-rune-of-witchcraft",
    name: "Ancient Rune of Witchcraft",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRW5kZ2FtZVJ1bmU5Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/24ef732cf3/EndgameRune9.png",
    category: "Runes",
    detailsId: "ancient-rune-of-witchcraft",
  },
  "Glacial Rune": {
    id: "glacial-rune",
    name: "Glacial Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvQ29sZFJ1bmUiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/499bfe179a/ColdRune.png",
    category: "Runes",
    detailsId: "glacial-rune",
  },
  "Iron Rune": {
    id: "iron-rune",
    name: "Iron Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvRW5oYW5jZVJ1bmUiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/cfeb426ee0/EnhanceRune.png",
    category: "Runes",
    detailsId: "iron-rune",
  },
  "Fenumus' Rune of Agony": {
    id: "fenumus-rune-of-agony",
    name: "Fenumus' Rune of Agony",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvTmV3UnVuZTMiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/b8711ef6c2/NewRune3.png",
    category: "Runes",
    detailsId: "fenumus-rune-of-agony",
  },
  "Perfect Mind Rune": {
    id: "perfect-mind-rune",
    name: "Perfect Mind Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvUGVyZmVjdFJ1bmVNYW5hIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/96a5dfe7d6/PerfectRuneMana.png",
    category: "Runes",
    detailsId: "perfect-mind-rune",
  },
  "Craiceann's Rune of Recovery": {
    id: "craiceanns-rune-of-recovery",
    name: "Craiceann's Rune of Recovery",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvTmV3UnVuZTEwIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/96c722e7d3/NewRune10.png",
    category: "Runes",
    detailsId: "craiceanns-rune-of-recovery",
  },
  "Rune of the Prism": {
    id: "rune-of-the-prism",
    name: "Rune of the Prism",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRWFybHlNeXRoaWNSdW5lOCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/f2f016e6cd/EarlyMythicRune8.png",
    category: "Runes",
    detailsId: "rune-of-the-prism",
  },
  "Rune of the Hunt": {
    id: "rune-of-the-hunt",
    name: "Rune of the Hunt",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRWFybHlNeXRoaWNSdW5lMiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/5247f756b7/EarlyMythicRune2.png",
    category: "Runes",
    detailsId: "rune-of-the-hunt",
  },
  "Emergent Vigour": {
    id: "emergent-vigour",
    name: "Emergent Vigour",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRXhwZWRpdGlvblJlbGlnaW9uQW5jaWVudEF1Z21lbnQiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/508419c851/ExpeditionReligionAncientAugment.png",
    category: "Expedition",
    detailsId: "emergent-vigour",
  },
  "Body Rune": {
    id: "body-rune",
    name: "Body Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvTGlmZVJ1bmUiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/a09dcb651b/LifeRune.png",
    category: "Runes",
    detailsId: "body-rune",
  },
  "Lesser Iron Rune": {
    id: "lesser-iron-rune",
    name: "Lesser Iron Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvRW5oYW5jZVJ1bmVUaWVyMSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/719e7a07b9/EnhanceRuneTier1.png",
    category: "Runes",
    detailsId: "lesser-iron-rune",
  },
  "Perfect Robust Rune": {
    id: "perfect-robust-rune",
    name: "Perfect Robust Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvUGVyZmVjdFJ1bmVTdHJlbmd0aCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/ab65433f7e/PerfectRuneStrength.png",
    category: "Runes",
    detailsId: "perfect-robust-rune",
  },
  "Astrid's Creativity": {
    id: "astrids-creativity",
    name: "Astrid's Creativity",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvR2FtZVdhcnBSdW5lMSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/96e9eecf72/GameWarpRune1.png",
    category: "Runes",
    detailsId: "astrids-creativity",
  },
  "Greater Ward Rune": {
    id: "greater-ward-rune",
    name: "Greater Ward Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvQWRkZWRXYXJkR3JlYXRlciIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/84597a7e30/AddedWardGreater.png",
    category: "Runes",
    detailsId: "greater-ward-rune",
  },
  "Lesser Glacial Rune": {
    id: "lesser-glacial-rune",
    name: "Lesser Glacial Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvQ29sZFJ1bmVUaWVyMSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/69c7e6d2a3/ColdRuneTier1.png",
    category: "Runes",
    detailsId: "lesser-glacial-rune",
  },
  "Rune of Accumulation": {
    id: "rune-of-accumulation",
    name: "Rune of Accumulation",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRWFybHlNeXRoaWNSdW5lNiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/b26a551271/EarlyMythicRune6.png",
    category: "Runes",
    detailsId: "rune-of-accumulation",
  },
  "Perfect Rebirth Rune": {
    id: "perfect-rebirth-rune",
    name: "Perfect Rebirth Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvUGVyZmVjdFJ1bmVMaWZlUmVjb3ZlcnkiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/dc0702aabd/PerfectRuneLifeRecovery.png",
    category: "Runes",
    detailsId: "perfect-rebirth-rune",
  },
  "Lesser Body Rune": {
    id: "lesser-body-rune",
    name: "Lesser Body Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvTGlmZVJ1bmVUaWVyMSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/edcef0a1c6/LifeRuneTier1.png",
    category: "Runes",
    detailsId: "lesser-body-rune",
  },
  "Ancient Rune of Splinters": {
    id: "ancient-rune-of-splinters",
    name: "Ancient Rune of Splinters",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRW5kZ2FtZVJ1bmUxIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/c42839c4a9/EndgameRune1.png",
    category: "Runes",
    detailsId: "ancient-rune-of-splinters",
  },
  "Cadigan's Epiphany": {
    id: "cadigans-epiphany",
    name: "Cadigan's Epiphany",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvR2FtZVdhcnBSdW5lMyIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/884c6d6f83/GameWarpRune3.png",
    category: "Runes",
    detailsId: "cadigans-epiphany",
  },
  "Perfect Storm Rune": {
    id: "perfect-storm-rune",
    name: "Perfect Storm Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvUGVyZmVjdFJ1bmVMaWdodG5pbmciLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/d08ab44bac/PerfectRuneLightning.png",
    category: "Runes",
    detailsId: "perfect-storm-rune",
  },
  "Storm Rune": {
    id: "storm-rune",
    name: "Storm Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvTGlnaHRuaW5nUnVuZSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/98319b3998/LightningRune.png",
    category: "Runes",
    detailsId: "storm-rune",
  },
  "Perfect Vision Rune": {
    id: "perfect-vision-rune",
    name: "Perfect Vision Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvUGVyZmVjdFJ1bmVBY2N1cmFjeSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/4b7c49d286/PerfectRuneAccuracy.png",
    category: "Runes",
    detailsId: "perfect-vision-rune",
  },
  "Perfect Resolve Rune": {
    id: "perfect-resolve-rune",
    name: "Perfect Resolve Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvUGVyZmVjdFJ1bmVJbnRlbGxpZ2VuY2UiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/9c387ac5f1/PerfectRuneIntelligence.png",
    category: "Runes",
    detailsId: "perfect-resolve-rune",
  },
  "Warding Rune of Armature": {
    id: "warding-rune-of-armature",
    name: "Warding Rune of Armature",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvUnVuaWNXYXJkMTgiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/f48bd622f8/RunicWard18.png",
    category: "Runes",
    detailsId: "warding-rune-of-armature",
  },
  "Greater Rune of Leadership": {
    id: "greater-rune-of-leadership",
    name: "Greater Rune of Leadership",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvTGlnaHRuaW5nUnVuZVNwZWNpYWwxIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/81a3fe75a5/LightningRuneSpecial1.png",
    category: "Runes",
    detailsId: "greater-rune-of-leadership",
  },
  "Ancient Rune of Detonation": {
    id: "ancient-rune-of-detonation",
    name: "Ancient Rune of Detonation",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRW5kZ2FtZVJ1bmUxMiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/c8984790f5/EndgameRune12.png",
    category: "Runes",
    detailsId: "ancient-rune-of-detonation",
  },
  "Greater Inspiration Rune": {
    id: "greater-inspiration-rune",
    name: "Greater Inspiration Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvTWFuYVJlY292ZXJ5UnVuZVRpZXIyIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/9c6cc572d8/ManaRecoveryRuneTier2.png",
    category: "Runes",
    detailsId: "greater-inspiration-rune",
  },
  "Warding Rune of Desperation": {
    id: "warding-rune-of-desperation",
    name: "Warding Rune of Desperation",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvUnVuaWNXYXJkNCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/2662ce564a/RunicWard4.png",
    category: "Runes",
    detailsId: "warding-rune-of-desperation",
  },
  "Perfect Inspiration Rune": {
    id: "perfect-inspiration-rune",
    name: "Perfect Inspiration Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvUGVyZmVjdFJ1bmVNYW5hUmVjb3ZlcnkiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/0941528f57/PerfectRuneManaRecovery.png",
    category: "Runes",
    detailsId: "perfect-inspiration-rune",
  },
  "Hedgewitch Assandra's Rune of Wisdom": {
    id: "hedgewitch-assandras-rune-of-wisdom",
    name: "Hedgewitch Assandra's Rune of Wisdom",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvTmV3UnVuZTEiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/ea21196cfb/NewRune1.png",
    category: "Runes",
    detailsId: "hedgewitch-assandras-rune-of-wisdom",
  },
  "Emergent Instinct": {
    id: "emergent-instinct",
    name: "Emergent Instinct",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRXhwZWRpdGlvbldhckFuY2llbnRBdWdtZW50Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/cc4d7ae04b/ExpeditionWarAncientAugment.png",
    category: "Expedition",
    detailsId: "emergent-instinct",
  },
  "Breath of Aldur": {
    id: "breath-of-aldur",
    name: "Breath of Aldur",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRWxlbWVudGFsQ29udmVyc2lvblJ1bmVDb2xkIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/508c419670/ElementalConversionRuneCold.png",
    category: "Runes",
    detailsId: "breath-of-aldur",
  },
  "Rune of Acrobatics": {
    id: "rune-of-acrobatics",
    name: "Rune of Acrobatics",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRWFybHlNeXRoaWNSdW5lMyIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/88b5625697/EarlyMythicRune3.png",
    category: "Runes",
    detailsId: "rune-of-acrobatics",
  },
  "Farrul's Rune of the Hunt": {
    id: "farruls-rune-of-the-hunt",
    name: "Farrul's Rune of the Hunt",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvTmV3UnVuZTkiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/8040a2785b/NewRune9.png",
    category: "Runes",
    detailsId: "farruls-rune-of-the-hunt",
  },
  "Vorana's Carnage": {
    id: "voranas-carnage",
    name: "Vorana's Carnage",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvR2FtZVdhcnBSdW5lUGh5c2ljYWwiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/c3f3a5bf14/GameWarpRunePhysical.png",
    category: "Runes",
    detailsId: "voranas-carnage",
  },
  "Warding Rune of Heart": {
    id: "warding-rune-of-heart",
    name: "Warding Rune of Heart",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvUnVuaWNXYXJkMTQiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/eafc6ac83e/RunicWard14.png",
    category: "Runes",
    detailsId: "warding-rune-of-heart",
  },
  "Greater Rune of Alacrity": {
    id: "greater-rune-of-alacrity",
    name: "Greater Rune of Alacrity",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvTGlnaHRuaW5nUnVuZVNwZWNpYWwzIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/633300b884/LightningRuneSpecial3.png",
    category: "Runes",
    detailsId: "greater-rune-of-alacrity",
  },
  "Serle's Triumph": {
    id: "serles-triumph",
    name: "Serle's Triumph",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvR2FtZVdhcnBSdW5lMiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/4a1b9c272c/GameWarpRune2.png",
    category: "Runes",
    detailsId: "serles-triumph",
  },
  "Greater Robust Rune": {
    id: "greater-robust-rune",
    name: "Greater Robust Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvU3RyZW5ndGhSdW5lVGllcjMiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/bb0d433340/StrengthRuneTier3.png",
    category: "Runes",
    detailsId: "greater-robust-rune",
  },
  "Aldur's Legacy": {
    id: "aldurs-legacy",
    name: "Aldur's Legacy",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvR2FtZVdhcnBSdW5lVW5pcXVlIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/0eca412563/GameWarpRuneUnique.png",
    category: "Runes",
    detailsId: "aldurs-legacy",
  },
  "Warding Rune of Obsession": {
    id: "warding-rune-of-obsession",
    name: "Warding Rune of Obsession",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvUnVuaWNXYXJkMTkiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/d3b0901b07/RunicWard19.png",
    category: "Runes",
    detailsId: "warding-rune-of-obsession",
  },
  "The Greatwolf's Rune of Willpower": {
    id: "the-greatwolfs-rune-of-willpower",
    name: "The Greatwolf's Rune of Willpower",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvTmV3UnVuZTIxIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/6228f14146/NewRune21.png",
    category: "Runes",
    detailsId: "the-greatwolfs-rune-of-willpower",
  },
  "Desert Rune": {
    id: "desert-rune",
    name: "Desert Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvRmlyZVJ1bmUiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/eeabf0e7a0/FireRune.png",
    category: "Runes",
    detailsId: "desert-rune",
  },
  "Saqawal's Rune of Erosion": {
    id: "saqawals-rune-of-erosion",
    name: "Saqawal's Rune of Erosion",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvTmV3UnVuZTgiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/63347aa4f1/NewRune8.png",
    category: "Runes",
    detailsId: "saqawals-rune-of-erosion",
  },
  "The Greatwolf's Rune of Claws": {
    id: "the-greatwolfs-rune-of-claws",
    name: "The Greatwolf's Rune of Claws",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvTmV3UnVuZTIwIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/ae83a7c954/NewRune20.png",
    category: "Runes",
    detailsId: "the-greatwolfs-rune-of-claws",
  },
  "Passion of Aldur": {
    id: "passion-of-aldur",
    name: "Passion of Aldur",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRWxlbWVudGFsQ29udmVyc2lvblJ1bmVGaXJlIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/f51f9e7f30/ElementalConversionRuneFire.png",
    category: "Runes",
    detailsId: "passion-of-aldur",
  },
  "Warding Rune of Hollowing": {
    id: "warding-rune-of-hollowing",
    name: "Warding Rune of Hollowing",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvUnVuaWNXYXJkMjQiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/1248d249b1/RunicWard24.png",
    category: "Runes",
    detailsId: "warding-rune-of-hollowing",
  },
  "Lesser Ward Rune": {
    id: "lesser-ward-rune",
    name: "Lesser Ward Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvQWRkZWRXYXJkTGVzc2VyIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/35e18e19ac/AddedWardLesser.png",
    category: "Runes",
    detailsId: "lesser-ward-rune",
  },
  "Ward Rune": {
    id: "ward-rune",
    name: "Ward Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvQWRkZWRXYXJkTm9ybWFsIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/6666f53dc9/AddedWardNormal.png",
    category: "Runes",
    detailsId: "ward-rune",
  },
  "Perfect Desert Rune": {
    id: "perfect-desert-rune",
    name: "Perfect Desert Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvUGVyZmVjdFJ1bmVGaXJlIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/b398960637/PerfectRuneFire.png",
    category: "Runes",
    detailsId: "perfect-desert-rune",
  },
  "Greater Glacial Rune": {
    id: "greater-glacial-rune",
    name: "Greater Glacial Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvQ29sZFJ1bmVUaWVyMiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/9770dc929d/ColdRuneTier2.png",
    category: "Runes",
    detailsId: "greater-glacial-rune",
  },
  "Warding Rune of Nourishment": {
    id: "warding-rune-of-nourishment",
    name: "Warding Rune of Nourishment",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvUnVuaWNXYXJkMTUiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/5c516d4bf8/RunicWard15.png",
    category: "Runes",
    detailsId: "warding-rune-of-nourishment",
  },
  "Rune of Culmination": {
    id: "rune-of-culmination",
    name: "Rune of Culmination",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRWFybHlNeXRoaWNSdW5lNCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/c3b6dea9ad/EarlyMythicRune4.png",
    category: "Runes",
    detailsId: "rune-of-culmination",
  },
  "Warding Rune of Disintegration": {
    id: "warding-rune-of-disintegration",
    name: "Warding Rune of Disintegration",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvUnVuaWNXYXJkMyIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/54ed17499a/RunicWard3.png",
    category: "Runes",
    detailsId: "warding-rune-of-disintegration",
  },
  "Perfect Iron Rune": {
    id: "perfect-iron-rune",
    name: "Perfect Iron Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvUGVyZmVjdFJ1bmVFbmhhbmNlIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/4e46d225f8/PerfectRuneEnhance.png",
    category: "Runes",
    detailsId: "perfect-iron-rune",
  },
  "Rune of Consistency": {
    id: "rune-of-consistency",
    name: "Rune of Consistency",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRWFybHlNeXRoaWNSdW5lMTAiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/11d6563136/EarlyMythicRune10.png",
    category: "Runes",
    detailsId: "rune-of-consistency",
  },
  "Greater Rune of Tithing": {
    id: "greater-rune-of-tithing",
    name: "Greater Rune of Tithing",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvTGlnaHRuaW5nUnVuZVNwZWNpYWwyIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/369dd670ba/LightningRuneSpecial2.png",
    category: "Runes",
    detailsId: "greater-rune-of-tithing",
  },
  "Saqawal's Rune of Memory": {
    id: "saqawals-rune-of-memory",
    name: "Saqawal's Rune of Memory",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvTmV3UnVuZTciLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/6a71f0e666/NewRune7.png",
    category: "Runes",
    detailsId: "saqawals-rune-of-memory",
  },
  "Kolr's Hunt": {
    id: "kolrs-hunt",
    name: "Kolr's Hunt",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvR2FtZVdhcnBSdW5lRGV4Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/27b68d6b1e/GameWarpRuneDex.png",
    category: "Runes",
    detailsId: "kolrs-hunt",
  },
  "Resolve Rune": {
    id: "resolve-rune",
    name: "Resolve Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvSW50UnVuZSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/d988cf54fc/IntRune.png",
    category: "Runes",
    detailsId: "resolve-rune",
  },
  "Greater Adept Rune": {
    id: "greater-adept-rune",
    name: "Greater Adept Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvRGV4UnVuZVRpZXIzIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/cf55763192/DexRuneTier3.png",
    category: "Runes",
    detailsId: "greater-adept-rune",
  },
  "Ancient Rune of the Titan": {
    id: "ancient-rune-of-the-titan",
    name: "Ancient Rune of the Titan",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRW5kZ2FtZVJ1bmUzIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/2f9ef606d4/EndgameRune3.png",
    category: "Runes",
    detailsId: "ancient-rune-of-the-titan",
  },
  "Emergent Possibility": {
    id: "emergent-possibility",
    name: "Emergent Possibility",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRXhwZWRpdGlvblNjaWVuY2VBbmNpZW50QXVnbWVudCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/5f08e97fb9/ExpeditionScienceAncientAugment.png",
    category: "Expedition",
    detailsId: "emergent-possibility",
  },
  "Rune of Vitality": {
    id: "rune-of-vitality",
    name: "Rune of Vitality",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRWFybHlNeXRoaWNSdW5lMSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/6c7659e613/EarlyMythicRune1.png",
    category: "Runes",
    detailsId: "rune-of-vitality",
  },
  "Perfect Charging Rune": {
    id: "perfect-charging-rune",
    name: "Perfect Charging Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvV2FyZFJlZ2VuZXJhdGlvblBlcmZlY3QiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/77fdb3f9be/WardRegenerationPerfect.png",
    category: "Runes",
    detailsId: "perfect-charging-rune",
  },
  "Medved's Tending": {
    id: "medveds-tending",
    name: "Medved's Tending",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvR2FtZVdhcnBSdW5lQ29sZCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/1eeef7fd0e/GameWarpRuneCold.png",
    category: "Runes",
    detailsId: "medveds-tending",
  },
  "Craiceann's Rune of Warding": {
    id: "craiceanns-rune-of-warding",
    name: "Craiceann's Rune of Warding",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvTmV3UnVuZTYiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/677fca20e0/NewRune6.png",
    category: "Runes",
    detailsId: "craiceanns-rune-of-warding",
  },
  "Greater Desert Rune": {
    id: "greater-desert-rune",
    name: "Greater Desert Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvRmlyZVJ1bmVUaWVyMiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/2c6986b94c/FireRuneTier2.png",
    category: "Runes",
    detailsId: "greater-desert-rune",
  },
  "Ancient Rune of Shattering": {
    id: "ancient-rune-of-shattering",
    name: "Ancient Rune of Shattering",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRW5kZ2FtZVJ1bmU0Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/0959cd6b7b/EndgameRune4.png",
    category: "Runes",
    detailsId: "ancient-rune-of-shattering",
  },
  "Lesser Desert Rune": {
    id: "lesser-desert-rune",
    name: "Lesser Desert Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvRmlyZVJ1bmVUaWVyMSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/fdc8d95dd7/FireRuneTier1.png",
    category: "Runes",
    detailsId: "lesser-desert-rune",
  },
  "Lesser Rebirth Rune": {
    id: "lesser-rebirth-rune",
    name: "Lesser Rebirth Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvTGlmZVJlY292ZXJ5UnVuZVRpZXIxIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/6ef2915508/LifeRecoveryRuneTier1.png",
    category: "Runes",
    detailsId: "lesser-rebirth-rune",
  },
  "Betrayal of Aldur": {
    id: "betrayal-of-aldur",
    name: "Betrayal of Aldur",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRWxlbWVudGFsQ29udmVyc2lvblJ1bmVDaGFvcyIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/691fe14404/ElementalConversionRuneChaos.png",
    category: "Runes",
    detailsId: "betrayal-of-aldur",
  },
  "Ancient Rune of Prowess": {
    id: "ancient-rune-of-prowess",
    name: "Ancient Rune of Prowess",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRW5kZ2FtZVJ1bmU1Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/12ef31a014/EndgameRune5.png",
    category: "Runes",
    detailsId: "ancient-rune-of-prowess",
  },
  "Greater Resolve Rune": {
    id: "greater-resolve-rune",
    name: "Greater Resolve Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvSW50UnVuZVRpZXIzIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/badef31810/IntRuneTier3.png",
    category: "Runes",
    detailsId: "greater-resolve-rune",
  },
  "Lesser Robust Rune": {
    id: "lesser-robust-rune",
    name: "Lesser Robust Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvU3RyZW5ndGhSdW5lVGllcjEiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/a90800a313/StrengthRuneTier1.png",
    category: "Runes",
    detailsId: "lesser-robust-rune",
  },
  "Ancient Rune of Dueling": {
    id: "ancient-rune-of-dueling",
    name: "Ancient Rune of Dueling",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRW5kZ2FtZVJ1bmUyIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/2ffedf320b/EndgameRune2.png",
    category: "Runes",
    detailsId: "ancient-rune-of-dueling",
  },
  "Inspiration Rune": {
    id: "inspiration-rune",
    name: "Inspiration Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvTWFuYVJlY292ZXJ5UnVuZSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/5154db8cf8/ManaRecoveryRune.png",
    category: "Runes",
    detailsId: "inspiration-rune",
  },
  "Greater Charging Rune": {
    id: "greater-charging-rune",
    name: "Greater Charging Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvV2FyZFJlZ2VuZXJhdGlvbkdyZWF0ZXIiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/96b3b4550d/WardRegenerationGreater.png",
    category: "Runes",
    detailsId: "greater-charging-rune",
  },
  "Warding Rune of Bodyguards": {
    id: "warding-rune-of-bodyguards",
    name: "Warding Rune of Bodyguards",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvUnVuaWNXYXJkMjMiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/0a468cc91f/RunicWard23.png",
    category: "Runes",
    detailsId: "warding-rune-of-bodyguards",
  },
  "Saqawal's Rune of the Sky": {
    id: "saqawals-rune-of-the-sky",
    name: "Saqawal's Rune of the Sky",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvTmV3UnVuZTIiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/7c3f68cf1c/NewRune2.png",
    category: "Runes",
    detailsId: "saqawals-rune-of-the-sky",
  },
  "Ire of Aldur": {
    id: "ire-of-aldur",
    name: "Ire of Aldur",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRWxlbWVudGFsQ29udmVyc2lvblJ1bmVMaWdodG5pbmciLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/73938a519b/ElementalConversionRuneLightning.png",
    category: "Runes",
    detailsId: "ire-of-aldur",
  },
  "Lesser Adept Rune": {
    id: "lesser-adept-rune",
    name: "Lesser Adept Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvRGV4UnVuZVRpZXIxIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/1a9c8cae19/DexRuneTier1.png",
    category: "Runes",
    detailsId: "lesser-adept-rune",
  },
  "Mind Rune": {
    id: "mind-rune",
    name: "Mind Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvTWFuYVJ1bmUiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/4be6331480/ManaRune.png",
    category: "Runes",
    detailsId: "mind-rune",
  },
  "Adept Rune": {
    id: "adept-rune",
    name: "Adept Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvRGV4UnVuZSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/efa54e5585/DexRune.png",
    category: "Runes",
    detailsId: "adept-rune",
  },
  "Perfect Stone Rune": {
    id: "perfect-stone-rune",
    name: "Perfect Stone Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvUGVyZmVjdFJ1bmVTdHVuIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/063776d28b/PerfectRuneStun.png",
    category: "Runes",
    detailsId: "perfect-stone-rune",
  },
  "Courtesan Mannan's Rune of Cruelty": {
    id: "courtesan-mannans-rune-of-cruelty",
    name: "Courtesan Mannan's Rune of Cruelty",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvTmV3UnVuZTExIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/da1b427b23/NewRune11.png",
    category: "Runes",
    detailsId: "courtesan-mannans-rune-of-cruelty",
  },
  "Rebirth Rune": {
    id: "rebirth-rune",
    name: "Rebirth Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvTGlmZVJlY292ZXJ5UnVuZSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/bbbb060773/LifeRecoveryRune.png",
    category: "Runes",
    detailsId: "rebirth-rune",
  },
  "Thane Leld's Rune of Spring": {
    id: "thane-lelds-rune-of-spring",
    name: "Thane Leld's Rune of Spring",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvTmV3UnVuZTE5Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/b2966e8da7/NewRune19.png",
    category: "Runes",
    detailsId: "thane-lelds-rune-of-spring",
  },
  "Greater Vision Rune": {
    id: "greater-vision-rune",
    name: "Greater Vision Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvQWNjdXJhY3lSdW5lVGllcjIiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/88ab9b96b4/AccuracyRuneTier2.png",
    category: "Runes",
    detailsId: "greater-vision-rune",
  },
  "Warding Rune of Equinox": {
    id: "warding-rune-of-equinox",
    name: "Warding Rune of Equinox",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvUnVuaWNXYXJkMjAiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/d636760a41/RunicWard20.png",
    category: "Runes",
    detailsId: "warding-rune-of-equinox",
  },
  "Emergent Protection": {
    id: "emergent-protection",
    name: "Emergent Protection",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRXhwZWRpdGlvblZhbG9yQW5jaWVudEF1Z21lbnQiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/17ab658563/ExpeditionValorAncientAugment.png",
    category: "Expedition",
    detailsId: "emergent-protection",
  },
  "Robust Rune": {
    id: "robust-rune",
    name: "Robust Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvU3RyZW5ndGhSdW5lIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/1e585207d2/StrengthRune.png",
    category: "Runes",
    detailsId: "robust-rune",
  },
  "Farrul's Rune of Grace": {
    id: "farruls-rune-of-grace",
    name: "Farrul's Rune of Grace",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvTmV3UnVuZTQiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/1ca9b19776/NewRune4.png",
    category: "Runes",
    detailsId: "farruls-rune-of-grace",
  },
  "Ancient Rune of Animosity": {
    id: "ancient-rune-of-animosity",
    name: "Ancient Rune of Animosity",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRW5kZ2FtZVJ1bmUxMSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/be076d53b1/EndgameRune11.png",
    category: "Runes",
    detailsId: "ancient-rune-of-animosity",
  },
  "Perfect Body Rune": {
    id: "perfect-body-rune",
    name: "Perfect Body Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvUGVyZmVjdFJ1bmVMaWZlIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/77d2019212/PerfectRuneLife.png",
    category: "Runes",
    detailsId: "perfect-body-rune",
  },
  "Greater Body Rune": {
    id: "greater-body-rune",
    name: "Greater Body Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvTGlmZVJ1bmVUaWVyMiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/c553b97136/LifeRuneTier2.png",
    category: "Runes",
    detailsId: "greater-body-rune",
  },
  "Greater Stone Rune": {
    id: "greater-stone-rune",
    name: "Greater Stone Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvU3R1blJ1bmVUaWVyMiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/836627f793/StunRuneTier2.png",
    category: "Runes",
    detailsId: "greater-stone-rune",
  },
  "Farrul's Rune of the Chase": {
    id: "farruls-rune-of-the-chase",
    name: "Farrul's Rune of the Chase",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvTmV3UnVuZTUiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/5029b70d64/NewRune5.png",
    category: "Runes",
    detailsId: "farruls-rune-of-the-chase",
  },
  "Warding Rune of Courage": {
    id: "warding-rune-of-courage",
    name: "Warding Rune of Courage",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvUnVuaWNXYXJkOSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/3a80888429/RunicWard9.png",
    category: "Runes",
    detailsId: "warding-rune-of-courage",
  },
  "Greater Storm Rune": {
    id: "greater-storm-rune",
    name: "Greater Storm Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvTGlnaHRuaW5nUnVuZVRpZXIyIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/47c9eb3f9e/LightningRuneTier2.png",
    category: "Runes",
    detailsId: "greater-storm-rune",
  },
  "Greater Iron Rune": {
    id: "greater-iron-rune",
    name: "Greater Iron Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvRW5oYW5jZVJ1bmVUaWVyMiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/5fdc6a72ed/EnhanceRuneTier2.png",
    category: "Runes",
    detailsId: "greater-iron-rune",
  },
  "Lady Hestra's Rune of Winter": {
    id: "lady-hestras-rune-of-winter",
    name: "Lady Hestra's Rune of Winter",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvTmV3UnVuZTE4Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/709f1d7a0e/NewRune18.png",
    category: "Runes",
    detailsId: "lady-hestras-rune-of-winter",
  },
  "Ancient Rune of Control": {
    id: "ancient-rune-of-control",
    name: "Ancient Rune of Control",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRW5kZ2FtZVJ1bmU2Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/a665a28547/EndgameRune6.png",
    category: "Runes",
    detailsId: "ancient-rune-of-control",
  },
  "Greater Mind Rune": {
    id: "greater-mind-rune",
    name: "Greater Mind Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvTWFuYVJ1bmVUaWVyMiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/49619b701f/ManaRuneTier2.png",
    category: "Runes",
    detailsId: "greater-mind-rune",
  },
  "Rune of Confrontation": {
    id: "rune-of-confrontation",
    name: "Rune of Confrontation",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRWFybHlNeXRoaWNSdW5lMTMiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/159530efbe/EarlyMythicRune13.png",
    category: "Runes",
    detailsId: "rune-of-confrontation",
  },
  "Thrud's Might": {
    id: "thruds-might",
    name: "Thrud's Might",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvR2FtZVdhcnBSdW5lRmlyZSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/4e68367277/GameWarpRuneFire.png",
    category: "Runes",
    detailsId: "thruds-might",
  },
  "Warding Rune of Glancing": {
    id: "warding-rune-of-glancing",
    name: "Warding Rune of Glancing",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvUnVuaWNXYXJkMTMiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/dcdd116775/RunicWard13.png",
    category: "Runes",
    detailsId: "warding-rune-of-glancing",
  },
  "Lesser Stone Rune": {
    id: "lesser-stone-rune",
    name: "Lesser Stone Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvU3R1blJ1bmVUaWVyMSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/904db23238/StunRuneTier1.png",
    category: "Runes",
    detailsId: "lesser-stone-rune",
  },
  "Fenumus' Rune of Spinning": {
    id: "fenumus-rune-of-spinning",
    name: "Fenumus' Rune of Spinning",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvTmV3UnVuZTEzIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/d0e9100877/NewRune13.png",
    category: "Runes",
    detailsId: "fenumus-rune-of-spinning",
  },
  "Lesser Vision Rune": {
    id: "lesser-vision-rune",
    name: "Lesser Vision Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvQWNjdXJhY3lSdW5lVGllcjEiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/2a3b508ed5/AccuracyRuneTier1.png",
    category: "Runes",
    detailsId: "lesser-vision-rune",
  },
  "Greater Rebirth Rune": {
    id: "greater-rebirth-rune",
    name: "Greater Rebirth Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvTGlmZVJlY292ZXJ5UnVuZVRpZXIyIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/41b22fb4e5/LifeRecoveryRuneTier2.png",
    category: "Runes",
    detailsId: "greater-rebirth-rune",
  },
  "Fenumus' Rune of Draining": {
    id: "fenumus-rune-of-draining",
    name: "Fenumus' Rune of Draining",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvTmV3UnVuZTE2Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/4753a65a2a/NewRune16.png",
    category: "Runes",
    detailsId: "fenumus-rune-of-draining",
  },
  "Warding Rune of Reinforcement": {
    id: "warding-rune-of-reinforcement",
    name: "Warding Rune of Reinforcement",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvUnVuaWNXYXJkMSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/9dad170d35/RunicWard1.png",
    category: "Runes",
    detailsId: "warding-rune-of-reinforcement",
  },
  "Charging Rune": {
    id: "charging-rune",
    name: "Charging Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvV2FyZFJlZ2VuZXJhdGlvbk5vcm1hbCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/2c850d510c/WardRegenerationNormal.png",
    category: "Runes",
    detailsId: "charging-rune",
  },
  "Thane Myrk's Rune of Summer": {
    id: "thane-myrks-rune-of-summer",
    name: "Thane Myrk's Rune of Summer",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvTmV3UnVuZTE3Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/f1bf657be5/NewRune17.png",
    category: "Runes",
    detailsId: "thane-myrks-rune-of-summer",
  },
  "Warding Rune of Annihilation": {
    id: "warding-rune-of-annihilation",
    name: "Warding Rune of Annihilation",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvUnVuaWNXYXJkMTYiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/6abd9d3594/RunicWard16.png",
    category: "Runes",
    detailsId: "warding-rune-of-annihilation",
  },
  "Lesser Resolve Rune": {
    id: "lesser-resolve-rune",
    name: "Lesser Resolve Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvSW50UnVuZVRpZXIxIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/5d21464699/IntRuneTier1.png",
    category: "Runes",
    detailsId: "lesser-resolve-rune",
  },
  "Lesser Storm Rune": {
    id: "lesser-storm-rune",
    name: "Lesser Storm Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvTGlnaHRuaW5nUnVuZVRpZXIxIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/c84f26f318/LightningRuneTier1.png",
    category: "Runes",
    detailsId: "lesser-storm-rune",
  },
  "Vision Rune": {
    id: "vision-rune",
    name: "Vision Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvQWNjdXJhY3lSdW5lIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/8e7841f0ef/AccuracyRune.png",
    category: "Runes",
    detailsId: "vision-rune",
  },
  "Ancient Rune of the Horde": {
    id: "ancient-rune-of-the-horde",
    name: "Ancient Rune of the Horde",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRW5kZ2FtZVJ1bmUxMCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/72c7d9d707/EndgameRune10.png",
    category: "Runes",
    detailsId: "ancient-rune-of-the-horde",
  },
  "Rune of Vital Flame": {
    id: "rune-of-vital-flame",
    name: "Rune of Vital Flame",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRWFybHlNeXRoaWNSdW5lMTIiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/9662dc131d/EarlyMythicRune12.png",
    category: "Runes",
    detailsId: "rune-of-vital-flame",
  },
  "Ancient Rune of Retaliation": {
    id: "ancient-rune-of-retaliation",
    name: "Ancient Rune of Retaliation",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRW5kZ2FtZVJ1bmUxMyIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/691bdfe6e3/EndgameRune13.png",
    category: "Runes",
    detailsId: "ancient-rune-of-retaliation",
  },
  "Rune of Reach": {
    id: "rune-of-reach",
    name: "Rune of Reach",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRWFybHlNeXRoaWNSdW5lMTEiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/7da4b6b2b3/EarlyMythicRune11.png",
    category: "Runes",
    detailsId: "rune-of-reach",
  },
  "Stone Rune": {
    id: "stone-rune",
    name: "Stone Rune",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvU3R1blJ1bmUiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/f7830fb594/StunRune.png",
    category: "Runes",
    detailsId: "stone-rune",
  },
  "Warding Rune of Salvaging": {
    id: "warding-rune-of-salvaging",
    name: "Warding Rune of Salvaging",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvUnVuaWNXYXJkMjEiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/c14d4dd553/RunicWard21.png",
    category: "Runes",
    detailsId: "warding-rune-of-salvaging",
  },
  "Greater Rune of Nobility": {
    id: "greater-rune-of-nobility",
    name: "Greater Rune of Nobility",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUnVuZXMvTGlnaHRuaW5nUnVuZVNwZWNpYWw0Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/5ffcde6ca9/LightningRuneSpecial4.png",
    category: "Runes",
    detailsId: "greater-rune-of-nobility",
  },
  "Omen of Putrefaction": {
    id: "omen-of-putrefaction",
    name: "Omen of Putrefaction",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT21lbnMvT21lbk9uQWJ5c3NWZWlsQWxsQW5kQ29ycnVwdCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/8c706ec466/OmenOnAbyssVeilAllAndCorrupt.png",
    category: "Ritual",
    detailsId: "omen-of-putrefaction",
  },
  "Omen of Catalysing Exaltation": {
    id: "omen-of-catalysing-exaltation",
    name: "Omen of Catalysing Exaltation",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT21lbnMvT21lbk9uRXhhbHRDb25zdW1lUXVhbGl0eSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/ca4d0db767/OmenOnExaltConsumeQuality.png",
    category: "Ritual",
    detailsId: "omen-of-catalysing-exaltation",
  },
  "Omen of Chaotic Monsters": {
    id: "omen-of-chaotic-monsters",
    name: "Omen of Chaotic Monsters",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT21lbnMvT21lbk9uQ2hhb3NNYXBJdGVtUXVhbnRpdHkiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/dcd21d0252/OmenOnChaosMapItemQuantity.png",
    category: "Ritual",
    detailsId: "omen-of-chaotic-monsters",
  },
  "Omen of Gambling": {
    id: "omen-of-gambling",
    name: "Omen of Gambling",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT21lbnMvT21lbkdhbWJsZU5vR29sZENvc3QiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/90225aff24/OmenGambleNoGoldCost.png",
    category: "Ritual",
    detailsId: "omen-of-gambling",
  },
  "Omen of Light": {
    id: "omen-of-light",
    name: "Omen of Light",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT21lbnMvT21lbk9uQW5udWxSZW1vdmVBYnlzc01vZCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/eb39bcb3d7/OmenOnAnnulRemoveAbyssMod.png",
    category: "Ritual",
    detailsId: "omen-of-light",
  },
  "Omen of Dextral Crystallisation": {
    id: "omen-of-dextral-crystallisation",
    name: "Omen of Dextral Crystallisation",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT21lbnMvT21lbk9uUGVyZmVjdEVzc2VuY2VTdWZmaXgiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/7ec019819e/OmenOnPerfectEssenceSuffix.png",
    category: "Ritual",
    detailsId: "omen-of-dextral-crystallisation",
  },
  "Omen of the Blackblooded": {
    id: "omen-of-the-blackblooded",
    name: "Omen of the Blackblooded",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT21lbnMvT21lbk9uQWJ5c3NHdWFyZW50ZWVkTGljaFR5cGVNb2QzIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/7fe7335409/OmenOnAbyssGuarenteedLichTypeMod3.png",
    category: "Ritual",
    detailsId: "omen-of-the-blackblooded",
  },
  "Omen of Dextral Necromancy": {
    id: "omen-of-dextral-necromancy",
    name: "Omen of Dextral Necromancy",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT21lbnMvT21lbk9uQWJ5c3NBZGRTdWZmaXhlcyIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/93e1dd20ce/OmenOnAbyssAddSuffixes.png",
    category: "Ritual",
    detailsId: "omen-of-dextral-necromancy",
  },
  "Omen of the Blessed": {
    id: "omen-of-the-blessed",
    name: "Omen of the Blessed",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT21lbnMvT21lbk9uRGl2aW5lUmVyb2xsSW1wbGljaXRzIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/d910191d85/OmenOnDivineRerollImplicits.png",
    category: "Ritual",
    detailsId: "omen-of-the-blessed",
  },
  "Omen of Sinistral Necromancy": {
    id: "omen-of-sinistral-necromancy",
    name: "Omen of Sinistral Necromancy",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT21lbnMvT21lbk9uQWJ5c3NBZGRQcmVmaXhlcyIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/1c0a646414/OmenOnAbyssAddPrefixes.png",
    category: "Ritual",
    detailsId: "omen-of-sinistral-necromancy",
  },
  "Omen of Dextral Erasure": {
    id: "omen-of-dextral-erasure",
    name: "Omen of Dextral Erasure",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT21lbnMvVm9vZG9vT21lbnMzRGFyayIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/6e2bb52963/VoodooOmens3Dark.png",
    category: "Ritual",
    detailsId: "omen-of-dextral-erasure",
  },
  "Omen of Sinistral Crystallisation": {
    id: "omen-of-sinistral-crystallisation",
    name: "Omen of Sinistral Crystallisation",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT21lbnMvT21lbk9uUGVyZmVjdEVzc2VuY2VQcmVmaXgiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/75263d6201/OmenOnPerfectEssencePrefix.png",
    category: "Ritual",
    detailsId: "omen-of-sinistral-crystallisation",
  },
  "Omen of the Liege": {
    id: "omen-of-the-liege",
    name: "Omen of the Liege",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT21lbnMvT21lbk9uQWJ5c3NHdWFyZW50ZWVkTGljaFR5cGVNb2QyIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/675e1d439a/OmenOnAbyssGuarenteedLichTypeMod2.png",
    category: "Ritual",
    detailsId: "omen-of-the-liege",
  },
  "An Audience with the King": {
    id: "an-audience-with-the-king",
    name: "An Audience with the King",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvUml0dWFsL1Zvb2Rvb0tpbmdFZmZpZ3kiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/0b02c113cc/VoodooKingEffigy.png",
    category: "Ritual",
    detailsId: "an-audience-with-the-king",
  },
  "Omen of Chaotic Effectiveness": {
    id: "omen-of-chaotic-effectiveness",
    name: "Omen of Chaotic Effectiveness",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT21lbnMvT21lbk9uQ2hhb3NNYXBNb25zdGVyRWZmZWN0aXZlbmVzcyIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/1dc9f3dea9/OmenOnChaosMapMonsterEffectiveness.png",
    category: "Ritual",
    detailsId: "omen-of-chaotic-effectiveness",
  },
  "Omen of Refreshment": {
    id: "omen-of-refreshment",
    name: "Omen of Refreshment",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT21lbnMvVm9vZG9vT21lbnMxQmx1ZSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/213474d1d5/VoodooOmens1Blue.png",
    category: "Ritual",
    detailsId: "omen-of-refreshment",
  },
  "Omen of Dextral Exaltation": {
    id: "omen-of-dextral-exaltation",
    name: "Omen of Dextral Exaltation",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT21lbnMvVm9vZG9vT21lbnMzWWVsbG93Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/ed7cf06fa4/VoodooOmens3Yellow.png",
    category: "Ritual",
    detailsId: "omen-of-dextral-exaltation",
  },
  "Omen of Reinforcements": {
    id: "omen-of-reinforcements",
    name: "Omen of Reinforcements",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT21lbnMvVm9vZG9vT21lbnM0UHVycGxlIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/bed352248c/VoodooOmens4Purple.png",
    category: "Ritual",
    detailsId: "omen-of-reinforcements",
  },
  "Omen of Secret Compartments": {
    id: "omen-of-secret-compartments",
    name: "Omen of Secret Compartments",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT21lbnMvVm9vZG9vT21lbnM0RGFyayIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/a152f2714f/VoodooOmens4Dark.png",
    category: "Ritual",
    detailsId: "omen-of-secret-compartments",
  },
  "Omen of Chance": {
    id: "omen-of-chance",
    name: "Omen of Chance",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT21lbnMvT21lbk9uQ2hhbmNlTm90RGVzdHJveSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/461b794959/OmenOnChanceNotDestroy.png",
    category: "Ritual",
    detailsId: "omen-of-chance",
  },
  "Omen of Sinistral Erasure": {
    id: "omen-of-sinistral-erasure",
    name: "Omen of Sinistral Erasure",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT21lbnMvVm9vZG9vT21lbnMyRGFyayIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/0cfa6959be/VoodooOmens2Dark.png",
    category: "Ritual",
    detailsId: "omen-of-sinistral-erasure",
  },
  "Omen of Dextral Annulment": {
    id: "omen-of-dextral-annulment",
    name: "Omen of Dextral Annulment",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT21lbnMvVm9vZG9vT21lbnMzUHVycGxlIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/d901658529/VoodooOmens3Purple.png",
    category: "Ritual",
    detailsId: "omen-of-dextral-annulment",
  },
  "Omen of Chaotic Quantity": {
    id: "omen-of-chaotic-quantity",
    name: "Omen of Chaotic Quantity",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT21lbnMvT21lbk9uQ2hhb3NNYXBQYWNrU2l6ZSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/9ea6c86009/OmenOnChaosMapPackSize.png",
    category: "Ritual",
    detailsId: "omen-of-chaotic-quantity",
  },
  "Omen of the Hunt": {
    id: "omen-of-the-hunt",
    name: "Omen of the Hunt",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT21lbnMvVm9vZG9vT21lbnM0R3JlZW4iLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/4800eedd0e/VoodooOmens4Green.png",
    category: "Ritual",
    detailsId: "omen-of-the-hunt",
  },
  "Omen of the Sovereign": {
    id: "omen-of-the-sovereign",
    name: "Omen of the Sovereign",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT21lbnMvT21lbk9uQWJ5c3NHdWFyZW50ZWVkTGljaFR5cGVNb2QxIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/a4962e6d7b/OmenOnAbyssGuarenteedLichTypeMod1.png",
    category: "Ritual",
    detailsId: "omen-of-the-sovereign",
  },
  "Head of the King": {
    id: "head-of-the-king",
    name: "Head of the King",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVlc3RJdGVtcy9LaW5nb2Z0aGVNaXN0SGVhZCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/254e341ba3/KingoftheMistHead.png",
    category: "Ritual",
    detailsId: "head-of-the-king",
  },
  "Omen of the Ancients": {
    id: "omen-of-the-ancients",
    name: "Omen of the Ancients",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT21lbnMvT21lbk9uQ2hhbmNlQW5jaWVudE9yYiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/6392c12c6d/OmenOnChanceAncientOrb.png",
    category: "Ritual",
    detailsId: "omen-of-the-ancients",
  },
  "Omen of Abyssal Echoes": {
    id: "omen-of-abyssal-echoes",
    name: "Omen of Abyssal Echoes",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT21lbnMvT21lbk9uQWJ5c3NSZXJvbGxPcHRpb25zIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/9690f99016/OmenOnAbyssRerollOptions.png",
    category: "Ritual",
    detailsId: "omen-of-abyssal-echoes",
  },
  "Omen of Sinistral Annulment": {
    id: "omen-of-sinistral-annulment",
    name: "Omen of Sinistral Annulment",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT21lbnMvVm9vZG9vT21lbnMyUHVycGxlIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/b9eaf38592/VoodooOmens2Purple.png",
    category: "Ritual",
    detailsId: "omen-of-sinistral-annulment",
  },
  "Omen of Sanctification": {
    id: "omen-of-sanctification",
    name: "Omen of Sanctification",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT21lbnMvT21lbk9uRGl2aW5lU2FuY3RpZnkiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/895416b2b9/OmenOnDivineSanctify.png",
    category: "Ritual",
    detailsId: "omen-of-sanctification",
  },
  "Omen of Whittling": {
    id: "omen-of-whittling",
    name: "Omen of Whittling",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT21lbnMvVm9vZG9vT21lbnMxRGFyayIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/2dea0999d5/VoodooOmens1Dark.png",
    category: "Ritual",
    detailsId: "omen-of-whittling",
  },
  "Omen of Answered Prayers": {
    id: "omen-of-answered-prayers",
    name: "Omen of Answered Prayers",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT21lbnMvVm9vZG9vT21lbnM0Qmx1ZSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/ba21c85554/VoodooOmens4Blue.png",
    category: "Ritual",
    detailsId: "omen-of-answered-prayers",
  },
  "Omen of Sinistral Exaltation": {
    id: "omen-of-sinistral-exaltation",
    name: "Omen of Sinistral Exaltation",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT21lbnMvVm9vZG9vT21lbnMyWWVsbG93Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/6d316b47ee/VoodooOmens2Yellow.png",
    category: "Ritual",
    detailsId: "omen-of-sinistral-exaltation",
  },
  "Omen of Amelioration": {
    id: "omen-of-amelioration",
    name: "Omen of Amelioration",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT21lbnMvVm9vZG9vT21lbnMzQmx1ZSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/b5ee965352/VoodooOmens3Blue.png",
    category: "Ritual",
    detailsId: "omen-of-amelioration",
  },
  "Omen of Bartering": {
    id: "omen-of-bartering",
    name: "Omen of Bartering",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT21lbnMvT21lblNlbGxWZW5kb3JSYW5kb21pc2UiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/12ef99da8b/OmenSellVendorRandomise.png",
    category: "Ritual",
    detailsId: "omen-of-bartering",
  },
  "Omen of Chaotic Rarity": {
    id: "omen-of-chaotic-rarity",
    name: "Omen of Chaotic Rarity",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT21lbnMvT21lbk9uQ2hhb3NNYXBJdGVtUmFyaXR5Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/e7d9f8657d/OmenOnChaosMapItemRarity.png",
    category: "Ritual",
    detailsId: "omen-of-chaotic-rarity",
  },
  "Omen of Resurgence": {
    id: "omen-of-resurgence",
    name: "Omen of Resurgence",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT21lbnMvVm9vZG9vT21lbnMyQmx1ZSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/044d5086da/VoodooOmens2Blue.png",
    category: "Ritual",
    detailsId: "omen-of-resurgence",
  },
  "Omen of Greater Exaltation": {
    id: "omen-of-greater-exaltation",
    name: "Omen of Greater Exaltation",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT21lbnMvVm9vZG9vT21lbnMxWWVsbG93Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/22d9b6478d/VoodooOmens1Yellow.png",
    category: "Ritual",
    detailsId: "omen-of-greater-exaltation",
  },
  "Thaumaturgic Flux (Level 19)": {
    id: "thaumaturgic-flux-19",
    name: "Thaumaturgic Flux (Level 19)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRXhwZWRpdGlvbkdlbUN1cnJlbmN5Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/51fec6d0d5/ExpeditionGemCurrency.png",
    category: "Expedition",
    detailsId: "thaumaturgic-flux-level-19",
  },
  "Expedition Logbook": {
    id: "expedition-logbook",
    name: "Expedition Logbook",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRXhwZWRpdGlvbkxvZ2Jvb2s1Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/841a5e9622/ExpeditionLogbook5.png",
    category: "Expedition",
    detailsId: "expedition-logbook",
  },
  "Void Flux": {
    id: "void-flux",
    name: "Void Flux",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvQXJjYW5lRmx1eCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/05c5ace7f7/ArcaneFlux.png",
    category: "Expedition",
    detailsId: "void-flux",
  },
  "Thaumaturgic Flux (Level 16)": {
    id: "thaumaturgic-flux-16",
    name: "Thaumaturgic Flux (Level 16)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRXhwZWRpdGlvbkdlbUN1cnJlbmN5Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/51fec6d0d5/ExpeditionGemCurrency.png",
    category: "Expedition",
    detailsId: "thaumaturgic-flux-level-16",
  },
  "Olroth's Saga": {
    id: "olroths-saga",
    name: "Olroth's Saga",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvU3BlY2lhbEV4cGVkaXRpb25QYWdlMSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/e4b423d772/SpecialExpeditionPage1.png",
    category: "Expedition",
    detailsId: "olroths-saga",
  },
  "Thaumaturgic Flux (Level 20)": {
    id: "thaumaturgic-flux-20",
    name: "Thaumaturgic Flux (Level 20)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRXhwZWRpdGlvbkdlbUN1cnJlbmN5Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/51fec6d0d5/ExpeditionGemCurrency.png",
    category: "Expedition",
    detailsId: "thaumaturgic-flux-level-20",
  },
  "Perfect Flux": {
    id: "perfect-flux",
    name: "Perfect Flux",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRXhwZWRpdGlvbkdlbUN1cnJlbmN5UG93ZXJmdWwiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/43be23e971/ExpeditionGemCurrencyPowerful.png",
    category: "Expedition",
    detailsId: "perfect-flux",
  },
  "Thaumaturgic Flux (Level 17)": {
    id: "thaumaturgic-flux-17",
    name: "Thaumaturgic Flux (Level 17)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRXhwZWRpdGlvbkdlbUN1cnJlbmN5Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/51fec6d0d5/ExpeditionGemCurrency.png",
    category: "Expedition",
    detailsId: "thaumaturgic-flux-level-17",
  },
  "Blazing Flux": {
    id: "blazing-flux",
    name: "Blazing Flux",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvQXJjYW5lRmx1eEZpcmUiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/5894d96668/ArcaneFluxFire.png",
    category: "Expedition",
    detailsId: "blazing-flux",
  },
  "Medved's Saga": {
    id: "medveds-saga",
    name: "Medved's Saga",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvU3BlY2lhbEV4cGVkaXRpb25QYWdlMyIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/9eb5b576fc/SpecialExpeditionPage3.png",
    category: "Expedition",
    detailsId: "medveds-saga",
  },
  "Aldur's Saga": {
    id: "aldurs-saga",
    name: "Aldur's Saga",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvU3BlY2lhbEV4cGVkaXRpb25QYWdlNSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/e4e66b1f57/SpecialExpeditionPage5.png",
    category: "Expedition",
    detailsId: "aldurs-saga",
  },
  "Thaumaturgic Flux (Level 9)": {
    id: "thaumaturgic-flux-9",
    name: "Thaumaturgic Flux (Level 9)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRXhwZWRpdGlvbkdlbUN1cnJlbmN5Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/51fec6d0d5/ExpeditionGemCurrency.png",
    category: "Expedition",
    detailsId: "thaumaturgic-flux-level-9",
  },
  "Thaumaturgic Flux (Level 18)": {
    id: "thaumaturgic-flux-18",
    name: "Thaumaturgic Flux (Level 18)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRXhwZWRpdGlvbkdlbUN1cnJlbmN5Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/51fec6d0d5/ExpeditionGemCurrency.png",
    category: "Expedition",
    detailsId: "thaumaturgic-flux-level-18",
  },
  "Crackling Flux": {
    id: "crackling-flux",
    name: "Crackling Flux",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvQXJjYW5lRmx1eExpZ2h0bmluZyIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/6f9758e0a3/ArcaneFluxLightning.png",
    category: "Expedition",
    detailsId: "crackling-flux",
  },
  "Vorana's Saga": {
    id: "voranas-saga",
    name: "Vorana's Saga",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvU3BlY2lhbEV4cGVkaXRpb25QYWdlMiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/057899d625/SpecialExpeditionPage2.png",
    category: "Expedition",
    detailsId: "voranas-saga",
  },
  "Uhtred's Saga": {
    id: "uhtreds-saga",
    name: "Uhtred's Saga",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvU3BlY2lhbEV4cGVkaXRpb25QYWdlNCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/0470c24911/SpecialExpeditionPage4.png",
    category: "Expedition",
    detailsId: "uhtreds-saga",
  },
  "Thaumaturgic Flux (Level 11)": {
    id: "thaumaturgic-flux-11",
    name: "Thaumaturgic Flux (Level 11)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRXhwZWRpdGlvbkdlbUN1cnJlbmN5Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/51fec6d0d5/ExpeditionGemCurrency.png",
    category: "Expedition",
    detailsId: "thaumaturgic-flux-level-11",
  },
  "Thaumaturgic Flux (Level 12)": {
    id: "thaumaturgic-flux-12",
    name: "Thaumaturgic Flux (Level 12)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRXhwZWRpdGlvbkdlbUN1cnJlbmN5Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/51fec6d0d5/ExpeditionGemCurrency.png",
    category: "Expedition",
    detailsId: "thaumaturgic-flux-level-12",
  },
  "Chilling Flux": {
    id: "chilling-flux",
    name: "Chilling Flux",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvQXJjYW5lRmx1eENvbGQiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/8be4ea67ff/ArcaneFluxCold.png",
    category: "Expedition",
    detailsId: "chilling-flux",
  },
  "Thaumaturgic Flux (Level 10)": {
    id: "thaumaturgic-flux-10",
    name: "Thaumaturgic Flux (Level 10)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRXhwZWRpdGlvbkdlbUN1cnJlbmN5Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/51fec6d0d5/ExpeditionGemCurrency.png",
    category: "Expedition",
    detailsId: "thaumaturgic-flux-level-10",
  },
  "Thaumaturgic Flux (Level 15)": {
    id: "thaumaturgic-flux-15",
    name: "Thaumaturgic Flux (Level 15)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRXhwZWRpdGlvbkdlbUN1cnJlbmN5Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/51fec6d0d5/ExpeditionGemCurrency.png",
    category: "Expedition",
    detailsId: "thaumaturgic-flux-level-15",
  },
  "Thaumaturgic Flux (Level 8)": {
    id: "thaumaturgic-flux-8",
    name: "Thaumaturgic Flux (Level 8)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRXhwZWRpdGlvbkdlbUN1cnJlbmN5Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/51fec6d0d5/ExpeditionGemCurrency.png",
    category: "Expedition",
    detailsId: "thaumaturgic-flux-level-8",
  },
  "Thaumaturgic Flux (Level 14)": {
    id: "thaumaturgic-flux-14",
    name: "Thaumaturgic Flux (Level 14)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRXhwZWRpdGlvbkdlbUN1cnJlbmN5Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/51fec6d0d5/ExpeditionGemCurrency.png",
    category: "Expedition",
    detailsId: "thaumaturgic-flux-level-14",
  },
  "Thaumaturgic Flux (Level 13)": {
    id: "thaumaturgic-flux-13",
    name: "Thaumaturgic Flux (Level 13)",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvRXhwZWRpdGlvbkdlbUN1cnJlbmN5Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/51fec6d0d5/ExpeditionGemCurrency.png",
    category: "Expedition",
    detailsId: "thaumaturgic-flux-level-13",
  },
  "Potent Liquid Melancholy": {
    id: "potent-liquid-melancholy",
    name: "Potent Liquid Melancholy",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRGlzdGlsbGVkRW1vdGlvbnMvVW5pcXVlSHVtYW5zRW1vdGlvbiIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/68f4574c82/UniqueHumansEmotion.png",
    category: "Delirium",
    detailsId: "potent-liquid-melancholy",
  },
  "Potent Liquid Ferocity": {
    id: "potent-liquid-ferocity",
    name: "Potent Liquid Ferocity",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRGlzdGlsbGVkRW1vdGlvbnMvVW5pcXVlQ29uc3RydWN0c0Vtb3Rpb24iLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/c4ddf1e927/UniqueConstructsEmotion.png",
    category: "Delirium",
    detailsId: "potent-liquid-ferocity",
  },
  "Liquid Paranoia": {
    id: "liquid-paranoia",
    name: "Liquid Paranoia",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRGlzdGlsbGVkRW1vdGlvbnMvRGlzdGlsbGVkUGFyYW5vaWEiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/279e807e8f/DistilledParanoia.png",
    category: "Delirium",
    detailsId: "liquid-paranoia",
  },
  "Liquid Disgust": {
    id: "liquid-disgust",
    name: "Liquid Disgust",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRGlzdGlsbGVkRW1vdGlvbnMvRGlzdGlsbGVkRGlzZ3VzdCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/f462426de0/DistilledDisgust.png",
    category: "Delirium",
    detailsId: "liquid-disgust",
  },
  "Potent Liquid Contempt": {
    id: "potent-liquid-contempt",
    name: "Potent Liquid Contempt",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRGlzdGlsbGVkRW1vdGlvbnMvVW5pcXVlQmVhc3RFbW90aW9uIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/d126680055/UniqueBeastEmotion.png",
    category: "Delirium",
    detailsId: "potent-liquid-contempt",
  },
  "Ancient Potent Liquid Contempt": {
    id: "ancient-potent-liquid-contempt",
    name: "Ancient Potent Liquid Contempt",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRGlzdGlsbGVkRW1vdGlvbnMvVGltZWxlc3NVbmlxdWVCZWFzdEVtb3Rpb24iLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/9a1f8acc0e/TimelessUniqueBeastEmotion.png",
    category: "Delirium",
    detailsId: "ancient-potent-liquid-contempt",
  },
  "Ancient Liquid Despair": {
    id: "ancient-liquid-despair",
    name: "Ancient Liquid Despair",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRGlzdGlsbGVkRW1vdGlvbnMvVGltZWxvc3REaXN0aWxsZWREZXNwYWlyIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/20d8801d9f/TimelostDistilledDespair.png",
    category: "Delirium",
    detailsId: "ancient-liquid-despair",
  },
  "Ancient Concentrated Liquid Suffering": {
    id: "ancient-concentrated-liquid-suffering",
    name: "Ancient Concentrated Liquid Suffering",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRGlzdGlsbGVkRW1vdGlvbnMvVGltZWxvc3RDb25jZW50cmF0ZWREaXN0aWxsZWRTdWZmZXJpbmciLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/14e097ad2a/TimelostConcentratedDistilledSuffering.png",
    category: "Delirium",
    detailsId: "ancient-concentrated-liquid-suffering",
  },
  "Diluted Liquid Greed": {
    id: "diluted-liquid-greed",
    name: "Diluted Liquid Greed",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRGlzdGlsbGVkRW1vdGlvbnMvRGlsdXRlZERpc3RpbGxlZEdyZWVkIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/ddec210bbb/DilutedDistilledGreed.png",
    category: "Delirium",
    detailsId: "diluted-liquid-greed",
  },
  "Ancient Diluted Liquid Greed": {
    id: "ancient-diluted-liquid-greed",
    name: "Ancient Diluted Liquid Greed",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRGlzdGlsbGVkRW1vdGlvbnMvVGltZWxvc3REaWx1dGVkRGlzdGlsbGVkR3JlZWQiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/8ef165042d/TimelostDilutedDistilledGreed.png",
    category: "Delirium",
    detailsId: "ancient-diluted-liquid-greed",
  },
  "Diluted Liquid Guilt": {
    id: "diluted-liquid-guilt",
    name: "Diluted Liquid Guilt",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRGlzdGlsbGVkRW1vdGlvbnMvRGlsdXRlZERpc3RpbGxlZEd1aWx0Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/ddbd513a9b/DilutedDistilledGuilt.png",
    category: "Delirium",
    detailsId: "diluted-liquid-guilt",
  },
  "Diluted Liquid Ire": {
    id: "diluted-liquid-ire",
    name: "Diluted Liquid Ire",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRGlzdGlsbGVkRW1vdGlvbnMvRGlsdXRlZERpc3RpbGxlZElyZSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/623d6e522b/DilutedDistilledIre.png",
    category: "Delirium",
    detailsId: "diluted-liquid-ire",
  },
  "Liquid Despair": {
    id: "liquid-despair",
    name: "Liquid Despair",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRGlzdGlsbGVkRW1vdGlvbnMvRGlzdGlsbGVkRGVzcGFpciIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/c676bf7dae/DistilledDespair.png",
    category: "Delirium",
    detailsId: "liquid-despair",
  },
  "Ancient Potent Liquid Melancholy": {
    id: "ancient-potent-liquid-melancholy",
    name: "Ancient Potent Liquid Melancholy",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRGlzdGlsbGVkRW1vdGlvbnMvVGltZWxlc3NVbmlxdWVIdW1hbnNFbW90aW9uIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/34b9461ae7/TimelessUniqueHumansEmotion.png",
    category: "Delirium",
    detailsId: "ancient-potent-liquid-melancholy",
  },
  "Concentrated Liquid Fear": {
    id: "concentrated-liquid-fear",
    name: "Concentrated Liquid Fear",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRGlzdGlsbGVkRW1vdGlvbnMvQ29uY2VudHJhdGVkRGlzdGlsbGVkRmVhciIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/2c3300fcdf/ConcentratedDistilledFear.png",
    category: "Delirium",
    detailsId: "concentrated-liquid-fear",
  },
  "Concentrated Liquid Isolation": {
    id: "concentrated-liquid-isolation",
    name: "Concentrated Liquid Isolation",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRGlzdGlsbGVkRW1vdGlvbnMvQ29uY2VudHJhdGVkRGlzdGlsbGVkSXNvbGF0aW9uIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/44ca2d19b9/ConcentratedDistilledIsolation.png",
    category: "Delirium",
    detailsId: "concentrated-liquid-isolation",
  },
  "Ancient Liquid Disgust": {
    id: "ancient-liquid-disgust",
    name: "Ancient Liquid Disgust",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRGlzdGlsbGVkRW1vdGlvbnMvVGltZWxvc3REaXN0aWxsZWREaXNndXN0Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/692d116504/TimelostDistilledDisgust.png",
    category: "Delirium",
    detailsId: "ancient-liquid-disgust",
  },
  "Concentrated Liquid Suffering": {
    id: "concentrated-liquid-suffering",
    name: "Concentrated Liquid Suffering",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRGlzdGlsbGVkRW1vdGlvbnMvQ29uY2VudHJhdGVkRGlzdGlsbGVkU3VmZmVyaW5nIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/10b12c3875/ConcentratedDistilledSuffering.png",
    category: "Delirium",
    detailsId: "concentrated-liquid-suffering",
  },
  "Ancient Potent Liquid Ferocity": {
    id: "ancient-potent-liquid-ferocity",
    name: "Ancient Potent Liquid Ferocity",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRGlzdGlsbGVkRW1vdGlvbnMvVGltbGVzc1VuaXF1ZUNvbnN0cnVjdHNFbW90aW9uIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/0274721bd5/TimlessUniqueConstructsEmotion.png",
    category: "Delirium",
    detailsId: "ancient-potent-liquid-ferocity",
  },
  "Ancient Concentrated Liquid Fear": {
    id: "ancient-concentrated-liquid-fear",
    name: "Ancient Concentrated Liquid Fear",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRGlzdGlsbGVkRW1vdGlvbnMvVGltZWxvc3RDb25jZW50cmF0ZWREaXN0aWxsZWRGZWFyIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/5beedf767c/TimelostConcentratedDistilledFear.png",
    category: "Delirium",
    detailsId: "ancient-concentrated-liquid-fear",
  },
  "Ancient Liquid Paranoia": {
    id: "ancient-liquid-paranoia",
    name: "Ancient Liquid Paranoia",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRGlzdGlsbGVkRW1vdGlvbnMvVGltZWxvc3REaXN0aWxsZWRQYXJhbm9pYSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/ad46b5868c/TimelostDistilledParanoia.png",
    category: "Delirium",
    detailsId: "ancient-liquid-paranoia",
  },
  "Liquid Envy": {
    id: "liquid-envy",
    name: "Liquid Envy",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRGlzdGlsbGVkRW1vdGlvbnMvRGlzdGlsbGVkRW52eSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/abf219916e/DistilledEnvy.png",
    category: "Delirium",
    detailsId: "liquid-envy",
  },
  "Ancient Concentrated Liquid Isolation": {
    id: "ancient-concentrated-liquid-isolation",
    name: "Ancient Concentrated Liquid Isolation",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRGlzdGlsbGVkRW1vdGlvbnMvVGltZWxvc3RDb25jZW50cmF0ZWREaXN0aWxsZWRJc29sYXRpb24iLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/fa4fd8531b/TimelostConcentratedDistilledIsolation.png",
    category: "Delirium",
    detailsId: "ancient-concentrated-liquid-isolation",
  },
  "Ancient Diluted Liquid Guilt": {
    id: "ancient-diluted-liquid-guilt",
    name: "Ancient Diluted Liquid Guilt",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRGlzdGlsbGVkRW1vdGlvbnMvVGltZWxvc3REaWx1dGVkRGlzdGlsbGVkR3VpbHQiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/adc7474910/TimelostDilutedDistilledGuilt.png",
    category: "Delirium",
    detailsId: "ancient-diluted-liquid-guilt",
  },
  "Ancient Liquid Envy": {
    id: "ancient-liquid-envy",
    name: "Ancient Liquid Envy",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRGlzdGlsbGVkRW1vdGlvbnMvVGltZWxvc3REaXN0aWxsZWRFbnZ5Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/8135fea7ea/TimelostDistilledEnvy.png",
    category: "Delirium",
    detailsId: "ancient-liquid-envy",
  },
  "Ancient Diluted Liquid Ire": {
    id: "ancient-diluted-liquid-ire",
    name: "Ancient Diluted Liquid Ire",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRGlzdGlsbGVkRW1vdGlvbnMvVGltZWxvc3REaWx1dGVkRGlzdGlsbGVkSXJlIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/37c3144cb7/TimelostDilutedDistilledIre.png",
    category: "Delirium",
    detailsId: "ancient-diluted-liquid-ire",
  },
  "Uul-Netol's Catalyst": {
    id: "uul-netols-catalyst",
    name: "Uul-Netol's Catalyst",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQnJlYWNoL0JyZWFjaENhdGFseXN0UGh5c2ljYWwiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/bc9406c106/BreachCatalystPhysical.png",
    category: "Breach",
    detailsId: "uul-netols-catalyst",
  },
  "Refined Necrotic Catalyst": {
    id: "refined-necrotic-catalyst",
    name: "Refined Necrotic Catalyst",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQnJlYWNoL0pld2VsQ2F0YWx5c3ROZWNyb3RpYyIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/4e691d8472/JewelCatalystNecrotic.png",
    category: "Breach",
    detailsId: "refined-necrotic-catalyst",
  },
  "Reaver Catalyst": {
    id: "reaver-catalyst",
    name: "Reaver Catalyst",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQnJlYWNoL0JyZWFjaENhdGFseXN0QXR0YWNrIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/ccc363f502/BreachCatalystAttack.png",
    category: "Breach",
    detailsId: "reaver-catalyst",
  },
  "Flesh Catalyst": {
    id: "flesh-catalyst",
    name: "Flesh Catalyst",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQnJlYWNoL0JyZWFjaENhdGFseXN0TGlmZSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/06ec489870/BreachCatalystLife.png",
    category: "Breach",
    detailsId: "flesh-catalyst",
  },
  "Skittering Catalyst": {
    id: "skittering-catalyst",
    name: "Skittering Catalyst",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQnJlYWNoL0JyZWFjaENhdGFseXN0U3BlZWQiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/14b5db3c3c/BreachCatalystSpeed.png",
    category: "Breach",
    detailsId: "skittering-catalyst",
  },
  "Refined Adaptive Catalyst": {
    id: "refined-adaptive-catalyst",
    name: "Refined Adaptive Catalyst",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQnJlYWNoL0pld2VsQ2F0YWx5c3RBdHRyaWJ1dGUiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/6fba81f1c7/JewelCatalystAttribute.png",
    category: "Breach",
    detailsId: "refined-adaptive-catalyst",
  },
  "Refined Uul-Netol's Catalyst": {
    id: "refined-uul-netols-catalyst",
    name: "Refined Uul-Netol's Catalyst",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQnJlYWNoL0pld2VsQ2F0YWx5c3RQaHlzaWNhbCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/af62c7f7d8/JewelCatalystPhysical.png",
    category: "Breach",
    detailsId: "refined-uul-netols-catalyst",
  },
  "Carapace Catalyst": {
    id: "carapace-catalyst",
    name: "Carapace Catalyst",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQnJlYWNoL0JyZWFjaENhdGFseXN0RGVmZW5jZXMiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/568ca70b04/BreachCatalystDefences.png",
    category: "Breach",
    detailsId: "carapace-catalyst",
  },
  "Chayula's Catalyst": {
    id: "chayulas-catalyst",
    name: "Chayula's Catalyst",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQnJlYWNoL0JyZWFjaENhdGFseXN0Q2hhb3MiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/c80d8d7b1b/BreachCatalystChaos.png",
    category: "Breach",
    detailsId: "chayulas-catalyst",
  },
  "Refined Chayula's Catalyst": {
    id: "refined-chayulas-catalyst",
    name: "Refined Chayula's Catalyst",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQnJlYWNoL0pld2VsQ2F0YWx5c3RDaGFvcyIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/162124aa67/JewelCatalystChaos.png",
    category: "Breach",
    detailsId: "refined-chayulas-catalyst",
  },
  "Refined Xoph's Catalyst": {
    id: "refined-xophs-catalyst",
    name: "Refined Xoph's Catalyst",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQnJlYWNoL0pld2VsQ2F0YWx5c3RGaXJlIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/d584c5922b/JewelCatalystFire.png",
    category: "Breach",
    detailsId: "refined-xophs-catalyst",
  },
  Breachstone: {
    id: "breachstone",
    name: "Breachstone",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQnJlYWNoL0JyZWFjaHN0b25lIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/d60587d724/Breachstone.png",
    category: "Breach",
    detailsId: "breachstone",
  },
  "Refined Carapace Catalyst": {
    id: "refined-carapace-catalyst",
    name: "Refined Carapace Catalyst",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQnJlYWNoL0pld2VsQ2F0YWx5c3REZWZlbmNlcyIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/a4d02de8e3/JewelCatalystDefences.png",
    category: "Breach",
    detailsId: "refined-carapace-catalyst",
  },
  "Esh's Catalyst": {
    id: "eshs-catalyst",
    name: "Esh's Catalyst",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQnJlYWNoL0JyZWFjaENhdGFseXN0TGlnaHRuaW5nIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/299e62fc33/BreachCatalystLightning.png",
    category: "Breach",
    detailsId: "eshs-catalyst",
  },
  "Xoph's Catalyst": {
    id: "xophs-catalyst",
    name: "Xoph's Catalyst",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQnJlYWNoL0JyZWFjaENhdGFseXN0RmlyZSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/05b1999374/BreachCatalystFire.png",
    category: "Breach",
    detailsId: "xophs-catalyst",
  },
  "Refined Tul's Catalyst": {
    id: "refined-tuls-catalyst",
    name: "Refined Tul's Catalyst",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQnJlYWNoL0pld2VsQ2F0YWx5c3RDb2xkIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/1b256097c6/JewelCatalystCold.png",
    category: "Breach",
    detailsId: "refined-tuls-catalyst",
  },
  "Refined Flesh Catalyst": {
    id: "refined-flesh-catalyst",
    name: "Refined Flesh Catalyst",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQnJlYWNoL0pld2VsQ2F0YWx5c3RMaWZlIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/b210729498/JewelCatalystLife.png",
    category: "Breach",
    detailsId: "refined-flesh-catalyst",
  },
  "Refined Esh's Catalyst": {
    id: "refined-eshs-catalyst",
    name: "Refined Esh's Catalyst",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQnJlYWNoL0pld2VsQ2F0YWx5c3RMaWdodG5pbmciLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/55ca761293/JewelCatalystLightning.png",
    category: "Breach",
    detailsId: "refined-eshs-catalyst",
  },
  "Sibilant Catalyst": {
    id: "sibilant-catalyst",
    name: "Sibilant Catalyst",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQnJlYWNoL0JyZWFjaENhdGFseXN0Q2FzdGVyIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/51dc6bc317/BreachCatalystCaster.png",
    category: "Breach",
    detailsId: "sibilant-catalyst",
  },
  "Tul's Catalyst": {
    id: "tuls-catalyst",
    name: "Tul's Catalyst",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQnJlYWNoL0JyZWFjaENhdGFseXN0Q29sZCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/c3bc9abf43/BreachCatalystCold.png",
    category: "Breach",
    detailsId: "tuls-catalyst",
  },
  "Refined Skittering Catalyst": {
    id: "refined-skittering-catalyst",
    name: "Refined Skittering Catalyst",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQnJlYWNoL0pld2VsQ2F0YWx5c3RTcGVlZCIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/680cbc13b1/JewelCatalystSpeed.png",
    category: "Breach",
    detailsId: "refined-skittering-catalyst",
  },
  "Refined Sibilant Catalyst": {
    id: "refined-sibilant-catalyst",
    name: "Refined Sibilant Catalyst",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQnJlYWNoL0pld2VsQ2F0YWx5c3RDYXN0ZXIiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/280306d9e0/JewelCatalystCaster.png",
    category: "Breach",
    detailsId: "refined-sibilant-catalyst",
  },
  "Refined Neural Catalyst": {
    id: "refined-neural-catalyst",
    name: "Refined Neural Catalyst",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQnJlYWNoL0pld2VsQ2F0YWx5c3RNYW5hIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/141d460ed9/JewelCatalystMana.png",
    category: "Breach",
    detailsId: "refined-neural-catalyst",
  },
  "Neural Catalyst": {
    id: "neural-catalyst",
    name: "Neural Catalyst",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQnJlYWNoL0JyZWFjaENhdGFseXN0TWFuYSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/61d3a7a832/BreachCatalystMana.png",
    category: "Breach",
    detailsId: "neural-catalyst",
  },
  "Necrotic Catalyst": {
    id: "necrotic-catalyst",
    name: "Necrotic Catalyst",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQnJlYWNoL0JyZWFjaENhdGFseXN0TmVjcm90aWMiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/5e20b43820/BreachCatalystNecrotic.png",
    category: "Breach",
    detailsId: "necrotic-catalyst",
  },
  "Breach Splinter": {
    id: "breach-splinter",
    name: "Breach Splinter",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQnJlYWNoL0JyZWFjaHN0b25lU3BsaW50ZXIiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/4abb17ea8e/BreachstoneSplinter.png",
    category: "Breach",
    detailsId: "breach-splinter",
  },
  "Refined Reaver Catalyst": {
    id: "refined-reaver-catalyst",
    name: "Refined Reaver Catalyst",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQnJlYWNoL0pld2VsQ2F0YWx5c3RBdHRhY2siLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/9c13494ea8/JewelCatalystAttack.png",
    category: "Breach",
    detailsId: "refined-reaver-catalyst",
  },
  "Adaptive Catalyst": {
    id: "adaptive-catalyst",
    name: "Adaptive Catalyst",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQnJlYWNoL0JyZWFjaENhdGFseXN0QXR0cmlidXRlIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/015f6c9ac8/BreachCatalystAttribute.png",
    category: "Breach",
    detailsId: "adaptive-catalyst",
  },
  "Prismatic Alloy": {
    id: "prismatic-alloy",
    name: "Prismatic Alloy",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvU292ZXJlaWduVmVyaXNpdW0iLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/3565edc5d4/SovereignVerisium.png",
    category: "Verisium",
    detailsId: "prismatic-alloy",
  },
  Verisium: {
    id: "verisium",
    name: "Verisium",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvUmVmaW5lZFZlcmlzaXVtIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/35616acb9f/RefinedVerisium.png",
    category: "Verisium",
    detailsId: "verisium",
  },
  "Celestial Alloy": {
    id: "celestial-alloy",
    name: "Celestial Alloy",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvQWxsb3k0Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/df21374115/Alloy4.png",
    category: "Verisium",
    detailsId: "celestial-alloy",
  },
  "Cyclonic Alloy": {
    id: "cyclonic-alloy",
    name: "Cyclonic Alloy",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvSW1idWVkVmVyaXNpdW0iLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/083dc3c30d/ImbuedVerisium.png",
    category: "Verisium",
    detailsId: "cyclonic-alloy",
  },
  "Veridical Starlit Ore": {
    id: "veridical-starlit-ore",
    name: "Veridical Starlit Ore",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3JhZnRpbmcvVmVyaXNpdW0vVmVyaXNpdW1PcmVfU3RhcmxpdF8xeDEiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/8811af0254/VerisiumOre_Starlit_1x1.png",
    category: "Verisium",
    detailsId: "veridical-starlit-ore",
  },
  "The Runebinder's Alloy": {
    id: "the-runebinders-alloy",
    name: "The Runebinder's Alloy",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvQWxsb3kyIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/e0ba7ace00/Alloy2.png",
    category: "Verisium",
    detailsId: "the-runebinders-alloy",
  },
  "Vorana's Crest of the Scythe": {
    id: "voranas-crest-of-the-scythe",
    name: "Vorana's Crest of the Scythe",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvVm9yYW5hQ3Jlc3QiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/af46d3f422/VoranaCrest.png",
    category: "Verisium",
    detailsId: "voranas-crest-of-the-scythe",
  },
  "Medved's Crest of the Circle": {
    id: "medveds-crest-of-the-circle",
    name: "Medved's Crest of the Circle",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvVWh0cmVkQ3Jlc3QiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/273a9b8731/UhtredCrest.png",
    category: "Verisium",
    detailsId: "medveds-crest-of-the-circle",
  },
  "Exceptional Verisium": {
    id: "exceptional-verisium",
    name: "Exceptional Verisium",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvUGVyZmVjdFZlcmlzaXVtIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/fce9475fdb/PerfectVerisium.png",
    category: "Verisium",
    detailsId: "exceptional-verisium",
  },
  "Swift Alloy": {
    id: "swift-alloy",
    name: "Swift Alloy",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvUHVyZVZlcmlzaXVtIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/8418cd5cc3/PureVerisium.png",
    category: "Verisium",
    detailsId: "swift-alloy",
  },
  "Sovereign Alloy": {
    id: "sovereign-alloy",
    name: "Sovereign Alloy",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvQWxsb3kxIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/34231c4ea8/Alloy1.png",
    category: "Verisium",
    detailsId: "sovereign-alloy",
  },
  "Uhtred's Crest of the Chalice": {
    id: "uhtreds-crest-of-the-chalice",
    name: "Uhtred's Crest of the Chalice",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvTWVkdmVkQ3Jlc3QiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/75a8fb110a/MedvedCrest.png",
    category: "Verisium",
    detailsId: "uhtreds-crest-of-the-chalice",
  },
  "Transcendent Alloy": {
    id: "transcendent-alloy",
    name: "Transcendent Alloy",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvQWxsb3k1Iiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/4ffca7b84e/Alloy5.png",
    category: "Verisium",
    detailsId: "transcendent-alloy",
  },
  "Olroth's Crest of the Sun": {
    id: "olroths-crest-of-the-sun",
    name: "Olroth's Crest of the Sun",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvT2xyb3RoQ3Jlc3QiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/7af5ff0fcb/OlrothCrest.png",
    category: "Verisium",
    detailsId: "olroths-crest-of-the-sun",
  },
  "Liquid Verisium": {
    id: "liquid-verisium",
    name: "Liquid Verisium",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvTGlxdWlkTWV0YWxWZXJpc2l1bSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/af9a074e38/LiquidMetalVerisium.png",
    category: "Verisium",
    detailsId: "liquid-verisium",
  },
  "Expansive Alloy": {
    id: "expansive-alloy",
    name: "Expansive Alloy",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvU3RhbmRhcmRWZXJpc2l1bSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/4ee9afb77c/StandardVerisium.png",
    category: "Verisium",
    detailsId: "expansive-alloy",
  },
  "Protective Alloy": {
    id: "protective-alloy",
    name: "Protective Alloy",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvSW1wdXJlVmVyaXNpdW0iLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/240b446d85/ImpureVerisium.png",
    category: "Verisium",
    detailsId: "protective-alloy",
  },
  "Mystic Alloy": {
    id: "mystic-alloy",
    name: "Mystic Alloy",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvQ2VsZXN0aWFsVmVyaXNpdW0iLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/1478b03254/CelestialVerisium.png",
    category: "Verisium",
    detailsId: "mystic-alloy",
  },
  "Warding Starlit Ore": {
    id: "warding-starlit-ore",
    name: "Warding Starlit Ore",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3JhZnRpbmcvVmVyaXNpdW0vVmVyaXNpdW1PcmVfU3RhcmxpdF8yeDRfV2VhcG9uIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/0bb113db28/VerisiumOre_Starlit_2x4_Weapon.png",
    category: "Verisium",
    detailsId: "warding-starlit-ore",
  },
  "Revered Starlit Ore": {
    id: "revered-starlit-ore",
    name: "Revered Starlit Ore",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3JhZnRpbmcvVmVyaXNpdW0vVmVyaXNpdW1PcmVfU3RhcmxpdF8yeDRfQXJtb3VyIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/6b74e4cff7/VerisiumOre_Starlit_2x4_Armour.png",
    category: "Verisium",
    detailsId: "revered-starlit-ore",
  },
  "The Runefather's Alloy": {
    id: "the-runefathers-alloy",
    name: "The Runefather's Alloy",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvQWxsb3kzIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/226e099997/Alloy3.png",
    category: "Verisium",
    detailsId: "the-runefathers-alloy",
  },
  "Runic Alloy": {
    id: "runic-alloy",
    name: "Runic Alloy",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvU2NyYXBWZXJpc2l1bSIsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/a16ffa5970/ScrapVerisium.png",
    category: "Verisium",
    detailsId: "runic-alloy",
  },
  "Adaptive Alloy": {
    id: "adaptive-alloy",
    name: "Adaptive Alloy",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXhwZWRpdGlvbjIvQ2hpcHBlZFZlcmlzaXVtIiwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/5795b74448/ChippedVerisium.png",
    category: "Verisium",
    detailsId: "adaptive-alloy",
  },
  "Venerable Starlit Ore": {
    id: "venerable-starlit-ore",
    name: "Venerable Starlit Ore",
    image:
      "/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3JhZnRpbmcvVmVyaXNpdW0vVmVyaXNpdW1PcmVfU3RhcmxpdF8yeDMiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/ef8350565a/VerisiumOre_Starlit_2x3.png",
    category: "Verisium",
    detailsId: "venerable-starlit-ore",
  },
};
