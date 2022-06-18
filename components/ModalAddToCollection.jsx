import { useState } from 'react'
import { DocumentAddIcon, ExclamationIcon, ViewGridAddIcon } from '@heroicons/react/outline'
import Modal from "./Modal";

const DEFAULT_CHECKED_COLLECTION_IDS = []

export default function ModalAddToCollection({
  onToggleCreateNewCollection,
  onConfirmCollect,
  open,
  setOpen
}) {

  // local storage
  const currentCollections = JSON.parse(localStorage.getItem('MY_ANI_COLLECTION')) || [];
  const isCollectionEmpty = currentCollections.length === 0;

  // states
  const [checkedCollectionIds, setCheckedCollectionIds] = useState([...DEFAULT_CHECKED_COLLECTION_IDS]);

  // handlers
  const handleConfirmCollect = () => {
    onConfirmCollect(checkedCollectionIds)
  };
  const handleCheckboxChange = evt => {
    setCheckedCollectionIds(current => {
      const isWantToCheck = evt.target.checked;
      const currentId = evt.target.value;

      if (isWantToCheck) {

        return [...current, currentId];
      }

      return current.filter(currId => currId !== currentId);
    });
  };

  return (
    <Modal
      description={isCollectionEmpty ?
        "You don't have any collection yet. Please create first." :
        "Please select collections that you wish to add"
      }
      Icon={isCollectionEmpty ?
        ExclamationIcon : DocumentAddIcon
      }
      onChange={setOpen}
      onPrimaryButtonClick={isCollectionEmpty ?
        onToggleCreateNewCollection : handleConfirmCollect
      }
      onSecondaryButtonClick={setOpen}
      open={open}
      primaryButtonText={isCollectionEmpty ?
        <>
          <ViewGridAddIcon className="-ml-1 mr-2 h-5 w-5 text-white" aria-hidden="true" />
          Create Collection
        </> :
        "Save"
      }
      secondaryButtonText="Cancel"
      themeColor={isCollectionEmpty ? 'red' : 'sky'}
      title="Add to collections"
    >
      {
        !isCollectionEmpty && (
          <div className="my-3 px-5">
            {
              currentCollections?.map(collection => (
                <div key={collection?.id} className="flex items-center">
                  <input
                    value={collection?.id}
                    type="checkbox"
                    defaultChecked={checkedCollectionIds.indexOf(collection?.id) > -1}
                    onChange={handleCheckboxChange}
                    className="w-6 h-6 border-gray-300 rounded text-sky-600 focus:ring-sky-500"
                  />
                  <label
                    htmlFor={collection?.id}
                    className="ml-3 text-sm text-gray-600"
                  >
                    {collection?.name}
                  </label>
                </div>
              ))
            }
          </div>
        )
      }
    </Modal>
  )
}