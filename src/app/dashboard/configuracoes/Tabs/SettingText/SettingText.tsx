'use client'
import OptionsBar from '@/components/UI/OptionsBar/OptionsBar'
import SearchBar from '@/components/UI/SearchBar/SearchBar'

export default async function SettingText({ children }: { children: any }) {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex flex-row gap-3">
          <SearchBar />
          <select name="type" id="type" className="border border-gray-300 rounded-lg py-2 max-w-[180px]">
            <option>Tipo</option>
            <option value="email">E-mail</option>
            <option value="site">Site</option>
          </select>
        </div>
        <div className="hidden">
          <OptionsBar exportLink="#" />
        </div>
      </div>
      <div>
        {children}
      </div>
    </>
  )
}
