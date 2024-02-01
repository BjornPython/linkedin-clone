import { render } from '@redwoodjs/testing/web'

import RightBanner from './RightBanner'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RightBanner', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RightBanner />)
    }).not.toThrow()
  })
})
