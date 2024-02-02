import { render } from '@redwoodjs/testing/web'

import RightAd from './RightAd'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RightAd', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RightAd />)
    }).not.toThrow()
  })
})
