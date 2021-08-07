import 'match-media-mock'
import { screen } from '@testing-library/react'

import { BannerSlider } from '.'
import { BannerProps } from 'components/Banner'
import { renderWithTheme } from 'utils/test-utils'

const items = [
  {
    img: 'https://i.imgur.com/4fvu9zP.jpeg',
    title: 'Desafie a morte 1',
    subtitle: '<p>Jogue a nova temporada de <strong>CrashLands</strong></p>',
    buttonLabel: 'Comprar agora',
    buttonLink: '/games/defy-death',
    ribbon: 'Lançamento'
  },
  {
    img: 'https://i.imgur.com/4fvu9zP.jpeg',
    title: 'Desafie a morte 2',
    subtitle: '<p>Jogue a nova temporada de <strong>CrashLands</strong></p>',
    buttonLabel: 'Comprar agora',
    buttonLink: '/games/defy-death'
  }
] as BannerProps[]

describe('<BannerSlider />', () => {
  it('should render vertical slider', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-vertical')).toBeInTheDocument()
  })

  it('should render with 1 active item', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(2)
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)

    expect(
      screen.getByRole('heading', { name: /desafie a morte 1/i, hidden: false })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /desafie a morte 2/i, hidden: true })
    ).toBeInTheDocument()
  })

  it('should render with the dots', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-dots')).toBeInTheDocument()
  })
})
