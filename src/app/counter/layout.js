// import ProviderWrapper from '../ui/ProviderWrapper.jsx';

import Link from 'next/link';
import { ChakraUIProvider } from '../ui/ChakraUIProvider';
import Navbar from '../ui/main/Navbar';
import { SlArrowRight } from 'react-icons/sl';
import { SlArrowLeft } from 'react-icons/sl';

// import ProviderWrapper from '../ui/ProviderWrapper';

export const metadata = {
  title: 'Pruebas web3',
  description: 'Probando integracion con smart contracts',
};

export default function CounterLayout({ children }) {
  const paths = ['', 1, 2];
  let index = 0;
  return (
    <body>
      <ChakraUIProvider>
        <div className="">
          <Navbar className="w-screen h-1/6" />
          <div className="flex sm:p-4 items-center justify-between h-5/6">
            <Link href={`/counter/${paths[index]}`}>
              <SlArrowLeft size={90} color="black" />
            </Link>
            {children}
            <Link href={`/counter/${paths[index + 1]}`}>
              <SlArrowRight size={90} color="black" />
            </Link>
          </div>
        </div>
      </ChakraUIProvider>
    </body>
  );
}
