import { Grid } from "@nextui-org/react";
import React from "react";
import FavoritePokemonCard from "./FavoritePokemonCard";

interface Props {
  favorites: number[];
}

const FavoritePokemons: React.FC<Props> = ({ favorites }) => {
  return (
    <Grid.Container gap={2}>
      {favorites.map((id) => {
        return <FavoritePokemonCard key={id} id={id} />;
      })}
    </Grid.Container>
  );
};

export default FavoritePokemons;
