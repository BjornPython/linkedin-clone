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

import RightBanner from './RightBanner'

const meta: Meta<typeof RightBanner> = {
  component: RightBanner,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof RightBanner>

export const Primary: Story = {}
