import { render } from '@redwoodjs/testing/web'

import PostActions from './PostActions'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PostActions', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PostActions />)
    }).not.toThrow()
  })
})
