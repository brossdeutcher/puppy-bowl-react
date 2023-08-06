import { useState } from 'react'
import './App.css'
import AllPlayers from './components/AllPlayers'
import NavBar from './components/NavBar'
import NewPlayerForm from './components/NewPlayerForm'
import SinglePlayer from './components/SinglePlayer'

function App() {

  const [playerId, setPlayerId] = useState(0);

  return (
    <>
      {!playerId && <AllPlayers setPlayerId={setPlayerId} />}
      <NavBar />
      <NewPlayerForm />
      {playerId && <SinglePlayer playerId={playerId} setPlayerId={setPlayerId} />}
    </>
  )
}

export default App
