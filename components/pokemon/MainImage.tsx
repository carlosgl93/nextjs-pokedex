import { Card } from "@nextui-org/react";
import React from "react";
import { Pokemon } from "../../interfaces";

interface Props {
  pokemon: Pokemon;
}

const MainImage: React.FC<Props> = ({ pokemon }) => {
  return (
    <Card hoverable css={{ padding: "30px" }}>
      <Card.Body>
        <Card.Image
          src={
            pokemon.sprites.other?.dream_world.front_default || "/no-image.png"
          }
          alt={pokemon.name}
          width="100%"
          height="200"
        />
      </Card.Body>
    </Card>
  );
};

export default MainImage;
