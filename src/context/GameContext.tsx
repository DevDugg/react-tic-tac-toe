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

export const defaultScore: ScoreType = {
  player_1: { name: "Player 1", score: 0 },
  player_2: { name: "Player 2", score: 0 },
};

export const GameContext: any = createContext(null);
