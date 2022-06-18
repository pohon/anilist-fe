import { createContext, Fragment } from 'react'
import cn from 'classnames'
import { BadgeCheckIcon } from '@heroicons/react/outline'
import { Transition } from '@headlessui/react'

export const SUCCESS_TOAST = 'SUCCESS_TOAST'
export const FAILED_TOAST = 'FAILED_TOAST'

export const ToastContext = createContext({})

export default function Toast({ message, type = SUCCESS_TOAST }) {

  return (
    <Transition
      show={!!message}
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className={cn(
        'fixed',
        'w-screen',
        'bottom-0',
        'max-w-7xl',
        'mx-auto',
        'p-3',
        'flex',
        'items-center',
        'lg:bottom-5',
        'lg:px-8',
        'lg:right-5',
        'lg:rounded-lg',
        'lg:w-fit',
        {
          'bg-sky-600': type === SUCCESS_TOAST,
          'bg-red-600': type === FAILED_TOAST
        }
      )}>
        <span className="flex p-2 rounded-lg bg-sky-800">
          <BadgeCheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
        </span>
        <p className="ml-3 font-medium text-white truncate">
          <span className="block">{message}</span>
        </p>
      </div>
    </Transition>
  )
}
