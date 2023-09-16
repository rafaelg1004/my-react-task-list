// Home.js
import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
const Home = () => {
  return (
    
      <Box textAlign="center" mt="10">
        <Heading as="h1" size="xl">
          ¡Bienvenido a la Aplicación de Tareas!
        </Heading>
        <Text mt="4" fontSize="xl">
          Aquí puedes administrar tus tareas de manera eficiente.
        </Text>
      </Box>
  );
};

export default Home;
