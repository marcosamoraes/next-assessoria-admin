import { IOrder } from '@/interfaces/IOrder'

export default function OrderActions({ order }: { order: IOrder | null }) {
  if (!order) {
    return <>Loading</>
  }

  const actions = {
    created: 'Aprovar pagamento',
    // pending_payment: 'Aprovar pagamento',
    paid: 'Aprovar documentos',
    documents_evaluated: 'Emitir NF',
  } as any

  const action = actions[order.status]

  return (
    <div className="mb-4 flex gap-4 flex-wrap">
      <button
        type="button"
        className={`w-full lg:w-auto rounded-xl h-10 px-3 border-2 border-success font-bold 
        text-success relative overflow-hidden inline-flex items-center 
        justify-evenly duration-300 hover:bg-success hover:text-white transition-all`}
      >
        <span>{action}</span>
      </button>
      <button
        type="button"
        className={`w-full lg:w-auto rounded-xl h-10 px-3 border-2 border-danger font-bold 
        text-danger relative overflow-hidden inline-flex items-center 
        justify-evenly duration-300 hover:bg-danger hover:text-white transition-all`}
      >
        <span>Cancelar pedido</span>
      </button>
    </div>
  )
}
