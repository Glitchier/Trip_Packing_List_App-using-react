export function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="statsDiv">
        <em>🚀 Start adding some items to your packing list 🚀</em>
      </footer>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percent = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="statsDiv">
      <em>
        {percent === 100
          ? "You got everything! Read to go ✈️"
          : `💼 You have ${numItems} items on your list, and you already packed${" "}
        ${numPacked} (${percent}%)`}
      </em>
    </footer>
  );
}
