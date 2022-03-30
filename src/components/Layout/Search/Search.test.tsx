import { render, screen, fireEvent } from '@testing-library/react'
import SearchAppBar from './Search'



describe('Search component', () => {

  test('should render same text passed into title prop', () => {
    render(<SearchAppBar title="GIPHY NAV" searchHandler={ function (searchTerm: string): void {
    } } />)
    const titleElement = screen.getByRole('heading', { name: /giphy nav/i })

    expect(titleElement).toBeVisible();
  })

  test('should have a input element', () => {
    render(<SearchAppBar title="GIPHY NAV" searchHandler={ function (searchTerm: string): void {
    } } />)
    const inputElement = screen.getByPlaceholderText(/Search…/i)

    fireEvent.change(inputElement, { target: { value: 'Oscar' } })

    expect(inputElement).toBeVisible();
    expect(inputElement).toHaveValue('Oscar')
  })



})