// Menu.js
import React from "react";
import { Link } from "react-router-dom";

import { Tab, TabList, TabPanels, Tabs,TabPanel } from "@chakra-ui/react";

const Menu = () => {
  return (
    <Tabs variant='soft-rounded'
    colorScheme='green'
    display='flex'
    alignItems='center'
    justifyContent='center'
    width='100%'
    py={12}
    bgImage="./src/imgenes/imagen1.png"
    bgPosition='center'
    bgRepeat='no-repeat'
    mb={2}
    >
    <TabList>
    <Tab><Link to="/">Home</Link></Tab>
    <Tab> <Link to="/tareas">Tareas</Link></Tab>
    <Tab><Link to="/sobre-nosotros">Sobre Nosotros</Link></Tab>  
    </TabList>
    </Tabs>
          
     
  );
};

export  default Menu;
