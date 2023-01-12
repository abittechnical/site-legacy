import type { Meta, StoryObj } from '@storybook/react'
import { Header } from '../components/'
import type { HeaderProps } from '../components/'

const meta: Meta<HeaderProps> = {
  title: 'Layout/Header',
  component: Header,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<HeaderProps>

export const Default: Story = {
  args: {},
}
