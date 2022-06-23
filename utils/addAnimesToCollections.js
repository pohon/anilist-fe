import getLocalCollections from "./getLocalCollections"

const addAnimesToCollections = (animeIds, collectionIds) => {

  const newCollections = getLocalCollections()?.map(collection => {

    if (collectionIds.includes(collection.id)) {

      const newAnimeIds = animeIds.filter(animeId => !collection.animeIds.includes(animeId))

      return ({
        ...collection,
        'animeIds': collection.animeIds.concat(newAnimeIds)
      })
    }
  })

  localStorage.setItem("MY_ANI_COLLECTION", JSON.stringify(newCollections))
}

export default addAnimesToCollections