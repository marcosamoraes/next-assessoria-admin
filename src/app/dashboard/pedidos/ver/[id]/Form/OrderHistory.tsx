import { formatter } from '@/helpers/Utils'
import { IOrder } from '@/interfaces/IOrder'
import t from '@/translations'
import Link from 'next/link'

export default function OrderHistory({ order }: { order: IOrder | null }) {
  if (!order) {
    return <>Loading</>
  }

  return (
    <div className="mb-4">
      <h3 className="w-full text-md font-light text-primary mb-2">Histórico</h3>
      <div className="bg-white px-10 py-7 rounded-xl flex flex-col overflow-auto">
        <div className="flex flex-col flex-1">
          <div className="flex flex-row justify-between">
            <p className="text-md text-gray-700 text-start w-[65px]">Status</p>
            <p className="text-md text-gray-700 flex-grow text-center min-w-[200px]">Descrição</p>
            <p className="text-md text-gray-700 text-end w-[65px]">Data</p>
          </div>
        </div>
        <div className="flex flex-wrap flex-col mt-3 flex-1 gap-3">
          {order?.orderStatus?.map((history, index) => (
            <div key={index} className="flex flex-col flex-1">
              <div className="flex flex-row justify-between">
                <p className="text-xs text-gray-500 text-start w-[65px]">{t(history.status)}</p>
                <p className="text-xs text-gray-500 flex-grow text-center min-w-[200px]">{history.description}</p>
                <p className="text-xs text-gray-500 text-end w-[65px]">{history.createdAt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
