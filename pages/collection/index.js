import Link from "next/link"
import getLocalCollections from "../../utils/getLocalCollections"
import ClientOnly from '../../components/ClientOnly'
import CollectionNameTd from "./components/CollectionNameTd"
import RemoveCollectionModal from "./components/RemoveCollectionModal"
import { useContext, useState } from "react"
import { ToastContext } from '../../components/Toast'
import ModalUpsertCollection from '../../components/ModalUpsertCollection'
import useToggle from '../../hooks/useToggle'

export const columns = [{
  header: 'No',
  field: 'no'
}, {
  header: 'Name',
  field: 'name'
}, {
  header: 'Created Date',
  field: 'createdDate'
}, {
  header: 'Action',
  field: 'action'
}]

export default function CollectionList() {

  // contexes
  const { showToast } = useContext(ToastContext)

  // local storage
  const myCollections = getLocalCollections()

  // states
  const [toBeRemovedCollection, setToBeRemovedCollection] = useState({})
  const [toBeUpdatedCollectionId, setToBeUpdatedCollectionId] = useState('')
  const [openCreateCollectionModal, toggleOpenCreateCollectionModal] = useToggle(false)

  // handlers
  const handleToggleRemove = collection => evt => {
    evt.stopPropagation()
    setToBeRemovedCollection({ ...collection })
  }
  const handleToggleUpdate = collectionId => evt => {
    evt.stopPropagation()
    setToBeUpdatedCollectionId(collectionId)
  };
  const handleConfirmRemove = () => {
    const currentCollections = getLocalCollections()

    const newCollections = currentCollections.filter(collection => collection['id'] !== toBeRemovedCollection['id'])

    localStorage.setItem("MY_ANI_COLLECTION", JSON.stringify(newCollections))

    setToBeRemovedCollection({})

    showToast({ message: 'Collection successfully deleted' });
  }
  const handleSuccessCreate = () => {
    showToast({ message: 'New collection successfully created' });
  }
  const handleCloseUpdateCollectionModal = () => {
    setToBeUpdatedCollectionId('')
  };
  const handleSuccessUpdate = () => {
    showToast({ message: 'Collection successfully updated' });
  }

  return (
    <div className="bg-gray-200 h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Collection List</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <button
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700"
              onClick={toggleOpenCreateCollectionModal}
            >
              Add a Collection
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <ClientOnly>
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      {
                        columns.map((col, idx) =>
                          <th
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            key={`th-${idx}`}
                            scope="col"
                          >
                            {col['header']}
                          </th>
                        )
                      }
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {
                      myCollections?.length > 0 ? (
                        myCollections.map((collection, rowIndex) => (
                          <Link key={`tr-${rowIndex}`} href={`/collection/${collection.id}`}>
                            <tr className="hover:bg-sky-100 cursor-pointer">
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {rowIndex + 1}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <CollectionNameTd collection={collection} />
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{new Date(parseFloat(collection.id)).toDateString()}</div>
                                <div className="text-sm text-gray-500">{new Date(parseFloat(collection.id)).toTimeString()}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <button
                                  onClick={handleToggleRemove(collection)}
                                  className="text-red-600 hover:text-red-900 cursor-pointer text-sm font-medium">
                                  Remove
                                </button>

                                <button
                                  onClick={handleToggleUpdate(collection.id)}
                                  className="text-sky-600 hover:text-red-900 cursor-pointer text-sm font-medium pl-3">
                                  Edit
                                </button>
                              </td>
                            </tr>
                          </Link>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={4} className="px-6 py-3 text-center text-gray-800">No collection yet</td>
                        </tr>
                      )
                    }
                  </tbody>
                </table>
              </ClientOnly>
            </div>
          </div>
        </div>
      </div>

      <RemoveCollectionModal
        collection={toBeRemovedCollection}
        onConfirm={handleConfirmRemove}
        onClose={() => setToBeRemovedCollection({})}
      />

      <ModalUpsertCollection
        open={openCreateCollectionModal}
        onSuccess={handleSuccessCreate}
        setOpen={toggleOpenCreateCollectionModal}
      />

      <ModalUpsertCollection
        collectionId={toBeUpdatedCollectionId}
        open={!!toBeUpdatedCollectionId}
        onSuccess={handleSuccessUpdate}
        setOpen={handleCloseUpdateCollectionModal}
      />
    </div>
  )
}