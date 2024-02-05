import { Card, Container, Spinner } from '@chakra-ui/react';
import { useContract, useContractRead } from '@thirdweb-dev/react';
import { RAFFLE_CONTRACT_ADDRESS } from '../../const/addresses';
import EntryCard from './EntryCard';

export default function CurrentEntries() {
  const { contract } = useContract(RAFFLE_CONTRACT_ADDRESS);

  const { data: entries, isLoading: entriesLoading } = useContractRead(
    contract,
    'getPlayers'
  );

  return (
    <Container py={8}>
      {!entriesLoading ? (
        entries.map((entry, index) => (
          <EntryCard key={index} walletAddress={entry} />
        ))
      ) : (
        <Spinner />
      )}
    </Container>
  );
}
