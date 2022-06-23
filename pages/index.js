import { useQuery } from "@apollo/client"
import { useState } from "react"
import cn from 'classnames'
import GridItem from "../components/GridItem"
import Pagination from "../components/Pagination"
import SkeletonLoader from "../components/SkeletonLoader"
import PAGE_QUERY from "../queries/page.graphql"
import useToggle from "../hooks/useToggle"
import ModalAddToCollection from "../components/ModalAddToCollection"

const DEFAULT_SIZE = 10

export default function Home() {

  // states
  const [variables, setVariables] = useState({
    'page': 1,
    'perPage': DEFAULT_SIZE
  })
  const { data, loading, error } = useQuery(PAGE_QUERY, { variables })
  const [selectBulkMode, setSelectBulkMode] = useState(false)
  const [checkedAnimes, setCheckedAnimes] = useState([])
  const [openCollectModal, toggleOpenCollectModal] = useToggle(false)

  // handlers
  const handlePageChange = newOffset => {
    setVariables(curr => ({
      ...curr,
      page: newOffset / curr.perPage + 1
    }))

    window && window.scrollTo(0, 750)
  }

  const handleItemCheck = evt => {
    setCheckedAnimes(curr => {
      if(evt.target.checked) {

        return [ ...curr, evt.target.value ]
      }

      return curr.filter(animeId => animeId !== evt.target.value)
    })
  }

  const handleToggleSelectBulk = () => {
    setSelectBulkMode(curr => {

      if(curr) {
        setCheckedAnimes([])
      }

      return !curr
    })
  }

  const handleSuccessAddBulk = () => {
    // reset mode
    setSelectBulkMode(false)
    // reset checked
    setCheckedAnimes([])
  }

  return (
    <div className="max-w-7xl mx-auto pt-6 pb-12 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Anime List</span>
          </h2>
          {
            checkedAnimes.length > 0 && <div className="w-full pt-3 text-gray-600 text-sm">{`${checkedAnimes.length} anime(s) selected`}</div>
          }
        </div>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md">
            <button
              className={cn("inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white", {
                'bg-sky-600': !selectBulkMode,
                'hover:bg-sky-700': !selectBulkMode,
                'bg-gray-500': selectBulkMode,
                'hover:bg-gray-600': selectBulkMode
              })}
              onClick={handleToggleSelectBulk}
            >
              {
                selectBulkMode ? 'Cancel' : 'Select Bulk'
              }
            </button>
            <button
              className="
                ml-3
                inline-flex
                items-center
                justify-center
                px-5
                py-3
                border
                border-transparent
                text-base
                font-medium
                rounded-md
                text-white
                bg-indigo-600
                hover:bg-indigo-700
                disabled:bg-slate-50
                disabled:text-slate-500"
              disabled={checkedAnimes.length < 1}
              onClick={toggleOpenCollectModal}
            >
              Add to collections
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
          {
            loading ? (
              Array.from(Array(variables.perPage), (e, idx) => (
                <SkeletonLoader key={`skeleton-loader-${idx}`} />
              ))
            ) :
              data?.Page?.media?.map(media => (
                <GridItem
                  checked={checkedAnimes?.includes(media.id)}
                  onCheck={handleItemCheck}
                  key={media.id}
                  media={media}
                  selectBulkMode={selectBulkMode}
                />
              ))
          }
        </div>
      </div>

      {
        !loading && !error && (
          <Pagination
            count={data?.Page?.pageInfo?.total}
            limit={variables.perPage}
            offset={variables.perPage * (variables.page - 1)}
            onChange={handlePageChange}
          />
        )
      }

      <ModalAddToCollection
        onSuccess={handleSuccessAddBulk}
        open={openCollectModal}
        setOpen={toggleOpenCollectModal}
        toBeAddedAnimeIds={checkedAnimes}
      />
    </div>
  )
}