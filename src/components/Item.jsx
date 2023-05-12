export default function Item({ children: value, label }) {
  return (
    <span>
      <strong>{label}</strong>
      {value}
    </span>
  );
}
