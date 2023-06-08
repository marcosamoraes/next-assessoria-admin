import { IActivity } from '@/interfaces/IActivity'

type ActivityProps = {
  activity: IActivity
}

const Activity: React.FC<any> = ({ activity }: ActivityProps) => {
  return (
    <div className="bg-white text-center px-3 md:px-10 py-3 rounded-xl flex flex-wrap items-center hover:scale-[1.02] ease-in duration-200">
      <p className="text-gray-500 text-xs md:text-sm text-left order-1 w-1/2 lg:w-3/12">{activity.user_name}</p>
      <p className="text-gray-500 text-xs md:text-sm text-left order-3 w-full lg:order-2 lg:w-6/12">{activity.description}</p>
      <p className="text-gray-500 text-xs md:text-sm text-right order-2 w-1/2 lg:order-3 lg:w-3/12">{activity.date}</p>
    </div>
  )
}

export default Activity
