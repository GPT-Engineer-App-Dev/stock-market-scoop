import { Container, Heading, Text, VStack } from "@chakra-ui/react";

const News = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4} align="start">
        <Heading as="h1" size="xl">Latest News</Heading>
        <Text>Stay updated with the latest financial news from around the world.</Text>
      </VStack>
    </Container>
  );
};

export default News;