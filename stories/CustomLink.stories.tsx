import type { Meta, StoryObj } from '@storybook/react'
import { CustomLink } from '../components/'
import type { CustomLinkProps } from '../components/'

const meta: Meta<CustomLinkProps> = {
  title: 'Elements/CustomLink',
  component: CustomLink,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<CustomLinkProps>

export const Default: Story = {
  args: {
    href: '/post/[pid]',
    as: '/post/abc',
    children: 'First post',
  },
}
