import { Meta, Story } from '@storybook/react'
import { BannerProps } from 'components/Banner'
import { BannerSlider, BannerSliderProps } from '.'

const items = [
  {
    img: 'https://i.imgur.com/4fvu9zP.jpeg',
    title: 'Defy death 1',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: 'Bestseller',
    ribbonColor: 'secondary'
  },
  {
    img: 'https://i.imgur.com/4fvu9zP.jpeg',
    title: 'Defy death 2',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  {
    img: 'https://i.imgur.com/4fvu9zP.jpeg',
    title: 'Defy death 3',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLabel: 'Buy now',
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
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<BannerSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <BannerSlider {...args} />
  </div>
)
