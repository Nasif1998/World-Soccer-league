import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import './PlayerList.css'

const PlayerList = (props) => {
    const { name, image, value, country } = props.player
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div className="player">
            <div>
                <img className="image-style" src={image} alt="" />
            </div>
            <div className="list-description">
                <h4 className='player-name'>{name}</h4>
                <p>Country: {country}</p>
                <br />
                <p>Value: {value}</p>
                <br />
                <button onClick={() => handleAddPlayer(props.player)} className='main-button'><FontAwesomeIcon icon={faPlusSquare} />Add Player</button>
            </div>
        </div>
    );
};

export default PlayerList;