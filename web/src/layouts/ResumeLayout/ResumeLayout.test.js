import { render } from '@redwoodjs/testing'

import ResumeLayout from './ResumeLayout'

describe('ResumeLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ResumeLayout />)
    }).not.toThrow()
  })
})
