// import { Box } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import Counter from '../ui/main/Counter';
// import Navbar from '../ui/main/Navbar';

export default function counterPage() {
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
          <Counter />
        </div>
      </div>
    </main>
  );
}
