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
    waiting_craf: 'Enviar CRAF',
    craf_sended: order.delivery_method === 'delivery' ? 'Enviar pedido' : 'Pronto para retirada',
    delivering: order.delivery_method === 'delivery' ? 'Pedido entregue' : 'Pedido retirado',
    canceled: 'Reativar pedido'
  } as any

  const action = actions[order.status]

  const handleAction = (e: any, data?: any) => {
    e.preventDefault()
    $Order.updateStatus(order.id, data).then((res: any) => {
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
    }).then(({ isConfirmed, value: canceledReason }) => {
      if (isConfirmed) {
        handleAction(e, {
          canceled_reason: canceledReason
        })
      }
    })
  }

  const handlePaymentApprove = (e: any) => {
    MySwal.fire({
      title: 'Anexe o comprovante de pagamento',
      input: 'file',
      showCancelButton: true,
      confirmButtonText: 'Aprovar pagamento',
      confirmButtonColor: 'green',
      cancelButtonText: 'Voltar',
      showLoaderOnConfirm: true,
      preConfirm: async (file) => {
        if (!file) {
          return null
        }

        const { data: url }: any = await Upload.post('receipts', {file})
        return url
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then(({ isConfirmed, value: paymentReceipt }) => {
      if (isConfirmed) {
        handleAction(e, {
          payment_receipt: paymentReceipt
        })
      }
    })
  }

  const handlePurchaseAuthorization = (e: any) => {
    MySwal.fire({
      title: 'Anexe a autorização de compra',
      input: 'file',
      showCancelButton: true,
      confirmButtonText: 'Enviar Autorização de compra',
      confirmButtonColor: 'green',
      cancelButtonText: 'Voltar',
      showLoaderOnConfirm: true,
      preConfirm: async (file) => {
        const { data: url }: any = await Upload.post('purchase_authorization', {file})
        return url
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then(({ isConfirmed, value: purchaseAuthorization }) => {
      if (isConfirmed) {
        handleAction(e, {
          purchase_authorization: purchaseAuthorization
        })
      }
    })
  }

  const handleWaitingCraf = (e: any) => {
    MySwal.fire({
      title: 'Anexe o CRAF',
      input: 'file',
      showCancelButton: true,
      confirmButtonText: 'Enviar CRAF',
      confirmButtonColor: 'green',
      cancelButtonText: 'Voltar',
      showLoaderOnConfirm: true,
      preConfirm: async (file) => {
        const { data: url }: any = await Upload.post('craf', {file})
        return url
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then(({ isConfirmed, value: crafImage }) => {
      if (isConfirmed) {
        handleAction(e, {
          craf_image: crafImage
        })
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
    }).then(({ isConfirmed, value: nfImage }) => {
      if (isConfirmed) {
        handleAction(e, {
          nf_image: nfImage
        })
      }
    })
  }

  const handleFutureNfIssued = (e: any) => {
    MySwal.fire({
      title: 'Anexe a nota de compra futura',
      input: 'file',
      showCancelButton: true,
      confirmButtonText: 'Enviar Pedido',
      confirmButtonColor: 'green',
      cancelButtonText: 'Voltar',
      showLoaderOnConfirm: true,
      preConfirm: async (file) => {
        const { data: url }: any = await Upload.post('future_nfs', {file})
        return url
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then(({ isConfirmed, value: futureNfImage }) => {
      if (isConfirmed) {
        handleAction(e, {
          future_nf_image: futureNfImage
        })
      }
    })
  }

  const handlePickup = (e: any) => {
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
    }).then(({ isConfirmed, value: nfImage }) => {
      if (isConfirmed) {
        handleAction(e, {
          nf_image: nfImage
        })
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
    }).then(({ isConfirmed, value: trackingCode }) => {
      if (isConfirmed) {
        if (!order.nf_image) {
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
          }).then(({ isConfirmed, value: nfImage }) => {
            if (isConfirmed) {
              handleAction(e, {
                nf_image: nfImage,
                tracking_code: trackingCode
              })
            }
          })
        } else {
          handleAction(e, {
            tracking_code: trackingCode
          })
        }
      }
    })
  }

  const hasPistol = order.order_products?.some((orderProduct) => orderProduct.product?.category.name === 'Pistolas')

  const getAction = () => {
    const needCraf = !order.craf_image && order.order_products?.some(orderProduct => orderProduct.product?.category.name === 'Pistolas')

    switch (true) {
    case order.status === OrderStatusEnum.PENDING_PAYMENT:
      return handlePaymentApprove
    case order.status === OrderStatusEnum.PAID && hasPistol:
      return handlePurchaseAuthorization
    case order.status === OrderStatusEnum.WAITING_CRAF:
      return handleWaitingCraf
    case order.status === OrderStatusEnum.NF_ISSUED:
    case order.status === OrderStatusEnum.CRAF_SENDED:
      return order.delivery_method === 'delivery' ? handleDelivering : handlePickup
    case order.status === OrderStatusEnum.DOCUMENTS_EVALUATED:
      return needCraf ? handleFutureNfIssued : handleNfIssued
    default:
      return handleAction
    }
  }

  return (
    <div className="mb-4 flex gap-4 flex-wrap">
      {action && (
        <button
          type="button"
          className={`w-full lg:w-auto rounded-xl h-10 px-3 border-2 border-success text-success hover:bg-success 
          font-bold relative overflow-hidden inline-flex items-center justify-evenly duration-300 hover:text-white transition-all`}
          onClick={getAction()}
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
