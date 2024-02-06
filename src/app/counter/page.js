// import { Box } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import OwnedNFTs from '../ui/counter/OwnedNFTs';
// import Counter from '../ui/main/Counter';
// import ExampleClientComponent from '../ui/main/Example';
// import Navbar from '../ui/main/Navbar';

export default function web3Page() {
  return (
    <main>
      <div className="flex justify-center items-center h-max">
        <div className="flex flex-col">
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
          >
            Welcome to Web3
          </Text>

          <OwnedNFTs />
        </div>
      </div>
    </main>
  );
}
