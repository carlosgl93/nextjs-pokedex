import React from "react";
import { Text } from "@nextui-org/react";
import { Pokemon } from "../../interfaces";

interface Props {
  pokemon: Pokemon;
}

const Skills: React.FC<Props> = ({ pokemon }) => {
  return (
    <>
      <Text h3>Skills</Text>
      {pokemon.moves.map((move, i) => {
        return <Text key={i}>{move.move.name}</Text>;
      })}
    </>
  );
};

export default Skills;
