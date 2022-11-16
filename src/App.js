import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';

import {ItemBox} from './Item';

function App() {
  const item = {name:"my name", type: "my type", desc: "I'm a cool new item", mindice: 4, cost: 5};
  return (
    <ChakraProvider theme={theme}>
      <ItemBox item={item}/>
    </ChakraProvider>
  );
}

export default App;
