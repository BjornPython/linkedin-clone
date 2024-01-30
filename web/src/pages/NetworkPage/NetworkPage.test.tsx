import { render } from '@redwoodjs/testing/web'

import NetworkPage from './NetworkPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NetworkPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NetworkPage />)
    }).not.toThrow()
  })
})
