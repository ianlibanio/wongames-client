import { Meta, Story } from '@storybook/react'
import { GameCard, GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Red Dead Redemption',
    developer: 'Rockstar Games',
    price: 'R$235,00',
    img: '/img/red-dead-card.png',
    promotionalPrice: 'R$215,00',
    favorite: false
  },
  argTypes: {
    onFav: { action: 'clicked' }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

Default.parameters = {
  controls: {
    exclude: ['ribbon', 'ribbonSize', 'ribbonColor']
  }
}

export const WithRibbon: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonColor: 'primary',
  ribbonSize: 'small'
}
