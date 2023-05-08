import Image from 'next/image'
import { AiOutlineHome, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { BiCategory } from 'react-icons/bi'
import { BsBoxSeam } from 'react-icons/bs'
import { FaSignOutAlt, FaTicketAlt } from 'react-icons/fa'
import { FiSettings } from 'react-icons/fi'

export default function Sidebar() {
  return (
    <aside className="h-full w-2/12 border-r-2 py-10 px-5 bg-zinc-800 text-white rounded-r-3xl flex flex-col flex-wrap items-start shadow-lg">
      <div className="w-full flex mb-10">
        <Image src="/logo-white.png" alt="logo" width={300} height={300} />
      </div>
      <nav className="flex gap-2 flex-col w-full">
        <a className="w-full py-3 px-5 rounded-xl flex gap-3 items-center hover:bg-white/20 hover:shadow-md" href="">
          <AiOutlineHome size={24} />
          Dashboard
        </a>
        <a className="w-full py-3 px-5 rounded-xl flex gap-3 items-center hover:bg-white/20 hover:shadow-md" href="">
          <BsBoxSeam size={24} />
          Produtos
        </a>
        <a className="w-full py-3 px-5 rounded-xl flex gap-3 items-center hover:bg-white/20 hover:shadow-md" href="">
          <AiOutlineShoppingCart size={24} />
          Pedidos
        </a>
        <a className="w-full py-3 px-5 rounded-xl flex gap-3 items-center hover:bg-white/20 hover:shadow-md" href="">
          <AiOutlineUser size={24} />
          Clientes
        </a>
        <a className="w-full py-3 px-5 rounded-xl flex gap-3 items-center hover:bg-white/20 hover:shadow-md" href="">
          <BiCategory size={24} />
          Categorias
        </a>
        <a className="w-full py-3 px-5 rounded-xl flex gap-3 items-center hover:bg-white/20 hover:shadow-md" href="">
          <FaTicketAlt size={24} />
          Cupons
        </a>
        <a className="w-full py-3 px-5 rounded-xl flex gap-3 items-center hover:bg-white/20 hover:shadow-md" href="">
          <FiSettings size={24} />
          Configurações
        </a>
        <a className="w-full py-3 px-5 rounded-xl flex gap-3 items-center hover:bg-white/20 hover:shadow-md" href="">
          <FaSignOutAlt size={24} />
          Sair
        </a>
      </nav>
    </aside>
  )
}
