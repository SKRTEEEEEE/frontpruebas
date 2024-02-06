'use client';

import { MEMBERSHIP_NFT_ADDRESS } from '@/app/const/addresses';
import { useAddress, useContract, useOwnedNFTs } from '@thirdweb-dev/react';
import { useRouter } from 'next/navigation';

export default function ProtectedRouteFreeNFT() {
  const router = useRouter();

  const address = useAddress();
  const { contract } = useContract(MEMBERSHIP_NFT_ADDRESS);
  const { data, isLoading, error } = useOwnedNFTs(contract, address); // Obtener los NFTs del usuario
  console.log(data?.length);

  if (isLoading) {
    return <div>Loading...</div>; // Mostrar un indicador de carga mientras se obtienen los datos
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Manejar el caso de error al obtener los NFTs
  }

  // Verificar si el usuario posee un NFT de la colección deseada (reemplaza 'tu-coleccion' con el nombre de la colección)
  const hasDesiredNFT = data?.length > 0; // Verificar si el array de NFTs no está vacío

  if (hasDesiredNFT) {
    return <div>Contenido de la página protegida</div>; // Mostrar el contenido de la página protegida si el usuario posee el NFT
  } else {
    alert('You need to own a membership NFT to access this page');
    router.back(); // Redirigir al usuario a la página anterior si no posee el NFT
    return null; // Puedes devolver null o un componente vacío mientras se redirige
  }
}
