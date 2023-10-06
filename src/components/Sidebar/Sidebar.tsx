'use client'

import AuthContext, { useAuth } from '@/contexts/AuthProvider'
import { SidebarContext } from '@/contexts/SidebarProvider'
import UserRoleEnum from '@/enums/UserRoleEnum'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useContext } from 'react'
import { AiOutlineHome, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { BiCategory, BiMessageDetail } from 'react-icons/bi'
import { BsBoxSeam } from 'react-icons/bs'
import { FaSignOutAlt, FaTicketAlt } from 'react-icons/fa'
import { FiSettings } from 'react-icons/fi'
import { RiAdminFill } from 'react-icons/ri'

type Page = {
  id: string
  name: string
  icon: any
  href: string
}

export default function Sidebar() {
  const { user } = useAuth()

  const { isOpen, setIsOpen } = useContext(SidebarContext)
  const pathname = usePathname()

  let pages: Page[] = []

  if (user?.role === UserRoleEnum.ADMIN) {
    pages = [
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
        id: 'contatos',
        name: 'Contatos',
        icon: <BiMessageDetail size={24} />,
        href: '/dashboard/contatos'
      },
      {
        id: 'configuracoes',
        name: 'Configurações',
        icon: <FiSettings size={24} />,
        href: '/dashboard/configuracoes'
      }
    ]
  }

  if (user?.role === UserRoleEnum.OPERATIONAL || user?.role === UserRoleEnum.CONSULTANT) {
    pages = [
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
        id: 'contatos',
        name: 'Contatos',
        icon: <BiMessageDetail size={24} />,
        href: '/dashboard/contatos'
      },
    ]
  }

  const { logout } = useContext(AuthContext)

  return (
    <aside className={`h-full z-20 w-full md:w-4/12 xl:w-2/12 ${isOpen ? 'left-0' : '-left-full'} transition-all duration-700 ease-in-out md:left-0 absolute md:relative border-r-2 py-10 px-5 bg-zinc-800 text-white rounded-r-3xl flex flex-col flex-wrap items-start shadow-lg`}>
      <div className="w-full hidden md:flex mb-10">
        <Image src="/logo-white.png" priority={true} alt="logo" width={300} height={300} />
      </div>
      <nav className="flex gap-2 flex-col w-full">
        {pages.map(page => (
          <Link
            key={page.id}
            className={`w-full py-3 px-5 rounded-xl flex gap-3 ${page.href === pathname ? 'bg-white/20' : ''} items-center hover:bg-white/20 hover:shadow-md`}
            href={page.href}
            onClick={() => setIsOpen(false)}
          >
            {page.icon}
            {page.name}
          </Link>
        ))}
        <div className="w-full py-3 px-5 rounded-xl flex gap-3 items-center hover:bg-white/20 hover:shadow-md cursor-pointer" onClick={logout}>
          <FaSignOutAlt size={24} />
          Sair
        </div>
      </nav>
    </aside>
  )
}
