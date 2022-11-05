// Modules
import { IconContext } from "react-icons";
import { useContext } from "react";
import { GameContext } from "../context/GameContext";

// Types
interface Props {
  value: number;
  position: { row: number; column: number };
}

// Icons
import { TfiClose } from "react-icons/tfi";
import { BsCircle } from "react-icons/bs";

// Types
import { GlobalContextType } from "../types/GameContext.type";

const GameCell = ({ value, position }: Props) => {
  const context = useContext<GlobalContextType>(GameContext);
  const { gameState, setGameState } = context.gameStateMemo;
  const { turn, setTurn } = context.turnMemo;
  return (
    <div
      className={`cell three`}
      onClick={() => {
        if (gameState.three[position.row][position.column] === 0) {
          gameState.three[position.row][position.column] = turn;
          setGameState(gameState);
          if (turn === 1) {
            setTurn(2);
          } else {
            setTurn(1);
          }
        }
      }}
    >
      {value === 0 ? null : value === 1 ? (
        <IconContext.Provider value={{ color: "red" }}>
          <TfiClose />
        </IconContext.Provider>
      ) : value === 2 ? (
        <IconContext.Provider value={{ color: "blue" }}>
          <BsCircle />
        </IconContext.Provider>
      ) : null}
    </div>
  );
};

export default GameCell;
