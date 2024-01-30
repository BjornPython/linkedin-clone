import { render } from '@redwoodjs/testing/web'

import InfoLeft from './InfoLeft'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InfoLeft', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InfoLeft />)
    }).not.toThrow()
  })
})
