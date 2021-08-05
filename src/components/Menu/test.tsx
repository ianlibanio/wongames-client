import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test-utils'

import { Menu } from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/abrir o menu/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/pesquisar/i)).toBeInTheDocument()
    expect(
      screen.getByLabelText(/abrir o carrinho de compras/i)
    ).toBeInTheDocument()
  })

  it('should handle the open/close mobile menu', () => {
    renderWithTheme(<Menu />)

    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    fireEvent.click(screen.getByLabelText(/abrir o menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    fireEvent.click(screen.getByLabelText(/fechar o menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it('should show register box when logged out', () => {
    renderWithTheme(<Menu />)

    expect(screen.queryByText(/minha conta/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/lista de desejos/i)).not.toBeInTheDocument()
    expect(screen.getByText(/entrar/i)).toBeInTheDocument()
    expect(screen.getByText(/crie sua conta/i)).toBeInTheDocument()
  })

  it('should show wishlist and account when logged in', () => {
    renderWithTheme(<Menu username="wongames" />)

    expect(screen.getByText(/minha conta/i)).toBeInTheDocument()
    expect(screen.getByText(/lista de desejos/i)).toBeInTheDocument()
    expect(screen.queryByText(/entrar/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/crie sua conta/i)).not.toBeInTheDocument()
  })
})
