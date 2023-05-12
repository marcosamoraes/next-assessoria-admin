import LastOrder from './LastOrder/LastOrder'

const LastOrders: React.FC<any> = () => {
  const orders = [
    {
      id: 5,
      status: 'Pendente',
      value: 150.0,
      date: '12/05/2023 23:54',
    },
    {
      id: 4,
      status: 'Pago',
      value: 450.0,
      date: '11/05/2023 20:18',
    },
    {
      id: 3,
      status: 'Cancelado',
      value: 150.0,
      date: '10/05/2023 12:00',
    },
    {
      id: 2,
      status: 'Pendente',
      value: 150.0,
      date: '09/05/2023 23:54',
    },
    {
      id: 1,
      status: 'Pendente',
      value: 150.0,
      date: '08/05/2023 23:54',
    },
  ]

  return (
    <div className="w-1/2">
      <h1 className="pl-3 pb-5">Últimos pedidos</h1>
      <div className="flex flex-col gap-3">
        {orders.map((order) => {
          return <LastOrder order={order} />
        })}
      </div>
    </div>
  )
}

export default LastOrders
