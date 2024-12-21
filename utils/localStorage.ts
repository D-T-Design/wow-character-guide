import getGameData from "../libs/gameData";

export type Character = {
  id: number;
  faction: "Alliance" | "Horde";
  level: number;
  name: string;
  playerClass: string;
  race: string;
  gender: string;
};

export type AppState = {
  gear: any[];
  character: number;
  savedCharacters: Character[];
  gameData: any;
};

export const DefaultAppState: AppState = {
  gear: [],
  character: 0,
  savedCharacters: [],
  gameData: getGameData(),
};

export function setAppState(value: AppState, key = "wccg-app") {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

export function getAppState(key = "wccg-app"): AppState | null {
  if (typeof window !== "undefined") {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as AppState) : null;
    } catch (e) {
      console.error("Error getting item from localStorage", e);
      return null;
    }
  }
  return null;
}
