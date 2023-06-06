import OrderStatusEnum from '@/enums/OrderStatusEnum'
import t from '@/translations'

export default function Stepper ({ selectedStep = OrderStatusEnum.CREATED }: { selectedStep?: OrderStatusEnum }) {
  let steps: Array<any> = Object.values(OrderStatusEnum)
  const selectedIndex = steps.indexOf(selectedStep)

  steps = steps.filter((step) => step !== OrderStatusEnum.CANCELED)
    .map((step, index) => step = {
      name: step,
      done: index <= selectedIndex,
    })

  return (
    <ol className="flex flex-col xl:flex-row items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4">
      {steps.map((step, index) => (
        <li key={index} className={`flex mb-3 xl:mb-0 items-center ${step.done ? 'text-primary' : ''}`}>
          <span className={`items-center hidden xl:flex justify-center w-5 h-5 mr-2 text-xs border ${step.done ? 'border-primary' : 'border-gray-500'} rounded-full shrink-0`}>
            {index+1}
          </span>
          <p className="text-xs">{t(step.name)}</p>
          {step.name !== OrderStatusEnum.FINISHED && (
            <svg aria-hidden="true" className="w-4 h-4 ml-2 hidden xl:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
          )}
        </li>
      ))}
    </ol>

  )
}