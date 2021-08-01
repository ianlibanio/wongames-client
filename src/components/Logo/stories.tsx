import { Meta, Story } from '@storybook/react'
import { Logo, LogoProps } from '.'

export default {
  title: 'Logo',
  component: Logo
} as Meta

export const Default: Story<LogoProps> = (args) => <Logo {...args} />

Default.args = {
  color: 'white',
  size: 'normal',
  hideOnMobile: false
}
