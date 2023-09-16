// SobreNosotros.js
import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
const SobreNosotros = () => {
  return (
    <Box textAlign="center" mt="10">
    <Heading as="h1" size="xl">
      Sobre Nosotros
    </Heading>
    <Text mt="4" fontSize="xl">
      ProTalent es un proyecto integrador creado por un equipo de ingenieros de sistemas.
    </Text>
    <Text mt="4" fontSize="xl">
      Nuestro objetivo es desarrollar soluciones tecnológicas innovadoras para resolver desafíos reales.
    </Text>
  </Box>
  );
};

export default SobreNosotros;
