import { IProduct } from '@/interfaces/IProduct'
import dynamic from 'next/dynamic'

const QuillNoSSRWrapper = dynamic(() => import('react-quill'), { ssr: false, loading: () => <p>Loading ...</p> })

type ProductDescriptionProps = {
  product: IProduct
  onChange: (e: any) => void
}
export default function ProductDescription({ product, onChange }: ProductDescriptionProps) {

  return (
    <div className="mb-4">
      <h3 className="w-full text-md font-light text-primary mb-2">Descrição</h3>
      <div className="bg-white px-5 lg:px-10 py-7 rounded-xl flex flex-wrap flex-row flex-1 gap-3">
        <div className="flex flex-col w-full">
          <div style={{ minHeight: '200px' }}>
            <QuillNoSSRWrapper
              theme="snow"
              value={product?.description ?? ''}
              onChange={onChange}
              style={{ height: '150px' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
