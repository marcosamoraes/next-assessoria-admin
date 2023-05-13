import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineHome, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { BiCategory } from 'react-icons/bi'
import { BsBoxSeam } from 'react-icons/bs'
import { FaSignOutAlt, FaTicketAlt } from 'react-icons/fa'
import { FiSettings } from 'react-icons/fi'

export default function Sidebar() {
  return (
    <aside className="h-full z-10 w-2/12 border-r-2 py-10 px-5 bg-zinc-800 text-white rounded-r-3xl flex flex-col flex-wrap items-start shadow-lg">
      <div className="w-full flex mb-10">
        <Image src="/logo-white.png" alt="logo" width={300} height={300} />
      </div>
      <nav className="flex gap-2 flex-col w-full">
        <Link className="w-full py-3 px-5 rounded-xl flex gap-3 items-center hover:bg-white/20 hover:shadow-md" href="/dashboard">
          <AiOutlineHome size={24} />
          Dashboard
        </Link>
        <Link className="w-full py-3 px-5 rounded-xl flex gap-3 items-center hover:bg-white/20 hover:shadow-md" href="/dashboard/produtos">
          <BsBoxSeam size={24} />
          Produtos
        </Link>
        <Link className="w-full py-3 px-5 rounded-xl flex gap-3 items-center hover:bg-white/20 hover:shadow-md" href="/dashboard/pedidos">
          <AiOutlineShoppingCart size={24} />
          Pedidos
        </Link>
        <Link className="w-full py-3 px-5 rounded-xl flex gap-3 items-center hover:bg-white/20 hover:shadow-md" href="/dashboard/clientes">
          <AiOutlineUser size={24} />
          Clientes
        </Link>
        <Link
          className="w-full py-3 px-5 rounded-xl flex gap-3 items-center hover:bg-white/20 hover:shadow-md"
          href="/dashboard/categorias"
        >
          <BiCategory size={24} />
          Categorias
        </Link>
        <Link className="w-full py-3 px-5 rounded-xl flex gap-3 items-center hover:bg-white/20 hover:shadow-md" href="/dashboard/cupons">
          <FaTicketAlt size={24} />
          Cupons
        </Link>
        <Link
          className="w-full py-3 px-5 rounded-xl flex gap-3 items-center hover:bg-white/20 hover:shadow-md"
          href="/dashboard/configuracoes"
        >
          <FiSettings size={24} />
          Configurações
        </Link>
        <Link className="w-full py-3 px-5 rounded-xl flex gap-3 items-center hover:bg-white/20 hover:shadow-md" href="/">
          <FaSignOutAlt size={24} />
          Sair
        </Link>
      </nav>
    </aside>
  )
}
