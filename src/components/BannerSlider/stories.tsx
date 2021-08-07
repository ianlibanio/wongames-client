import { Meta, Story } from '@storybook/react'
import { BannerProps } from 'components/Banner'
import { BannerSlider, BannerSliderProps } from '.'

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
  },
  {
    img: 'https://i.imgur.com/4fvu9zP.jpeg',
    title: 'Desafie a morte 3',
    subtitle: '<p>Jogue a nova temporada de <strong>CrashLands</strong></p>',
    buttonLabel: 'Comprar agora',
    buttonLink: '/games/defy-death'
  }
] as BannerProps[]

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<BannerSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <BannerSlider {...args} />
  </div>
)
