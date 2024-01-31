import { render } from '@redwoodjs/testing/web'

import MainContents from './MainContents'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MainContents', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MainContents />)
    }).not.toThrow()
  })
})
