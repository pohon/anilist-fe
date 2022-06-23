import { render, fireEvent, act, within, findByText } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import '@testing-library/jest-dom'
import { useRouter } from 'next/router'
import CollectionDetail from '../pages/collection/[id]'
import { AppBody } from '../pages/_app'

// mocks
import mocks from '../__mocks__/mediaQueryGQLMocks'
import hasDataLocalStorageMock from '../__mocks__/hasDataLocalStorageMock'

jest.mock('next/router')

const emptyDataLocalStorage = [{
  id: '1655912522022',
  name: 'My First Collection',
  animeIds: []
}]

describe('Collection Detail', () => {

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should render empty anime correctly', async () => {
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

  it('should handle remove anime from collection correctly', async () => {
    localStorage.setItem("MY_ANI_COLLECTION", JSON.stringify(hasDataLocalStorageMock))

    useRouter.mockReturnValue({
      query: { id: hasDataLocalStorageMock[0].id }
    })

    const { findByText, findByRole, queryAllByRole } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <AppBody Component={CollectionDetail} />
      </MockedProvider >
    )
    expect(await findByText('Cowboy Bebop')).toBeInTheDocument()
    expect(await findByText('Cowboy Bebop: Tengoku no Tobira')).toBeInTheDocument()

    fireEvent.click(queryAllByRole('button', { name: /remove/i })[0])
    const dialog = await findByRole('dialog', { name: /remove confirmation/i })
    const cancelRemoveBtn = await within(dialog).findByRole('button', { name: /cancel/i })
    fireEvent.click(cancelRemoveBtn)

    fireEvent.click(queryAllByRole('button', { name: /remove/i })[0])
    const newDialog = await findByRole('dialog', { name: /remove confirmation/i })
    const confirmRemoveBtn = await within(newDialog).findByRole('button', { name: /remove/i })
    fireEvent.click(confirmRemoveBtn)

    expect(await findByText((/anime removed from collection/i))).toBeInTheDocument()
  })
})