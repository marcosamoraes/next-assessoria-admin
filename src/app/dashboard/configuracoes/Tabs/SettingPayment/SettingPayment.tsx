import { ISettingPayment } from '@/interfaces/ISettingPayment'

type SettingPaymentProps = {
  payments: ISettingPayment[]
}
export default function SettingPayment({ payments }: SettingPaymentProps) {
  return (
    <>
      <div>
        <div className="bg-white px-5 py-7 rounded-xl flex flex-wrap">
          <div className="flex flex-col w-full lg:w-6/12 xl:w-3/12 gap-2 items-center">
            <div className="w-full pl-2">
              <label htmlFor="installments_fee" className="text-gray-500 text-sm">
                Juros de parcelamento
              </label>
            </div>
            <div className="w-full flex flex-row gap-2">
              <div className="md:px-2 w-full md:w-6/12">
                <input
                  type="text"
                  placeholder="Impostos"
                  className="border border-gray-300 w-full rounded-lg box px-3 py-2"
                  name="installments_fee"
                  defaultValue={payments[0].installments_fee}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-5">
        <button
          className={`rounded-xl h-10 px-3 border-2 border-primary font-bold 
          text-lg text-primary relative overflow-hidden inline-flex items-center 
          justify-evenly duration-300 hover:bg-primary hover:text-white transition-all`}
        >
          <span className="hidden md:block">Salvar</span>
        </button>
      </div>
    </>
  )
}
