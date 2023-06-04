import UserRoleEnum from '@/enums/UserRoleEnum'

export const getAdmins = () => {
  const data = [
    {
      id: 1,
      firstname: 'Marcos',
      lastname: 'Moraes',
      email: 'contato@marcosamoraes.com',
      whatsapp: '(11) 99999-9999',
      role: UserRoleEnum.ADMIN,
      active: true,
    },
    {
      id: 2,
      firstname: 'Bruno',
      lastname: 'Almeida',
      email: 'brunoalmeida@teste.com',
      whatsapp: '(11) 99999-9999',
      role: UserRoleEnum.OPERATIONAL,
      active: true,
    },
    {
      id: 3,
      firstname: 'João',
      lastname: 'Silva',
      email: 'joaosilva@teste.com',
      whatsapp: '(11) 99999-9999',
      role: UserRoleEnum.CONSULTANT,
      active: false,
    },
  ]

  return data
}

export const getAdmin = (id: number) => {
  if (id) {
    return null
  }

  return null
}