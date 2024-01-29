import { render } from '@redwoodjs/testing/web'

import MainButtons from './MainButtons'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MainButtons', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MainButtons />)
    }).not.toThrow()
  })
})
