// import { Text } from '@chakra-ui/react';
// import OwnedNFTs from '../ui/counter/OwnedNFTs';
// import { MEMBERSHIP_NFT_ADDRESS } from '../const/addresses';
// import MembershipNFTsExamp from '../ui/main/nft-cards/NFTsCardsExamp';
// import ProtectedRoutesMembers from '../ui/members/ProtectedRoutesMembers';
import GestionUsuarios from '../ui/projects/GestionUsuarios';

export default function MembersPage() {
  return (

      <main>
        <div className="flex justify-center items-center h-max">
          <div className="flex flex-col">
            <section>
              <h1>
              New projects page</h1>
              <GestionUsuarios/>
              </section>
           
          </div>
        </div>
      </main>
 
  );
}
