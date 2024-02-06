'use client';

import { RAFFLE_CONTRACT_ADDRESS } from '@/app/const/addresses';
import { Box, Input, Spinner, Stack, Text } from '@chakra-ui/react';
import { Web3Button, useContract, useContractRead } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import { useState } from 'react';

export default function AdminRuffleCost() {
  const { contract } = useContract(RAFFLE_CONTRACT_ADDRESS);

  const { data: entryCost, isLoading: isLoadingCostLoading } = useContractRead(
    contract,
    'entryCost'
  );

  const { data: raffleStatus } = useContractRead(contract, 'raffleStatus');

  const [ticketPrice, setTicketPrice] = useState(0);

  function resetTicketPrice() {
    setTicketPrice(0);
  }

  return (
    <Stack spacing={4}>
      <Box>
        <Text fontWeight={'bold'} mb={4} fontSize={'xl'}>
          Ticket Price
        </Text>
        {!isLoadingCostLoading ? (
          <Text fontSize={'xl'}>
            {ethers.utils.formatEther(entryCost)} MATIC
          </Text>
        ) : (
          <Spinner />
        )}
      </Box>
      <Input
        type="number"
        value={ticketPrice}
        onChange={(e) => setTicketPrice(parseFloat(e.target.value))}
      />
      <Web3Button
        contractAddress={RAFFLE_CONTRACT_ADDRESS}
        action={(contract) =>
          contract.call('changeEntryCost', [
            ethers.utils.parseEther(ticketPrice.toString()),
          ])
        }
        onSuccess={resetTicketPrice}
        isDisabled={raffleStatus}
      >
        Update Ticket Cost
      </Web3Button>
    </Stack>
  );
}
