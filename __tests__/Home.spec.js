import { render, screen, waitFor, fireEvent, within, findAllByTestId, findByTestId, queryAllByAltText, findAllByRole } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import '@testing-library/jest-dom'
import Home from '../pages/index'
import mocks from '../__mocks__/pageQueryGQLMocks'
import hasDataLocalStorageMock from '../__mocks__/hasDataLocalStorageMock'

describe('Home', () => {
  it('should run pagination correctly', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Home />
      </MockedProvider >
    )

    const cowboyBebop = await waitFor(() => screen.getByRole('heading', { name: /cowboy bebop: tengoku no tobira/i }))
    const navigation = screen.getByRole('navigation', {
      name: /pagination/i
    });
    const page2button = within(navigation).getByText(/2/i);
    expect(cowboyBebop).toBeInTheDocument()

    // hit 2nd page
    fireEvent.click(page2button)
    const naruto = await waitFor(() => screen.getByRole('heading', {
      name: /naruto/i
    }))
    expect(naruto).toBeInTheDocument()
  })

  it('should handle add bulk anime to collections correctly', async () => {
    
    localStorage.setItem("MY_ANI_COLLECTION", JSON.stringify(hasDataLocalStorageMock))

    const { findByRole, findByTestId, queryAllByRole } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Home />
      </MockedProvider >
    )

    fireEvent.click(await findByRole('button', { name: /select bulk/i }))

    // check cowboy bebop
    fireEvent.click(await findByTestId('anime-bulk-checkbox-1'), {
      target: { checked: true, value: '1' }
    })
    // uncheck cowboy bebop
    fireEvent.click(await findByTestId('anime-bulk-checkbox-1'), {
      target: { checked: false, value: '1' }
    })

    expect(queryAllByRole('checkbox').length).toBe(10)

    fireEvent.click(await findByRole('button', { name: /cancel/i }))

    expect(queryAllByRole('checkbox').length).toBe(0)
  })
})