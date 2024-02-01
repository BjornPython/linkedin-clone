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

import RecommendedJob from './RecommendedJob'

const meta: Meta<typeof RecommendedJob> = {
  component: RecommendedJob,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof RecommendedJob>

export const Primary: Story = {}
