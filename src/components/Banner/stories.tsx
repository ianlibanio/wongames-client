import { Meta, Story } from '@storybook/react'
import { Banner, BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://cdn1.epicgames.com/1b8a504ec52d4430b65cca2990ad6c7f/offer/EGS_Crashlands_ButterscotchShenanigans_S1-2560x1440-2971f9f3be6e0b5b7e69818577240f54.jpg',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLabel: 'Buy now',
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
  ribbon: 'Bestseller',
  ribbonSize: 'normal',
  ribbonColor: 'secondary'
}
