import { render } from '@redwoodjs/testing/web'

import RecommendedJob from './RecommendedJob'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RecommendedJob', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RecommendedJob />)
    }).not.toThrow()
  })
})
