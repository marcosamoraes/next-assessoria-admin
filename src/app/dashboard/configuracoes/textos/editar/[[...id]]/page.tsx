'use client'

import PrimaryButton from '@/components/UI/PrimaryButton/PrimaryButton'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import BackButton from '@/components/UI/BackButton/BackButton'
import { ICoupon } from '@/interfaces/ICoupon'
import { getCoupon } from '@/api/CouponsApi'
import { EditorProps } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import dynamic from 'next/dynamic'

const Editor = dynamic<EditorProps>(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false, loading: () => <p>Carregando...</p> }
)

export default async function CouponsCreate({ params }: any) {
  const [coupon, setCoupon] = useState<ICoupon | null>(null)

  const { id } = params

  useEffect(() => {
    const data = getCoupon(id)
    setCoupon(data)
  }, [id])

  return (
    <>
      <form className="flex flex-wrap flex-row">
        <div className="w-full px-2 -md-2 flex justify-between">
          <h1 className="text-2xl lg:text-4xl text-gray-500 font-light mb-10">{coupon ? 'Editar' : 'Novo'} Texto</h1>
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
                <input type="text" name="name" id="name" placeholder="Nome" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
              </div>
              <div className="flex flex-col w-full md:w-6/12 md:px-2 md:-mx-2">
                <label htmlFor="description" className="text-gray-500 text-sm mb-2">
                  Descrição
                </label>
                <input type="text" name="description" id="description" placeholder="Descrição" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
              </div>
              <div className="flex flex-col w-full md:px-2 md:-mx-2">
                <label htmlFor="content" className="text-gray-500 text-sm mb-2">
                  Conteúdo
                </label>
                <Editor
                  wrapperClassName="h-40 mb-48 md:mb-24"
                  editorClassName="border border-gray-300 rounded-lg px-3 py-2 mb-5"
                  placeholder="Escreva o conteúdo do texto aqui..."
                  toolbar={{
                    options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link'],
                    inline: {
                      options: ['bold', 'italic', 'underline', 'strikethrough'],
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
