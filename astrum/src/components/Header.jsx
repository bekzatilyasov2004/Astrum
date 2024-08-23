import React from 'react';
import { Box, Image, Button, HStack } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import Drawers from './Drawers'
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-scroll';


const Header = () => {
    const getActiveLinkStyle = ({ isActive }) => ({
        fontWeight: 'bold',
        fontSize: '14px',
        color: isActive ? '#5532ce' : 'black',
        textDecoration: 'none'
    });
    return (
        <Box
            w="100%"
            maxW={'1200px'}
            h="80px"
            p={4}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            bg="white"
        >

            <Box>
                <NavLink to={'/'}>
                    <Fade damping={200}>
                        <Image w={[114,140]} src='./astrum.png' alt='astrum' />
                    </Fade>
                </NavLink>
            </Box>


            <Fade direction='down' cascade>
                <HStack
                    display={{ base: 'none', md: 'flex' }}
                    spacing={6}
                    alignItems="center"
                >
                    <Link to="home" smooth={true} duration={500}>
                        <NavLink style={getActiveLinkStyle} to="/">Bosh sahifa</NavLink>
                    </Link>
                    <Link to="advantages" smooth={true} duration={500}>
                        <NavLink style={getActiveLinkStyle} to="/">Afzalliklarimiz</NavLink>
                    </Link>
                    <Link to="course" smooth={true} duration={500}>
                        <NavLink style={getActiveLinkStyle} to="/">Kurs dasturi</NavLink>
                    </Link >
                    <Link to="teams" smooth={true} duration={500}>
                        <NavLink style={getActiveLinkStyle} to="/">Jamoa</NavLink>
                    </Link>
                    <Link to="contact" smooth={true} duration={500}>
                        <NavLink style={getActiveLinkStyle} to="/">Kontakt</NavLink>
                    </Link>

                </HStack>
            </Fade>
            <Button
                display={{ base: 'none', md: 'block' }}
                variant="outline"
                colorScheme="purple"
                borderColor="#5532ce"
                borderWidth="2px"
                fontSize="md"
                fontWeight="bold"
            >
                <Fade delay={100} cascade>
                    +998 71 202 42 22
                </Fade>
            </Button>

            <Box display={{ base: 'flex', md: 'none' }} alignItems="center">
                <Drawers />
            </Box>
        </Box>
    );
};

export default Header;
