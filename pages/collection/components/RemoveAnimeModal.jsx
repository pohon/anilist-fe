import { ExclamationIcon } from '@heroicons/react/outline'
import Modal from '../../../components/Modal'

export default function RemoveAnimeModal({ anime, collection, onConfirm, onClose }) {
  return (
    <Modal
      description={`Are you sure you want to remove ${anime?.Media?.title?.romaji} from ${collection?.name} ?`}
      Icon={ExclamationIcon}
      onChange={onClose}
      onPrimaryButtonClick={onConfirm}
      onSecondaryButtonClick={onClose}
      open={!!anime?.Media?.id}
      primaryButtonText="Remove"
      secondaryButtonText="Cancel"
      themeColor='red'
      title="Remove Confirmation"
    />
  )
}