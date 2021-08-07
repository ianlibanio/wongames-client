import 'match-media-mock'
import { screen } from '@testing-library/react'

import { GameCardSlider } from '.'
import { GameCardProps } from 'components/GameCard'
import { renderWithTheme } from 'utils/test-utils'

const items = [
  {
    title: 'Red Dead Redemption',
    developer: 'Rockstar Games',
    img: '/img/red-dead-card.png',
    price: 'R$235,00',
    promotionalPrice: 'R$215,00'
  },
  {
    title: 'Red Dead Redemption',
    developer: 'Rockstar Games',
    img: '/img/red-dead-card.png',
    price: 'R$235,00',
    promotionalPrice: 'R$215,00'
  },
  {
    title: 'Red Dead Redemption',
    developer: 'Rockstar Games',
    img: '/img/red-dead-card.png',
    price: 'R$235,00',
    promotionalPrice: 'R$215,00'
  },
  {
    title: 'Red Dead Redemption',
    developer: 'Rockstar Games',
    img: '/img/red-dead-card.png',
    price: 'R$235,00',
    promotionalPrice: 'R$215,00'
  },
  {
    title: 'Red Dead Redemption',
    developer: 'Rockstar Games',
    img: '/img/red-dead-card.png',
    price: 'R$235,00',
    promotionalPrice: 'R$215,00'
  },
  {
    title: 'Red Dead Redemption',
    developer: 'Rockstar Games',
    img: '/img/red-dead-card.png',
    price: 'R$235,00',
    promotionalPrice: 'R$215,00'
  }
] as GameCardProps[]

describe('<GameCardSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if color passed', () => {
    renderWithTheme(<GameCardSlider items={items} color="white" />)

    expect(screen.getByLabelText(/Próximos jogos/i)).toHaveStyle({
      color: '#FAFAFA'
    })
    expect(screen.getByLabelText(/Jogos anteriores/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
