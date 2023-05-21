import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { BsBoxSeam, BsCoin } from 'react-icons/bs'
import { FaTicketAlt } from 'react-icons/fa'
import DashboardCard from './DashboardCard/DashboardCard'

const DashboardCards: React.FC<any> = () => {
  return (
    <>
      <select name="filter-dashboard-cards" id="" defaultValue="today" className="mb-5 bg-zinc-100 border-0 py-0">
        <option value="today">Hoje</option>
        <option value="weekly">Essa semana</option>
        <option value="monthly">Esse mês</option>
        <option value="last-month">Mês passado</option>
        <option value="total">Total</option>
      </select>
      <div className="flex flex-wrap gap-5 w-full mb-10">
        <DashboardCard icon={BsCoin} title="faturamento" value="R$325.300,00" />
        <DashboardCard icon={AiOutlineShoppingCart} title="pedidos" value="217" />
        <DashboardCard icon={AiOutlineUser} title="usuários" value="412" />
        <DashboardCard icon={BsBoxSeam} title="produtos" value="85" />
        <DashboardCard icon={FaTicketAlt} title="cupons" value="10" />
      </div>
    </>
  )
}

export default DashboardCards
