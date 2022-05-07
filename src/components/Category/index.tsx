import { Flex, Stack } from '@chakra-ui/react'
import { CategoryItem } from './CategoryItem';

export function Category() {
  return (
    <Flex
      width="100%"
      maxW={1140}
      mx="auto"
      my="80px"
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
        <CategoryItem title="vida noturna" icon="/images/cocktail.svg" />
        <CategoryItem title="praia" icon="/images/surf.svg" />
        <CategoryItem title="moderno" icon="/images/building.svg" />
        <CategoryItem title="clássico" icon="/images/museum.svg" />
        <CategoryItem title="e mais..." icon="/images/earth.svg" />
      </Stack>
    </Flex>
  );
}