// Modules
import { createContext } from "react";
import { GameContextType } from "../types/GameContext.type";

// Types

export const defaultValue: GameContextType = {
  three: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
  five: [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ],
  seven: [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
  ],
};

export const GameContext: any = createContext(null);
