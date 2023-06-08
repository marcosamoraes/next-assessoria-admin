import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineHome, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { BiCategory } from 'react-icons/bi'
import { BsBoxSeam } from 'react-icons/bs'
import { FaSignOutAlt, FaTicketAlt } from 'react-icons/fa'
import { FiSettings } from 'react-icons/fi'
import { RiAdminFill } from 'react-icons/ri'

export default function Sidebar() {

  const pages = [
    {
      id: 'dashboard',
      name: 'Dashboard',
      icon: <AiOutlineHome size={24} />,
      href: '/dashboard'
    },
    {
      id: 'produtos',
      name: 'Produtos',
      icon: <BsBoxSeam size={24} />,
      href: '/dashboard/produtos'
    },
    {
      id: 'pedidos',
      name: 'Pedidos',
      icon: <AiOutlineShoppingCart size={24} />,
      href: '/dashboard/pedidos'
    },
    {
      id: 'clientes',
      name: 'Clientes',
      icon: <AiOutlineUser size={24} />,
      href: '/dashboard/clientes'
    },
    {
      id: 'categorias',
      name: 'Categorias',
      icon: <BiCategory size={24} />,
      href: '/dashboard/categorias'
    },
    {
      id: 'cupons',
      name: 'Cupons',
      icon: <FaTicketAlt size={24} />,
      href: '/dashboard/cupons'
    },
    {
      id: 'admins',
      name: 'Administradores',
      icon: <RiAdminFill size={24} />,
      href: '/dashboard/admins'
    },
    {
      id: 'configuracoes',
      name: 'Configurações',
      icon: <FiSettings size={24} />,
      href: '/dashboard/configuracoes'
    },
    {
      id: 'sair',
      name: 'Sair',
      icon: <FaSignOutAlt size={24} />,
      href: '/dashboard/sair'
    }
  ]
  return (
    <aside className="h-full z-10 w-full md:w-4/12 xl:w-2/12 -left-full md:left-0 absolute md:relative border-r-2 py-10 px-5 bg-zinc-800 text-white rounded-r-3xl flex flex-col flex-wrap items-start shadow-lg">
      <div className="w-full flex mb-10">
        <Image src="/logo-white.png" priority={true} alt="logo" width={300} height={300} />
      </div>
      <nav className="flex gap-2 flex-col w-full">
        {pages.map(page => (
          <Link key={page.id} className="w-full py-3 px-5 rounded-xl flex gap-3 items-center hover:bg-white/20 hover:shadow-md" href={page.href}>
            {page.icon}
            {page.name}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
