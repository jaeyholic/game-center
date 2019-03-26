import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import _orderBy from "lodash/orderBy";

//components
import GamesList from "./components/GamesList";

const games = [
  {
    _id: 1,
    featured: false,
    name: "Fifa 19",
    thumbnail:
      "https://images.performgroup.com/di/library/GOAL/e3/9e/cristiano-ronaldo-fifa-19_q3qbvm802210146nmgbhan20t.jpg?t=-1608180123&w=720&quality=80",
    price: 32.99,
    players: "2 - 4",
    duration: 60
  },
  {
    _id: 2,
    featured: true,
    name: "Fifa 19",
    thumbnail:
      "https://images.performgroup.com/di/library/GOAL/e3/9e/cristiano-ronaldo-fifa-19_q3qbvm802210146nmgbhan20t.jpg?t=-1608180123&w=720&quality=80",
    price: 32.99,
    players: "2 - 4",
    duration: 60
  },
  {
    _id: 3,
    featured: false,
    name: "Fifa 19",
    thumbnail:
      "https://images.performgroup.com/di/library/GOAL/e3/9e/cristiano-ronaldo-fifa-19_q3qbvm802210146nmgbhan20t.jpg?t=-1608180123&w=720&quality=80",
    price: 32.99,
    players: "2 - 4",
    duration: 60
  }
];
class App extends Component {
  state = {
    games: []
  };

  componentDidMount() {
    this.setState({
      games: _orderBy(games, ["featured", "name"], ["desc", "asc"])
    });
  }

  render() {
    return (
      <div className="ui container">
        <GamesList games={this.state.games} />
      </div>
    );
  }
}

export default App;
