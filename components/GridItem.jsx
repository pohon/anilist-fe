/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

export default function GridItem({ checked, media, onCheck, selectBulkMode }) {
  return (
    <div className="w-full
        aspect-w-1
        aspect-h-1
        overflow-hidden
        relative
        xl:aspect-w-7
        xl:aspect-h-8">
      {
        selectBulkMode && (
          <input
            data-testid={`anime-bulk-checkbox-${media.id}`}
            type="checkbox"
            defaultChecked={checked}
            className="
            absolute
            bg-white
            border-2
            border-gray-300
            cursor-pointer
            focus:ring-sky-500
            h-8
            left-3
            rounded
            text-sky-600
            top-3
            w-8
            z-10"
            onChange={onCheck}
            value={media.id}
          />
        )
      }
      <Link href={`/detail/${media.id}`}>
        <img
          src={media.coverImage?.large}
          alt={media.title?.romaji}
          className="
              bg-gray-200
              w-full
              h-72
              object-center
              object-cover
              hover:opacity-75
              cursor-pointer
              rounded-lg"
        />
      </Link>
      <h3 className="mt-4 text-sm text-gray-700">{media.title?.romaji}</h3>
    </div>
  )
}