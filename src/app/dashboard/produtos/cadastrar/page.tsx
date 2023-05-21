import DangerButton from '@/components/UI/DangerButton/DangerButton'
import PrimaryButton from '@/components/UI/PrimaryButton/PrimaryButton'
import Link from 'next/link'
import { IoMdArrowBack } from 'react-icons/io'
import ProductDescription from './Form/ProductDescription'
import ProductImage from './Form/ProductImage'
import ProductImages from './Form/ProductImages'
import ProductInfos from './Form/ProductInfos'
import ProductValues from './Form/ProductValues'

export default function ProductsCreate() {
  return (
    <>
      <form className="flex flex-wrap flex-row">
        <div className="w-full px-2 -md-2 flex justify-between">
          <h1 className="text-4xl text-gray-500 font-light mb-10">Novo Produto</h1>
          <div className="flex justify-end px-2 -md-2 gap-4">
            <Link href="/dashboard/produtos">
              <DangerButton icon={IoMdArrowBack}>Voltar</DangerButton>
            </Link>
            <PrimaryButton text="Salvar" />
          </div>
        </div>

        <div className="w-full md:w-8/12 px-2 -md-2">
          <ProductInfos />
          <ProductDescription />
        </div>

        <div className="w-full md:w-4/12 px-2 -md-2">
          <ProductImage />
          <ProductImages />
        </div>

        <div className="w-full px-2 -md-2">
          <ProductValues />
        </div>
      </form>
    </>
  )
}
