import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test-utils'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import { Button } from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>Adicionar</Button>)

    expect(screen.getByRole('button', { name: /Adicionar/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Adicionar</Button>)

    expect(screen.getByRole('button', { name: /Adicionar/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Adicionar</Button>)

    expect(screen.getByRole('button', { name: /Adicionar/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    })
  })

  it('should render a fullWidth version', () => {
    renderWithTheme(<Button fullWidth>Adicionar</Button>)

    expect(screen.getByRole('button', { name: /Adicionar/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Adicionar</Button>
    )

    expect(screen.getByText(/Adicionar/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render Button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link" fullWidth>
        Adicionar
      </Button>
    )

    expect(screen.getByRole('link', { name: /Adicionar/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
