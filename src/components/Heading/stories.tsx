import { Meta, Story } from '@storybook/react'
import { Heading, HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading
} as Meta

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />

Default.args = {
  children: 'Mais populares',
  color: 'black',
  lineLeft: false,
  lineBottom: false,
  lineColor: 'primary',
  size: 'medium'
}
