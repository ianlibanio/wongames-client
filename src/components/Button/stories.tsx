import { Meta, Story } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import { Button, ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  parameters: {
    controls: {
      exclude: ['icon', 'as']
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  children: 'Adicionar',
  size: 'medium',
  fullWidth: false
}

export const withIcon: Story<ButtonProps> = (args) => <Button {...args} />

withIcon.args = {
  children: 'Adicionar',
  size: 'medium',
  fullWidth: false,
  icon: <AddShoppingCart />
}

export const asLink: Story<ButtonProps> = (args) => <Button {...args} />

asLink.args = {
  children: 'Adicionar',
  size: 'medium',
  fullWidth: false,
  as: 'a',
  href: '/link'
}
