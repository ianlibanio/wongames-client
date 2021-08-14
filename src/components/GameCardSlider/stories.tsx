import { Meta, Story } from '@storybook/react'
import { GameCardProps } from 'components/GameCard'
import { GameCardSlider, GameCardSliderProps } from '.'

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

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: { items, color: 'white' },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<GameCardSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameCardSlider {...args} />
  </div>
)
