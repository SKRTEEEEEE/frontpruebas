'use client';

import { Button, Flex, Input } from '@chakra-ui/react';
import { useState } from 'react';

export default function AmountSelect() {
  const [entryAmount, setEntryAmount] = useState(0);

  function increaseTicketAmount() {
    setEntryAmount(entryAmount + 1);
  }

  function decreaseTicketAmount() {
    if (entryAmount > 0) {
      setEntryAmount(entryAmount - 1);
    }
  }

  console.log(entryAmount);
  return (
    <Flex flexDirection={'row'}>
      <Flex flexDirection={'row'} w={'25%'} mr={'20px'}>
        <Button onClick={decreaseTicketAmount}>-</Button>
        <input
          value={entryAmount}
          type={'number'}
          onChange={(e) => setEntryAmount(parseInt(e.target.value))}
        />
        <Button onClick={increaseTicketAmount}>+</Button>
      </Flex>
    </Flex>
  );
}
