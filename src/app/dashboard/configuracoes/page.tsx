'use client'

import useSettingTextColumns from '@/hooks/data-table/useSettingTextColumns'
import { ICategory } from '@/interfaces/ICategory'
import { ISettingFreight } from '@/interfaces/ISettingFreight'
import { ISettingTax } from '@/interfaces/ISettingTax'
import { ISettingText } from '@/interfaces/ISettingText'
import { IState } from '@/interfaces/IState'
import { useCallback, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import * as $SettingText from '@/services/SettingText'
import * as $SettingTax from '@/services/SettingTax'
import * as $SettingFreight from '@/services/SettingFreight'
import * as $SettingPayment from '@/services/SettingPayment'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import * as $Category from '@/services/Category'
import * as $State from '@/services/State'
import { deleteAllSearchParam, updateSearchParams } from '@/helpers/useQuery'
import { ISettingPayment } from '@/interfaces/ISettingPayment'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'

export default function Settings() {
  const [selectedTab, setSelectedTab] = useState<string>('text')
  const [states, setStates] = useState<IState[]>([])
  const [selectedCategory, setSelectedCategory] = useState<number>(1)
  const [settingTexts, setSettingTexts] = useState<ISettingText[]>({} as ISettingText[])
  const [settingTaxes, setSettingTaxes] = useState<ISettingTax[]>({} as ISettingTax[])
  const [settingFreights, setSettingFreights] = useState<ISettingFreight[]>({} as ISettingFreight[])
  const [settingPayments, setSettingPayments] = useState<ISettingPayment[]>({} as ISettingPayment[])
  const [categories, setCategories] = useState<ICategory[]>([])
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()!

  const MySwal = withReactContent(Swal)

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

  const handleQueryChange = useCallback((e: any) => {
    const { name, value } = e.target
    updateSearchParams(name, value, router, pathname, searchParams)
  }, [router, pathname, searchParams])

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
      setSettingTaxes(data)
    })

    $SettingFreight.all(searchParams.toString()).then((res: any) => {
      const data: ISettingFreight[] = res.data.data
      setSettingFreights(data)
    })

    $SettingPayment.all(searchParams.toString()).then((res: any) => {
      const data: ISettingPayment[] = res.data.data
      setSettingPayments(data)
    })
  }, [searchParams])

  const handleSubmitTaxes = (e: any) => {
    e.preventDefault()

    $SettingTax.update(settingTaxes).then((res: any) => {
      const message = res.response?.data?.message ?? 'Impostos atualizados com sucesso'
      MySwal.fire(
        'Sucesso',
        message,
        'success'
      )
    }).catch((err: any) => {
      const message = err.response?.data?.message ?? 'Ocorreu um erro ao atualizar os impostos'
      MySwal.fire(
        'Erro',
        message,
        'error'
      )
    })
  }

  const handleSubmitFreight = (e: any) => {
    e.preventDefault()

    $SettingFreight.update(settingFreights).then((res: any) => {
      const message = res.response?.data?.message ?? 'Configurações de frete atualizadas com sucesso'
      MySwal.fire(
        'Sucesso',
        message,
        'success'
      )
    }).catch((err: any) => {
      const message = err.response?.data?.message ?? 'Ocorreu um erro ao atualizar as configurações de frete'
      MySwal.fire(
        'Erro',
        message,
        'error'
      )
    })
  }

  const handleSubmitPayment = (e: any) => {
    e.preventDefault()

    $SettingPayment.update(settingPayments[0]).then((res: any) => {
      const message = res.response?.data?.message ?? 'Configurações de pagamento atualizadas com sucesso'
      MySwal.fire(
        'Sucesso',
        message,
        'success'
      )
    }).catch((err: any) => {
      const message = err.response?.data?.message ?? 'Ocorreu um erro ao atualizar as configurações de pagamento'
      MySwal.fire(
        'Erro',
        message,
        'error'
      )
    })
  }

  const handleChangesPayment = (e: any) => {
    const { name, value } = e.target
    setSettingPayments([{ ...settingPayments[0], [name]: value }])
  }

  const handleChangesFreight = (e: any, id: number) => {
    const { name, value } = e.target
    const freightUpdated = settingFreights.map((freight) => {
      if (freight.id === id) {
        return { ...freight, [name]: value }
      }
      return freight
    })
    setSettingFreights(freightUpdated)
  }

  const handleChangesTaxes = (e: any, id: number) => {
    const { name, value } = e.target
    const taxesUpdated = settingTaxes.map((tax) => {
      if (tax.id === id) {
        return { ...tax, [name]: value }
      }
      return tax
    })
    setSettingTaxes(taxesUpdated)
  }

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
                  <Component key={tab.id} handleQueryChange={handleQueryChange}>
                    {settingTexts?.length > 0 ? (
                      <DataTable columns={settingTextColumns} data={settingTexts} className="mt-7 bg-none" pagination responsive />
                    ) : (
                      <div className="w-full bg-yellow-200 border-2 border-yellow-300 p-5 mt-5">Não há textos cadastrados</div>
                    )}
                  </Component>
                )
              } else if (tab.id === 'tax') {
                return <Component key={tab.id} taxes={settingTaxes} states={states} handleSubmit={handleSubmitTaxes} handleChanges={handleChangesTaxes} />
              } else if (tab.id === 'freight') {
                return (
                  <Component
                    key={tab.id}
                    states={states}
                    categories={categories}
                    freights={settingFreights}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    handleSubmit={handleSubmitFreight}
                    handleChanges={handleChangesFreight}
                  />
                )
              } else if (tab.id === 'payment') {
                return <Component key={tab.id} payments={settingPayments} handleSubmit={handleSubmitPayment} handleChanges={handleChangesPayment} />
              }
            }
          })}
        </div>
      </div>
    </>
  )
}
