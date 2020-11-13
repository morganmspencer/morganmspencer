import { render } from '@redwoodjs/testing'

import LifeGraphPage from './LifeGraphPage'

describe('LifeGraphPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LifeGraphPage />)
    }).not.toThrow()
  })
})
