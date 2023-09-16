import React from "react";
import "./index.css";
import Card from "./Card";
import emojipedia from "./emoji";

function createCard(props) {
  return (
    <Card
      key={props.id}
      emoji={props.emoji}
      name={props.name}
      meaning={props.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
