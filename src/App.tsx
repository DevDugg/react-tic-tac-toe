// Modules
import { useMemo, useState, useEffect } from "react";
import { Matrix } from "ts-matrix";

// Context
import { defaultScore, GameContext } from "./context/GameContext";

// Types
import {
  GameContextType,
  TurnStateType,
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
  const [turn, setTurn] = useState<TurnStateType["turn"]>(1);
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
  const scoreMemo = useMemo<ScoreStateType>(
    () => ({ score, setScore }),
    [score, setScore]
  );
  // Effect

  useEffect(() => {
    let reset: boolean = false;
    // Horizontal check
    gameState.three.forEach((array: number[]) => {
      if (array.every((cell: number) => cell === 1)) {
        reset = true;
        setGameState({
          three: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ],
        });
        setTurn(1);
        setScore({
          ...score,
          player_1: { ...score.player_1, score: score.player_1.score + 1 },
        });
      } else if (array.every((cell: number) => cell === 2)) {
        reset = true;
        setTurn(1);
        setGameState({
          three: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ],
        });
        setScore({
          ...score,
          player_2: { ...score.player_2, score: score.player_2.score + 1 },
        });
      }
    });
    // Vertical check
    const transposed = new Matrix(3, 3, gameState.three).transpose().values;
    transposed.forEach((array: number[]) => {
      if (array.every((cell: number) => cell === 1)) {
        reset = true;
        setGameState({
          three: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ],
        });
        setTurn(1);
        setScore({
          ...score,
          player_1: { ...score.player_1, score: score.player_1.score + 1 },
        });
      } else if (array.every((cell: number) => cell === 2)) {
        reset = true;
        setTurn(1);
        setGameState({
          three: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ],
        });
        setScore({
          ...score,
          player_2: { ...score.player_2, score: score.player_2.score + 1 },
        });
      }
    });
    // Diagonal check
    if (
      (gameState.three[0][0] === 1 &&
        gameState.three[1][1] === 1 &&
        gameState.three[2][2] === 1) ||
      (gameState.three[0][2] === 1 &&
        gameState.three[1][1] === 1 &&
        gameState.three[2][0] === 1)
    ) {
      reset = true;
      setGameState({
        three: [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
      });
      setTurn(1);
      setScore({
        ...score,
        player_1: { ...score.player_1, score: score.player_1.score + 1 },
      });
    } else if (
      (gameState.three[0][0] === 2 &&
        gameState.three[1][1] === 2 &&
        gameState.three[2][2] === 2) ||
      (gameState.three[0][2] === 2 &&
        gameState.three[1][1] === 2 &&
        gameState.three[2][0] === 2)
    ) {
      reset = true;
      setTurn(1);
      setGameState({
        three: [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
      });
      setScore({
        ...score,
        player_2: { ...score.player_2, score: score.player_2.score + 1 },
      });
    }

    if (
      !reset &&
      gameState.three.flat().every((value: number) => value !== 0)
    ) {
      setTurn(1);
      setGameState({
        three: [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
      });
    }
  }, [JSON.stringify(gameState)]);

  return (
    <div className="App">
      <GameContext.Provider value={{ gameStateMemo, turnMemo, scoreMemo }}>
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
