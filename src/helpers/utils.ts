export const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export const filterObject = (obj: any, columns: string[]) => {
  const result = columns.reduce((acc: any, column: string) => {
    if (obj.hasOwnProperty(column)) {
      acc[column] = obj[column]
    }
    return acc
  }, {})

  return Object.entries(result);
}