type ValueType = any;

interface CardProps {
  index: number;
  value: ValueType;
  revealed: boolean;
  cardInteractionHandler: (idx: number, val: ValueType) => void;
}

function Card(props: CardProps) {
  const { index, value, revealed, cardInteractionHandler } = props;

  return (
    <div className="card">
      {value}
      <input
        type="checkbox"
        checked={revealed}
        onChange={(event) =>
          cardInteractionHandler(index, event.target.checked)
        }
      />
    </div>
  );
}

export { Card };
