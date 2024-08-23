import React from 'react';
import { Box, Text, Button, VStack, Icon } from '@chakra-ui/react';
import { MdError } from 'react-icons/md'; 
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    const nav = useNavigate()
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      h="100vh"
      bg={'#5532CE'}
      textAlign="center"
      p={4}
    >
      <VStack spacing={6}>
        <Icon as={MdError} boxSize="100px" color="white" />
        <Text fontSize={{ base: '3xl', md: '5xl' }} fontWeight="bold" color="white">
          404
        </Text>
        <Text fontSize={{ base: 'lg', md: '2xl' }} color="white">
        Voy! Sahifa topilmadi.
        </Text>
        <Text fontSize={{ base: 'md', md: 'lg' }} color="white">
        Siz qidirayotgan sahifa mavjud emas yoki ko'chirilgan.
        </Text>
        <Button
          mt={4}
          bg={'#00E8AF'}
          color={'#5532CE'}
          variant="solid"
          onClick={() => nav('/')} 
        >
         Orqaga
        </Button>
      </VStack>
    </Box>
  );
};

export default PageNotFound;
