// import Image from 'next/image';

// import { ConnectWallet } from '@thirdweb-dev/react';

// import ConnectWalletButton from './ui/main/ConnectWallet';
import Counter from './ui/main/Counter';
import Cuadrito from './ui/main/cuadrito';
// import Cuadrito from './ui/main/cuadrito';
import ThirdWebProviderWrapper from './ui/ThirdWebProvider';

// import { ConnectWallet } from '@thirdweb-dev/react';

export default function Home() {
  return (
    <ThirdWebProviderWrapper>
      <main className="h-screen ">
        <Cuadrito className="h-1/6" />
        <div className="flex justify-center items-center h-5/6">
          <Counter />
        </div>
      </main>
    </ThirdWebProviderWrapper>
  );
}
