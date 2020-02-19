import React, { useState } from "react";
import logo from "./logo.svg";
import data from "./Data";
import Column from "./Columns";
import { DragDropContext } from "react-beautiful-dnd";
import "./App.css";

function App() {
  const [state, changeState] = useState(data);

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const column = state.columns[source.droppableId];
    const newHeroIds = Array.from(column.heroId);

    newHeroIds.splice(source.index, 1);
    newHeroIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      heroId: newHeroIds
    };
    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newColumn.id]: newColumn
      }
    };
    changeState(newState);
  };

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h2 id="appTitle">Avengers Infinity War</h2>
      <div className="funContainer">
        <DragDropContext onDragEnd={onDragEnd}>
          {state.columnsort.map(columnId => {
            const column = state.columns[columnId];
            const heroes = column.heroId.map(heroId => state.heroes[heroId]);
            return <Column key={column.id} column={column} heroes={heroes} />;
          })}
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;
