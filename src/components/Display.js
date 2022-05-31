export default function OptionDisplay({ optionData, onDelete, onCheck }) {
  return (
    <li style={{ backgroundColor: optionData.isOk && "green" }}>
      <span>{optionData.text}</span>
      <input
        type="checkbox"
        checked={optionData.isOk}
        onChange={() => onCheck(optionData.id, !optionData.isOk)}
      />
      <button onClick={() => onDelete(optionData.id)}>delete</button>
    </li>
  );
}
