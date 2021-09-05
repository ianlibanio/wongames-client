import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test-utils'

import { Ribbon } from '.'

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    renderWithTheme(<Ribbon>Bestselling</Ribbon>)

    expect(screen.getByText(/Bestselling/i)).toBeInTheDocument()
  })

  it('should render with the primary color by default', () => {
    renderWithTheme(<Ribbon>Bestselling</Ribbon>)

    expect(screen.getByText(/Bestselling/i)).toHaveStyle({
      backgroundColor: '#F231A5'
    })
  })

  it('should render with the secondary color', () => {
    renderWithTheme(<Ribbon color="secondary">Bestselling</Ribbon>)

    expect(screen.getByText(/Bestselling/i)).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })

  it('should render with the normal size as default', () => {
    renderWithTheme(<Ribbon>Bestselling</Ribbon>)

    expect(screen.getByText(/Bestselling/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem'
    })
  })

  it('should render with the small size', () => {
    renderWithTheme(<Ribbon size="small">Bestselling</Ribbon>)

    expect(screen.getByText(/Bestselling/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
