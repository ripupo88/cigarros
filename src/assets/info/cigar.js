const cigarList = [
  {
    open: false,
    marca: "Marlboro",
    variantes: [
      {
        nombre: "Marlboro Normal",
        img: "marlboroNormal.jpg",
        pedido: 2,
        stock: 25,
        ventas: 32
      },
      {
        nombre: "Marlboro Mix",
        img: "marlboroMix.jpg",
        pedido: 0,
        stock: 14,
        ventas: 44
      },
      {
        nombre: "Marlboro Pocket",
        img: "marlboroPocket.jpg",
        pedido: 1,
        stock: 18,
        ventas: 35
      },
      {
        nombre: "Marlboro Beyond",
        img: "marlboroBeyond.jpg",
        pedido: 0,
        stock: 2,
        ventas: 16
      },
      {
        nombre: "Marlboro Gold",
        img: "marlboroGold.jpg",
        pedido: 1,
        stock: 10,
        ventas: 10
      }
    ]
  },
  {
    open: false,
    marca: "Benson",
    variantes: [
      {
        nombre: "Benson Normal",
        img: "BensonNormal.jpg",
        pedido: 0,
        stock: 4,
        ventas: 58
      },
      {
        nombre: "Benson Option",
        img: "BensonOption.jpg",
        pedido: 0,
        stock: 12,
        ventas: 65
      },
      {
        nombre: "Benson 24",
        img: "Benson24.jpg",
        pedido: 1,
        stock: 0,
        ventas: 19
      }
    ]
  },
  {
    open: false,
    marca: "Lucky",
    variantes: [
      {
        nombre: "Lucky Normal",
        img: "luckynormal.jpg",
        pedido: 0,
        stock: 6,
        ventas: 25
      },
      {
        nombre: "Lucky Doble",
        img: "luckydoble.jpg",
        pedido: 2,
        stock: 11,
        ventas: 37
      },
      {
        nombre: "Lucky Verde",
        img: "luckyverde.jpg",
        pedido: 0,
        stock: 5,
        ventas: 14
      }
    ]
  }
];
module.exports = { cigarList };
