import React, { useState, useEffect } from 'react';
import { db } from '../config/Firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Box, Text, Table, Thead, Tbody, Tr, Th, Td, Skeleton, VStack, useBreakpointValue } from '@chakra-ui/react';

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const tableFontSize = useBreakpointValue({ base: 'sm', md: 'md' });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, 'contacts'));
        const usersData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Box p={{ base: '4', md: '8' }} bg="#F9F9F9">
      <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" color="#5532CE" mb="4">
        Admin Panel
      </Text>
      <Skeleton isLoaded={!loading}>
        <Table variant="simple" size={useBreakpointValue({ base: 'sm', md: 'md' })}>
          <Thead  color="white">
            <Tr>
              <Th fontSize={tableFontSize}>ID</Th>
              <Th fontSize={tableFontSize}>First Name</Th>
              <Th fontSize={tableFontSize}>Last Name</Th>
              <Th fontSize={tableFontSize}>Email</Th>
              <Th fontSize={tableFontSize}>Phone</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.length > 0 ? (
              users.map(user => (
                <Tr key={user.id}>
                  <Td fontSize={tableFontSize}>{user.id}</Td>
                  <Td fontSize={tableFontSize}>{user.firstName}</Td>
                  <Td fontSize={tableFontSize}>{user.lastName}</Td>
                  <Td fontSize={tableFontSize}>{user.email}</Td>
                  <Td fontSize={tableFontSize}>{user.phone}</Td>
                </Tr>
              ))
            ) : (
              <Tr>
                <Td colSpan={5} textAlign="center" fontSize={tableFontSize}>
                  No users found
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </Skeleton>
      {loading && (
        <VStack spacing={4} align="stretch" mt={4}>
          <Skeleton height="40px" />
          <Skeleton height="40px" />
          <Skeleton height="40px" />
          <Skeleton height="40px" />
        </VStack>
      )}
    </Box>
  );
};

export default AdminPanel;
