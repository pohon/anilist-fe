import Head from "next/head"
import Link from 'next/link'
import Image from "next/image"
import { Fragment } from 'react'
import { Transition, Popover } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import cn from 'classnames'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'My Collection', href: '/collection' }
]

export default function Header({ isHome }) {

  return (
    <>
      <Head>
        <title>Unofficial AniList app - Sullivan Osmond</title>
        <link rel="icon" href="https://anilist.co/img/icons/favicon-32x32.png" />
      </Head>
      <div className={isHome ? "relative bg-white overflow-hidden" : "sticky top-0 bg-white z-10"}>
        <div className="max-w-7xl mx-auto">
          <div className={cn('relative z-10 pb-8 bg-white sm:pb-16 lg:max-w-2xl lg:w-full', {
            'md:pb-20 lg:pb-28 xl:pb-32': isHome
          })}>
            {
              isHome && (
                <svg
                  className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                  fill="currentColor"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <polygon points="50,0 100,0 50,100 0,100" />
                </svg>
              )
            }

            <Popover>
              <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                  <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                      <Link href="/">
                        <Image
                          alt="anilist"
                          className="h-8 w-auto sm:h-10 rounded"
                          height={40}
                          src="https://www.gitbook.com/cdn-cgi/image/width=40,height=40,fit=contain,dpr=2,format=auto/https%3A%2F%2F553834213-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-LHizcWWtVphqU90YAXO%252Favatar.png%3Fgeneration%3D1531944291782256%26alt%3Dmedia"
                          width={40}
                        />
                      </Link>
                      <div className="-mr-2 flex items-center md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
                          <span className="sr-only">Open main menu</span>
                          <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </nav>
              </div>

              <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                  <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="px-5 pt-4 flex items-center justify-between">
                      <div>
                        <img
                          className="h-8 w-auto"
                          src="https://tailwindui.com/img/logos/workflow-mark-sky-600.svg"
                          alt=""
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
                          <span className="sr-only">Close main menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                      {navigation.map((item) => (
                        <div
                          key={item.name}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        >
                          <Link href={item.href}>
                            {item.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            {
              isHome && (
                <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                  <div className="sm:text-center lg:text-left">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                      <span className="block xl:inline">The next-generation</span>{' '}
                      <span className="block text-sky-600 xl:inline">anime platform</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      What are your highest rated genres or most watched anime and manga?
                      Discover and collect your favorite anime and manga with unofficial Anilist now.
                    </p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                      <div className="rounded-md shadow">
                        <a
                          href="#"
                          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 md:py-4 md:text-lg md:px-10"
                        >
                          Select Bulk
                        </a>
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <button
                          disabled
                          href="#"
                          className="disabled:bg-slate-50 disabled:text-slate-500 w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-sky-700 bg-sky-100 hover:bg-sky-200 md:py-4 md:text-lg md:px-10"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }

          </div>
        </div>

        {
          isHome && (
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <img
                className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                src="https://images6.alphacoders.com/656/thumb-1920-656029.png"
                alt=""
              />
            </div>
          )
        }

      </div>
    </>
  )

}