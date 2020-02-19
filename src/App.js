import React from "react";
import logo from "./logo.svg";
import data from "./Data";
import Column from "./Columns";
import { DragDropContext } from "react-beautiful-dnd";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h2 id='appTitle'>
        <text>Avengers Infinity War</text>
      </h2>
      <div className="funContainer">
        <DragDropContext>
          {data.columnsort.map(columnId => {
            const column = data.columns[columnId];
            const heroes = column.heroId.map(heroId => data.heroes[heroId]);
            return <Column key={Column.id} column={column} heroes={heroes} />;
          })}
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;
