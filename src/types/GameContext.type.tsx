// Modules
import React, { SetStateAction } from "react";

export interface GameContextType {
  three: string[][];
  five: string[][];
  seven: string[][];
}

export type GameContextStateType = {
  gameState: GameContextType;
  setGameState: React.Dispatch<SetStateAction<GameContextType>>;
};

export type TurnStateType = {
  turn: "x" | "o";
  setTurn: React.Dispatch<SetStateAction<"x" | "o">>;
};

export type BoardTypeType = {
  boardType: "three" | "five" | "seven";
  setBoardType: React.Dispatch<SetStateAction<"three" | "five" | "seven">>;
};

export interface ScoreType {
  player_1: { name: string; score: number };
  player_2: { name: string; score: number };
}

export type ScoreStateType = {
  score: ScoreType;
  setScore: React.Dispatch<SetStateAction<ScoreType>>;
};

export type GlobalContextType = {
  gameStateMemo: GameContextStateType;
  turnMemo: TurnStateType;
  boardTypeMemo: BoardTypeType;
  scoreMemo: ScoreStateType;
};
