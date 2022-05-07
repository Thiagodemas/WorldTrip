import { Flex, Stack } from '@chakra-ui/react'
import CategoryItem from './CategoryItem';

export function Category() {
  return (
    <Flex
      as="section"
      width="100%"
      maxW={1140}
      mx="auto"
      my={["20px", "80px"]}
      position="relative"
      justify="center"
      pt="9"
    >
      <Stack
        w="100%"
        direction="row"
        justify="space-around"
        align="center"
        m="auto"
      >
        <CategoryItem text="vida noturna" image="/images/cocktail.svg" />
        <CategoryItem text="praia" image="/images/surf.svg" />
        <CategoryItem text="moderno" image="/images/building.svg" />
        <CategoryItem text="clássico" image="/images/museum.svg" />
        <CategoryItem text="e mais..." image="/images/earth.svg" />
      </Stack>
    </Flex>
  );
}