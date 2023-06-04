import UserInformationStatusEnum from '@/enums/UserInformationStatusEnum'
import UserRoleEnum from '@/enums/UserRoleEnum'

export const getUsers = () => {
  const data = [
    {
      id: 1,
      firstname: 'Marcos',
      lastname: 'Moraes',
      email: 'contato@marcosamoraes.com',
      whatsapp: '(11) 99999-9999',
      role: UserRoleEnum.CLIENT,
      active: true,
      userInformations: {
        id: 1,
        document: '329.691.188-07',
        birthdate: '1997-09-07',
        naturalness: 'São Paulo - SP',
        gender: 'Masculino',
        civilStatus: 'Solteiro',
        occupation: 'Desenvolvedor',
        rg: '44.444.444-4',
        rgIssuer: 'SSP',
        rgState: 'SP',
        rgIssueDate: '2015-09-07',
        status: UserInformationStatusEnum.APPROVED,
      },
      userAddress: {
        id: 1,
        zipcode: '00000-000',
        street: 'Rua Teste',
        number: '123',
        complement: 'Casa',
        neighborhood: 'Teste',
        city: 'São Paulo',
        state: 'SP',
      },
      userDocuments: [
        {
          id: 1,
          name: 'RG',
          number: '44.444.444-4',
          expireAt: '2025-09-07',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 2,
          name: 'CR',
          number: '444444444',
          expireAt: '2025-09-07',
          image: 'https://via.placeholder.com/150',
        }
      ]
    },
    {
      id: 2,
      firstname: 'Bruno',
      lastname: 'Almeida',
      email: 'brunoalmeida@teste.com',
      whatsapp: '(11) 99999-9999',
      role: UserRoleEnum.CLIENT,
      active: true,
      userInformations: {
        id: 2,
        document: '329.691.188-07',
        birthdate: '1997-09-07',
        naturalness: 'São Paulo - SP',
        gender: 'Masculino',
        civilStatus: 'Solteiro',
        occupation: 'Desenvolvedor',
        rg: '44.444.444-4',
        rgIssuer: 'SSP',
        rgState: 'SP',
        rgIssueDate: '2015-09-07',
        status: UserInformationStatusEnum.WAITING_EVALUATION,
      },
      userAddress: {
        id: 1,
        zipcode: '00000-000',
        street: 'Rua Teste',
        number: '123',
        complement: 'Casa',
        neighborhood: 'Teste',
        city: 'São Paulo',
        state: 'SP',
      },
      userDocuments: [
        {
          id: 1,
          name: 'RG',
          number: '44.444.444-4',
          expireAt: '2025-09-07',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 2,
          name: 'CR',
          number: '444444444',
          expireAt: '2025-09-07',
          image: 'https://via.placeholder.com/150',
        }
      ]
    },
  ]

  return data
}

export const getUser = (id: number) => {
  if (id) {
    return null
  }

  return null
}