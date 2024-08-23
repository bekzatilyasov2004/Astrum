import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

const TeamsCard = ({ imageUrl, name, jobTitle, about }) => {
  return (
    <Box
      w="100%"
      maxW="300px"
      p={4}
      overflow="hidden" 
      borderRadius="20px" 
    >
      <Image
        filter={''}
        transition="all 1s"
        _hover={{ transform: 'scale(0.9)', filter: 'blur(0px)' }}
        src={`./${imageUrl}.jpg`}
        alt={name}
        borderRadius="20px"
        mb={4}
        w="100%"
        h="350px" 
        objectFit="cover" 
      />
      <Text
        fontWeight="bold"
        fontSize="xl"
        textAlign="start"
        mb={2}
        overflow="hidden" 
        textOverflow="ellipsis" 
      >
        {name}
      </Text>
      <Text
        fontSize="md"
        color="gray.500"
        textAlign="start"
        mb={4}
        overflow="hidden"
        textOverflow="ellipsis"
      >
        {jobTitle}
      </Text>
      <Text
        fontSize="sm"
        textAlign="start"
        color="gray.700"
        overflow="hidden"
        maxHeight="80px"
        textOverflow="ellipsis" 
        whiteSpace="normal" 
        display="-webkit-box" 
        WebkitLineClamp={3} 
        WebkitBoxOrient="vertical" 
      >
        {about}
      </Text>
    </Box>
  );
};

export default React.memo(TeamsCard);
