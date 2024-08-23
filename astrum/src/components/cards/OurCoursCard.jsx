import React from 'react'
import { Box, Text } from '@chakra-ui/react'
const OurCoursCard = ({ modul, title, sub, p }) => {
  return (
      <Box gap={3} border={'1px solid #5532CE'} p={{ base: '5', md: '10' }} borderRadius={'20px'} maxW={{ base: '350px', xl: '1200px', md: '1000px' }} display={'flex'} justifyContent={'speace-around'} alignItems={{ base: 'start', md: 'center' }} flexDirection={{ base: 'column', md: 'row' }}>
        <Box w={{ base: '100%', md: '30%' }} display={'flex'} justifyContent={'center'} alignItems={'start'} flexDirection={'column'} >
          <Text fontWeight={700} fontSize={{ base: '18px', md: '28px' }} color={'#898790'} >{modul}</Text>
          <Text fontWeight={700} fontSize={{ base: '18px', md: '28px' }} color={'black'} >{title}</Text>
          <Text fontWeight={400} fontSize={{ base: '16px', md: '16px' }} color={'#5532CE'} >{sub}</Text>
        </Box>
        <Box w={{ base: '100%', md: '70%' }} display={'flex'} justifyContent={'center'} alignItems={'center'} >
          <Box borderRadius={'20px'} textAlign={'start'} bg={'#EEEAFF'} p={4}>
            <Text>{p}</Text>
          </Box>
        </Box>
      </Box>
  )
}

export default React.memo(OurCoursCard)