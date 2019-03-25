import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";

//components
import GamesList from "./components/GamesList";

const games = [
  {
    name: "Fifa 19",
    thumbnail:
      "https://images.performgroup.com/di/library/GOAL/e3/9e/cristiano-ronaldo-fifa-19_q3qbvm802210146nmgbhan20t.jpg?t=-1608180123&w=720&quality=80",
    price: "32.99",
    players: "2 -4",
    mins: "60"
  },
  {
    name: "Fifa 19",
    thumbnail:
      "https://images.performgroup.com/di/library/GOAL/e3/9e/cristiano-ronaldo-fifa-19_q3qbvm802210146nmgbhan20t.jpg?t=-1608180123&w=720&quality=80",
    price: "32.99",
    players: "2 -4",
    mins: "60"
  },
  {
    name: "Fifa 19",
    thumbnail:
      "https://images.performgroup.com/di/library/GOAL/e3/9e/cristiano-ronaldo-fifa-19_q3qbvm802210146nmgbhan20t.jpg?t=-1608180123&w=720&quality=80",
    price: "32.99",
    players: "2 -4",
    mins: "60"
  }
];
class App extends Component {
  render() {
    return (
      <div className="ui container">
        <GamesList games={games} />
      </div>
    );
  }
}

export default App;
