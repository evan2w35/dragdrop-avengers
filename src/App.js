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
      return state;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return state;
    }
    const begin = state.columns[source.droppableId];
    const end = state.columns[destination.droppableId];
    if (begin === end) {
      const newHeroIds = Array.from(begin.heroId);
      newHeroIds.splice(source.index, 1);
      newHeroIds.splice(destination.index, 0, draggableId);
      const newColumn = {
        ...begin,
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
      return;
    } else {
      const beginHeroIds = Array.from(begin.heroId);
      beginHeroIds.splice(source.index, 1);
      const newBegin = {
        ...begin,
        heroId: beginHeroIds
      };
      const endHeroIds = Array.from(end.heroId);
      endHeroIds.splice(destination.index, 0, draggableId);
      const newEnd = {
        ...end,
        heroId: endHeroIds
      };
      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newBegin.id]: newBegin,
          [newEnd.id]: newEnd
        }
      };
      changeState(newState);
      return;
    }
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
