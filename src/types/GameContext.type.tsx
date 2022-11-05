// Modules
import React, { SetStateAction } from "react";

export interface GameContextType {
  three: number[][];
}

export type GameContextStateType = {
  gameState: GameContextType;
  setGameState: React.Dispatch<SetStateAction<GameContextType>>;
};

export type TurnStateType = {
  turn: 1 | 2;
  setTurn: React.Dispatch<SetStateAction<1 | 2>>;
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
  scoreMemo: ScoreStateType;
};
