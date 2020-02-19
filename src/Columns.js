import React from "react";
import Hero from "./Hero";
import styled from "styled-components";

const Container = styled.div`
  margin: 10px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  width: 33%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  padding: 10px;
`;

const HeroList = styled.div`
  padding: 10px;
  flex-grow: 1;
  min-height: 100px;
`;

export default function Column(props) {
  return (
    <Container>
      <Title>{props.column.title}</Title>
      <HeroList>
        {props.heroes.map(hero => (
          <Hero key={hero.id} hero={hero} />
        ))}
      </HeroList>
    </Container>
  );
}
