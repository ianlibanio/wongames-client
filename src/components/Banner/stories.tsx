import { Meta, Story } from '@storybook/react'
import { Banner, BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://nintendoboy.com.br/wp-content/uploads/2018/11/H2x1_NSwitchDS_Crashlands_image1600w.jpg',
    title: 'Desafie a morte',
    subtitle: '<p>Jogue a nova temporada de <strong>CrashLands</strong></p>',
    buttonLabel: 'Comprar agora',
    buttonLink: '/games/defy-death'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<BannerProps> = (args) => <Banner {...args} />
