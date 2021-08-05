import { Meta, Story } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import { Button, ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    icon: {
      type: ''
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
