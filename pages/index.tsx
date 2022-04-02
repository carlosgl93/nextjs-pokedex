import type { NextPage, GetStaticProps } from "next";
import { pokeApi } from "../api";
import { Grid } from "@nextui-org/react";

import Layout from "../components/layouts/Layout";
import { PokemonListResponse, SmallPokemon } from "../interfaces";
import { PokemonCard } from "../components/pokemon";

interface Props {
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  // console.log(pokemons);

  return (
    <Layout title="Pokemon List">
      {/* <Image src="/img/banner.png" height="150" width="200" alt="Banner" />  */}
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((poke) => {
          return <PokemonCard pokemon={poke} key={poke.id} />;
        })}
      </Grid.Container>
    </Layout>
  );
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON fil es, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemons: SmallPokemon[] = data.results.map((poke, index) => ({
    ...poke,
    id: index + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons: pokemons,
    },
  };
};

export default Home;
