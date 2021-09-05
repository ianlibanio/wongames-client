import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test-utils'

import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import { Home, HomeTemplateProps } from '.'

const props = {
  banners: bannersMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcomingGames: [gamesMock[0]],
  upcomingHighlight: highlightMock,
  upcomingMoreGames: [gamesMock[0]],
  freeHighlight: highlightMock,
  freeGames: [gamesMock[0]]
} as HomeTemplateProps

describe('<Home />', () => {
  it('should render the template correctly', () => {
    renderWithTheme(<Home {...props} />)

    // menu
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    // footer
    expect(
      screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument()

    // logos (menu/footer)
    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)

    // sections
    expect(screen.getByRole('heading', { name: /News/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Most popular/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Upcoming/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Free games/i })
    ).toBeInTheDocument()

    // banner
    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1)

    // game card
    expect(screen.getAllByText(/red dead redemption/i)).toHaveLength(5)

    // highlight
    expect(screen.getAllByText(/read dead is back!/i)).toHaveLength(3)
  })
})
