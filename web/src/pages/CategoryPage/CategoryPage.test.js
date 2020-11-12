import { render } from '@redwoodjs/testing'

import CategoryPage from './CategoryPage'

describe('CategoryPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CategoryPage />)
    }).not.toThrow()
  })
})
