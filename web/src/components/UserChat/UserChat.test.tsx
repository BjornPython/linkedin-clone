import { render } from '@redwoodjs/testing/web'

import UserChat from './UserChat'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UserChat', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserChat />)
    }).not.toThrow()
  })
})
