import Activity from './Activity/Activity'

const Activities: React.FC<any> = () => {
  const activities = [
    {
      id: 5,
      user_name: 'Marcos Moraes',
      description: 'Cadastrou o produto 102',
      date: '12/05/2023 23:54',
    },
    {
      id: 5,
      user_name: 'Bruno Almeida',
      description: 'Alterou o produto 115',
      date: '11/05/2023 20:18',
    },
    {
      id: 5,
      user_name: 'Julio César',
      description: 'Excluiu o produto 304',
      date: '10/05/2023 12:00',
    },
    {
      id: 5,
      user_name: 'Télio Nascimento',
      description: 'Alterou o produto 202',
      date: '09/05/2023 23:54',
    },
    {
      id: 5,
      user_name: 'Nathalia Silva',
      description: 'Excuiu o produto 101',
      date: '08/05/2023 23:54',
    },
  ]

  return (
    <div className="w-full xl:w-1/2">
      <h1 className="pl-3 pb-5">Atividades</h1>
      <div className="flex flex-col gap-3">
        {activities.map((activity) => {
          return <Activity key={activity.id} activity={activity} />
        })}
      </div>
    </div>
  )
}

export default Activities
