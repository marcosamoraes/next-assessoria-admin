import SettingTextTypeEnum from '@/enums/SettingTextTypeEnum'

export const getSettingTexts = () => {
  const data = [
    {
      id: 1,
      type: SettingTextTypeEnum.EMAIL,
      code: 'email-glock-aprovacao-declaracao',
      name: 'E-mail de aprovação de declaração',
      description: 'E-mail enviado quando a declaração é aprovada',
      content: 'Olá, {{name}}! Sua declaração foi aprovada. Agora você já pode comprar sua arma.',
    },
    {
      id: 2,
      type: SettingTextTypeEnum.EMAIL,
      code: 'email-glock-reprovacao-declaracao',
      name: 'E-mail de reprovação de declaração',
      description: 'E-mail enviado quando a declaração é reprovada',
      content: 'Olá, {{name}}! Sua declaração foi reprovada. Por favor, envie uma nova declaração.',
    },
    {
      id: 3,
      type: SettingTextTypeEnum.SITE,
      code: 'site-glock-aviso-declaracao',
      name: 'Aviso de declaração',
      description: 'Aviso exibido quando o usuário não possui declaração',
      content: 'A declaração é um documento obrigatório para a compra de armas de fogo. Por favor, envie sua declaração para que possamos aprovar sua compra.',
    },
    {
      id: 4,
      type: SettingTextTypeEnum.SITE,
      code: 'site-glock-aviso-declaracao-aprovada',
      name: 'Aviso de declaração aprovada',
      description: 'Aviso exibido quando o usuário possui declaração aprovada',
      content: 'Sua declaração foi aprovada. Agora você já pode comprar sua arma.',
    },
  ]

  return data
}

export const getSettingText = (id: number) => {
  if (id) {
    return null
  }

  return null
}