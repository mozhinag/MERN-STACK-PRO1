import React from 'react';
import { useColorMode, Button, Flex, Text, HStack, Container } from '@chakra-ui/react';
import { PlusSquareIcon } from '@chakra-ui/icons'; 
import { Link } from 'react-router-dom';
import { LuSun } from "react-icons/lu";
import { IoMoon } from "react-icons/io5";

function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container minW="1140px" px={4}>
      <Flex 
        h={16}
        alignItems="center" 
        justifyContent="space-between"
        flexDir={{ base: "column", sm: "row" }}
      >
        {/* Store Name */}
        <Text
          fontSize={{ base: "22px", sm: "28px" }}  
          fontWeight="bold"
          textTransform="uppercase"
          textAlign="center"
          bgGradient="linear(to-r, rgb(8, 216, 239), rgb(21, 0, 255))"
          bgClip="text"
        >
          <Link to="/"> Product Store 🛒 </Link>
        </Text>

        {/* Buttons */}
        <HStack spacing={2} alignItems="center">
          {/* Create Product Button */}
          <Link to="/create">
            <Button colorScheme="blue">
              <PlusSquareIcon fontSize={20} />
            </Button>
          </Link>

          {/* Dark/Light Mode Toggle */}
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <IoMoon size={20} /> : <LuSun size={20} />} 
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
}

export default NavBar;
