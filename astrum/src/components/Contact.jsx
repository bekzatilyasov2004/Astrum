import React, { useState } from 'react';
import { Box, Button, Input, Text, HStack, Stack, useToast, Link } from '@chakra-ui/react';
import { TbWorld } from 'react-icons/tb';
import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa';
import { db } from '../config/Firebase';
import { collection, addDoc } from 'firebase/firestore';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast({
        description: 'Please fill in all fields',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        variant: 'left-accent'
      });
      return;
    }

    try {
      await addDoc(collection(db, 'contacts'), formData);
      toast({
        title: 'Success',
        description: 'Form submitted successfully',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
      });
    } catch (error) {
      console.error('Error adding document: ', error);
      toast({
        title: 'Error',
        description: 'Failed to submit form',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      p={{ base: '5', xl: '10', md: '20' }}
      gap={{ base: '40px', md: '100px' }}
      w="100%"
      display="flex"
      justifyContent="center"
      alignItems="start"
      flexDirection={{ base: 'column', md: 'row' }}
    >
      <Box
        w={{ base: '100%', md: '70%' }}
        display="flex"
        justifyContent="center"
        alignItems="start"
        flexDirection="column"
        gap={3}
      >
        <Text fontWeight={700} fontSize={{ base: '24px', md: '48px' }}>
          Bepul darsga ro'yxatdan o'ting
        </Text>
        <Text fontWeight={400} fontSize={{ base: '16px', md: '26px' }}>
          Maʼlumotlaringizni qoldiring va biz siz bilan tez orada bogʻlanamiz.
        </Text>
        <Stack w={{ base: '100%', md: '70%' }} spacing={4}>
          <Input
            placeholder="Ism"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <Input
            placeholder="Familya"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <Input
            placeholder="Telefon raqam"
            type={'tel'}
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <Input
            placeholder="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Button
            mt="5"
            _active={{ bg: '#7960cb' }}
            bg="#5532CE"
            colorScheme="blue"
            textTransform="uppercase"
            onClick={handleSubmit}
            w="210px"
            h="51px"
          >
            Jo'natish
          </Button>
        </Stack>
      </Box>
      <Box
        w={{ base: '100%', md: '30%' }}
        display="flex"
        justifyContent="center"
        alignItems="start"
        flexDirection="column"
        gap="20px"
      >
        <Box>
          <Text mb={3} fontWeight={700} fontSize={{ base: '18px', md: '24px' }}>
            Tarmoqlar
          </Text>
          <HStack gap="20px" color="#5532CE">
            <Link href='https://astrum.uz/uz' target={'_blank'}>
            <TbWorld size="25px" cursor="pointer" />
            </Link>
            <Link href='https://t.me/astrumuz' target={'_blank'}>
            <FaTelegram size="25px" cursor="pointer" />
            </Link>
            <Link href='https://www.facebook.com/astrumuz' target={'_blank'}>
            <FaFacebook size="25px" cursor="pointer" />
            </Link>
            <Link href='https://www.youtube.com/channel/UCf2xgqN7wmTWJRsfQm0TBjw' target={'_blank'}>
            <FaYoutube size="25px" cursor="pointer" />
            </Link>
            <Link href='https://instagram.com/astrumuz' target={'_blank'}>
            <FaInstagram size="25px" cursor="pointer" />
            </Link>
          </HStack>
        </Box>
        <Box>
          <Text fontWeight={700} fontSize={{ base: '18px', md: '24px' }}>
            Telefon raqam
          </Text>
          <Text fontWeight={700} color="#5532CE" fontSize={{ base: '16px', md: '20px' }}>
            +998 (71) 202 42 22
          </Text>
        </Box>
        <Box>
          <Text fontWeight={700} fontSize={{ base: '18px', md: '24px' }}>
            Pochta
          </Text>
          <Text fontWeight={700} color="#5532CE" fontSize={{ base: '16px', md: '20px' }}>
            info@astrum.uz
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
