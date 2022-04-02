import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { Container, Grid } from "@nextui-org/react";
import { pokeApi } from "../../api";
import { Pokemon, PokemonListResponse } from "../../interfaces";

import Layout from "../../components/layouts/Layout";
// import { localFavorites } from "../../utils";
// import { useState } from "react";
import HeaderSprites from "../../components/pokemon/HeaderSprites";
import Stats from "../../components/pokemon/Stats";
import Skills from "../../components/pokemon//Skills";
import MainImage from "../../components/pokemon/MainImage";
import { getPokemonInfo } from "../../utils";

interface Props {
  pokemon: Pokemon;
}

export interface OptimizedPokemon {
  id: number;
  types: string[];
  name: string;
  sprites: {};
  stats: string[];
  moves: string[];
}

export const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
  // const router = useRouter();
  //   console.log({ pokemon });

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <MainImage pokemon={pokemon} />
        </Grid>

        <Grid xs={12} sm={8}>
          <HeaderSprites pokemon={pokemon} />
        </Grid>
        <Grid xs={12} sm={8}>
          <Container>
            <Stats pokemon={pokemon} />
          </Container>
        </Grid>
        <Grid>
          <Container direction="column">
            <Skills pokemon={pokemon} />
          </Container>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  // const pokemons151 = [...Array(151).map((value, index) => `${index + 1}`)];
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  const pokemonNames: string[] = data.results.map((pokemon) => pokemon.name);
  //   console.log(pokemons151);
  // const { data } = await {}  // your fetch function here

  return {
    paths: pokemonNames.map((name) => ({
      params: { name },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  return {
    props: {
      pokemon: await getPokemonInfo(name),
    },
  };
};

export default PokemonByNamePage;
