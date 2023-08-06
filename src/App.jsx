import { useState } from "react";
import "./App.css";
import AllPlayers from "./components/AllPlayers";
import NavBar from "./components/NavBar";
import NewPlayerForm from "./components/NewPlayerForm";
import SinglePlayer from "./components/SinglePlayer";

function App() {
  const [playerId, setPlayerId] = useState(0);
  const [playerArr, setPlayerArr] = useState([]);

  const getPlayers = async () => {
    try {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/3206-fsa-et-web-ft-sf/players"
      );
      const result = await response.json();
      const players = result.data.players;
      console.log(players);
      setPlayerArr(players);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <NavBar />
      {!playerId && (
        <>
          <AllPlayers setPlayerId={setPlayerId} getPlayers={getPlayers} playerArr={playerArr} />
          <NewPlayerForm getPlayers={getPlayers} />
        </>
      )}
      {playerId && (
        <SinglePlayer playerId={playerId} setPlayerId={setPlayerId} />
      )}
    </>
  );
}

export default App;
