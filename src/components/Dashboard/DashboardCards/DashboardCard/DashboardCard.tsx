import { IconType } from 'react-icons/lib'

type DashboardCardProps = {
  icon: IconType
  title: string
  value: string
}

const DashboardCard: React.FC<any> = ({ icon: Icon, title, value }: DashboardCardProps) => {
  return (
    <div className="bg-white text-center px-10 py-7 rounded-xl flex justify-center items-center flex-wrap flex-row flex-1 hover:scale-[1.02] ease-in duration-300">
      <Icon size={60} className="rounded-full border-2 p-2 box-border border-primary text-primary" />
      <p className="w-full mt-3 text-gray-500">{title}</p>
      <p className="w-full text-primary font-bold text-xl mt-1">{value}</p>
    </div>
  )
}

export default DashboardCard
