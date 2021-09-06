import { Meta, Story } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import { HeartOutline } from '@styled-icons/evaicons-outline/HeartOutline'
import { Button, ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Add to cart',
    size: 'medium',
    fullWidth: false,
    minimal: false
  },
  parameters: {
    controls: {
      exclude: ['icon', 'as']
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

export const withIcon: Story<ButtonProps> = (args) => <Button {...args} />

withIcon.args = {
  icon: <AddShoppingCart />
}

export const minimal: Story<ButtonProps> = (args) => <Button {...args} />

minimal.args = {
  children: 'Wishlist',
  icon: <HeartOutline />,
  minimal: true
}

export const asLink: Story<ButtonProps> = (args) => <Button {...args} />

asLink.args = {
  as: 'a',
  href: '/link'
}
