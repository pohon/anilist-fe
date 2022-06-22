import { render, screen, waitFor, fireEvent, within } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import '@testing-library/jest-dom'
import Home from '../pages/index'
import mocks from '../__mocks__/Home'

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
})