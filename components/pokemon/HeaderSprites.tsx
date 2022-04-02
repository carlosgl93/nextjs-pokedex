import { Button, Card, Container, Text, Image } from "@nextui-org/react";
import React, { useState } from "react";
import { Pokemon } from "../../interfaces";
import { localFavorites } from "../../utils";
import confetti from "canvas-confetti";

interface Props {
  pokemon: Pokemon;
}

const HeaderSprites: React.FC<Props> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState(
    localFavorites.checkFavorites(pokemon.id)
  );
  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);

    if (isInFavorites) return;
    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };

  // const checkFavorites = () => {
  //   localFavorites.checkFavorites(pokemon.id);
  // };
  return (
    <Card>
      <Card.Header css={{ display: "flex", justifyContent: "space-between" }}>
        <Text h1 transform="capitalize">
          {pokemon.name}
        </Text>
      </Card.Header>
      <Container direction="row" display="flex" gap={2}>
        {pokemon.types.map((type, i) => {
          return (
            <Text small key={i + 1}>
              {type.type.name}
            </Text>
          );
        })}
      </Container>
      <Card.Body>
        <Button
          onClick={onToggleFavorite}
          color="gradient"
          ghost={!isInFavorites}
        >
          {isInFavorites ? "Eliminar de favoritos" : "Agregar a favoritos"}
        </Button>

        <Container direction="row" display="flex" gap={0}>
          <Image
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            width="100"
            height="100"
          />
          <Image
            src={pokemon.sprites.back_default}
            alt={pokemon.name}
            width="100"
            height="100"
          />
          <Image
            src={pokemon.sprites.front_shiny}
            alt={pokemon.name}
            width="100"
            height="100"
          />
          <Image
            src={pokemon.sprites.back_shiny}
            alt={pokemon.name}
            width="100"
            height="100"
          />
        </Container>
      </Card.Body>
    </Card>
  );
};

export default HeaderSprites;
