import { render } from '@redwoodjs/testing/web'

import RightBannerInfo from './RightBannerInfo'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RightBannerInfo', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RightBannerInfo />)
    }).not.toThrow()
  })
})
