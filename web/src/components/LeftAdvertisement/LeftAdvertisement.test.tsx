import { render } from '@redwoodjs/testing/web'

import LeftAd from './LeftAdvertisement'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LeftAd', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LeftAd />)
    }).not.toThrow()
  })
})
