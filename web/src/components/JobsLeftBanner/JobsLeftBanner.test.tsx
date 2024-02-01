import { render } from '@redwoodjs/testing/web'

import JobsLeftBanner from './JobsLeftBanner'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('JobsLeftBanner', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<JobsLeftBanner />)
    }).not.toThrow()
  })
})
