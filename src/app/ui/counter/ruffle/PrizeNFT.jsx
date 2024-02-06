// 'use client ';

import { RAFFLE_CONTRACT_ADDRESS } from '@/app/const/addresses';
import { Box, Card, Heading, Spinner, Stack, Text } from '@chakra-ui/react';
import {
  ThirdwebNftMedia,
  useContract,
  useContractMetadata,
  useContractRead,
  useNFT,
} from '@thirdweb-dev/react';

export default function PrizeNFT() {
  const { contract: raffleContract } = useContract(RAFFLE_CONTRACT_ADDRESS);

  const { data: nftContractAddress } = useContractRead(
    raffleContract,
    'nftAddress'
  );
  console.log(nftContractAddress);
  const { data: nftTokenId } = useContractRead(raffleContract, 'nftId');
  console.log(nftTokenId);

  const { contract: nftContract } = useContract(nftContractAddress);
  const { data: nftContractMetadata, isLoading: nftContractMetadataLoading } =
    useContractMetadata(nftContract);

  const { data: nft, isLoading: nftLoading } = useNFT(nftContract, nftTokenId);
  console.log('nft: ', nft);

  return (
    <Card p={'5%'}>
      <Heading>Prize NFT</Heading>
      {!nftContractMetadataLoading && !nftLoading ? (
        <Stack spacing={'20px'} textAlign={'center'}>
          <Box>
            <ThirdwebNftMedia
              metadata={nft.metadata}
              height="100%"
              width="100%"
            />
          </Box>
          <Box>
            <Text fontSize={'2xl'} fontWeight={'bold'}>
              {nftContractMetadata.name}
            </Text>
            <Text fontWeight={'bold'}>{nft?.metadata.name}</Text>
          </Box>
        </Stack>
      ) : (
        <Spinner />
      )}
    </Card>
  );
}
