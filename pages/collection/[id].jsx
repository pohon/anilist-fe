/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import { ToastContext } from '../../components/Toast'
import getLocalCollections from '../../utils/getLocalCollections'
import AnimeCard from './components/AnimeCard'
import RemoveAnimeModal from './components/RemoveAnimeModal'

export default function CollectionDetail() {

  // path param
  const { id: collectionId } = useRouter().query

  // contexes
  const { showToast } = useContext(ToastContext)

  // local storage
  const currentCollections = getLocalCollections()
  const collectionDetail = currentCollections.find(collection => collection['id'] === collectionId) || /* istanbul ignore next */ {}
  const { name, animeIds } = collectionDetail

  const [toBeRemovedAnime, setToBeRemovedAnime] = useState({})

  // handlers
  const handleToggleRemoveAnime = animeData => {
    setToBeRemovedAnime(animeData)
  }
  const handleConfirmRemoveAnime = () => {
    const newCollections = getLocalCollections()

    for (let i = 0; i < newCollections.length; i++) {
      const element = newCollections[i]

      if (element['id'] === collectionId) {

        const toBeRemovedIndex = newCollections[i]['animeIds']?.indexOf(toBeRemovedAnime?.Media?.id)

        newCollections[i]['animeIds'].splice(toBeRemovedIndex, 1)

        break;
      }

    }

    localStorage.setItem("MY_ANI_COLLECTION", JSON.stringify(newCollections))

    // close modal
    setToBeRemovedAnime({})

    // show toast
    showToast({ message: 'Anime removed from collection' })
  }
  const handleResetRemoveAnime = () => {
    setToBeRemovedAnime({})
  }

  return (
    <>
      <div className='min-h-screen'>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            <span className="block">{name}</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto pb-12 sm:px-6 lg:px-8">
          <div className="bg-white">
            <div className="max-w-2xl mx-auto pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">

              <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-3 gap-x-6 xl:grid-cols-5 xl:gap-x-8">
                {
                  animeIds?.length > 0 ? (
                    animeIds?.map(animeId =>
                      <AnimeCard
                        animeId={animeId}
                        onToggleRemove={handleToggleRemoveAnime}
                        key={animeId}
                      />
                    )
                  ) : (
                    <div className='text-gray-600'>No anime yet</div>
                  )
                }
              </div>
            </div>
          </div>

        </div>
      </div>
      <RemoveAnimeModal
        anime={toBeRemovedAnime}
        collection={collectionDetail}
        onConfirm={handleConfirmRemoveAnime}
        onClose={handleResetRemoveAnime}
      />
    </>
  )
}
