export const getCategories = () => {
  const data = [
    {
      id: 1,
      name: 'Pistola',
      active: true,
    },
    {
      id: 2,
      name: 'Carregador',
      active: true,
    },
    {
      id: 3,
      name: 'Riffle',
      active: true,
    },
  ]

  return data
}

export const getCategory = (id: number) => {
  if (id) {
    return null
  }

  return null
}