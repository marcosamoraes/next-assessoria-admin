enum OrderStatusEnum {
  CREATED = 'created',
  PENDING_PAYMENT = 'pendingPayment',
  PAID = 'paid',
  AUTHORIZATION_SEND = 'authorizationSend',
  EVALUATION_DOCUMENTS = 'evaluationDocuments',
  NF_ISSUED = 'nfIssued',
  CRAF_SEND = 'crafSend',
  DELIVERED = 'delivered',
  FINISHED = 'finished',
  CANCELED = 'canceled',
}

export default OrderStatusEnum