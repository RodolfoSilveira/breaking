/* eslint-disable no-restricted-imports */
import { MemoryRouter } from 'react-router-dom'
import GlobalStyles from '../src/styles/global'

export const decorators = [
  (Story) => (
    <MemoryRouter>
      <GlobalStyles />
      <Story />
    </MemoryRouter>
  )
]
