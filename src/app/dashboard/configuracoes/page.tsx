'use client'

import useSettingTextColumns from '@/hooks/data-table/useSettingTextColumns'
import { ICategory } from '@/interfaces/ICategory'
import { ISettingFreight } from '@/interfaces/ISettingFreight'
import { ISettingTax } from '@/interfaces/ISettingTax'
import { ISettingText } from '@/interfaces/ISettingText'
import { IState } from '@/interfaces/IState'
import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import * as $SettingText from '@/services/SettingText'
import * as $SettingTax from '@/services/SettingTax'
import * as $SettingFreight from '@/services/SettingFreight'
import * as $SettingPayment from '@/services/SettingPayment'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import * as $Category from '@/services/Category'
import * as $State from '@/services/State'
import { deleteAllSearchParam } from '@/helpers/useQuery'

export default function Settings() {
  const [selectedTab, setSelectedTab] = useState<string>('text')
  const [states, setStates] = useState<IState[]>([])
  const [selectedCategory, setSelectedCategory] = useState<number>(1)
  const [settingTexts, setSettingTexts] = useState<ISettingText[] | any>([])
  const [settingTaxes, setTaxes] = useState<ISettingTax[]>([])
  const [settingFreight, setFreight] = useState<ISettingFreight[]|null>([])
  const [categories, setCategories] = useState<ICategory[]>([])
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()!

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
    },
    {
      id: 'payment',
      name: 'Pagamento',
      component: 'SettingPayment'
    }
  ]

  useEffect(() => {
    deleteAllSearchParam(router, pathname, searchParams)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab])

  useEffect(() => {
    $Category.all().then((res: any) => {
      const data: ICategory[] = res.data.data
      setCategories(data)
    })
    $State.all().then((res: any) => {
      const data: IState[] = res.data.data
      setStates(data)
    })
  }, [])

  useEffect(() => {
    $SettingText.all(searchParams.toString()).then((res: any) => {
      const data: ISettingText[] = res.data.data
      setSettingTexts(data)
    })

    $SettingTax.all(searchParams.toString()).then((res: any) => {
      const data: ISettingTax[] = res.data.data
      setTaxes(data)
    })

    $SettingFreight.all(searchParams.toString()).then((res: any) => {
      const data: ISettingFreight[] = res.data.data
      setFreight(data)
    })

    $SettingPayment.all(searchParams.toString()).then((res: any) => {
      const data: ISettingFreight[] = res.data.data
      setFreight(data)
    })
  }, [searchParams])

  return (
    <>
      <h1 className="w-full text-4xl text-gray-500 font-light mb-10">Configurações</h1>
      <div className="flex justify-between">
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500">
          {tabs.map((tab) => (
            <li className="mr-2" key={tab.id}>
              <a
                href="#"
                className={`inline-block px-4 py-3 rounded-lg ${selectedTab === tab.id ? 'bg-primary text-white' : 'hover:text-gray-900 hover:bg-gray-100'}`}
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
                    {settingTexts?.length > 0 ? (
                      <DataTable columns={settingTextColumns} data={settingTexts} className="mt-7 bg-none" pagination responsive />
                    ) : (
                      <div className="w-full bg-yellow-200 border-2 border-yellow-300 p-5 mt-5">Não há textos cadastrados</div>
                    )}
                  </Component>
                )
              } else if (tab.id === 'tax') {
                return <Component key={tab.id} taxes={settingTaxes} states={states} />
              }
              // } else {
              //   return (
              //     <Component
              //       key={tab.id}
              //       states={states}
              //       categories={categories}
              //       freight={freight}
              //       selectedCategory={selectedCategory}
              //       setSelectedCategory={setSelectedCategory}
              //     />
              //   )
              // }
            }
          })}
        </div>
      </div>
    </>
  )
}
