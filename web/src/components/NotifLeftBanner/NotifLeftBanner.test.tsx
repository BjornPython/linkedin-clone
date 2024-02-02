import { render } from '@redwoodjs/testing/web'

import NotifLeftBanner from './NotifLeftBanner'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NotifLeftBanner', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NotifLeftBanner />)
    }).not.toThrow()
  })
})
