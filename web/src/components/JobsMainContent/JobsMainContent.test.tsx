import { render } from '@redwoodjs/testing/web'

import JobsMainContent from './JobsMainContent'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('JobsMainContent', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<JobsMainContent />)
    }).not.toThrow()
  })
})
