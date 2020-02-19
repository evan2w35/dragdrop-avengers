import React from "react";
import Hero from "./Hero";
import { Droppable } from "react-beautiful-dnd";
import "./Columns.css";

export default function Column(props) {
  const mappedHeros = props.heroes.map((hero, index) => (
    <div key={hero.id}>
      <Hero key={hero.id} hero={hero} index={index} />
    </div>
  ));
  return (
    <span className="colContainer">
      <h3 id="colTitle">{props.column.title}</h3>
      <Droppable droppableId={props.column.id}>
        {provided => {
          return (
            <div
              className="HeroList"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {mappedHeros}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </span>
  );
}
