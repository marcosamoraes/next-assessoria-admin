export const getProducts = () => {
  const data = [
    {
      id: 1,
      image: '/product1.jpg',
      name: 'Carregador .40 22 Tiros',
      clientType: 'Física',
      category: 'Carregadores',
      code: 'Carregador4022tiros',
      preSale: true,
      status: true,
    },
    {
      id: 2,
      image: '/product2.jpg',
      name: 'Carregador .40 22 Tiros',
      clientType: 'Física',
      category: 'Carregadores',
      code: 'Carregador4022tiros',
      preSale: true,
      status: true,
    },
    {
      id: 3,
      image: '/product3.jpg',
      name: 'Carregador .40 22 Tiros',
      clientType: 'Física',
      category: 'Carregadores',
      code: 'Carregador4022tiros',
      preSale: true,
      status: true,
    },
  ]

  return data
}

export const getProduct = (id: number) => {
  if (id) {
    return null
  }

  return null
}