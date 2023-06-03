'use client'
import { getSettingTexts } from '@/api/SettingTextApi'
import { getStates } from '@/api/StatesApi'
import { getTaxes } from '@/api/TaxesApi'
import useSettingTextColumns from '@/hooks/data-table/useSettingTextColumns'
import { ISettingText } from '@/interfaces/ISettingText'
import { IState } from '@/interfaces/IState'
import { ITax } from '@/interfaces/ITax'
import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'

export default function Settings() {
  const [selectedTab, setSelectedTab] = useState<string>('text')
  const [settingTexts, setSettingTexts] = useState<ISettingText[] | any>([])
  const [taxes, setTaxes] = useState<ITax[]>([])
  const [states, setStates] = useState<IState[]>([])

  const settingTextColumns = useSettingTextColumns()

  const tabs = [
    {
      id: 'text',
      name: 'Textos',
      component: 'SettingText'
    },
    {
      id: 'tax',
      name: 'Impostos',
      component: 'SettingTax'
    },
    {
      id: 'freight',
      name: 'Frete',
      component: 'SettingFreight'
    }
  ]

  useEffect(() => {
    const textsData = getSettingTexts()
    setSettingTexts(textsData)
    const taxesData = getTaxes()
    setTaxes(taxesData)
    const statesData = getStates()
    setStates(statesData)
  }, [])

  return (
    <>
      <h1 className="w-full text-4xl text-gray-500 font-light mb-10">Configurações</h1>
      <div className="flex justify-between">
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          {tabs.map((tab) => (
            <li className="mr-2" key={tab.id}>
              <a
                href="#"
                className={`inline-block px-4 py-3 rounded-lg ${selectedTab === tab.id ? 'bg-primary text-white' : 'hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white'}`}
                onClick={() => setSelectedTab(tab.id)}
              >
                {tab.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="mt-7">
          {tabs.map((tab) => {
            if (tab.id === selectedTab) {
              const Component = require(`./Tabs/${tab.component}/${tab.component}`).default
              if (tab.id === 'text') {
                return (
                  <Component key={tab.id} settingTexts={settingTexts} settingTextColumns={settingTextColumns}>
                    <DataTable columns={settingTextColumns} data={settingTexts} className="mt-7 bg-none" pagination responsive />
                  </Component>
                )
              } else if (tab.id === 'tax') {
                return <Component key={tab.id} taxes={taxes} states={states} />
              } else {
                return <Component key={tab.id} />
              }
            }
          })}
        </div>
      </div>
    </>
  )
}
