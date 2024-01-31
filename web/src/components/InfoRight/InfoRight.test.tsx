import { render } from '@redwoodjs/testing/web'

import InfoRight from './InfoRight'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InfoRight', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InfoRight />)
    }).not.toThrow()
  })
})
