import { createStore, reconcile } from "solid-js/store";
import { store } from "./Store";

interface Character {
  name: string;
  level: number;
  class: string;
}

const [character, setCharacter] = createStore<Character>({
  name: "",
  level: 0,
  class: "",
});

const setCharacterName = (name: string) => {
  setCharacter("name", name);
};

const updateCharacterLevel = (level: number) => {
  setCharacter("level", level);
};

const updateCharacterClass = (c: string) => {
  setCharacter("class", c);
};

const saveCharacter = async () => {
  await store.set("char", character);
  await store.save();
};

const loadCharacter = async (c: Character) => {
  if (c) setCharacter(reconcile(c));
};

export {
  character,
  setCharacterName,
  updateCharacterLevel,
  updateCharacterClass,
  saveCharacter,
  loadCharacter,
};
