import React from 'react';
import {Box, Heading} from '@chakra-ui/react';

export default function HomePage() {
  return (
    <Box
      py="16"
      px="10"
      bg="indigo.200"
      _dark={{
        bg: 'indigo.500'
      }}
    >
      <Heading mb="2" size="3xl">
        Welcome to Apollo Docs
      </Heading>
      <Heading fontWeight="semibold">Explore the Apollo platform</Heading>
    </Box>
  );
}
