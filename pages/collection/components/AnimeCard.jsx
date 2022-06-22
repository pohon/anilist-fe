/* eslint-disable @next/next/no-img-element */

import { useQuery } from "@apollo/client"
import Link from "next/link"
import MEDIA_QUERY from "../../../queries/media.graphql"

const AnimeCard = ({ animeId, onToggleRemove }) => {

  // states
  const { data } = useQuery(MEDIA_QUERY, { variables: { 'id': animeId }, skip: !animeId })

  // handlers
  const handleClickRemove = evt => {
    evt.stopPropagation()
    onToggleRemove(data)
  }

  return (
    <Link href={`/detail/${animeId}`}>
      <div className="flex flex-col justify-between">
        <div>
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <img
              src={data?.Media?.coverImage?.large}
              alt={data?.Media?.title?.romaji}
              className="w-full h-full object-center object-cover group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-2 mb-1 text-sm text-gray-700">{data?.Media?.title?.romaji}</h3>
        </div>
        <button onClick={handleClickRemove} className='w-full inline-flex items-center justify-center py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-500'>Remove</button>
      </div>
    </Link>
  )
}

export default AnimeCard