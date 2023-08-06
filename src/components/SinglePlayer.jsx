import { useEffect, useState } from "react";

const SinglePlayer = ({ playerId, setPlayerId }) => {
  const [puppy, setPuppy] = useState({});
  const [pack, setPack] = useState([]);

  useEffect(() => {
    const getPlayer = async () => {
      try {
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/3206-fsa-et-web-ft-sf/players/${playerId}`);
        const result = await response.json();
        const puppy = result.data.player;
        console.log(puppy);
        setPuppy(puppy);
        setPack(puppy.team);
      } catch (err) {
        console.error(err);
      }
    };
    getPlayer();
  }, [playerId]);

  return (
    <>
      <h1>{puppy.name}</h1>
      <img src={puppy.imageUrl} alt="image of pupper" />
      <table>
        <tr>
          <td>Breed</td>
          <td>{puppy.breed}</td>
        </tr>
        <tr>
          <td>Status</td>
          <td>{puppy.status}</td>
        </tr>
        <tr>
          <td>Team</td>
          <td>{pack.name}</td>
        </tr>
        <tr>
          <td>ID</td>
          <td>{puppy.id}</td>
        </tr>
      </table>
      <button onClick={() => setPlayerId(0)}>Back to Matchup!!</button>
      <h2>{puppy.name}&apos;s Pack:</h2>
      <ul>
        {pack.players?.map((teamPlayer) => <li>{teamPlayer.name}</li>)}
      </ul>
    </>
  );
};

export default SinglePlayer;
