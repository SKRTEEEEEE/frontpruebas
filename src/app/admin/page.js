import {
  Card,
  Container,
  Divider,
  Flex,
  Heading,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import AdminLotteryStatusCard from '../ui/counter/ruffle/AdminRuffleStatus';
import AdminRuffleCost from '../ui/counter/ruffle/AdminRuffleCost';
import WithdrawBalance from '../ui/counter/ruffle/WithdrawBalance';
import AdminRaffleWinnerCard from '../ui/counter/ruffle/AdminRuffleWinner';

export default function AdminPage() {
  return (
    <Container maxW={'1440px'} py={8}>
      <Heading>Admin Dashboard</Heading>
      <Flex flexDirection={'row'}>
        <AdminLotteryStatusCard />
        <Card p={4} mt={4} mr={10} w={'25%'}>
          <Stack spacing={4}>
            <AdminRuffleCost />
            <Divider />
            <WithdrawBalance />
          </Stack>
        </Card>
        <AdminRaffleWinnerCard />
      </Flex>
    </Container>
  );
}
