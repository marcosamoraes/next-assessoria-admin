'use client'

import Mask from '@/helpers/Mask'
import { IProduct } from '@/interfaces/IProduct'
import { ChangeEvent, useState } from 'react'

export default function ProductValues({ product }: { product: IProduct | null }) {
  const [values, setValues] = useState<any>([])
  const handleInputChanges = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = Mask.money(event.target.value.replace(/[^0-9]/g, ''))

    const newValues = values

    if (!value) {
      newValues[name] = ''
      return setValues(newValues)
    }

    newValues[name] = value

    if (name.match(/\[1]$/)) {
      for (let i = 2; i <= 12; i++) {
        const newValue = Number(value.replace(/,/g, '.')) / i

        newValues[name.replace(/\[1]$/, `[${i}]`)] = newValue.toFixed(2).replace(/\./g, ',')
      }
    }

    setValues({
      ...values,
      newValues,
    })
  }
  return (
    <div className="mb-4">
      <h3 className="w-full text-md font-light text-primary mb-2">Valores</h3>
      <div className="bg-white px-5 py-7 rounded-xl flex flex-wrap flex-row flex-1 gap-3">
        {['São Paulo', 'Minas Gerais', 'Rio de Janeiro', 'Espírito Santo'].map((state) => (
          <div key={state} className="flex flex-col w-full gap-2 items-center">
            <div className="w-full pl-2">
              <label htmlFor={`value[${state}][1]`} className="text-gray-500 text-sm">
                {state}
              </label>
            </div>
            <div className="w-full flex flex-row">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((parcel) => (
                <div key={parcel} className="md:px-2 w-full md:w-1/12">
                  <input
                    type="text"
                    name={`value[${state}][${parcel}]`}
                    id={`value[${state}][${parcel}]`}
                    placeholder={`${parcel}x`}
                    onChange={handleInputChanges}
                    value={values[`value[${state}][${parcel}]`] ?? ''}
                    className="border border-gray-300 w-full rounded-lg box px-3 py-2"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
