
type Player = "X" | "O" | "BOTH" | null;

export default function Square({ value, onClick, winner }: {
    winner: Player; 
    value: Player; 
    onClick: () => void;
}) {
    if (!value) {
        return <button className="square" onClick={onClick} disabled={Boolean(winner)} />
    }
  return (
      <button className={`square square_${value.toLocaleLowerCase()}`} disabled>{value}</button>
  )
}
