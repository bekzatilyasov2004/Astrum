import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { AboutData } from '../constants/AboutData';
import AboutCard from './cards/AboutCard';
import { Fade } from 'react-awesome-reveal';
const About = () => {
    return (
        <Box mt={7}  maxW={'1290px'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
            <Fade>
                <Text mb={5} fontWeight={700} fontSize={{ base: '26px', md: '48px' }} >Bu kurs kim uchun?</Text>
            </Fade>
            <Box
                w={'100%'}
                display={'flex'}
                justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'}
                gap={'40px'}
            >
                <Fade >
                    {AboutData.map((item, index) => (
                        <AboutCard key={index} url={item.icon} title={item.title} p={item.p} />
                    ))}
                </Fade>
            </Box>
            <Box w={'100%'} p={{base: '5', md: '100px'}} textAlign={'center'}>
                <Fade>
                    <Text  fontWeight={700} fontSize={{ base: '18px', md: '24px' }} >Bu kurs sizni tarmoq muhandisligi sohasida yetakchi mutaxassisga aylantiradi va yuqori darajadagi ish imkoniyatlarini yaratadi.</Text>
                </Fade>
            </Box>
        </Box>
    );
}

export default About;
