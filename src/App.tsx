// Modules
import { useMemo, useState, useEffect } from "react";
import { Matrix } from "ts-matrix";

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
  // Effect

  useEffect(() => {
    let reset: boolean = false;
    // Horizontal check
    gameState.three.forEach((array: string[]) => {
      if (array.every((cell: string) => cell === "x")) {
        reset = true;
        setGameState({
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
        });
        setTurn("x");
        setScore({
          ...score,
          player_1: { ...score.player_1, score: score.player_1.score + 1 },
        });
      } else if (array.every((cell: string) => cell === "o")) {
        reset = true;
        setTurn("x");
        setGameState({
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
        });
        setScore({
          ...score,
          player_2: { ...score.player_2, score: score.player_2.score + 1 },
        });
      }
    });
    // Vertical check
    const transposed = new Matrix(3, 3, gameState.three).transpose().values;
    transposed.forEach((array: string[]) => {
      if (array.every((cell: string) => cell === "x")) {
        reset = true;
        setGameState({
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
        });
        setTurn("x");
        setScore({
          ...score,
          player_1: { ...score.player_1, score: score.player_1.score + 1 },
        });
      } else if (array.every((cell: string) => cell === "o")) {
        reset = true;
        setTurn("x");
        setGameState({
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
        });
        setScore({
          ...score,
          player_2: { ...score.player_2, score: score.player_2.score + 1 },
        });
      }
    });
    // Diagonal check
    if (
      (gameState.three[0][0] === "x" &&
        gameState.three[1][1] === "x" &&
        gameState.three[2][2] === "x") ||
      (gameState.three[0][2] === "x" &&
        gameState.three[1][1] === "x" &&
        gameState.three[2][0] === "x")
    ) {
      reset = true;
      setGameState({
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
      });
      setTurn("x");
      setScore({
        ...score,
        player_1: { ...score.player_1, score: score.player_1.score + 1 },
      });
    } else if (
      (gameState.three[0][0] === "o" &&
        gameState.three[1][1] === "o" &&
        gameState.three[2][2] === "o") ||
      (gameState.three[0][2] === "o" &&
        gameState.three[1][1] === "o" &&
        gameState.three[2][0] === "o")
    ) {
      reset = true;
      setTurn("x");
      setGameState({
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
      });
      setScore({
        ...score,
        player_2: { ...score.player_2, score: score.player_2.score + 1 },
      });
    }

    if (
      !reset &&
      gameState.three.flat().every((value: string) => value !== "")
    ) {
      setTurn("x");
      setGameState({
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
      });
    }
  }, [JSON.stringify(gameState)]);

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
