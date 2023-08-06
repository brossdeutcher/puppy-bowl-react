import { useEffect, useState } from "react";

const AllPlayers = ({setPlayerId}) => {

  const [playerArr, setPlayerArr] = useState([]);

  useEffect(() => {
    const getPlayers = async () => {
      const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/3206-fsa-et-web-ft-sf/players");
      const result = await response.json();
      const players = result.data.players;
      console.log(players);
      setPlayerArr(players);
    };
    getPlayers();
  }, []);

  return (
    <>
      <h1>AllPlayers</h1>
      {playerArr.map((player) =>
        <div className="listed-player" onClick={() => setPlayerId(player.id)}>
          <p>{player.name}</p>
          <img src={player.imageUrl} alt={player.name} />
        </div>
      )}
    </>
  );
};

export default AllPlayers;
