import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test-utils'

import { Banner } from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1024x580',
  title: 'Desafie a morte',
  subtitle: '<p>Jogue a nova temporada de <strong>CrashLands</strong></p>',
  buttonLabel: 'Comprar agora',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('should render the banner correctly', () => {
    const { container } = renderWithTheme(<Banner {...props} />)

    expect(
      screen.getByRole('heading', { name: /Desafie a morte/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /Jogue a nova temporada de CrashLands/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', {
        name: /Desafie a morte/i
      })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
