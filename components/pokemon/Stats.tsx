import React from "react";
import { Text } from "@nextui-org/react";
import { Pokemon } from "../../interfaces";

interface Props {
  pokemon: Pokemon;
}

const Stats: React.FC<Props> = ({ pokemon }) => {
  return (
    <>
      <Text h3>Stats</Text>
      {pokemon.stats.map((stat, i) => {
        return (
          <Text transform="capitalize" key={i + 1}>
            {stat.stat.name}: {stat.base_stat}
          </Text>
        );
      })}
    </>
  );
};

export default Stats;
