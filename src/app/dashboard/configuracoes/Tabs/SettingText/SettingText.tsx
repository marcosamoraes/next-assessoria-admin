'use client'
import OptionsBar from '@/components/UI/OptionsBar/OptionsBar'
import SearchBar from '@/components/UI/SearchBar/SearchBar'
import React from 'react'

type SettingTextProps = {
  children: React.ReactNode
  handleQueryChange: (e: any) => void
}

export default function SettingText({ children }: SettingTextProps) {
  return (
    <>
      <div className="flex justify-between">
        <OptionsBar storeLink="/dashboard/configuracoes/textos/editar" />

        <div className="flex flex-row gap-3">
          <SearchBar />
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
