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

import NotifLeftBanner from './NotifLeftBanner'

const meta: Meta<typeof NotifLeftBanner> = {
  component: NotifLeftBanner,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof NotifLeftBanner>

export const Primary: Story = {}
