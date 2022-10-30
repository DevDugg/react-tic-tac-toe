// Modules
import { IconContext } from "react-icons";
import { useContext } from "react";
import { GameContext } from "../context/GameContext";

// Types
interface Props {
  value: string;
  position: { row: number; column: number };
}

// Icons
import { TfiClose } from "react-icons/tfi";
import { BsCircle } from "react-icons/bs";

// Types
import { GlobalContextType } from "../types/GameContext.type";

const GameCell = ({ value, position }: Props) => {
  const context = useContext<GlobalContextType>(GameContext);
  const { boardType } = context.boardTypeMemo;
  const { gameState, setGameState } = context.gameStateMemo;
  const { turn, setTurn } = context.turnMemo;
  return (
    <div
      className={`cell ${boardType}`}
      onClick={() => {
        gameState[boardType][position.row][position.column] = turn;
        console.log(gameState[boardType]);
        setGameState(gameState);
        if (turn === "x") {
          setTurn("o");
        } else {
          setTurn("x");
        }
      }}
    >
      {value === "" ? null : value === "x" ? (
        <IconContext.Provider value={{ color: "red" }}>
          <TfiClose />
        </IconContext.Provider>
      ) : value === "o" ? (
        <IconContext.Provider value={{ color: "blue" }}>
          <BsCircle />
        </IconContext.Provider>
      ) : null}
    </div>
  );
};

export default GameCell;
