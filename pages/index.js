import { useQuery } from "@apollo/client"
import { useState } from "react"
import GridItem from "../components/GridItem"
import Layout from "../components/Layout"
import Pagination from "../components/pagination"
import SkeletonLoader from "../components/SkeletonLoader"
import PAGE_QUERY from "../queries/page.graphql"

const DEFAULT_SIZE = 10

export default function Home() {

  // states
  const [variables, setVariables] = useState({
    'page': 1,
    'perPage': DEFAULT_SIZE
  })
  const { data, loading, error } = useQuery(PAGE_QUERY, { variables })

  // handlers
  const handlePageChange = newOffset => {
    setVariables(curr => ({
      ...curr,
      page: newOffset / curr.perPage + 1
    }))
  }

  return (
    <Layout isHome>
      <div className="max-w-7xl mx-auto pt-6 pb-12 sm:px-6 lg:px-8">
        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">

            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">

              {
                loading ? (
                  Array.from(Array(variables.perPage), (e, idx) => (
                    <SkeletonLoader key={`skeleton-loader-${idx}`} />
                  ))
                ) :
                  data?.Page?.media?.map((media) => (
                    <GridItem key={media.id} media={media} />
                  ))
              }

            </div>
          </div>
        </div>

        {
          !loading && !error && (
            <Pagination
              count={data?.Page?.pageInfo?.total || 0}
              limit={variables.perPage}
              offset={variables.perPage * (variables.page - 1)}
              onChange={handlePageChange}
            />
          )
        }

      </div>
    </Layout>
  )
}