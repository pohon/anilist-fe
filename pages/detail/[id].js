import { useEffect, useState } from 'react'
import { useQuery } from "@apollo/client"
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import MEDIA_QUERY from "../../queries/media.graphql"
import Modal from '../../components/Modal'

export default function AnimeDetail() {

  // path param
  const { id } = useRouter().query

  // states
  const [variables, setVariables] = useState({ id })
  const [openCollectModal, setOpenCollectModal] = useState(true)
  const { data } = useQuery(MEDIA_QUERY, { variables, skip: !variables.id })

  useEffect(() => {
    if (id !== variables.id) {
      setVariables({ id })
    }
  }, [id])

  return (
    <Layout>
      <div className="bg-white">

        {/* Image gallery */}
        <div className="max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            <img
              src={data?.Media?.characterPreview?.edges?.[0]?.node?.image?.large}
              alt={data?.Media?.characterPreview?.edges?.[0]?.node?.name?.userPreferred}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src={data?.Media?.characterPreview?.edges?.[1]?.node?.image?.large}
                alt={data?.Media?.characterPreview?.edges?.[1]?.node?.name?.userPreferred}
                className="w-full h-72 object-center object-cover"
              />
            </div>
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src={data?.Media?.characterPreview?.edges?.[2]?.node?.image?.large}
                alt={data?.Media?.characterPreview?.edges?.[2]?.node?.name?.userPreferred}
                className="w-full h-72 object-center object-cover"
              />
            </div>
          </div>
          <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
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
            <p className="text-3xl text-gray-900">{data?.Media?.averageScore}%</p>

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
            >
              Add to Collection
            </button>
          </div>

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {/* Description and details */}
            <div>

              <div className="space-y-6">
                <p dangerouslySetInnerHTML={{ __html: data?.Media?.description }} className="text-base text-gray-900" />
              </div>
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

          </div>
        </div>
      </div>
      <Modal
        open={openCollectModal}
        setOpen={setOpenCollectModal}
      />
    </Layout>
  )

}