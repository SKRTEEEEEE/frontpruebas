// import { Text } from '@chakra-ui/react';
import OwnedNFTs from '../ui/counter/OwnedNFTs';
import ProtectedRoutesMembers from '../ui/members/ProtectedRoutesMembers';

export default function MembersPage() {
  return (
    <ProtectedRoutesMembers>
      <main>
        <div className="flex justify-center items-center h-max">
          <div className="flex flex-col">
            <section>Members page</section>
            <OwnedNFTs />
          </div>
        </div>
      </main>
    </ProtectedRoutesMembers>
  );
}
