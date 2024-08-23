import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const CoursCard = ({title,p}) => {
  return (
    <Box borderRadius={'20px'} color={'white'} bg={'#5532CE'} w={{base: '100%', md: '580px'}}  p={5} display={'flex'} justifyContent={'speace-around'} alignItems={'start'} gap={2} flexDirection={'column'} >
    <Text fontWeight={700} fontSize={{base: '18px', md: '24px'}} >{title}</Text>
    <Text fontWeight={400} fontSize={{base: '14px', md: '16px'}} >{p}</Text>
</Box>
  )
}

export default React.memo(CoursCard)