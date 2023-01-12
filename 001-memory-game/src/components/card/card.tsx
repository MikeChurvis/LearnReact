interface CardProps {
  isRevealed: boolean;
  isSelected: boolean;
  number: number;
  onSelect: () => void;
}

function Card(props: CardProps) {
  const { isRevealed, isSelected, number, onSelect } = props;

  const showNumber = isRevealed || isSelected;

  return (
    <div className="card">
      {showNumber ? (
        <span>{isRevealed ? <strong>{number}</strong> : number}</span>
      ) : null}
      <input type="checkbox" checked={showNumber} onChange={() => onSelect()} />
    </div>
  );
}

export { Card };
