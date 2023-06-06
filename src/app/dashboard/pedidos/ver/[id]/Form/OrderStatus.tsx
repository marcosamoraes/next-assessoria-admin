import Stepper from '@/components/Stepper/Stepper'
import { IOrder } from '@/interfaces/IOrder'

export default function OrderStatus({ order }: { order: IOrder | null }) {
  if (!order) {
    return <>Loading</>
  }

  return (
    <div className="mb-4">
      <h3 className="w-full text-md font-light text-primary mb-2">Status</h3>
      <Stepper selectedStep={order?.status} />
    </div>
  )
}
