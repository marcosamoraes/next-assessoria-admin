import { formatter } from '@/helpers/Utils'
import { IOrder } from '@/interfaces/IOrder'
import t from '@/translations'
import moment from 'moment'
import Link from 'next/link'

type LastOrderProps = {
  order: IOrder
}

const LastOrder: React.FC<any> = ({ order }: LastOrderProps) => {
  return (
    <Link href={`/dashboard/pedidos/ver/${order.id}`}>
      <div className="bg-white text-center px-3 md:px-10 py-3 rounded-xl flex flex-wrap justify-between hover:scale-[1.02] ease-in duration-300">
        <p className="text-gray-500 text-sm lg:w-fit text-left float-left">#{order.id}</p>
        <p className="border-primary text-primary border-2 px-1 text-xs text-center rounded-2xl">{t(order.status)}</p>
        <p className="text-gray-500 text-sm lg:w-fit text-left">{formatter.format(order.total)}</p>
        <p className="text-gray-500 text-sm lg:w-fit text-right">{moment(order.created_at).format('DD/MM/YYYY HH:mm')}</p>
      </div>
    </Link>
  )
}

export default LastOrder
