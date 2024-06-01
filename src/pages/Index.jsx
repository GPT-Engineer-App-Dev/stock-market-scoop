import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Financial Times</Heading>
        <Text fontSize="lg">Your trusted source for financial news, market data, and more.</Text>
      </VStack>
    </Container>
  );
};

export default Index;