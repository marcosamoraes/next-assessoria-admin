import LastOrder from './LastOrder/LastOrder'
import { IOrder } from '@/interfaces/IOrder'

type LastOrdersProps = {
  orders: IOrder[]
}

const LastOrders: React.FC<any> = ({ orders }: LastOrdersProps) => {
  return (
    <div className="w-full xl:w-1/2">
      <h1 className="pl-3 pb-5">Últimos pedidos</h1>
      <div className="flex flex-col gap-3">
        {orders?.length ? orders.map((order) => {
          return <LastOrder key={order.id} order={order} />
        }) : (
          <p>Nenhum pedido encontrado</p>
        )}
      </div>
    </div>
  )
}

export default LastOrders
