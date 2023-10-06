enum OrderStatusEnum {
  CREATED = 'created',
  PENDING_PAYMENT = 'pending_payment',
  PAID = 'paid',
  DOCUMENTS_EVALUATED = 'documents_evaluated',
  NF_ISSUED = 'nf_issued',
  DELIVERED = 'delivered',
  FINISHED = 'finished',
  CANCELED = 'canceled',
}

export default OrderStatusEnum