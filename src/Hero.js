import React from "react";
import "./Hero.css";

export default function Hero(props) {
  return <div className="heroCont">{props.hero.name}</div>;
}
