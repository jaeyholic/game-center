import React from "react";
import PropTypes from "prop-types";

//components
import GameCard from "./GameCard";

const GamesList = ({ games }) => (
  <div className="ui four cards">
    {games.map(game => (
      <GameCard game={game} key={game._id} />
    ))}
  </div>
);

GamesList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.onject).isRequired
};

export default GamesList;
