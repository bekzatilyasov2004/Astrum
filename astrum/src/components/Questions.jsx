import React from 'react';
import { Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Text } from '@chakra-ui/react';
import { Fade } from 'react-awesome-reveal';

const Questions = () => {
    return (
        <Box p={4} maxW="1200px" mx="auto">
            <Text textAlign={{base: 'center', md: 'start'}} mb={10} fontWeight={700} fontSize={{base: '26px', md: '48px'}}>Ko'p so'raladigan savollar</Text>
            <Accordion   allowToggle>
                <Fade direction='down' duration={400} cascade>
                <Box mb={4}>
                    <AccordionItem  bg="#EEEAFF" borderRadius="20px">
                        <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    <Text fontWeight={700} >Kursni tugatgandan so‘ng sertifikat beriladimi?</Text>
                                </Box>
                                <AccordionIcon w="40px" h="40px" borderRadius="full" bg="#5532CE" color="white" />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Ha, kursni muvaffaqiyatli yakunlaganingizni tasdiqlovchi elektron sertifikat beriladi.
                        </AccordionPanel>
                    </AccordionItem>
                </Box>

                <Box mb={4}>
                    <AccordionItem bg="#EEEAFF" borderRadius="20px">
                        <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    <Text fontWeight={700} >Kursning davomiyligi qancha?</Text>
                                </Box>
                                <AccordionIcon w="40px" h="40px" borderRadius="full" bg="#5532CE" color="white" />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Kursimizning davomiyligi 5 oy bo'ladi. Bu muddat davomida siz nazariy va amaliy mashg'ulotlarni o'z ichiga olgan to'liq tayyorgarlikdan o'tasiz.
                        </AccordionPanel>
                    </AccordionItem>
                </Box>

                <Box mb={4}>
                    <AccordionItem bg="#EEEAFF" borderRadius="20px">
                        <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    <Text fontWeight={700} >Kursdan qanday natijalarni kutishim mumkin?</Text>
                                </Box>
                                <AccordionIcon w="40px" h="40px" borderRadius="full" bg="#5532CE" color="white" />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Kursni tugatganingizda siz tarmoq texnologiyalari bo'yicha chuqur nazariy bilimlar va amaliy ko'nikmalarga ega bo'lasiz. Shuningdek, xalqaro miqyosda tan olingan Cisco CCNA Enterprise sertifikatiga tayyorlanasiz, bu sizga tarmoq muhandisi sifatida ishlash imkoniyatini beradi.
                        </AccordionPanel>
                    </AccordionItem>
                </Box>

                <Box mb={4}>
                    <AccordionItem bg="#EEEAFF" borderRadius="20px">
                        <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    <Text fontWeight={700} >Karyera imkoniyatlari qanday?</Text>
                                </Box>
                                <AccordionIcon w="40px" h="40px" borderRadius="full" bg="#5532CE" color="white" />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            CCNA sertifikatiga ega bo'lganlar uchun IT sohasida keng imkoniyatlar mavjud. Siz tarmoq administratori, tarmoq muhandisi yoki xavfsizlik bo'yicha mutaxassis sifatida ishlashingiz mumkin. Bundan tashqari, sertifikatlangan mutaxassislar uchun maosh darajasi yuqori bo'lib, mehnat bozorda katta talabga ega.
                        </AccordionPanel>
                    </AccordionItem>
                </Box>

                <Box mb={4}>
                    <AccordionItem bg="#EEEAFF" borderRadius="20px">
                        <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    <Text fontWeight={700} >O'qituvchilar kimlar?</Text>
                                </Box>
                                <AccordionIcon w="40px" h="40px" borderRadius="full" bg="#5532CE" color="white" />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Kursni olib boradigan o'qituvchilar - o'z sohasida katta tajribaga ega bo'lgan, xalqaro sertifikatlarga ega bo'lgan tarmoq mutaxassislari. Ular sizni nafaqat nazariy bilimlar bilan, balki amaliy ko'nikmalar bilan ham ta'minlaydi.
                        </AccordionPanel>
                    </AccordionItem>
                </Box>
                </Fade>
            </Accordion>
        </Box>
    );
};

export default Questions;
