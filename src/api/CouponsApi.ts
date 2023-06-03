import moment from 'moment'
import 'moment/locale/pt-br'

moment.locale('pt-br')

export const getCoupons = () => {
  const data = [
    {
      id: 1,
      name: 'Cupom de Pistola',
      category: 'Pistola',
      type: 'percentage',
      value: 10,
      minValue: 100,
      code: 'PISTOLA10',
      quantity: 100,
      expireAt: moment().add(15, 'days').format('DD/MM/YYYY HH:mm:ss'),
      active: true,
    },
    {
      id: 2,
      name: 'Cupom de Carregador',
      category: 'Carregador',
      type: 'amount',
      value: 20,
      minValue: 50,
      code: 'CARREGADOR10',
      quantity: 10,
      expireAt: moment().add(7, 'days').format('DD/MM/YYYY HH:mm:ss'),
      active: true,
    },
  ]

  return data
}

export const getCoupon = (id: number) => {
  if (id) {
    return null
  }

  return null
}