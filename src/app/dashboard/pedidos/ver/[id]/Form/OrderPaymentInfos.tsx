import { formatter } from '@/helpers/Utils'
import { IOrder } from '@/interfaces/IOrder'
import t from '@/translations'

export default function OrderPaymentInfos({ order }: { order: IOrder | null }) {
  if (!order) {
    return <>Loading</>
  }

  const total = order?.installments > 1 ? order?.total_card_installments : (order?.payment_method === 'card' ? order?.total_card : order?.total)

  return (
    <div className="mb-4">
      <h3 className="w-full text-md font-light text-primary mb-2">Informações do pagamento</h3>
      <div className="bg-white px-5 lg:px-10 py-7 rounded-xl flex flex-wrap flex-row flex-1 gap-3">
        <div className="flex flex-col w-full md:w-6/12 md:px-2 md:-mx-2">
          <label className="text-gray-500 text-sm mb-2">
            Método de pagamento
          </label>
          <p>{order?.payment_method ? t(order?.payment_method) : ''}</p>
        </div>
        <div className="flex flex-col w-full md:w-6/12 md:px-2 md:-mx-2">
          <label className="text-gray-500 text-sm mb-2">
            Método de Entrega
          </label>
          <p>{t(order?.delivery_method)}</p>
        </div>
        <div className="flex flex-col w-full md:w-6/12 md:px-2 md:-mx-2">
          <label className="text-gray-500 text-sm mb-2">
            Valor Parcela
          </label>
          <p>{order?.installments}x {formatter.format(total / order?.installments)}</p>
        </div>
        <div className="flex flex-col w-full md:w-6/12 md:px-2 md:-mx-2">
          <label className="text-gray-500 text-sm mb-2">
            Valor Total
          </label>
          <p>{formatter.format(total)}</p>
        </div>
      </div>
    </div>
  )
}
