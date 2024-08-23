import React from 'react'
import { Box, Text, Image, Button } from "@chakra-ui/react"
import { CoursData } from '../constants/CoursData'
import CoursCard from './cards/CoursCard'
import { Fade } from 'react-awesome-reveal';
const Advantages = () => {
    return (
        <Box maxW={'1290px'} pt={5}  display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}  >
            <Box  bg={'#00E8AF'} borderRadius={'20px'} flexDirection={{ base: 'column-reverse', md: 'row' }} w={{base: '100%',xl: '1200px', md: '100%'}} display={'flex'} justifyContent={'speace-around'} alignItems={'center'} p={5} textAlign={{ base: 'center', md: 'start' }} gap={10} >
                <Fade >
                    <Box>
                        <Text fontWeight={700} fontSize={[26, 30, 34, 38, 42, 48]}>Astrum kursi boshqa kurslardan nimasi bilan farq qiladi?</Text>
                        <Text mt={5} fontWeight={400} fontSize={[14, 15, 15]}>Akademiyamizning yakuniy ichki imtihonlarida 80% natijaga erishgan talabalarga Person VUE test markazida topshiriladigan Cisco CCNA imtihon xarajatlari (hozirgi kunda 300$) Astrum akademiyasi tomonidan to‘liq qoplab beriladi.</Text>
                    </Box>
                    <Box>
                        <Image w={{ base: '300px', md: '600px' }} src='./bonus.png' alt='bonus' />
                    </Box>
                </Fade>
            </Box>
            <Box mt={10} textAlign={'center'} maxW={'800px'}>
                <Fade>
                    <Text mb={10} fontWeight={700} fontSize={{ base: '26px', md: '48px' }} >Onlayn kurs dasturi bilan nimalar qilish mumkin</Text>
                </Fade>
            </Box>
            <Box w={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                <Box w={'100%'}
                    display={'flex'}
                    justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'}
                    gap={'40px'} >
                    <Fade >
                        {CoursData.map((item, index) => (
                            <CoursCard key={index} title={item.title} p={item.p} />
                        ))}
                    </Fade>
                </Box>
            </Box>
            <Box mt={10} >
                <Fade>
                    <Button w={'210px'} h={'51px'} color={'#5532CE'} colorScheme={'#00E8AF'} _active={{bg: '#64f6d1'}} bg={'#00E8AF'} textTransform={'uppercase'} >Maslahat olish</Button>
                </Fade>
            </Box>
        </Box>
    )
}

export default Advantages