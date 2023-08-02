'use client'

import Mask from '@/helpers/Mask'
import { IProduct } from '@/interfaces/IProduct'
import { IState } from '@/interfaces/IState'
import { ChangeEvent } from 'react'

type ProductValuesProps = {
  product: IProduct | null
  onChange: (name: string, value: any, state: number) => void
  states: IState[]
}

export default function ProductValues({ product, states, onChange }: ProductValuesProps) {

  const handleInputChanges = (event: ChangeEvent<HTMLInputElement>, state: number) => {
    const { name } = event.target
    let { value }: any = event.target

    value = Mask.money(value.replace(/[^0-9]/g, ''))

    onChange(name, value, state)
  }

  const getFormattedPrice = (state: number, type: string) => {
    if (product?.prices && product?.prices[state]) {
      switch (type) {
      case 'value_transfer':
        return product.prices[state].value_transfer ? Mask.money(String(product.prices[state].value_transfer)) : ''
      case 'value_card':
        return product.prices[state].value_card ? Mask.money(String(product.prices[state].value_card)) : ''
      case 'value_card_installment':
        return product.prices[state].value_card_installment ? Mask.money(String(product.prices[state].value_card_installment)) : ''
      }
    }

    return ''
  }

  return (
    <div className="mb-4">
      <h3 className="w-full text-md font-light text-primary mb-2">Valores</h3>
      <div className="bg-white px-5 py-7 rounded-xl flex flex-wrap flex-row flex-1 gap-3">
        {states?.length > 0 && states.map((state) => (
          <div key={state.id} className="flex flex-col w-full lg:w-1/3 lg:-mx-2 gap-2 items-center">
            <div className="w-full pl-2">
              <label htmlFor={`value_transfer[${state}]`} className="text-gray-500 text-sm">
                {state.name}
              </label>
            </div>
            <div className="w-full flex flex-row flex-wrap gap-2">
              <div className="lg:w-1/4">
                <input
                  type="text"
                  name="value_transfer"
                  id={`value_transfer[${state.id}]`}
                  placeholder="Transf."
                  onChange={(e) => handleInputChanges(e, state.id)}
                  value={getFormattedPrice(state.id, 'value_transfer')}
                  className="border border-gray-300 w-full rounded-lg box px-3 py-2"
                />
              </div>
              <div className="lg:w-1/4">
                <input
                  type="text"
                  name="value_card"
                  id={`value_card[${state.id}]`}
                  placeholder="Cartão"
                  onChange={(e) => handleInputChanges(e, state.id)}
                  value={getFormattedPrice(state.id, 'value_card')}
                  className="border border-gray-300 w-full rounded-lg box px-3 py-2"
                />
              </div>
              <div className="lg:w-1/4">
                <input
                  type="text"
                  name="value_card_installment"
                  id={`value_card_installment[${state.id}]`}
                  placeholder="Parcelado"
                  onChange={(e) => handleInputChanges(e, state.id)}
                  value={getFormattedPrice(state.id, 'value_card_installment')}
                  className="border border-gray-300 w-full rounded-lg box px-3 py-2"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
