import { render } from '@redwoodjs/testing'

import ResumePage from './ResumePage'

describe('ResumePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ResumePage />)
    }).not.toThrow()
  })
})
