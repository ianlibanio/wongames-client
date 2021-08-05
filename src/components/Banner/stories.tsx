import { Meta, Story } from '@storybook/react'
import { Banner, BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://i.imgur.com/4fvu9zP.jpeg',
    title: 'Desafie a morte',
    subtitle: '<p>Jogue a nova temporada de <strong>CrashLands</strong></p>',
    buttonLabel: 'Comprar agora',
    buttonLink: '/games/defy-death'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
)

Default.parameters = {
  controls: {
    exclude: ['ribbon', 'ribbonSize', 'ribbonColor']
  }
}

export const WithRibbon: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: 'Lançamento',
  ribbonSize: 'normal',
  ribbonColor: 'primary'
}
