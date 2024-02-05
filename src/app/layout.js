import { Inter } from 'next/font/google';
import './globals.css';
import ThirdWebProviderWrapper from './ui/ThirdWebProvider';
// import Navbar from './ui/main/Navbar';
// import ProviderWrapper from './ui/ProviderWrapper';
// import Cuadrito from './ui/main/cuadrito';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'QUEEN420 beta',
  description: 'Working in the new future of web',
};

export default function RootLayout({ children }) {
  return (
    <ThirdWebProviderWrapper>
      <html lang="en">
        <body className={inter.className}>
          {/* <Cuadrito /> 
        El ProviderWrapper aveces lanza un warning del rehidratacion de react, si lo pongo en page.js creo que no pasa
        Solo cuando refresco la url /counter
        Esta es la mejor combinacion para usar varios Wrappers
        */}

          {children}
        </body>
      </html>
    </ThirdWebProviderWrapper>
  );
}
