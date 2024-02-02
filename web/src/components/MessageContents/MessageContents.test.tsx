import { render } from '@redwoodjs/testing/web'

import MessageContents from './MessageContents'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MessageContents', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MessageContents />)
    }).not.toThrow()
  })
})
