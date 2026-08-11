import { createStore, reconcile } from "solid-js/store";
import { store } from "./Store";

interface Character {
  name: string;
  level: number;
}

const [character, setCharacter] = createStore<Character>({
  name: "",
  level: 0,
});

const setCharacterName = (name: string) => {
  setCharacter("name", name);
};

const updateCharacterLevel = (level: number) => {
  setCharacter("level", level);
};

const saveCharacter = async () => {
  await store.set("char", character);
  await store.save();
};

const loadCharacter = async () => {
  const c = (await store.get("char")) as Character;
  if (c) setCharacter(reconcile(c));
};

export {
  character,
  setCharacterName,
  updateCharacterLevel,
  saveCharacter,
  loadCharacter,
};
