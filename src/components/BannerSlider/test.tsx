import 'match-media-mock'
import { screen } from '@testing-library/react'

import { BannerSlider } from '.'
import { BannerProps } from 'components/Banner'
import { renderWithTheme } from 'utils/test-utils'

const items = [
  {
    img: 'https://cdn1.epicgames.com/1b8a504ec52d4430b65cca2990ad6c7f/offer/EGS_Crashlands_ButterscotchShenanigans_S1-2560x1440-2971f9f3be6e0b5b7e69818577240f54.jpg',
    title: 'Defy death 1',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: 'Bestseller'
  },
  {
    img: 'https://cdn1.epicgames.com/1b8a504ec52d4430b65cca2990ad6c7f/offer/EGS_Crashlands_ButterscotchShenanigans_S1-2560x1440-2971f9f3be6e0b5b7e69818577240f54.jpg',
    title: 'Defy death 2',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLabel: 'Buy now',
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
      screen.getByRole('heading', { name: /defy death 1/i, hidden: false })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /defy death 2/i, hidden: true })
    ).toBeInTheDocument()
  })

  it('should render with the dots', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-dots')).toBeInTheDocument()
  })
})
