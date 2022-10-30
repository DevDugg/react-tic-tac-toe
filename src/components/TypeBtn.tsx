// Types
interface Props {
  onclick: () => void;
  innerText: string;
  disabled: boolean;
}

const TypeBtn = ({ onclick, innerText, disabled }: Props) => {
  return (
    <button
      type="button"
      onClick={onclick}
      disabled={disabled}
      className="type"
    >
      {innerText}
    </button>
  );
};

export default TypeBtn;
