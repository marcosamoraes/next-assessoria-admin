export const getCategories = () => {
  const data = [
    {
      id: 1,
      name: 'Pistolas',
      active: true,
    },
    {
      id: 2,
      name: 'Carregadores',
      active: true,
    },
    {
      id: 3,
      name: 'Lanternas',
      active: true,
    },
    {
      id: 4,
      name: 'Red Dot',
      active: true,
    },
    {
      id: 5,
      name: 'Munições',
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