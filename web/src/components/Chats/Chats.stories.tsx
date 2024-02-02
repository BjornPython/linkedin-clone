// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import Chats from './Chats'

const meta: Meta<typeof Chats> = {
  component: Chats,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Chats>

export const Primary: Story = {}
