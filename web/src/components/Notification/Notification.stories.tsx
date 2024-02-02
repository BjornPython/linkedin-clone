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

import Notification from './Notification'

const meta: Meta<typeof Notification> = {
  component: Notification,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Notification>

export const Primary: Story = {}
