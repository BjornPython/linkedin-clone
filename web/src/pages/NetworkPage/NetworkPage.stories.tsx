import type { Meta, StoryObj } from '@storybook/react'

import NetworkPage from './NetworkPage'

const meta: Meta<typeof NetworkPage> = {
  component: NetworkPage,
}

export default meta

type Story = StoryObj<typeof NetworkPage>

export const Primary: Story = {}
