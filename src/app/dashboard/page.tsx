import Activities from '@/components/Dashboard/Activities/Activities'
import DashboardCards from '@/components/Dashboard/DashboardCards/DashboardCards'
import LastOrders from '@/components/Dashboard/LastOrders/LastOrders'

export default function Dashboard() {
  return (
    <>
      <h1 className="w-full text-4xl text-gray-500 font-light mb-10">Bem vindo!</h1>
      <DashboardCards />
      <div className="w-full flex flex-col xl:flex-row gap-5">
        <LastOrders />
        <Activities />
      </div>
    </>
  )
}
