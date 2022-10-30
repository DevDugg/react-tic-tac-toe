// Types
interface Props {
  onclick: () => void;
  innerText: string;
}

const TypeBtn = ({ onclick, innerText }: Props) => {
  return (
    <button type="button" onClick={onclick} className="type">
      {innerText}
    </button>
  );
};

export default TypeBtn;
