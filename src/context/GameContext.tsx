// Modules
import { createContext } from "react";
import { GameContextType, ScoreType } from "../types/GameContext.type";

// Types

export const defaultValue: GameContextType = {
  three: [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
};

const getLSItem = (key: string): string | null => {
  return localStorage.getItem(key);
};

export const defaultScore: ScoreType = {
  player_1: { name: getLSItem("player_1") || "Player 1", score: 0 },
  player_2: { name: getLSItem("player_2") || "Player 2", score: 0 },
};

export const GameContext: any = createContext(null);
