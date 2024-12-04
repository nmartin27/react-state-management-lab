const ZombieFighterList = (props) => {
  const { img, name, price, strength, agility, onAdd } = props;
  return (
    <ul>
      <li>
        <img src={img} alt={name} style={{ width: "150px", height: "150px" }} />
        <p>{name}</p>
        <p>Price: {price}</p>
        <p>Strength: {strength}</p>
        <p>Agility: {agility}</p>
        <button onClick={() => onAdd(props)}>Add Fighter</button>
      </li>
    </ul>
  );
};

export default ZombieFighterList;
