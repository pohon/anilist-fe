import { render, fireEvent, within } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import '@testing-library/jest-dom'
import CollectionList from '../pages/collection/index'
import { AppBody } from '../pages/_app'

jest.mock('next/router')

describe('Collection List', () => {

  it('should handle create & remove collection correctly', async () => {
    const { findByRole, findByText, queryByText } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <AppBody Component={CollectionList} />
      </MockedProvider >
    )

    expect(await findByText('No collection yet')).toBeInTheDocument()
    
    fireEvent.click(await findByText('Add a Collection'))
    fireEvent.change(await findByRole('textbox'), {
      target: {
        value: 'My Second Collection'
      }
    })
    fireEvent.click(await findByText("Create"))
    expect(queryByText("My Second Collection")).toBeTruthy()

    // toggle remove
    fireEvent.click(await findByText("Remove"))

    // toggle remove
    fireEvent.click(await findByText("Cancel"))

    // toggle remove
    fireEvent.click(await findByText("Remove"))

    // confirm remove
    const dialog = await findByRole('dialog', {
      name: /remove confirmation/i
    });
    fireEvent.click(await within(dialog).getByRole('button', { name: /remove/i }))
    expect(await findByText('Collection successfully deleted')).toBeInTheDocument()
  })
})