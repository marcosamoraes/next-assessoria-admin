const cnpj = (cnpj: string) => {
  return cnpj
    .replace(/\D+/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}

const cpf = (cpf: string) => {
  return cpf
    .replace(/\D+/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1-$2')
}

const zipCode = (zipCode: string) => {
  return zipCode
    .replace(/\D+/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
}

const cellphone = (cellphone: string, requiredPrefix = false) => {
  cellphone = cellphone.replace(/\D+/g, '')

  if (requiredPrefix)
    cellphone = cellphone.replace(/(\d{2})(\d)/, '($1) $2')

  return cellphone.replace(/(\d{1})(\d{4})(\d)/, '$1 $2-$3')
    .replace(/(-\d{4})\d+?$/, '$1')
}

const telephone = (telephone: string, requiredPrefix = false) => {
  telephone = telephone.replace(/\D+/g, '')

  if (requiredPrefix)
    telephone = telephone.replace(/(\d{2})(\d)/, '($1) $2')

  return telephone.replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1')
}

const time = (time: string) => {
  return time
    .replace(/\D+/g, '')
    .replace(/(\d{2})(\d)/, '$1:$2')
}

const money = (money: string) => {
  return money
    .replace(/\D+/g, '')
    .split('').reverse().join('')
    .replace(/(\d{2})(\d)/, '$1,$2')
    .split('').reverse().join('')
}

const cpfOrCnpj = (cpfOrCnpj: string) => {
  if (cpfOrCnpj.length <= 14)
    return cpf(cpfOrCnpj)

  return cnpj(cpfOrCnpj)
}

const phone = (phone: string, requiredPrefix?: boolean) => {
  if (phone.length <= 14)
    return cellphone(phone, requiredPrefix)

  return telephone(phone, requiredPrefix)
}

const Mask = {
  cpf,
  cnpj,
  cellphone,
  telephone,
  zipCode,
  time,
  money,
  cpfOrCnpj,
  phone,
}

export default Mask
