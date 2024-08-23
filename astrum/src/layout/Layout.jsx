import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import DateLine from '../components/DateLine';
import Advantages from '../components/Advantages';
import OurCours from '../components/OurCours';
import Teams from '../components/Teams';
import Questions from '../components/Questions';
import { Element } from 'react-scroll';
import Contact from '../components/Contact';



const Layout = () => {
  return (
    <Box w={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
      <Header />
      <Element name='home'>
        <Hero />
      </Element>
      <Box p={{ base: '5', md: '0' }}>
        <DateLine />
        <About />
        <Element name='advantages'>
          <Advantages />
        </Element>
        <Element name='course'>
          <OurCours />
        </Element>
        <Element name='teams'>
        <Teams />
        </Element>
        <Questions />
        <Element name="contact">
          <Contact />
        </Element>
      </Box>
    </Box>

  );
}

export default Layout;
