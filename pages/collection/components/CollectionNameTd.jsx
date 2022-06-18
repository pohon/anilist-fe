/* eslint-disable @next/next/no-img-element */
import { useQuery } from "@apollo/client"
import { QuestionMarkCircleIcon } from '@heroicons/react/outline'
import MEDIA_QUERY from "../../../queries/media.graphql"

export default function CollectionNameTd({ collection }) {

  // props
  const firstAnimeId = collection?.['animeIds']?.[0]

  // states
  const { data } = useQuery(MEDIA_QUERY, { variables: { 'id': firstAnimeId }, skip: !firstAnimeId })

  return (
    <div className="flex items-center">
      <div className="flex-shrink-0 h-10 w-10">
        {
          data?.Media?.coverImage?.large ? (
            <img
              className="h-10 w-10 object-cover rounded-full"
              src={data.Media.coverImage.large}
              alt={data?.Media?.title?.romaji}
            />
          ) : (
            <div className="bg-gray-100 mx-auto flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                <QuestionMarkCircleIcon className="text-gray-600 h-6 w-6" aria-hidden="true" />
            </div>
          )
        }
      </div>
      <div className="ml-4">
        <div className="text-sm font-medium text-gray-900 capitalize">{collection['name']}</div>
        <div className="text-sm text-gray-500">{collection['id']}</div>
      </div>
    </div>
  )
}