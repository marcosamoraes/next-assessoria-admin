'use client'

import PrimaryButton from '@/components/UI/PrimaryButton/PrimaryButton'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import { IPartnerStore } from '@/interfaces/IPartnerStore'
import BackButton from '@/components/UI/BackButton/BackButton'
import * as $PartnerStore from '@/services/PartnerStore'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import PartnerStoreLogo from './Form/PartnerStoreLogo'

export default function PartnerStoresCreate({ params }: any) {
  const [partnerStore, setPartnerStore] = useState<IPartnerStore>({
    name: '',
    active: true,
  } as IPartnerStore)

  const { id } = params

  const MySwal = withReactContent(Swal)

  useEffect(() => {
    if (id) {
      $PartnerStore.find(id).then((res: any) => {
        const data: IPartnerStore = res.data.partnerStore
        setPartnerStore(data)
      })
    }
  }, [id])

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setPartnerStore({ ...partnerStore, [name]: value })
  }

  const handleLogoChange = (url: string) => {
    setPartnerStore({ ...partnerStore, logo: url })
  }

  const handleZipcode = async (e: any) => {
    const cep = e.target.value?.replace(/\D/g, '')

    if (cep?.length !== 8) {
      return
    }

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      const data = await response.json()

      if (data.erro) return

      setPartnerStore((prev) => ({
        ...prev,
        address: data.logradouro || prev.address,
        neighborhood: data.bairro || prev.neighborhood,
        city: data.localidade || prev.city,
        state: data.uf || prev.state,
      }))
    } catch (error) {
      // silently ignore, admin can fill manually
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (id) {
      $PartnerStore.update(id, partnerStore).then(() => {
        MySwal.fire('Sucesso', 'Loja parceira atualizada com sucesso', 'success')
      }).catch((err: any) => {
        const message = err.response?.data?.message ?? 'Ocorreu um erro ao atualizar a loja parceira'
        MySwal.fire('Erro', message, 'error')
      })
    } else {
      $PartnerStore.store(partnerStore).then(() => {
        MySwal.fire('Sucesso', 'Loja parceira criada com sucesso', 'success')
      }).catch((err: any) => {
        const message = err.response?.data?.message ?? 'Ocorreu um erro ao criar a loja parceira'
        MySwal.fire('Erro', message, 'error')
      })
    }
  }

  const inputClass = 'border border-gray-300 rounded-lg px-3 py-2 mb-5'

  return (
    <>
      <form className="flex flex-wrap flex-row" method="POST" onSubmit={handleSubmit}>
        <div className="w-full px-2 -md-2 flex justify-between">
          <h1 className="text-2xl lg:text-4xl text-gray-500 font-light mb-10">{id ? 'Editar' : 'Nova'} Loja Parceira</h1>
          <div className="flex justify-end px-2 -md-2 gap-4">
            <Link href="/dashboard/lojas-parceiras">
              <BackButton icon={IoMdArrowBack}>Voltar</BackButton>
            </Link>
            <PrimaryButton text="Salvar" />
          </div>
        </div>

        <div className="w-full px-2">
          <div className="mb-4">
            <h3 className="w-full text-md font-light text-primary mb-2">Informações</h3>
            <div className="bg-white px-5 lg:px-10 py-7 rounded-xl flex flex-wrap flex-row flex-1 gap-x-3">
              <div className="flex flex-col w-full lg:w-6/12 lg:pr-3">
                <label htmlFor="name" className="text-gray-500 text-sm mb-2">Nome</label>
                <input type="text" name="name" id="name" placeholder="Nome" value={partnerStore.name || ''} className={inputClass} onChange={handleInputChange} required />
              </div>
              <div className="flex flex-col w-full lg:w-6/12">
                <label htmlFor="cnpj" className="text-gray-500 text-sm mb-2">CNPJ</label>
                <input type="text" name="cnpj" id="cnpj" placeholder="CNPJ" value={partnerStore.cnpj || ''} className={inputClass} onChange={handleInputChange} />
              </div>
              <div className="flex flex-col w-full lg:w-6/12 lg:pr-3">
                <label htmlFor="email" className="text-gray-500 text-sm mb-2">E-mail</label>
                <input type="email" name="email" id="email" placeholder="E-mail" value={partnerStore.email || ''} className={inputClass} onChange={handleInputChange} />
              </div>
              <div className="flex flex-col w-full lg:w-6/12">
                <label htmlFor="phone" className="text-gray-500 text-sm mb-2">Telefone</label>
                <input type="text" name="phone" id="phone" placeholder="Telefone" value={partnerStore.phone || ''} className={inputClass} onChange={handleInputChange} />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="w-full text-md font-light text-primary mb-2">Endereço</h3>
            <div className="bg-white px-5 lg:px-10 py-7 rounded-xl flex flex-wrap flex-row flex-1 gap-x-3">
              <div className="flex flex-col w-full lg:w-3/12 lg:pr-3">
                <label htmlFor="zip_code" className="text-gray-500 text-sm mb-2">CEP</label>
                <input type="text" name="zip_code" id="zip_code" placeholder="CEP" value={partnerStore.zip_code || ''} className={inputClass} onChange={handleInputChange} onBlur={handleZipcode} required />
              </div>
              <div className="flex flex-col w-full lg:w-6/12 lg:pr-3">
                <label htmlFor="address" className="text-gray-500 text-sm mb-2">Endereço</label>
                <input type="text" name="address" id="address" placeholder="Endereço" value={partnerStore.address || ''} className={inputClass} onChange={handleInputChange} required />
              </div>
              <div className="flex flex-col w-full lg:w-3/12">
                <label htmlFor="number" className="text-gray-500 text-sm mb-2">Número</label>
                <input type="text" name="number" id="number" placeholder="Número" value={partnerStore.number || ''} className={inputClass} onChange={handleInputChange} />
              </div>
              <div className="flex flex-col w-full lg:w-4/12 lg:pr-3">
                <label htmlFor="neighborhood" className="text-gray-500 text-sm mb-2">Bairro</label>
                <input type="text" name="neighborhood" id="neighborhood" placeholder="Bairro" value={partnerStore.neighborhood || ''} className={inputClass} onChange={handleInputChange} />
              </div>
              <div className="flex flex-col w-full lg:w-5/12 lg:pr-3">
                <label htmlFor="city" className="text-gray-500 text-sm mb-2">Cidade</label>
                <input type="text" name="city" id="city" placeholder="Cidade" value={partnerStore.city || ''} className={inputClass} onChange={handleInputChange} required />
              </div>
              <div className="flex flex-col w-full lg:w-3/12">
                <label htmlFor="state" className="text-gray-500 text-sm mb-2">Estado (UF)</label>
                <input type="text" name="state" id="state" placeholder="UF" value={partnerStore.state || ''} className={inputClass} onChange={handleInputChange} required />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="w-full text-md font-light text-primary mb-2">Coordenadas (opcional)</h3>
            <p className="text-gray-400 text-xs mb-2">Deixe em branco para geocodificar automaticamente a partir do endereço ao salvar.</p>
            <div className="bg-white px-5 lg:px-10 py-7 rounded-xl flex flex-wrap flex-row flex-1 gap-x-3">
              <div className="flex flex-col w-full lg:w-6/12 lg:pr-3">
                <label htmlFor="latitude" className="text-gray-500 text-sm mb-2">Latitude</label>
                <input type="number" step="any" name="latitude" id="latitude" placeholder="-23.5505" value={partnerStore.latitude ?? ''} className={inputClass} onChange={handleInputChange} />
              </div>
              <div className="flex flex-col w-full lg:w-6/12">
                <label htmlFor="longitude" className="text-gray-500 text-sm mb-2">Longitude</label>
                <input type="number" step="any" name="longitude" id="longitude" placeholder="-46.6333" value={partnerStore.longitude ?? ''} className={inputClass} onChange={handleInputChange} />
              </div>
            </div>
          </div>

          <PartnerStoreLogo partnerStore={partnerStore} onChange={handleLogoChange} />
        </div>
      </form>
    </>
  )
}
