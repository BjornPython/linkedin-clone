import { render } from '@redwoodjs/testing/web'

import ChatHeader from './ChatHeader'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ChatHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChatHeader />)
    }).not.toThrow()
  })
})
