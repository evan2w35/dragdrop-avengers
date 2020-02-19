import React from "react";
import { Draggable } from "react-beautiful-dnd";
import "./Hero.css";

export default function Hero(props) {
  return (
    <Draggable draggableId={props.hero.id} index={props.index}>
      {provided => {
        return (
          <div
            className="heroCont"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {props.hero.name}
          </div>
        );
      }}
    </Draggable>
  );
}
