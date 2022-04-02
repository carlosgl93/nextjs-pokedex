import Image from "next/image";
import { useTheme, Text, Spacer, Link } from "@nextui-org/react";
import NextLink from "next/link";

export const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 50px",
        backgroundColor: theme?.colors.gray900.value,
      }}
    >
      <NextLink href="/" passHref>
        <Link
          css={{
            display: "flex",
            direction: "row",
            alignItems: "center",
            margin: 0,
            padding: 0,
          }}
        >
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="pokemon"
            width={70}
            height={70}
          />
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okémon
          </Text>
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favorites" passHref>
        <Link>
          <Text>Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  );
};
