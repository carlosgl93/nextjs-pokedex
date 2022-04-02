import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { Pokemon } from "../../interfaces";
import Layout from "../../components/layouts/Layout";
import NoFavorites from "../../components/ui/NoFavorites";
import { localFavorites } from "../../utils";
import FavoritePokemons from "../../components/ui/FavoritePokemons";

interface Props {
  pokemon: Pokemon;
}

const FavoritesPage: NextPage<Props> = ({ pokemon }) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    setFavorites(localFavorites.getFavoritePokemons());
  }, []);

  if (favorites.length > 0) {
    console.log(favorites);
  }

  return (
    <Layout title="Favoritos">
      {favorites.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons favorites={favorites} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
