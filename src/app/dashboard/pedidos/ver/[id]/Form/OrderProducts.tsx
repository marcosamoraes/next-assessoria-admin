import { formatter } from '@/helpers/Utils'
import { IOrder } from '@/interfaces/IOrder'

export default function OrderProducts({ order }: { order: IOrder | null }) {
  if (!order) {
    return <>Loading</>
  }

  return (
    <div className="mb-4">
      <h3 className="w-full text-md font-light text-primary mb-2">Produtos</h3>
      <div className="bg-white px-5 lg:px-10 py-7 rounded-xl flex flex-wrap flex-row flex-1 gap-3">

        <div className="relative overflow-x-auto w-full">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-3 rounded-l-lg">
                    Produto
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                    Quantidade
                </th>
                <th scope="col" className="px-6 py-3 text-end rounded-r-lg">
                    Preço
                </th>
              </tr>
            </thead>
            <tbody>
              {order?.order_products?.map((orderProduct) => (
                <tr key={orderProduct.id} className="bg-white">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {orderProduct.product?.title}
                  </th>
                  <td className="px-6 py-4 text-center">
                    {orderProduct.quantity}
                  </td>
                  <td className="px-6 py-4 text-end">
                    {formatter.format(orderProduct.price)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>

              <tr className="font-semibold text-gray-900 dark:text-white">
                <th scope="row" className="px-6 text-base text-gray-900">Subtotal</th>
                <td className="px-6 text-center text-gray-900"></td>
                <td className="px-6 text-end text-gray-900">{formatter.format(order.subtotal)}</td>
              </tr>

              <tr className="font-semibold text-gray-900 dark:text-white">
                <th scope="row" className="px-6 text-base text-gray-900">Desconto</th>
                <td className="px-6 text-center text-gray-900"></td>
                <td className="px-6 text-end text-gray-900">{formatter.format(order.discount)}</td>
              </tr>

              <tr className="font-semibold text-gray-900 dark:text-white">
                <th scope="row" className="px-6 text-base text-gray-900">Frete</th>
                <td className="px-6 text-center text-gray-900"></td>
                <td className="px-6 text-end text-gray-900">{formatter.format(order.delivery_fee)}</td>
              </tr>

              <tr className="font-semibold text-gray-900 dark:text-white">
                <th scope="row" className="px-6 text-base text-gray-900">Total</th>
                <td className="px-6 text-center text-gray-900"></td>
                <td className="px-6 text-end text-gray-900">{formatter.format(order.total)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  )
}
