import { render } from '@redwoodjs/testing/web'

import ChatMessageInput from './ChatMessageInput'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ChatMessageInput', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChatMessageInput />)
    }).not.toThrow()
  })
})
