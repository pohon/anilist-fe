import { useQuery } from "@apollo/client"
import { useState } from "react";
import Layout from "../components/Layout";
import Pagination from "../components/pagination";
import SkeletonLoader from "../components/SkeletonLoader";
import PAGE_QUERY from "../queries/page.graphql"

const DEFAULT_SIZE = 10;

export default function Home() {

  // states
  const [variables, setVariables] = useState({
    'page': 1,
    'perPage': DEFAULT_SIZE
  });
  const { data, loading, error } = useQuery(PAGE_QUERY, { variables });

  // handlers
  const handlePageChange = newOffset => {
    setVariables(curr => ({
      ...curr,
      page: newOffset / curr.perPage + 1
    }))
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto pt-6 pb-12 sm:px-6 lg:px-8">
        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">

            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">

              {
                loading ? (
                  Array.from(Array(variables.perPage), (e, idx) => (
                    <SkeletonLoader key={`list-skeleton-${idx}`} />
                  ))
                ) :
                  data?.Page?.media?.map((media) => (
                    <a key={media.id} className="group relative">
                      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                        <img
                          src={media.coverImage?.large}
                          alt={media.title?.romaji}
                          className="w-full h-72 object-center object-cover group-hover:opacity-75"
                        />
                      </div>
                      <h3 className="mt-4 text-sm text-gray-700">{media.title?.romaji}</h3>
                    </a>
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
  );
}