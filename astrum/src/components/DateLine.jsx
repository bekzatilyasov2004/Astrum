import React, { useState, useEffect } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Fade } from 'react-awesome-reveal';

const DateLine = () => {
    const calculateTimeLeft = () => {
        const eventDate = new Date('2024-09-01T00:00:00'); 
        const now = new Date();
        const difference = eventDate - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <Box
            w={'100%'}
            maxW={'1200px'}
            mt={10}
            p={5}
            display={{ base: 'none', md: 'flex' }}
            justifyContent={'center'}
            alignItems={'center'}
            gap={'60px'}
        >
            <Box
                textAlign={'center'}
                w={'700px'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                flexDirection={'column'}
            >
                <Fade direction='up'>
                    <Text fontWeight={700} fontSize={'48px'}>
                        Ochiq dars boshlanishiga qolgan vaqt
                    </Text>
                </Fade>
                <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'} gap={'30px'}>
                    <Fade direction='up' duration={500} cascade>
                        <Flex justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                            <Text color={'#5532CE'} fontWeight={700} fontSize={'60px'}>
                                {timeLeft.days.toString().padStart(2, '0')}
                            </Text>
                            <Text color={'#00E8AF'} fontWeight={700} fontSize={'25px'}>
                                KUN
                            </Text>
                        </Flex>
                        <Text fontSize={'36px'} color={'#898790'}>
                            :
                        </Text>
                        <Flex justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                            <Text color={'#5532CE'} fontWeight={700} fontSize={'60px'}>
                                {timeLeft.hours.toString().padStart(2, '0')}
                            </Text>
                            <Text color={'#00E8AF'} fontWeight={700} fontSize={'25px'}>
                                SOAT
                            </Text>
                        </Flex>
                        <Text fontSize={'36px'} color={'#898790'}>
                            :
                        </Text>
                        <Flex justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                            <Text color={'#5532CE'} fontWeight={700} fontSize={'60px'}>
                                {timeLeft.minutes.toString().padStart(2, '0')}
                            </Text>
                            <Text color={'#00E8AF'} fontWeight={700} fontSize={'25px'}>
                                DAQIYQA
                            </Text>
                        </Flex>
                        <Text fontSize={'36px'} color={'#898790'}>
                            :
                        </Text>
                        <Flex justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                            <Text color={'#5532CE'} fontWeight={700} fontSize={'60px'}>
                                {timeLeft.seconds.toString().padStart(2, '0')}
                            </Text>
                            <Text color={'#00E8AF'} fontWeight={700} fontSize={'25px'}>
                                SONIYA
                            </Text>
                        </Flex>
                    </Fade>
                </Box>
            </Box>
        </Box>
    );
};

export default DateLine;
