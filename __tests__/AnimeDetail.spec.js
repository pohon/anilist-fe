import { render, fireEvent, act } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { useRouter } from 'next/router'
import '@testing-library/jest-dom'
import AnimeDetail from '../pages/detail/[id]'
import { AppBody } from '../pages/_app'
import mocks from '../__mocks__/mediaQueryGQLMocks'
import getLocalCollections from '../utils/getLocalCollections'

jest.mock('next/router')

describe('AnimeDetail', () => {

  it('should collect anime correctly', async () => {
    // mock
    jest.useFakeTimers()
    useRouter.mockReturnValue({
      'query': { 'id': '1' }
    })

    const { findByRole, findByText, queryByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <AppBody Component={AnimeDetail} />
      </MockedProvider >
    )

    // wait 
    const animeTitle = await findByText('Cowboy Bebop')
    expect(animeTitle).toBeInTheDocument()

    fireEvent.click(await findByRole('button', { name: /add to collection/i }))
    expect(await findByText("You don't have any collection yet. Please create first.")).toBeInTheDocument()

    fireEvent.click(await findByRole('button', { name: /create collection/i }))
    expect(await findByText("Create new collection")).toBeInTheDocument()

    // move to ModalUpsertCollection.spec.jsx later
    fireEvent.change(await findByRole('textbox'), {
      target: {
        value: 's0me!*(~'
      }
    })
    fireEvent.click(await findByText("Create"))
    expect(await findByText("Collection musn't contain special char!")).toBeInTheDocument()

    // move to ModalUpsertCollection.spec.jsx later
    fireEvent.change(await findByRole('textbox'), {
      target: {
        value: ''
      }
    })
    fireEvent.click(await findByText("Create"))
    expect(await findByText("Collection name must not empty!")).toBeInTheDocument()

    fireEvent.change(await findByRole('textbox'), {
      target: {
        value: 'My First Collection'
      }
    })
    fireEvent.click(await findByText("Create"))

    fireEvent.click(await findByRole('checkbox')), {
      target: {
        checked: true,
        value: getLocalCollections()[0]?.id
      }
    }
    fireEvent.click(await findByText("Save"))
    expect(await findByText("Anime added to collection")).toBeInTheDocument()
    expect(queryByText("Anime added to collection")).toBeTruthy()

    // fast forward 2 seconds
    act(() => {
      jest.runAllTimers()
    })
    expect(queryByText("Anime added to collection")).toBeFalsy()

    // reset
    jest.useRealTimers()
    jest.resetAllMocks()
  })
})