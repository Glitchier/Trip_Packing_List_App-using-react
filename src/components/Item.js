export function Item({ item, onDeleteItems, onChecked }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onChecked(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.qnt}&nbsp;
        {item.desc}
      </span>
      <button onClick={() => onDeleteItems(item.id)} className="closeBtn">
        ❌
      </button>
    </li>
  );
}
