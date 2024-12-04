// src/App.jsx
import { useEffect, useState } from "react";
import "./App.css";
import ZombieFighterList from "./components/ZombieFighterList/ZombieFighterList";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState(
    [
      {
        name: "Survivor",
        price: 12,
        strength: 6,
        agility: 4,
        img: "https://upload.wikimedia.org/wikipedia/en/4/40/400px-Survivor.borneo.logo.png?20191101022112",
      },
      {
        name: "Scavenger",
        price: 10,
        strength: 5,
        agility: 5,
        img: "https://via.placeholder.com/150/771796",
      },
      {
        name: "Shadow",
        price: 18,
        strength: 7,
        agility: 8,
        img: "https://via.placeholder.com/150/24f355",
      },
      {
        name: "Tracker",
        price: 14,
        strength: 7,
        agility: 6,
        img: "https://via.placeholder.com/150/d32776",
      },
      {
        name: "Sharpshooter",
        price: 20,
        strength: 6,
        agility: 8,
        img: "https://via.placeholder.com/150/1ee8a4",
      },
      {
        name: "Medic",
        price: 15,
        strength: 5,
        agility: 7,
        img: "https://via.placeholder.com/150/66b7d2",
      },
      {
        name: "Engineer",
        price: 16,
        strength: 6,
        agility: 5,
        img: "https://via.placeholder.com/150/56acb2",
      },
      {
        name: "Brawler",
        price: 11,
        strength: 8,
        agility: 3,
        img: "https://via.placeholder.com/150/8985dc",
      },
      {
        name: "Infiltrator",
        price: 17,
        strength: 5,
        agility: 9,
        img: "https://via.placeholder.com/150/392537",
      },
      {
        name: "Leader",
        price: 22,
        strength: 7,
        agility: 6,
        img: "https://via.placeholder.com/150/602b9e",
      },
    ]
    // console.log('Zombies?', zombieFighters),
  );
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
  // console.log(zombieFighters);
  const handleAddFighter = (zombieFighter) => {
    console.log("Attempting to add fighter:", zombieFighter);

    if (money >= zombieFighter.price) {
      setTeam((prevTeam) => [...prevTeam, zombieFighter]); // Add zombieFighter to the team
      setMoney((prevMoney) => prevMoney - zombieFighter.price); // Deduct money
    } else {
      console.log("Not enough money"); // Log if insufficient money
    }
  };

  const updateStrength = () => {
    const total = team.reduce((sum, member) => sum + member.strength, 0)
      setTotalStrength(total)
  }

  useEffect(() => {
    updateStrength()
  }, [team])

  const uodateAgility = () => {
    const total = team.reduce((sum, member) => sum + member.agility, 0)
      setTotalAgility(total)
  }

  useEffect(() => {
    uodateAgility()
  }, [team])

  return (
    <>
      <div>Money: ${money}</div>
      <div>Total Strength: {totalStrength}</div>
      <div>Total Agility: {totalAgility}</div>

      <div>
        <h2>Your Team:</h2>
        <ul>
          {team.map((member, index) => (
            <li key={index}>
              <img
                src={member.img}
                alt={member.name}
                style={{ width: "150px", height: "150px" }}
              />
              <p>{member.name}</p>
              <p>Price: {member.price}</p>
              <p>Strength: {member.strength}</p>
              <p>Agility: {member.agility}</p>
              <button onClick={() => handleRemoveFighter()}>Remove Fighter</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Pick some team members!</h2>
        <ul>
          {zombieFighters.map((zombieFighter) => (
            <ZombieFighterList
              key={zombieFighter.name}
              {...zombieFighter}
              onAdd={handleAddFighter}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
