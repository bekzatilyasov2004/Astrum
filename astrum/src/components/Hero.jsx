import React from 'react'
import { Box, Text, Button, Image } from '@chakra-ui/react'
import { Fade } from 'react-awesome-reveal';
import { FloatButton } from 'antd';
const Hero = () => {
    return (
        <Box w={'100%'} maxW={'1200px'} p={{base: '7', md: '20'}}   background={'#5532ce'} borderRadius={'20px'}  display={'flex'} alignItems={'center'} justifyContent={'center'} gap={5} flexDirection={{base:'column-reverse', md: 'row'}} >
            <Box display={'flex'} textAlign={{base: 'center', md: 'start'}}  alignItems={{base: 'center', md: 'start'}} flexDirection={'column'} gap={{base: '10px', md:'30px'}} w={{base: '100%', md: '60%'}} color={'white'}>
                <Fade  cascade>
                <Text  fontWeight={700} fontSize={{ base: '20px', md: '48px' }} >CCNA Tarmoq muhandisiga aylaning</Text>
                <Text fontWeight={400} fontSize={{ base: '10px', md: '16px' }} >Tarmoq muhandisi- CCNA sertifikatiga ega bo'lgan mutaxassis bo'lib, odatda tarmoq qurilmalari va texnologiyalarini sozlash, o'rnatish va qo'llab-quvvatlash, masalan, marshrutlash, kommunikatsiya, tarmoq xavfsizligi, IP telefoniya, simsiz tarmoqlar va boshqa ko'nikmalarga ega . CCNA tarmoq muhandisining roli tarmoq infratuzilmasini boshqarish va qo'llab-quvvatlash, uning ishonchliligi, xavfsizligini ta'minlash, shuningdek, yangi tarmoq aloqa texnologiyalarini loyihalash va amalga oshirishda ishtirok etishni o'z ichiga oladi.</Text>
                <Button w={'232px'} h={'51px'} color={'#5532CE'} _active={{bg: '#64f6d1'}} colorScheme={'#00E8AF'} bg={'#00E8AF'} textTransform={'uppercase'} >Ro'yhatdan o'tish</Button>
                </Fade>
            </Box>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} w={'40%'} >
                <Fade>
                <Image w={'400px'} src='./group.png' alt='group' />
                </Fade>
            </Box>
            <FloatButton.BackTop visibilityHeight={2} type={'primary'}  />
        </Box>
    )
}

export default Hero