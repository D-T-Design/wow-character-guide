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

export function setAppState(value: AppState, key = "wow-cg") {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

export function getAppState(key = "wow-cg"): AppState | null {
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
