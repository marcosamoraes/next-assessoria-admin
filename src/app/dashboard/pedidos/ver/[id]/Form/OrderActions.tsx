'use client'

import { IOrder } from '@/interfaces/IOrder'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import * as $Order from '@/services/Order'
import OrderStatusEnum from '@/enums/OrderStatusEnum'
import * as Upload from '@/services/Upload'

type Props = {
  order: IOrder | null
  setOrder: (order: IOrder) => void
}

export default function OrderActions({ order, setOrder }: Props) {
  const MySwal = withReactContent(Swal)

  if (!order) {
    return <>Loading</>
  }

  const actions = {
    pending_payment: 'Aprovar pagamento',
    payment_receipt_sended: 'Aprovar recibo',
    paid: 'Aprovar documentos',
    documents_evaluated: 'Enviar NF',
    nf_issued: 'Enviar pedido',
    delivering: 'Pedido entregue',
    canceled: 'Reativar pedido'
  } as any

  const action = actions[order.status]

  const handleAction = (e: any, message?: string, trackingCode?: string, nfImage?: string) => {
    e.preventDefault()
    $Order.updateStatus(order.id, message, trackingCode, nfImage).then((res: any) => {
      const message = res.response?.data?.message ?? 'Status atualizado com sucesso'
      const data: IOrder = res.data.order
      setOrder(data)
      MySwal.fire(
        'Sucesso',
        message,
        'success'
      )
    }).catch((err: any) => {
      const message = err.response?.data?.message ?? 'Ocorreu um erro ao atualizar o status'
      MySwal.fire(
        'Erro',
        message,
        'error'
      )
    })
  }

  const handleCancel = (e: any) => {
    MySwal.fire({
      title: 'Qual o motivo do cancelamento?',
      input: 'text',
      showCancelButton: true,
      confirmButtonText: 'Cancelar Pedido',
      confirmButtonColor: '#f00',
      cancelButtonText: 'Voltar',
      allowOutsideClick: () => !Swal.isLoading()
    }).then(({ isConfirmed, value }) => {
      if (isConfirmed) {
        handleAction(e, value)
      }
    })
  }

  const handleNfIssued = (e: any) => {
    MySwal.fire({
      title: 'Anexe a nota fiscal',
      input: 'file',
      showCancelButton: true,
      confirmButtonText: 'Enviar Pedido',
      confirmButtonColor: 'green',
      cancelButtonText: 'Voltar',
      showLoaderOnConfirm: true,
      preConfirm: async (file) => {
        const { data: url }: any = await Upload.post('nfs', {file})
        return url
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then(({ isConfirmed, value }) => {
      if (isConfirmed) {
        handleAction(e, undefined, undefined, value)
      }
    })
  }

  const handleDelivering = (e: any) => {
    MySwal.fire({
      title: 'Qual o código de rastreio?',
      input: 'text',
      showCancelButton: true,
      confirmButtonText: 'Enviar Pedido',
      confirmButtonColor: 'green',
      cancelButtonText: 'Voltar',
      allowOutsideClick: () => !Swal.isLoading()
    }).then(({ isConfirmed, value }) => {
      if (isConfirmed) {
        handleAction(e, undefined, value)
      }
    })
  }

  return (
    <div className="mb-4 flex gap-4 flex-wrap">
      {action && (
        <button
          type="button"
          className={`w-full lg:w-auto rounded-xl h-10 px-3 border-2 border-success font-bold 
        text-success relative overflow-hidden inline-flex items-center 
          justify-evenly duration-300 hover:bg-success hover:text-white transition-all`}
          onClick={order.status === OrderStatusEnum.NF_ISSUED ? handleDelivering : order.status === OrderStatusEnum.DOCUMENTS_EVALUATED ? handleNfIssued : handleAction}
        >
          <span>{action}</span>
        </button>
      )}
      <button
        type="button"
        className={`w-full lg:w-auto rounded-xl h-10 px-3 border-2 border-danger font-bold 
        text-danger relative overflow-hidden inline-flex items-center 
        justify-evenly duration-300 hover:bg-danger hover:text-white transition-all`}
        onClick={handleCancel}
      >
        <span>Cancelar pedido</span>
      </button>
    </div>
  )
}
