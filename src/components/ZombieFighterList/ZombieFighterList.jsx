const ZombieFighterList = (props) => {
  const { image, name, price, strength, agility } = props;
  return (
    <ul>
      {" "}
      <li>
        {image}
        {name} {price} {strength} {agility}
      </li>
    </ul>
  );
};

export default ZombieFighterList;
