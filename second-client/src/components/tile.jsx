export default function Tile(props) {
  return (
    <div className="tile">
      <div>{props.item.id}</div>
      <div>{props.item.category}</div>
      <div>{props.item.model}</div>
      <div>{props.item.serialNumber}</div>
      <div>{props.item.warehouse}</div>
    </div>
  );
}
