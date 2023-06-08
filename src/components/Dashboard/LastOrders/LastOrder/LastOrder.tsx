import { formatter } from '@/helpers/Utils'
import { IOrder } from '@/interfaces/IOrder'

type LastOrderProps = {
  order: IOrder
}

const LastOrder: React.FC<any> = ({ order }: LastOrderProps) => {
  return (
    <div className="bg-white text-center px-3 md:px-10 py-3 rounded-xl flex justify-between items-center flex-wrap flex-row flex-1 hover:scale-[1.02] ease-in duration-300">
      <p className="text-gray-500 text-sm w-1/2 lg:w-fit text-left">#{order.id}</p>
      <p className="border-primary text-primary border-2 px-1 text-xs text-center rounded-2xl w-20">{order.status}</p>
      <p className="text-gray-500 text-sm w-1/2 lg:w-fit text-left">{formatter.format(order.total)}</p>
      <p className="text-gray-500 text-sm w-1/2 lg:w-fit text-right">{order.date}</p>
    </div>
  )
}

export default LastOrder
