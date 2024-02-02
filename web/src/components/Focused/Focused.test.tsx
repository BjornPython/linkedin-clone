import { render } from '@redwoodjs/testing/web'

import Focused from './Focused'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Focused', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Focused />)
    }).not.toThrow()
  })
})
