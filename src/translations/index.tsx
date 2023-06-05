export default function t(value: string) {
  const config: any = {
    // UserInformationStatusEnum
    approved: 'Aprovado',
    waitingEvaluation: 'Aguardando Avaliação',
    incomplete: 'Incompleto',

    // OrderStatusEnum
    created: 'Criado',
    pendingPayment: 'Aguardando Pagamento',
    paid: 'Pago',
    authorizationSend: 'Autorização Enviada',
    evaluationDocuments: 'Avaliação de Documentos',
    nfIssued: 'NF Emitida',
    crafSend: 'CRAF Enviado',
    delivered: 'Entregue',
    finished: 'Finalizado',
    canceled: 'Cancelado',
  }

  return config[value]
}