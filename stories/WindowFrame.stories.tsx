import { Meta, StoryObj } from '@storybook/react'
import { WindowFrame } from '../components'
import type { WindowFrameProps } from '../components'

const Content = () => (
  <section className="prose xl:prose-lg">
    <h2>Guidelines</h2>
    <p>
      Contributing a stylesheet to Style Stage means you agree to abide by
      <a href="/guidelines/">our full guidelines</a>.
    </p>
    <h3>TL;DR</h3>
    <p>
      All submissions will be autoprefixed and prepended with the
      <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/">CC BY-NC-SA license</a>
      as well as attribution using the metadata you provide. You may use any build setup you prefer, but the final
      submission should be the compiled, unminified CSS. You retain the copyright to original graphics and must ensure
      all graphics used are appropriately licensed. All asset links, including fonts, must be absolute to external
      resources. Stylesheets will be saved into the Github repo, and detected changes that violate the guidelines are
      cause for removal.
    </p>
    <p>
      Ensure your design is responsive, and that it passes accessible contrast (we'll be using aXe to verify).
      Animations should be removed via `prefers-reduced-motion`. Cutting-edge techniques should come with a fallback if
      needed to not severely impact the user experience. No content may be permanently hidden, and hidden items must
      come with an accessible viewing technique. Page load time should not exceed 3 seconds.
    </p>
    <p>
      Most importantly - have fun and learn something new! Check out the
      <a href="/resources/">resources</a> for tips and inspiration.
    </p>
    <a href="/guidelines/" className="link-guidelines">
      Review full guidelines
    </a>
  </section>
)

const meta: Meta<WindowFrameProps> = {
  title: 'Elements/Window Frame',
  component: WindowFrame,
  tags: ['autodocs'],
  args: {
    children: <Content />,
  },
  decorators: [
    Story => (
      <div className="container">
        <Story />
      </div>
    ),
  ],
}
export default meta

type Story = StoryObj<WindowFrameProps>

export const Default: Story = {
  args: {},
}

export const WithHeader: Story = {
  args: {
    withHeader: true,
  },
}
