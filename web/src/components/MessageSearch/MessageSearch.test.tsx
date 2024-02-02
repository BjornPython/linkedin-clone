import { render } from '@redwoodjs/testing/web'

import MessageSearch from './MessageSearch'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MessageSearch', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MessageSearch />)
    }).not.toThrow()
  })
})
