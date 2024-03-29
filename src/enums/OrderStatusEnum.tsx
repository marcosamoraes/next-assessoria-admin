enum OrderStatusEnum {
  CREATED = 'created',
  PENDING_PAYMENT = 'pending_payment',
  PAYMENT_RECEIPT_SENDED = 'payment_receipt_sended',
  PAID = 'paid',
  DOCUMENTS_EVALUATED = 'documents_evaluated',
  NF_ISSUED = 'nf_issued',
  WAITING_CRAF = 'waiting_craf',
  CRAF_SENDED = 'craf_sended',
  DELIVERING = 'delivering',
  DELIVERED = 'delivered',
  FINISHED = 'finished',
  CANCELED = 'canceled',
}

export default OrderStatusEnum