import React, { useRef } from 'react';
import { Box, Text } from '@chakra-ui/react';
import TeamsData from '../constants/TeamsData';
import TeamsCard from './cards/TeamsCard';

const Teams = () => {
  const sliderRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    startX = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
  };

  const handleMouseUp = () => {
    isDown = false;
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <Box w={'100%'} h={'650px'} mt={{base: '5px',md: '20px'} mb={{base: '5px',md: '20px'} >
      <Box w="100%" >
        <Box p={5}  textAlign={{ base: 'center', md: 'start' }}>
          <Text fontWeight={700} fontSize={{ base: '26px', md: '48px' }}>
            Kurs o'qituvchilari
          </Text>
        </Box>
        <Box w="100%" maxW="100%" position="relative" display="block">
          <Box
            ref={sliderRef}
            display="block"
            w="100%"
            position="absolute"
            left={0}
            overflowX="scroll"
            overflowY="hidden"
            whiteSpace="nowrap"
            transition="all 0.2s"
            userSelect="none"
            cursor="pointer"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <Box
              maxW="100%"
              m="auto"
              left={0}
              right={0}
              w="100%"
              display="inline-flex"
              position="relative"
            >
              {TeamsData.map((item, index) => (
                <Box
                  key={index}
                  display="inline-block"
                  minWidth="300px"
                  w={'300px'}
                >
                  <TeamsCard
                    imageUrl={item.url}
                    name={item.name}
                    jobTitle={item.job}
                    about={item.about}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Teams;
