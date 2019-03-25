import React from "react";

//components
import GameCard from "./GameCard";

const GamesList = ({ games }) => (
  <div className="ui four cards">
    {games.map(game => (
      <GameCard game={game} key={game.name} />
    ))}
  </div>
);

export default GamesList;
