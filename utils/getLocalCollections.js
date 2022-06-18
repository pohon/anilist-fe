export default function getLocalCollections() {
  if (typeof window === 'undefined') {
    return []
  }

  return JSON.parse(localStorage.getItem('MY_ANI_COLLECTION')) || []
}