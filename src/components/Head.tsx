// Modules
import { useContext } from "react";
import { GameContext } from "../context/GameContext";

// Components
import TypeBtn from "./TypeBtn";

// Types
import { GlobalContextType } from "../types/GameContext.type";

const Head = () => {
  const { setBoardType } =
    useContext<GlobalContextType>(GameContext).boardTypeMemo;
  return (
    <div className="head">
      <h1>Tic Tac Toe</h1>
      <div className="types">
        <TypeBtn
          onclick={() => setBoardType("three")}
          innerText={"3 x 3"}
          disabled={false}
        />
        <TypeBtn
          onclick={() => setBoardType("five")}
          innerText={"5 x 5"}
          disabled={true}
        />
        <TypeBtn
          onclick={() => setBoardType("seven")}
          innerText={"7 x 7"}
          disabled={true}
        />
      </div>
    </div>
  );
};

export default Head;
