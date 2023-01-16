import type { Meta, StoryObj } from '@storybook/react'
import { Badge, type BadgeProps } from '../components/'

const meta: Meta<BadgeProps> = {
  title: 'Elements/Badge',
  component: Badge,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<BadgeProps>

export const Default: Story = {
  args: {
    link: '/post/[pid]',
    text: 'First post',
  },
}
