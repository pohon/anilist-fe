import { useEffect, useState } from 'react'
import { ViewGridAddIcon } from '@heroicons/react/outline'
import Modal from "./Modal"
import getLocalCollections from '../utils/getLocalCollections'

export default function ModalCreateCollection({ open, onSuccess, setOpen }) {

  // states
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState('')

  // handlers
  const handleCreateNewCollection = () => {

    if (!inputValue) {
      setError('Collection name must not empty!')

      return
    }

    const currentCollections = getLocalCollections()
    const isNameDuplicate = currentCollections.findIndex(o => o?.['name'] === inputValue) > -1
    const isNonAlphanumeric = /[^a-zA-Z0-9 ]/.test(inputValue)

    if (isNameDuplicate) {
      setError('Collection name must be unique!')

      return
    }

    if (isNonAlphanumeric) {
      setError("Collection musn't contain special char!")

      return
    }

    const newCollections = [
      ...currentCollections,
      {
        'id': String(Date.now()),
        'name': inputValue,
        'animeIds': []
      }]

    localStorage.setItem("MY_ANI_COLLECTION", JSON.stringify(newCollections))

    // close modal
    setOpen()

    // call parent
    onSuccess()

    // reset states
    setInputValue('')
  }
  const handleInputChange = evt => {
    setInputValue(evt.target.value)
  }

  // effects
  useEffect(() => {
    // remove error text in 1 seconds
    if (error) {
      setTimeout(() => setError(''), 1000)
    }
  }, [error])

  return (
    <Modal
      description="Please select a new collection name"
      Icon={ViewGridAddIcon}
      onChange={setOpen}
      onPrimaryButtonClick={handleCreateNewCollection}
      onSecondaryButtonClick={setOpen}
      open={open}
      primaryButtonText="Create"
      secondaryButtonText="Cancel"
      title="Create new collection"
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