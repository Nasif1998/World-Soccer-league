//import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Data from './Data/Data.json';
import PlayerList from './components/Player/PlayerList';
import Cart from './components/Player/Cart/Cart';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [players, setPlayers] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setPlayers(Data);
  }, [])

  const handleAddPlayer = (player) => {
    const newCart = [...cart, player];
    setCart(newCart);
  };
  return (
    <div className="app-name">
      <h1 className="p-3 mb-2 bg-secondary text-white">World Soccer League</h1>



      <div className="market-container">
        <div className="player-container">
          <ul>
            {
              players.map(player => <PlayerList player={player} handleAddPlayer={handleAddPlayer} key={player.id}></PlayerList>)
            }
          </ul>
        </div>
        <div className="cart-container">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
