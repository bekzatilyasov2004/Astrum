import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Stack, Text, useToast } from '@chakra-ui/react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/Firebase'; 
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        description: "You are now logged in.",
        status: "success",
        duration: 5000,
        isClosable: true,
        variant: 'left-accent'
      });
      navigate('/panel');
    } catch (error) {
      toast({
        title: "Login Failed",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgGradient="linear(to-r, #00E8AF, #5532CE)"
    >
      <Box
        p={8}
        bg="white"
        borderRadius="md"
        boxShadow="lg"
        width={{ base: '90%', sm: '400px' }}
        border="1px"
        borderColor="#5532CE"
      >
        <Text
          fontSize="2xl"
          fontWeight="bold"
          mb={6}
          textAlign="center"
          color="#5532CE"
        >
          Admin Login
        </Text>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel htmlFor="email" color="#5532CE">Email</FormLabel>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                borderColor="#5532CE"
                _placeholder={{ color: '#5532CE' }}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="password" color="#5532CE">Password</FormLabel>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                borderColor="#5532CE"
                _placeholder={{ color: '#5532CE' }}
              />
            </FormControl>
            <Button
              type="submit"
              colorScheme="teal"
              size="lg"
              bg="#5532CE"
              color="white"
              _hover={{ bg: '#00E8AF' }}
              _active={{ bg: '#00E8AF' }}
            >
              Log In
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default AdminLogin;
