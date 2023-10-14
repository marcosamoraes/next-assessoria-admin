export default function t(value: string) {
  const config: any = {
    // OrderStatusEnum
    created: 'Criado',
    pending_payment: 'Aguardando Pagamento',
    payment_receipt_sended: 'Conferir Comprovante',
    paid: 'Pago',
    documents_evaluated: 'Documentos Avaliados',
    nf_issued: 'NF Emitida',
    delivering: 'Pedido em Trânsito',
    delivered: 'Entregue',
    finished: 'Finalizado',
    canceled: 'Cancelado',

    'card': 'Cartão de Crédito',
    'transfer': 'Transferência',
  }

  return config[value]
}