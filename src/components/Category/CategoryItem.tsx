import { Flex, Text, Image } from "@chakra-ui/react";

interface CategoryProps {
  title: string;
  icon: string
}

export function CategoryItem({ title, icon }: CategoryProps) {
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
    >
      <Image
        src={icon}
        alt={title}
        w={85}
        h={85}
      />

      <Text
        fontSize="md"
        color="black.500"
        pt="4"
        fontWeight="600"
      >
        {title}
      </Text>
    </Flex>
  );
}