import { Meta, Story } from '@storybook/react'
import { MediaMatch } from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch,
  parameters: {
    controls: {
      include: 'title'
    }
  }
} as Meta

export const Desktop: Story = ({ title }) => (
  <MediaMatch greaterThan="medium">{title}</MediaMatch>
)

Desktop.args = {
  title: 'Only on Desktop'
}

export const Mobile: Story = ({ title }) => (
  <MediaMatch lessThan="medium">{title}</MediaMatch>
)

Mobile.args = {
  title: 'Only on Mobile'
}

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
