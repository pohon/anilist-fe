import { ExclamationIcon } from '@heroicons/react/outline'
import Modal from '../../../components/Modal'

export default function RemoveCollectionModal({ collection, onConfirm, onClose }) {
  return (
    <Modal
      description={`Are you sure you want to remove ${collection?.name} ?`}
      Icon={ExclamationIcon}
      onChange={onClose}
      onPrimaryButtonClick={onConfirm}
      onSecondaryButtonClick={onClose}
      open={!!collection?.id}
      primaryButtonText="Remove"
      secondaryButtonText="Cancel"
      themeColor='red'
      title="Remove Confirmation"
    />
  )
}