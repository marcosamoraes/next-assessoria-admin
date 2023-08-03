'use client'

import PrimaryButton from '@/components/UI/PrimaryButton/PrimaryButton'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import BackButton from '@/components/UI/BackButton/BackButton'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import { ISettingText } from '@/interfaces/ISettingText'
import * as $SettingText from '@/services/SettingText'

export default function SettingTextsCreate({ params }: any) {
  const [settingText, setSettingText] = useState<ISettingText>({
    name: '',
    description: '',
    content: '',
  } as ISettingText)

  const { id } = params

  const MySwal = withReactContent(Swal)

  useEffect(() => {
    if (id) {
      $SettingText.find(id).then((res: any) => {
        const data: ISettingText = res.data.setting_freight
        setSettingText(data)
      })
    }
  }, [id])

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setSettingText({ ...settingText, [name]: value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    $SettingText.update(id, settingText).then((res: any) => {
      const message = res.response?.data?.message ?? 'Texto atualizado com sucesso'
      MySwal.fire(
        'Sucesso',
        message,
        'success'
      )
    }).catch((err: any) => {
      const message = err.response?.data?.message ?? 'Ocorreu um erro ao atualizar o texto'
      MySwal.fire(
        'Erro',
        message,
        'error'
      )
    })
  }

  return (
    <>
      <form className="flex flex-wrap flex-row" onSubmit={handleSubmit}>
        <div className="w-full px-2 -md-2 flex justify-between">
          <h1 className="text-2xl lg:text-4xl text-gray-500 font-light mb-10">Editar Texto</h1>
          <div className="flex justify-end px-2 -md-2 gap-4">
            <Link href="/dashboard/configuracoes">
              <BackButton icon={IoMdArrowBack}>Voltar</BackButton>
            </Link>
            <PrimaryButton text="Salvar" />
          </div>
        </div>

        <div className="w-full px-2">
          <div className="mb-4">
            <div className="bg-white px-5 lg:px-10 py-7 rounded-xl flex flex-wrap flex-row flex-1 gap-3">
              <div className="flex flex-col w-full md:w-6/12 md:px-2 md:-mx-2">
                <label htmlFor="name" className="text-gray-500 text-sm mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nome"
                  className="border border-gray-300 rounded-lg px-3 py-2 mb-5"
                  defaultValue={settingText.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col w-full md:w-6/12 md:px-2 md:-mx-2">
                <label htmlFor="description" className="text-gray-500 text-sm mb-2">
                  Descrição
                </label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Descrição"
                  className="border border-gray-300 rounded-lg px-3 py-2 mb-5"
                  defaultValue={settingText.description}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col w-full md:px-2 md:-mx-2">
                <label htmlFor="content" className="text-gray-500 text-sm mb-2">
                  Conteúdo
                </label>
                <textarea
                  name="description"
                  id="description"
                  placeholder="Descrição"
                  className="border border-gray-300 rounded-lg h-48"
                  defaultValue={settingText.content}
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
