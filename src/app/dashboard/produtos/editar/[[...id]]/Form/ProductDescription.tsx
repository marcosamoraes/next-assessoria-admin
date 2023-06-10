import { IProduct } from '@/interfaces/IProduct'

export default function ProductDescription({ product }: { product: IProduct | null }) {
  return (
    <div className="mb-4">
      <h3 className="w-full text-md font-light text-primary mb-2">Descrição</h3>
      <div className="bg-white px-5 lg:px-10 py-7 rounded-xl flex flex-wrap flex-row flex-1 gap-3">
        <div className="flex flex-col w-full">
          <textarea
            name="description"
            id="description"
            placeholder="Descrição"
            className="border border-gray-300 rounded-lg h-48"
          ></textarea>
        </div>
      </div>
    </div>
  )
}
