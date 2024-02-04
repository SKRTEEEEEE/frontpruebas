// import ProviderWrapper from '../ui/ProviderWrapper.jsx';

import { ChakraUIProvider } from '../ui/ChakraUIProvider';

// import ProviderWrapper from '../ui/ProviderWrapper';

export const metadata = {
  title: 'Pruebas web3',
  description: 'Probando integracion con smart contracts',
};

export default function CounterLayout({ children }) {
  return (
    <body>
      <ChakraUIProvider>{children}</ChakraUIProvider>
    </body>
  );
}
