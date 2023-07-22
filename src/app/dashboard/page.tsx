'use client'

import Activities from '@/components/Dashboard/Activities/Activities'
import DashboardCards from '@/components/Dashboard/DashboardCards/DashboardCards'
import LastOrders from '@/components/Dashboard/LastOrders/LastOrders'
import { useEffect, useState } from 'react'
import * as $Dashboard from '@/services/Dashboard'
import { IDashboard } from '@/interfaces/IDashboard'

export default function Dashboard() {
  const [ dashboardData, setDashboardData ] = useState<IDashboard>({} as IDashboard)
  const [ filter, setFilter ] = useState<string>('today')

  useEffect(() => {
    $Dashboard.get(filter).then((res: any) => {
      const data: IDashboard = res.data
      setDashboardData(data)
    })
  }, [filter])

  return (
    <>
      <h1 className="w-full text-4xl text-gray-500 font-light mb-10">Bem vindo!</h1>
      <DashboardCards data={dashboardData} setFilter={setFilter} />
      <div className="w-full flex flex-col xl:flex-row gap-5">
        <LastOrders orders={dashboardData.lastOrders} />
        <Activities activities={dashboardData.lastActivities} />
      </div>
    </>
  )
}
