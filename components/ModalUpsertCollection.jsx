import { useEffect, useState } from 'react'
import { ViewGridAddIcon } from '@heroicons/react/outline'
import Modal from "./Modal"
import getLocalCollections from '../utils/getLocalCollections'

export default function ModalUpsertCollection({
  open,
  onSuccess,
  setOpen,
  collectionId
}) {

  // props
  const isCreate = !collectionId

  // states
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState('')

  // handlers
  const handleSubmit = () => {

    if (!inputValue) {
      setError('Collection name must not empty!')

      return
    }

    const isNonAlphanumeric = /[^a-zA-Z0-9 ]/.test(inputValue)
    if (isNonAlphanumeric) {
      setError("Collection musn't contain special char!")

      return
    }

    const currentCollections = getLocalCollections()
    const isNameDuplicate = currentCollections.findIndex(o => o?.['name'] === inputValue) > -1

    if (isNameDuplicate) {
      setError('Collection name must be unique!')

      return
    }

    const newCollections = isCreate ? [
      ...currentCollections,
      {
        'id': String(Date.now()),
        'name': inputValue,
        'animeIds': []
      }] : currentCollections.map(current => {

        if (current['id'] === collectionId) {

          return {
            ...current,
            'name': inputValue
          }
        }

        return current
      })


    localStorage.setItem("MY_ANI_COLLECTION", JSON.stringify(newCollections))
    
    // reset states
    setInputValue('')

    // call parent
    onSuccess && onSuccess()

    // close modal
    setOpen()
  }
  const handleInputChange = evt => {
    setInputValue(evt.target.value)
  }

  // effects
  useEffect(() => {
    // remove error text in 1 second
    if (error) {
      setTimeout(() => setError(''), 1000)
    }
  }, [error])

  return (
    <Modal
      description={"Please input new collection name"}
      Icon={ViewGridAddIcon}
      onChange={setOpen}
      onPrimaryButtonClick={handleSubmit}
      onSecondaryButtonClick={setOpen}
      open={open}
      primaryButtonText={isCreate ? "Create" : 'Update'}
      secondaryButtonText="Cancel"
      title={isCreate ? "Create new collection" : 'Update collection'}
    >
      <div className="px-4">
        <input
          type="text"
          name="newCollectionName"
          id="newCollectionName"
          value={inputValue}
          onChange={handleInputChange}
          className="mt-4 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border rounded-md"
        />
        <div className='text-sm text-red-600 text-center'>
          {error}
        </div>
      </div>
    </Modal>
  )
}