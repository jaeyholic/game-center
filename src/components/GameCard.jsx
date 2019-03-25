import React from "react";

const GameCard = ({ game }) => (
  <div className="ui card">
    <div className="image">
      <div className="ui green ribbon label">${game.price}</div>
      <img src={game.thumbnail} alt={game.name} />
    </div>
    <div className="content">
      <a href="#" className="header">
        {game.name}
      </a>
      <div className="meta">
        <li className="icon users" />
        {game.players}&nbsp;
        <li className="icon wait" />
        {game.mins} mins.
      </div>
    </div>
  </div>
);

export default GameCard;
