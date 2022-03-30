import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Body from './Body'

describe('Body component', () => {

  test('should render Trending subtitle', async () => {
    render(<Body />)

    const paragraph = screen.getByRole('paragraph',)
    expect(paragraph).toHaveTextContent(/Loading.../i)
  })
  test('should change the Trending subtitle to Search Results after a sucessful search', async () => {
    render(<Body />)

    const inputElement = screen.getByPlaceholderText(/Search…/i)

    fireEvent.change(inputElement, { target: { value: 'Oscar' } })
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 13 })

    await waitFor(() => {
      const subTitleElement = screen.getByRole('heading', { name: /Search Results/i })
      expect(subTitleElement).toHaveTextContent(/Search Results/i)
    })
  })


})