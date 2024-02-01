import { render } from '@redwoodjs/testing/web'

import Suggestion from './Suggestion'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Suggestion', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Suggestion />)
    }).not.toThrow()
  })
})
