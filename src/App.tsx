// Modules
import { useMemo, useState } from "react";

// Context
import { GameContext } from "./context/GameContext";

// Types
import {
  GameContextType,
  TurnStateType,
  BoardTypeType,
  GameContextStateType,
} from "./types/GameContext.type";

// Helpers
import { defaultValue } from "./context/GameContext";

// Styles
import "./assets/styles/style.scss";

// Components
import Head from "./components/Head";
import GameBoard from "./components/GameBoard";

const App = () => {
  const [gameState, setGameState] = useState<GameContextType>(defaultValue);
  const [turn, setTurn] = useState<TurnStateType["turn"]>("x");
  const [boardType, setBoardType] =
    useState<BoardTypeType["boardType"]>("three");
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
  return (
    <div className="App">
      <GameContext.Provider value={{ gameStateMemo, turnMemo, boardTypeMemo }}>
        <main className="main">
          <div className="container">
            <div className="main-inner">
              <Head />
              <GameBoard />
            </div>
          </div>
        </main>
      </GameContext.Provider>
    </div>
  );
};

export default App;
