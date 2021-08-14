/* eslint-disable */
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { ThemeProvider } from 'styled-components'

import * as nextImage from 'next/image'

import { GlobalStyle } from 'styles/global'
import theme from 'styles/theme'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle removeBg />
      <Story />
    </ThemeProvider>
  )
]

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'won-light',
    values: [
      {
        name: 'won-light',
        value: theme.colors.white,
      },
      {
        name: 'won-dark',
        value: theme.colors.mainBg,
      },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  nextRouter: {
    Provider: RouterContext.Provider
  }
}
