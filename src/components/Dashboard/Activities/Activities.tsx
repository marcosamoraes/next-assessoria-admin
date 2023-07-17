import Activity from './Activity/Activity'
import { IActivity } from '@/interfaces/IActivity'

type ActivitiesProps = {
  activities: IActivity[]
}

const Activities: React.FC<any> = ({ activities }: ActivitiesProps) => {
  return (
    <div className="w-full xl:w-1/2">
      <h1 className="pl-3 pb-5">Atividades</h1>
      <div className="flex flex-col gap-3">
        {activities?.length ? activities.map((activity) => {
          return <Activity key={activity.id} activity={activity} />
        }) : (
          <p>Nenhuma atividade encontrada</p>
        )}
      </div>
    </div>
  )
}

export default Activities
