import { Meta, Story } from '@storybook/react'
import { Highlight, HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead está de volta!',
    subtitle: 'Venha conhecer as novas aventuras de John Marston',
    backgroundImage: '/img/red-dead-img.png',
    buttonLabel: 'Comprar agora',
    buttonLink: '/rdr2',
    alignment: 'right'
  }
} as Meta

export const Default: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

export const WithFloatImage: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
}
