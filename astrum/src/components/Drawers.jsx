import React from "react";
import { useDisclosure,DrawerBody, Box, Text, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton } from '@chakra-ui/react';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { NavLink } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import { Link } from "react-scroll";

function Drawers() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();


  const getActiveLinkStyle = ({ isActive }) => ({
    fontWeight: 'bold',
    fontSize: '30px',
    color: isActive ? '#00E8AF' : 'black', 
    textDecoration: 'none'
  });

  return (
    <>
      <HiOutlineMenuAlt3 size={'30px'} ref={btnRef} onClick={onOpen} color={'#5432ce'} />
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay  />
        <DrawerContent background={'rgba(250, 250, 250, 0.7)'}>
          <DrawerCloseButton size={'35px'} color={'#5432ce'} />
          <DrawerBody>
              <Fade direction="right" cascade>
            <Box w={'100%'} h={'90vh'} display={'flex'} justifyContent={'center'} alignItems={'start'} flexDirection={'column'} >
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
            </Box>
              </Fade>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default React.memo(Drawers);
