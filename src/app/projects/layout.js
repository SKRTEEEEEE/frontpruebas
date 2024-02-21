// import ProviderWrapper from '../ui/ProviderWrapper.jsx';

// import { ChakraUIProvider } from '../ui/ChakraUIProvider';
// import NavigationWrapper from '../ui/counter/NavigationWrapper';
import Navbar from '../ui/main/Navbar';

// import ProviderWrapper from '../ui/ProviderWrapper';

export const metadata = {
  title: 'Project pruebas web3',
  description: 'Probando integracion con smart contracts en finales de febrero y principio de marzo',
};

export default function ProjectsLayout({ children }) {
  return (
    <body>

        <div className="">
          <Navbar className="w-screen h-1/6" />
          <div className="flex sm:p-4 items-center justify-between h-5/6">
            {children}
          </div>
        </div>
 
    </body>
  );
}
