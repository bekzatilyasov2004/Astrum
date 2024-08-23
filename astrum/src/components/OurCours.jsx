import React from 'react'
import { Box, Button, Text } from '@chakra-ui/react'
import { OurCoursData } from '../constants/OurCoursData'
import OurCoursCard from './cards/OurCoursCard'
import { Fade } from 'react-awesome-reveal';

const OurCours = () => {
    return (
        <Box mt={10} display={'flex'} justifyContent={'space-around'} alignItems={'center'} flexDirection={'column'} >
            <Box w={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Text fontWeight={700} fontSize={{base: '26px',md:'48px'}}>Kurs dasturi</Text>
            </Box>
            <Box mt={5} gap={'30px'}  w={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} >
                <Fade >
                    {OurCoursData.map((item, index) => (
                        <OurCoursCard key={index} modul={item.modul} title={item.title} sub={item.sub} p={item.p} />
                    ))}
                </Fade>
                <Box p={10} pt={18}  w={'100%'} textAlign={'center'} >
                    <Text fontWeight={700} color={'#5532CE'} fontSize={{ base: '18px', md: '24px' }} >Kursimiz dasturini to'liq ko'rish uchun yuklab oling!</Text>                
                    <Button w={'187px'} h={'51px'} _active={{bg: '#7960cb'}} mt={'5'} bg={'#5532CE'} colorScheme={'#5532CE'} textTransform={'uppercase'} >Yuklab Olish</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default OurCours