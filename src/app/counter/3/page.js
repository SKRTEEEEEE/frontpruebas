// import { Box } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

export default function freeRequestPage() {
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
            Free Request NFT
          </Text>
        </div>
      </div>
    </main>
  );
}
