import { formatter } from '@/helpers/utils'
import { IOrder } from '@/interfaces/IOrder'

type LastOrderProps = {
  order: IOrder
}

const LastOrder: React.FC<any> = ({ order }: LastOrderProps) => {
  return (
    <div className="bg-white text-center px-10 py-3 rounded-xl flex justify-between items-center flex-wrap flex-row flex-1 hover:scale-105 ease-in duration-300">
      <p className="text-gray-500 text-sm">#{order.id}</p>
      <p className="border-primary text-primary border-2 px-1 text-xs rounded-2xl w-20">{order.status}</p>
      <p className="text-gray-500 text-sm">{formatter.format(order.value)}</p>
      <p className="text-gray-500 text-sm">{order.date}</p>
    </div>
  )
}

export default LastOrder