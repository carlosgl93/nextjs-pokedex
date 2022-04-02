import { Container, Text, Image } from "@nextui-org/react";

const NoFavorites = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 100px)",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text h2>No hay favoritos</Text>
      <Image
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png"
        }
        alt="Ditto will never leave us alone"
        width="200"
        height="200"
        css={{ opacity: 0.1 }}
      />
    </Container>
  );
};

export default NoFavorites;
