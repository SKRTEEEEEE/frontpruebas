'use client';

import { HERO_IMAGE_URL, RAFFLE_CONTRACT_ADDRESS } from '@/app/const/addresses';
import CurrentEntries from '@/app/ui/counter/ruffle/CurrentEntries';
import PrizeNFT from '@/app/ui/counter/ruffle/PrizeNFT';
import RaffleStatus from '@/app/ui/counter/ruffle/RaffleStatus';
import {
  Box,
  Button,
  Container,
  Flex,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import {
  MediaRenderer,
  Web3Button,
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

  const { data: totalEntries, isLoading: totalEntriesLoading } =
    useContractRead(contract, 'totalEntries');

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
          {raffleStatus ? (
            <PrizeNFT />
          ) : (
            <MediaRenderer src={HERO_IMAGE_URL} width="90%" height="90%" />
          )}
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
            <RaffleStatus status={raffleStatus} />
            {!isLoadingEntryCost && (
              <Text fontSize={'2xl'} fontWeight={'bold'}>
                Cost Per Entry: {entryCostInEther} SEPOLIA
              </Text>
            )}
            {address ? (
              <Flex justifyItems={'center'} flexDirection={'row'} gap={'5%'}>
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
                <Web3Button
                  contractAddress={RAFFLE_CONTRACT_ADDRESS}
                  action={(contract) =>
                    contract.call('buyEntry', [entryAmount], {
                      value: ethers.utils.parseEther(
                        entryCostOnSubmit.toString()
                      ),
                    })
                  }
                  isDisabled={!raffleStatus}
                >{`But Tickets(s)`}</Web3Button>
                {!totalEntriesLoading && (
                  <Text>Total Entries: {totalEntries.toString()}</Text>
                )}
              </Flex>
            ) : (
              <Text fontSize={'xl'}>Connect your wallet to buy entries!</Text>
            )}
          </Stack>
        </Flex>
      </SimpleGrid>
      <Stack mt={'40px'} textAlign={'center'}>
        <Text fontSize={'xl'}>Current Raffle Entries:</Text>
        <CurrentEntries />
      </Stack>
    </Container>
  );
}
