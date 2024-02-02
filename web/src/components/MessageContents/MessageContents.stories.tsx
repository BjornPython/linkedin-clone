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

import MessageContents from './MessageContents'

const meta: Meta<typeof MessageContents> = {
  component: MessageContents,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof MessageContents>

export const Primary: Story = {}
