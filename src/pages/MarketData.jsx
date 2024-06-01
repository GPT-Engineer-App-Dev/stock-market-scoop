import { Container, Heading, Text, VStack } from "@chakra-ui/react";

const MarketData = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4} align="start">
        <Heading as="h1" size="xl">Market Data</Heading>
        <Text>Get the latest market data and trends.</Text>
      </VStack>
    </Container>
  );
};

export default MarketData;