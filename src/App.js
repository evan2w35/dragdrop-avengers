import React from "react";
import logo from "./logo.svg";
import data from "./Data";
import Column from "./Columns";
import styled from "styled-components";
import "./App.css";

const Title = styled.div`
  text-align: center;
  margin-top: 5px;
  padding: 10px;
  color: white;
`;

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Title>
        <text>Avengers Infinity War</text>
      </Title>
      <div className="funContainer">
        {data.columnsort.map(columnId => {
          const column = data.columns[columnId];
          const heroes = column.heroId.map(heroId => data.heroes[heroId]);
          return <Column key={Column.id} column={column} heroes={heroes} />;
        })}
      </div>
    </div>
  );
}

export default App;
