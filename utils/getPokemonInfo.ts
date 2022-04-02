import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";

export const getPokemonInfo = async (nameOrId: string) => {
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

  return {
    id: data.id,
    types: data.types,
    name: data.name,
    sprites: {
      default: data.sprites.other?.dream_world.front_default,
      front_default: data.sprites.front_default,
      back_default: data.sprites.back_default,
      front_shiny: data.sprites.front_shiny,
      back_shiny: data.sprites.back_shiny,
    },
    stats: data.stats,
    moves: data.moves,
  };
};
