import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test-utils'

import { Footer } from '.'

describe('<Footer />', () => {
  it('should render 4 columns topics', () => {
    const { container } = renderWithTheme(<Footer />)

    expect(
      screen.getByRole('heading', { name: /contato/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /nos acompanhe/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /links/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /endereço/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
