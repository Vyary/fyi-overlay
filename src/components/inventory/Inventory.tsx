import { invoke } from "@tauri-apps/api/core";
import { readText } from "@tauri-apps/plugin-clipboard-manager";
import { register } from "@tauri-apps/plugin-global-shortcut";
import { createMemo, createSignal, For, onMount } from "solid-js";
import { fetch } from "@tauri-apps/plugin-http";
import { ItemInfo, ItemRecord, ItemsRecord } from "./itemsRecord";
import { load } from "@tauri-apps/plugin-store";
import { BaseWidget } from "../widget/BaseWidget";
import { passthrough } from "../PassthroughState";
import { createStore } from "solid-js/store";
import { create } from "@tauri-apps/plugin-fs";

export interface CurrencyResponse {
  core: {
    primary: string;
    secondary: string;
    rates: Record<string, number>;
    items: ItemInfo[];
  };
  lines: {
    id: string;
    primaryValue: number;
  }[];
  items: ItemInfo[];
}

const fetchOverview = async () => {
  const currencyCategories = [
    "Currency",
    "Fragments",
    "Abyss",
    "UncutGems",
    "LineageSupportGems",
    "Essences",
    "SoulCores",
    "Idols",
    "Runes",
    "Ritual",
    "Expedition",
    "Delirium",
    "Breach",
    "Verisium",
  ];

  const ItemsRecord: ItemRecord = {};

  for (const cat of currencyCategories) {
    const response = await fetch(
      `https://poe.ninja/poe2/api/economy/exchange/current/overview?league=Runes+of+Aldur&type=${cat}`,
      {
        method: "GET",
      },
    );
    const data: CurrencyResponse = await response.json();

    for (const item of data.items) {
      ItemsRecord[item.name] = item;
    }
  }

  console.log(ItemsRecord);
};

const fetchItemData = async (league: string, type: string, id: string) => {
  const response = await fetch(
    `https://poe.ninja/poe2/api/economy/exchange/current/details?league=${league}&type=${type}&id=${id}`,
    {
      method: "GET",
    },
  );
  console.log(
    `https://poe.ninja/poe2/api/economy/exchange/current/details?league=${league}&type=${type}&id=${id}`,
  );

  const data = await response.json();

  return data;
};

const parseItem = async () => {
  const itemString = await readText();

  const lines = itemString
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  const item = {
    name: "",
    base: "",
    class: "",
    rarity: "",
    quantity: 1,
  };

  item.name = lines[2];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (i == 3 && line.includes("--------")) {
      item.base = line;
    }

    if (line.startsWith("Item Class: ")) {
      item.class = line.substring(12).trim();
    }

    if (line.startsWith("Rarity: ")) {
      item.rarity = line.substring(8).trim();
    }

    if (line.startsWith("Stack Size: ")) {
      const match = line.match(/Stack Size:\s*([\d,]+)/);
      if (match) {
        item.quantity = parseInt(match[1].replace(/,/g, ""), 10);
      }
    }
  }

  return item;
};

function Inventory() {
  const [inventory, setInventory] = createStore<ItemRecord>({});
  let store: any;

  const sorted = () => {
    const items = Object.values(inventory);
    return items.sort(
      (a, b) => b.prices?.divine * b.quantity - a.prices?.divine * a.quantity,
    );
  };

  const sliced = () => sorted().slice(0, 10);

  const addToInventory = async () => {
    const sItem = await parseItem();
    const dItem = ItemsRecord[sItem.name];
    dItem.quantity = sItem.quantity;
    const details = await fetchItemData(
      "Runes+of+Aldur",
      dItem.category,
      dItem.detailsId,
    );
    if (!dItem.prices) {
      dItem.prices = { divine: 0, exalted: 0, chaos: 0 };
    }
    console.log(details);
    console.log(details["pairs"].filter((i: any) => i.id == "divine"));
    const dPrice = details["pairs"].filter((i: any) => i.id == "divine")[0][
      "history"
    ][0]["rate"];
    dItem.prices.divine = dPrice;
    console.log(`${dItem.quantity} x ${dPrice} = ${dItem.prices.divine}`);

    setInventory(dItem.id, dItem);
    setInventory(dItem.id, "quantity", dItem.quantity);
    setInventory(dItem.id, "prices", "divine", dItem.prices.divine);

    await store.set("inventory", inventory);
    await store.save();
  };

  onMount(async () => {
    try {
      await register("F2", async (e) => {
        if (e.state === "Pressed") {
          await invoke("os_copy");
          await new Promise((resolve) => setTimeout(resolve, 100));
          addToInventory();
        }
      });
    } catch (e) {
      console.log("failed to register copy shortcut: " + e);
    }

    store = await load("inventory.json", { autoSave: true });
    const inv = (await store.get("inventory")) as ItemRecord;
    if (inv) {
      setInventory(inv);
    }
  });

  return (
    <BaseWidget name="inventory" show={!passthrough()}>
      <table class="table py-3 px-5">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <For each={sliced()}>
            {(item, i) => (
              <tr>
                <th>{i() + 1}</th>
                <td>
                  <div class="inline-flex gap-1 items-center justufy-center">
                    <img
                      src={`https://web.poecdn.com/${item.image}`}
                      class="w-6 h-6 object-contain"
                    />
                    <span>{item.name}</span>
                  </div>
                </td>
                <td>{item.quantity}</td>
                <td>{item.category}</td>
                <td class="font-bold">
                  {(item.quantity * item.prices?.divine).toFixed(2)}d
                </td>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    </BaseWidget>
  );
}

export { Inventory };
