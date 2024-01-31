import { render } from '@redwoodjs/testing/web'

import LeftBanner from './LeftBanner'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LeftBanner', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LeftBanner />)
    }).not.toThrow()
  })
})
