/* eslint-disable @next/next/no-img-element */
import { useContext } from "react"
import { useQuery } from "@apollo/client"
import { useRouter } from 'next/router'
import Link from 'next/link'
import cn from 'classnames';
import MEDIA_QUERY from "../../queries/media.graphql"
import ClientOnly from '../../components/ClientOnly'
import { ToastContext } from "../../components/Toast"
import useToggle from '../../hooks/useToggle'
import ModalCreateCollection from "../../components/ModalCreateCollection"
import ModalAddToCollection from "../../components/ModalAddToCollection"
import getLocalCollections from "../../utils/getLocalCollections"

export default function AnimeDetail() {

  // local storage
  const userCollections = getLocalCollections();

  // path param
  const { id } = useRouter().query
  const includedCollections = userCollections?.filter(collection => collection['animeIds'].includes(id)) || /* istanbul ignore next */ []

  // contexes
  const { showToast } = useContext(ToastContext)

  // states
  const [openCollectModal, toggleOpenCollectModal] = useToggle(false)
  const [openCreateCollectionModal, toggleOpenCreateCollectionModal] = useToggle(false);
  const { data } = useQuery(MEDIA_QUERY, { variables: { id }, skip: !id })

  const handleConfirmCollect = checkedCollectionIds => {
    const newCollections = getLocalCollections()

    for (let i = 0; i < newCollections.length; i++) {

      const collection = newCollections[i];
      if (checkedCollectionIds.includes(collection['id'])) {

        // anime doesn't exist in collection --> add anime
        if (!newCollections[i]?.['animeIds']?.includes(id)) {
          newCollections[i]?.['animeIds']?.push(id)
        }
      }
    }

    localStorage.setItem("MY_ANI_COLLECTION", JSON.stringify(newCollections))

    // close modal
    toggleOpenCollectModal()

    // show toast
    showToast({ message: 'Anime added to collection' })
  }

  return (
    <>
      <div className="bg-white">

        {/* Image gallery */}
        <div className="max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            <img
              src={data?.Media?.characterPreview?.edges?.[0]?.node?.image?.large}
              alt={data?.Media?.characterPreview?.edges?.[0]?.node?.name?.userPreferred}
              className="bg-gray-200 w-full h-full object-center object-cover"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src={data?.Media?.characterPreview?.edges?.[1]?.node?.image?.large}
                alt={data?.Media?.characterPreview?.edges?.[1]?.node?.name?.userPreferred}
                className="bg-gray-200 w-full h-72 object-center object-cover"
              />
            </div>
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src={data?.Media?.characterPreview?.edges?.[2]?.node?.image?.large}
                alt={data?.Media?.characterPreview?.edges?.[2]?.node?.name?.userPreferred}
                className="bg-gray-200 w-full h-72 object-center object-cover"
              />
            </div>
          </div>
          <div
            className={cn("bg-gray-200 spect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4", {
              'animate-pulse': !data?.Media?.coverImage?.extraLarge
            })}
            style={{ minHeight: '500px' }}
          >
            <img
              src={data?.Media?.coverImage?.extraLarge}
              alt={data?.Media?.description}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>

        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{data?.Media?.title?.romaji}</h1>
          </div>

          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <p className="text-3xl text-gray-900">
              {
                data?.Media?.averageScore && `${data.Media.averageScore}%`
              }
            </p>

            <div className="mt-1">
              <div className="text-sm font-medium text-sky-600">
                {data?.Media?.favourites} favourites
              </div>
            </div>

            <div className="mt-20">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-gray-900 font-medium">Characters</h3>
              </div>

              <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">

                {
                  data?.Media?.characterPreview?.edges?.map(character => (
                    <div key={character?.id} className='group relative flex flex-col text-sm sm:flex-1'>
                      <img
                        className='border rounded-md'
                        src={character?.node?.image?.large}
                        alt={character?.node?.name?.userPreferred}
                      />
                      <span className='text-sm text-gray-700'>{character?.node?.name?.userPreferred}</span>
                    </div>
                  ))
                }
              </div>
            </div>

            <button
              className="mt-10 w-full bg-sky-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
              onClick={toggleOpenCollectModal}
            >
              Add to Collection
            </button>
          </div>

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <div className="space-y-6">
              <p dangerouslySetInnerHTML={{ __html: data?.Media?.description }} className="text-base text-gray-900" />
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Tags</h3>

              <div className="mt-4">
                <ul role="list" className="pl-4 list-disc text-sm space-y-2">
                  {
                    data?.Media?.tags?.map(tag => (
                      <li key={tag?.id} className="text-gray-400">
                        <span className="text-gray-600">{tag?.name}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>

            {
              includedCollections?.length > 0 ? (
                <div className="mt-10">
                  <h3 className="text-sm font-medium text-gray-900">Added to these collection</h3>
                  <ul className="mt-4 flex flex-wrap">
                    {
                      includedCollections?.map(collection => (
                        <li
                          className="cursor-pointer border-2 px-3 py-2 rounded-3xl border-sky-600 text-sm mr-3 mb-3"
                          key={collection['id']}
                        >
                          <Link href={`/collection/${collection['id']}`}>{collection['name']}</Link>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              ) : (
                <div className="mt-10">
                  <h3 className="text-sm font-medium text-gray-900">Not collected by any collections yet</h3>
                </div>
              )
            }

          </div>
        </div>
      </div>
      <ClientOnly>
        <ModalAddToCollection
          onConfirmCollect={handleConfirmCollect}
          onToggleCreateNewCollection={toggleOpenCreateCollectionModal}
          open={openCollectModal}
          setOpen={toggleOpenCollectModal}
        />
        <ModalCreateCollection
          open={openCreateCollectionModal}
          setOpen={toggleOpenCreateCollectionModal}
        />
      </ClientOnly>
    </>
  )

}