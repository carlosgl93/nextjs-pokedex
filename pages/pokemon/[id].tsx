import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { Container, Grid } from "@nextui-org/react";
import { Pokemon } from "../../interfaces";

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

export const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  // const router = useRouter();
  // console.log(pokemon);

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
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);
  // const { data } = await {}  // your fetch function here

  return {
    paths: pokemons151.map((id) => ({
      params: { id },
    })),
    // fallback: false,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const pokemon = await getPokemonInfo(id);

  // if pokemon does not exist:
  if (!pokemon) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      pokemon,
    },
    revalidate: 86400,
  };
};

export default PokemonPage;
