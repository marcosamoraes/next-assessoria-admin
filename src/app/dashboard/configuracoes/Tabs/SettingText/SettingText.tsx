'use client'
import OptionsBar from '@/components/UI/OptionsBar/OptionsBar'
import SearchBar from '@/components/UI/SearchBar/SearchBar'

export default async function SettingText({ children }: { children: any }) {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex flex-row gap-3">
          <SearchBar />
          <select name="type" id="type" className="border border-gray-300 rounded-lg py-2">
            <option>Tipo</option>
            <option value="email">E-mail</option>
            <option value="site">Site</option>
          </select>
        </div>
        <OptionsBar exportLink="#" />
      </div>
      <div>
        {children}
      </div>
    </>
  )
}
