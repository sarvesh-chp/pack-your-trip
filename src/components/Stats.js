export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  const totalItems = items.length;
  const totalPackedItems = items.filter((item) => item.packed === true).length;
  const percentItemsPacked =
    items.length > 0 ? Math.round((totalPackedItems / totalItems) * 100) : 0;

  return (
    <footer className="stats">
      {totalPackedItems === totalItems && totalItems !== 0 ? (
        <em> You got everything! Ready to go✈</em>
      ) : (
        <em>
          🧳You have {totalItems} items on your list, and you already packed{" "}
          {totalPackedItems} ({percentItemsPacked}%)
        </em>
      )}
    </footer>
  );
}
