import type { AppProps } from 'next/app'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

import theme from 'styles/theme'
import { GlobalStyle } from 'styles/global'

import { ThemeProvider } from 'styled-components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo {...SEO} />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
