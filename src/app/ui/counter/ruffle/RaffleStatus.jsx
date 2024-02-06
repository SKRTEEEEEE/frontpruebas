import { Card, Text } from '@chakra-ui/react';

export default function LotteryStatus({ status }) {
  let backgroundColor = status ? 'green.200' : 'red.200';
  let borderColor = status ? 'green.500' : 'red.500';
  let textColor = status ? 'green.700' : 'red.700';
  return (
    <Card
      py={2}
      textAlign={'center'}
      backgroundColor={backgroundColor}
      border={'1px solid'}
      borderColor={borderColor}
    >
      <Text fontWeight={'bold'} color={textColor} fontSize={'sm'}>
        Lottery Status: {status ? 'Open' : 'Closed'}
      </Text>
    </Card>
  );
}
