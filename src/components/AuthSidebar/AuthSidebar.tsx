import Image from 'next/image'

export default function AuthSidebar({ children }: { children: React.ReactNode }) {
  return (
    <aside className="h-full absolute right-0 z-10 w-[30%] border-l-2 border-zinc-600 justify-center items-center box-border bg-zinc-800 text-white rounded-l-3xl flex flex-col flex-wrap shadow-lg">
      <div className="w-full flex justify-center mb-10">
        <Image src="/logo-white.png" alt="logo" width={300} height={300} />
      </div>
      {children}
    </aside>
  )
}
