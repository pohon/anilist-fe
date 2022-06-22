import { render, fireEvent, act, within, findByText } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import '@testing-library/jest-dom'
import { useRouter } from 'next/router'
import CollectionDetail from '../pages/collection/[id]'
import { AppBody } from '../pages/_app'
import getLocalCollections from '../utils/getLocalCollections'
import mocks from '../__mocks__/CollectionDetail'

jest.mock('next/router')

const emptyDataLocalStorage = [{
  id: '1655912522022',
  name: 'My First Collection',
  animeIds: []
}]

const hasDataLocalStorage = [{
  id: '1655912522022',
  name: 'My First Collection',
  animeIds: ['1','5']
}]

describe('Collection Detail', () => {

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should render no anime correctly', async () => {
    localStorage.setItem("MY_ANI_COLLECTION", JSON.stringify(emptyDataLocalStorage))

    useRouter.mockReturnValue({
      query: { id: emptyDataLocalStorage[0].id }
    })

    const { findByText } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <AppBody Component={CollectionDetail} />
      </MockedProvider >
    )

    expect(await findByText((/no anime yet/i))).toBeInTheDocument()
  })

  it('should render anime exists correctly', async () => {
    localStorage.setItem("MY_ANI_COLLECTION", JSON.stringify(hasDataLocalStorage))

    useRouter.mockReturnValue({
      query: { id: hasDataLocalStorage[0].id }
    })

    const { findByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <AppBody Component={CollectionDetail} />
      </MockedProvider >
    )

    expect(await findByText('Cowboy Bebop')).toBeInTheDocument
    expect(await findByText('Cowboy Bebop: Tengoku no Tobira')).toBeInTheDocument
  })


})