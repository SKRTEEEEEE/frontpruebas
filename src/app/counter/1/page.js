'use client';

import { HERO_IMAGE_URL, RAFFLE_CONTRACT_ADDRESS } from '@/app/const/addresses';
import RaffleStatus from '@/app/ui/main/RaffleStatus';
import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import {
  MediaRenderer,
  useAddress,
  useContract,
  useContractRead,
} from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import { useState } from 'react';

export default function MegaPremios() {
  const address = useAddress();
  const { contract } = useContract(RAFFLE_CONTRACT_ADDRESS);
  const { data: entryCost, isLoading: isLoadingEntryCost } = useContractRead(
    contract,
    'entryCost'
  );
  const { data: raffleStatus, isLoading: isLoadingRaffleStatus } =
    useContractRead(contract, 'raffleStatus');
  const entryCostInEther = entryCost
    ? ethers.utils.formatEther(entryCost)
    : '0';

  const [entryAmount, setEntryAmount] = useState(0);
  const entryCostOnSubmit = parseFloat(entryCostInEther) * entryAmount;
  console.log(entryAmount);

  function increaseTicketAmount() {
    setEntryAmount(entryAmount + 1);
  }

  function decreaseTicketAmount() {
    if (entryAmount > 0) {
      setEntryAmount(entryAmount - 1);
    }
  }
  return (
    <Container maxW={'1240px'}>
      <SimpleGrid columns={2} spacing={10} minH={'60vh'}>
        <Flex>
          <MediaRenderer src={HERO_IMAGE_URL} width="90%" height="90%" />
        </Flex>
        <Flex justifyContent={'center'} alignItems={'center'} p={'5%'}>
          <Stack spacing={2}>
            <Box>
              <Text fontSize={'xl'}>Raffle app</Text>
              <Text fontSize={'4xl'} fontWeight={'bold'}>
                Buy a ticket to win the NFT Prize
              </Text>
            </Box>
            <Text fontSize={'xl'}>
              Buy entries for a chance to win the NFT! Winner will recive a
              price of 1 ETHSepolia :D .
            </Text>
            <RaffleStatus />
            {!isLoadingEntryCost && (
              <Text fontSize={'2xl'} fontWeight={'bold'}>
                Cost Per Entry: {entryCostInEther} SEPOLIA
              </Text>
            )}
            {address ? (
              <Flex flexDirection={'row'}>
                <Flex flexDirection={'row'} w={'25%'} mr={'20px'}>
                  <Button onClick={decreaseTicketAmount}>-</Button>
                  <input
                    value={entryAmount}
                    type={'number'}
                    onChange={(e) => setEntryAmount(parseInt(e.target.value))}
                    className="w-14 rounded-md border-4 border-600/60"
                  />
                  <Button onClick={increaseTicketAmount}>+</Button>
                </Flex>
              </Flex>
            ) : (
              <Text fontSize={'xl'}>Connect your wallet to buy entries!</Text>
            )}
          </Stack>
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
