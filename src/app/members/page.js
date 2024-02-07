// import { Text } from '@chakra-ui/react';
// import OwnedNFTs from '../ui/counter/OwnedNFTs';
import MembershipNFTsExamp from '../ui/counter/MembershipNFTsExamp';
import ProtectedRoutesMembers from '../ui/members/ProtectedRoutesMembers';

export default function MembersPage() {
  return (
    <ProtectedRoutesMembers>
      <main>
        <div className="flex justify-center items-center h-max">
          <div className="flex flex-col">
            <section>Members page</section>
            <MembershipNFTsExamp />
          </div>
        </div>
      </main>
    </ProtectedRoutesMembers>
  );
}
