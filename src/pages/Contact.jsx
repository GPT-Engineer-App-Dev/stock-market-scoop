import { Container, Heading, Text, VStack } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4} align="start">
        <Heading as="h1" size="xl">Contact Us</Heading>
        <Text>If you have any questions, feel free to reach out to us.</Text>
      </VStack>
    </Container>
  );
};

export default Contact;