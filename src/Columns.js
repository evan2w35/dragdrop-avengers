import React from "react";
import Hero from "./Hero";
import { Droppable } from "react-beautiful-dnd";
import "./Columns.css";

export default function Column(props) {
  return (
    <span className="colContainer">
      <h3 id="colTitle">{props.column.title}</h3>
      <Droppable droppableId={props.column.id}>
        {provided => {
          return (
            <div
              className="HeroList"
              innerRef={provided.innerRef}
              {...provided.droppableProps}
            >
              {props.heroes.map(hero => (
                <Hero key={hero.id} hero={hero} />
              ))}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </span>
  );
}
