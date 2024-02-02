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

import Focused from './Focused'

const meta: Meta<typeof Focused> = {
  component: Focused,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Focused>

export const Primary: Story = {}
