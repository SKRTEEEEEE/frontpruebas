# Proceso

## Commits

### NFT Free Request p2

- NFTsCardsExamp.jsx: Componente que a trabes de sus props(pasandole el contrato dela coleccion NFT que se va a usar) permite:
  - Renderizar los NFT que tiene el usuario de ese contrato(mejorar cuando haya varios, vista-frontend)
  - Si no tiene NFT, claim uno por defecto(ver que pasa con otros contratos)

### Delete .env

- Para eliminar el .env del rastreo, si ya se a subido a un repositorio en la nube:

```sh
git rm --cached nombre_del_archivo
```

### NFT Free Request p1

- Integrando y probando los contratos NFT y su integracion con web.
- Estoy creando varias formas de traer los NFT con thirweb para ver cual es mas efectiva.
- Voy a crear un componente personalizado (Card) para trae siempre los NFT de ciertas clases (ERC1155, ERC721?) _Porahi esta el link_
- Falta tambien terminar el ClaimNFTCard para reclamar los NFT Free Request Join, y integrar el nuevo contrato ya creado de Free Request Join(con el componente reusable)

### NFT Members store

- El usuario ahora si no tiene un NFT de membresia, le aparece la posibilidad de comprar uno en vez de mostrar cual tiene

### NFT Rutas protegidas

- Hemos mejorado la navegacion incluyendo router.push() en los onClick
- Hemos integrado las rutas protegidas para usuarios con los NFTs de membresia
- Hemos creado una pantalla donde se muestra si tenemos el NFT de membresia

### BasicRaffle end

- Comprobar que los NFT se puedan enviar al ganador (selectWinner) contract function.
- Mejorar rutas frontend
- Implementar wrapper chakra al admin dashboard o pasar a tailwind

### Raffle p2

Implementacion del contrato de rifas basico (integracion) terminado. Falta acabar UI y comprobar ciertas funciones

### NavigationWrapper

Implementacion de un Wrapper encargado de la navegacion por las rutas

### Raffle p1

Implementacion de un contrato de rifas, estoy por la mitad mas o menos

### 2wrappers

Implementacion de dos wrappers, uno para el Thirdweb y otro para el ChakraUI

### manage-actions

Manejar los diferentes estados de la accion en el contrato basico

### basic-contract

Implementacion del contrato default de Remix "storage" usando thirdweb
Tailwind basico para darle estilo

### thirdweb-next14-integration

En este commit se muestra la manera de integrar thirdweb con NextJs14 y su nuevo APP ROUTER

Tambien se hace uso de librerias Tailwind

## Tareas a Realizar

### Tareas actuales

- [ ] NFT Free Request Join - _NFT que te dejara participar en una rifa de un nft de membresia anual_ - _sitio para reclamarlo y para verlo_
  - [ ] Falta comprobar/crear funcionalidad de quemar el NFT a cambio de participar en la rifa
- [ ] RIFA NFT Membresia Anual - _rifa en la cual se puede participar con el nft Free Request Join_ - _uno gratis por usuario_ - _v2 añadir la posibilidad de comprar tickets aparte_
- [x] NFT Membresia Anual - _nft que te permite el acceso a funcionalidades especificas -rutas protegidas-_

### Ideas Futuro

### Notas

Comprobar cual de las dos formas de traer y de vender los NFTs
->Mejorar la funcioinalidad en el caso de que el usuario no haya puesto su wallet(Aparece loading)
->Mejorar la funcionalidad de estos(Limpiar la parte del css/frontend NftStore Membresia tmb)
**Comprobar que en la pagina donde se muestra el NFT de membresia la posibilidad de adquirir uno pagando con criptoactivos**,
y + en el futuro que tambien se pueda con Cash
