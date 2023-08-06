import { useEffect, useState } from "react";

const AllPlayers = ({ setPlayerId, getPlayers, playerArr }) => {

  useEffect(() => {
    getPlayers();
  }, []);

  const deletePlayer = async (id) => {
    try {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/3206-fsa-et-web-ft-sf/players/${id}`,
        { method: "DELETE" }
      );
      const result = await response.json();
      console.log(result);
      getPlayers();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h1>AllPlayers</h1>
      {playerArr.map((player) => (
        <div className="listed-player">
          <p>{player.name}</p>
          <img
            onClick={() => setPlayerId(player.id)}
            className="detective-dog-img"
            src='https://cdn1.vectorstock.com/i/1000x1000/87/15/detective-dog-holding-a-magnifying-glass-vector-768715.jpg'
            alt="info button"
          />
          <img
            onClick={() => deletePlayer(player.id)}
            className="kennel-img"
            src="https://www.vhv.rs/dpng/d/425-4252649_png-cage-image-graphic-royalty-free-stock-dog.png"
            alt="delete button"
          />
          <img src={player.imageUrl} alt={player.name} />
        </div>
      ))}
    </>
  );
};

export default AllPlayers;
