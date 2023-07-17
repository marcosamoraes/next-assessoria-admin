import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { BsBoxSeam, BsCoin } from 'react-icons/bs'
import { FaTicketAlt } from 'react-icons/fa'
import DashboardCard from './DashboardCard/DashboardCard'
import { IDashboard } from '@/interfaces/IDashboard'
import { formatter } from '@/helpers/Utils'

type DashboardCardsProps = {
  data: IDashboard
  setFilter: (value: string) => void
}

const DashboardCards: React.FC<any> = ({ data, setFilter }: DashboardCardsProps) => {
  return (
    <>
      <select name="filter-dashboard-cards" id="" defaultValue="today" className="mb-5 bg-zinc-100 border-0 py-0" onChange={(e) => setFilter(e.target.value)}>
        <option value="today">Hoje</option>
        <option value="weekly">Essa semana</option>
        <option value="monthly">Esse mês</option>
        <option value="last-month">Mês passado</option>
        <option value="total">Total</option>
      </select>
      <div className="flex flex-wrap gap-5 w-full mb-10">
        <DashboardCard icon={BsCoin} title="faturamento" value={formatter.format(data.billingValue)} />
        <DashboardCard icon={AiOutlineShoppingCart} title="pedidos" value={data.ordersCount} />
        <DashboardCard icon={AiOutlineUser} title="usuários" value={data.usersCount} />
        <DashboardCard icon={BsBoxSeam} title="produtos" value={data.productsCount} />
        <DashboardCard icon={FaTicketAlt} title="cupons" value={data.couponsCount} />
      </div>
    </>
  )
}

export default DashboardCards
