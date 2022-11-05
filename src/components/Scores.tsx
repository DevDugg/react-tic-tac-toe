// Modules
import { useContext, useRef } from "react";
import { GameContext } from "../context/GameContext";
import { GlobalContextType } from "../types/GameContext.type";

const Scores = () => {
  const { score, setScore } =
    useContext<GlobalContextType>(GameContext).scoreMemo;
  const inputRef = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  return (
    <section className="scores">
      <form
        onSubmit={(e: React.KeyboardEvent<HTMLFormElement>) => {
          e.preventDefault();
          inputRef.current?.blur();
          inputRef2.current?.blur();
        }}
        className="scores-names"
      >
        <input
          ref={inputRef}
          type="text"
          value={score.player_1.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            localStorage.setItem("player_1", e.target.value);
            setScore({
              ...score,
              player_1: { ...score.player_1, name: e.target.value },
            });
          }}
        />
        <input
          ref={inputRef2}
          type="text"
          value={score.player_2.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            localStorage.setItem("player_2", e.target.value);
            setScore({
              ...score,
              player_2: { ...score.player_2, name: e.target.value },
            });
          }}
        />
        <button type="submit"></button>
      </form>
      <div className="scores-values">
        <span>{score.player_1.score}</span>
        <span>{score.player_2.score}</span>
      </div>
    </section>
  );
};

export default Scores;
