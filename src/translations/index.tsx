export default function t(value: string) {
  const config: any = {
    approved: 'Aprovado',
    waitingEvaluation: 'Aguardando Avaliação',
    incomplete: 'Incompleto',
  }

  return config[value]
}