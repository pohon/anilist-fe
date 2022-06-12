import Link from 'next/link'

export default function GridItem({ media }) {
  return (
    <div className="group relative">
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 cursor-pointer">
        <Link href={`/detail/${media.id}`}>
          <img
            src={media.coverImage?.large}
            alt={media.title?.romaji}
            className="w-full h-72 object-center object-cover group-hover:opacity-75"
          />
        </Link>
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{media.title?.romaji}</h3>
    </div>
  )
}