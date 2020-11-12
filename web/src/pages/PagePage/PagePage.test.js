import { render } from '@redwoodjs/testing'

import PagePage from './PagePage'

describe('PagePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PagePage />)
    }).not.toThrow()
  })
})
