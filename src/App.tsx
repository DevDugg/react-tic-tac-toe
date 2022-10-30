// Modules
import { useMemo, useState } from "react";

// Context
import { defaultScore, GameContext } from "./context/GameContext";

// Types
import {
  GameContextType,
  TurnStateType,
  BoardTypeType,
  GameContextStateType,
  ScoreStateType,
  ScoreType,
} from "./types/GameContext.type";

// Helpers
import { defaultValue } from "./context/GameContext";

// Styles
import "./assets/styles/style.scss";

// Components
import Head from "./components/Head";
import Scores from "./components/Scores";
import GameBoard from "./components/GameBoard";

const App = () => {
  // State
  const [gameState, setGameState] = useState<GameContextType>(defaultValue);
  const [turn, setTurn] = useState<TurnStateType["turn"]>("x");
  const [boardType, setBoardType] =
    useState<BoardTypeType["boardType"]>("three");
  const [score, setScore] = useState<ScoreType>(defaultScore);

  // Memo
  const gameStateMemo = useMemo<GameContextStateType>(
    () => ({
      gameState,
      setGameState,
    }),
    [gameState, setGameState]
  );
  const turnMemo = useMemo<TurnStateType>(
    () => ({ turn, setTurn }),
    [turn, setTurn]
  );
  const boardTypeMemo = useMemo<BoardTypeType>(
    () => ({ boardType, setBoardType }),
    [boardType, setBoardType]
  );
  const scoreMemo = useMemo<ScoreStateType>(
    () => ({ score, setScore }),
    [score, setScore]
  );

  return (
    <div className="App">
      <GameContext.Provider
        value={{ gameStateMemo, turnMemo, boardTypeMemo, scoreMemo }}
      >
        <main className="main">
          <div className="container">
            <div className="main-inner">
              <Head />
              <Scores />
              <GameBoard />
            </div>
          </div>
        </main>
      </GameContext.Provider>
    </div>
  );
};

export default App;
