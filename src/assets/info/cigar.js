const cigarList = [
   {
      open: false,
      marca: 'Marlboro',
      variantes: [
         {
            nombre: 'Marlboro Normal',
            img: 'marlboroNormal.jpg',
            pedido: 2,
            stock: 25
         },
         {
            nombre: 'Marlboro Mix',
            img: 'marlboroMix.jpg',
            pedido: 0,
            stock: 14
         },
         {
            nombre: 'Marlboro Pocket',
            img: 'marlboroPocket.jpg',
            pedido: 1,
            stock: 18
         },
         {
            nombre: 'Marlboro Beyond',
            img: 'marlboroBeyond.jpg',
            pedido: 0,
            stock: 2
         },
         {
            nombre: 'Marlboro Gold',
            img: 'marlboroGold.jpg',
            pedido: 1,
            stock: 10
         }
      ]
   },
   {
      open: false,
      marca: 'Benson',
      variantes: [
         {
            nombre: 'Benson Normal',
            img: 'BensonNormal.jpg',
            pedido: 0,
            stock: 4
         },
         {
            nombre: 'Benson Option',
            img: 'BensonOption.jpg',
            pedido: 0,
            stock: 12
         },
         {
            nombre: 'Benson 24',
            img: 'Benson24.jpg',
            pedido: 1,
            stock: 0
         }
      ]
   },
   {
      open: false,
      marca: 'Lucky',
      variantes: [
         {
            nombre: 'Lucky Normal',
            img: 'luckynormal.jpg',
            pedido: 0,
            stock: 6
         },
         {
            nombre: 'Lucky Doble',
            img: 'luckydoble.jpg',
            pedido: 2,
            stock: 11
         },
         {
            nombre: 'Lucky Verde',
            img: 'luckyverde.jpg',
            pedido: 0,
            stock: 5
         }
      ]
   }
];
module.exports = { cigarList };
