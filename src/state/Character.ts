import { createStore, reconcile } from "solid-js/store";

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

const saveCharacter = () => {
  localStorage.setItem("char", JSON.stringify(character));
};

const loadCharacter = () => {
  const c = localStorage.getItem("char");
  if (c) setCharacter(reconcile(JSON.parse(c)))
};

export {
  character,
  setCharacterName,
  updateCharacterLevel,
  saveCharacter,
  loadCharacter,
};
