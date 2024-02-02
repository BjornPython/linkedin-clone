import { render } from '@redwoodjs/testing/web'

import MessageAd from './MessageAd'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MessageAd', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MessageAd />)
    }).not.toThrow()
  })
})
