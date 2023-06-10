import { formatter } from '@/helpers/Utils'
import { IOrder } from '@/interfaces/IOrder'
import t from '@/translations'
import Link from 'next/link'

export default function OrderPaymentInfos({ order }: { order: IOrder | null }) {
  if (!order) {
    return <>Loading</>
  }

  return (
    <div className="mb-4">
      <h3 className="w-full text-md font-light text-primary mb-2">Informações do pagamento</h3>
      <div className="bg-white px-5 lg:px-10 py-7 rounded-xl flex flex-wrap flex-row flex-1 gap-3">
        <div className="flex flex-col w-full md:w-6/12 md:px-2 md:-mx-2">
          <label className="text-gray-500 text-sm mb-2">
            Método de pagamento
          </label>
          <p>{order?.paymentMethod ? t(order?.paymentMethod) : ''}</p>
        </div>
        <div className="flex flex-col w-full md:w-6/12 md:px-2 md:-mx-2">
          <label className="text-gray-500 text-sm mb-2">
            Parcelas
          </label>
          <p>{order?.installments}</p>
        </div>
        <div className="flex flex-col w-full md:w-6/12 md:px-2 md:-mx-2">
          <label className="text-gray-500 text-sm mb-2">
            Valor Parcela
          </label>
          <p>{formatter.format(order?.total / order?.installments)}</p>
        </div>
        <div className="flex flex-col w-full md:w-6/12 md:px-2 md:-mx-2">
          <label className="text-gray-500 text-sm mb-2">
            Valor Total
          </label>
          <p>{formatter.format(order?.total)}</p>
        </div>
      </div>
    </div>
  )
}
