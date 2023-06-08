'use client'

import { SidebarContext } from '@/contexts/SidebarProvider'
import Image from 'next/image'
import { useContext } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

export default function NavbarMobile() {
  const { isOpen, setIsOpen } = useContext(SidebarContext)

  const handleOpenMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="h-20 z-10 mb-5 w-full md:hidden border-b-2 py-3 px-5 bg-zinc-800 text-white rounded-b-3xl flex flex-row items-center justify-between shadow-lg">
      <div className="w-[150px] flex">
        <Image src="/logo-white.png" priority={true} alt="logo" width={300} height={300} />
      </div>
      <div className="flex">
        <AiOutlineMenu size={24} onClick={handleOpenMenu}/>
      </div>
    </nav>
  )
}
