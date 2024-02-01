import { render } from '@redwoodjs/testing/web'

import ChatActions from './ChatActions'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ChatActions', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChatActions />)
    }).not.toThrow()
  })
})
