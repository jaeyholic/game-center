import React from "react";
import PropTypes from "prop-types";

//components
import GameCard from "./GameCard";

const GamesList = ({ games }) => (
  <div className="ui four cards">
    {games.length === 0 ? (
      <div className="ui icon message">
        <i className="icon info" />
        <div className="content">
          <div className="header">There are no games in your store</div>
          <p>You should add some</p>
        </div>
      </div>
    ) : (
      games.map(game => <GameCard game={game} key={game._id} />)
    )}
  </div>
);

GamesList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default GamesList;
