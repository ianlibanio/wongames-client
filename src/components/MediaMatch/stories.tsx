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
  title: 'Desktop only'
}

export const Mobile: Story = ({ title }) => (
  <MediaMatch lessThan="medium">{title}</MediaMatch>
)

Mobile.args = {
  title: 'Mobile only'
}

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
