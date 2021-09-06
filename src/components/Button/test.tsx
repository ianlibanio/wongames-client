import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test-utils'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import { Button } from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>Add to cart</Button>)

    expect(screen.getByRole('button', { name: /Add to cart/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Add to cart</Button>)

    expect(screen.getByRole('button', { name: /Add to cart/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Add to cart</Button>)

    expect(screen.getByRole('button', { name: /Add to cart/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    })
  })

  it('should render a fullWidth version', () => {
    renderWithTheme(<Button fullWidth>Add to cart</Button>)

    expect(screen.getByRole('button', { name: /Add to cart/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Add to cart</Button>
    )

    expect(screen.getByText(/Add to cart/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render a minimal version', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />} minimal>
        Add to cart
      </Button>
    )

    expect(screen.getByRole('button', { name: /Add to cart/i })).toHaveStyle({
      background: 'none',
      color: '#F231A5'
    })

    expect(
      screen.getByRole('button', { name: /Add to cart/i })
    ).toHaveStyleRule('background', 'none', {
      modifier: ':hover'
    })
  })

  it('should render Button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link" fullWidth>
        Add to cart
      </Button>
    )

    expect(screen.getByRole('link', { name: /Add to cart/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
