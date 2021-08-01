import { Meta, Story } from '@storybook/react'
import { Logo, LogoProps } from '.'

export default {
  title: 'Logo',
  component: Logo,
  args: {
    color: 'white',
    size: 'normal',
    hideOnMobile: false
  }
} as Meta

export const Default: Story<LogoProps> = (args) => <Logo {...args} />
