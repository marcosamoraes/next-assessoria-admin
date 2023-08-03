'use client'
import OptionsBar from '@/components/UI/OptionsBar/OptionsBar'
import SearchBar from '@/components/UI/SearchBar/SearchBar'
import React from 'react'

type SettingTextProps = {
  children: React.ReactNode
  handleQueryChange: (e: any) => void
}

export default function SettingText({ children, handleQueryChange }: SettingTextProps) {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex flex-row gap-3">
          <SearchBar />
          <select
            name="type"
            id="type"
            className="border border-gray-300 rounded-lg py-2 max-w-[180px]"
            onChange={handleQueryChange}
          >
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
