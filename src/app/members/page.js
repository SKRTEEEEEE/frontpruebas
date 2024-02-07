// import { Text } from '@chakra-ui/react';
// import OwnedNFTs from '../ui/counter/OwnedNFTs';
import { MEMBERSHIP_NFT_ADDRESS } from '../const/addresses';
import MembershipNFTsExamp from '../ui/main/nft-cards/NFTsCardsExamp';
import ProtectedRoutesMembers from '../ui/members/ProtectedRoutesMembers';

export default function MembersPage() {
  return (
    <ProtectedRoutesMembers>
      <main>
        <div className="flex justify-center items-center h-max">
          <div className="flex flex-col">
            <section>Members page</section>
            <MembershipNFTsExamp nftContractAddress={MEMBERSHIP_NFT_ADDRESS} />
          </div>
        </div>
      </main>
    </ProtectedRoutesMembers>
  );
}
