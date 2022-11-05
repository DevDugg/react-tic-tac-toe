// Modules
import { useContext, useEffect } from "react";
import { GameContext } from "../context/GameContext";
import { v4 as uuidv4 } from "uuid";

// Types
import { GlobalContextType } from "../types/GameContext.type";

// Components
import GameCell from "./GameCell";

const GameBoard = () => {
  const { gameStateMemo } = useContext<GlobalContextType>(GameContext);
  const { gameState } = gameStateMemo;

  return (
    <section className="board-wrapper">
      <div className={`board three`}>
        {gameState.three.map((array, rowIndex) => {
          return array.map((element, columnIndex) => {
            return (
              <GameCell
                key={uuidv4()}
                value={element}
                position={{ row: rowIndex, column: columnIndex }}
              />
            );
          });
        })}
      </div>
    </section>
  );
};

export default GameBoard;
