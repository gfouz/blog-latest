import type { AppProps } from 'next/app'
import '../styles/prism-one-dark.css'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
  --rose-red: #c40550;
  --orangeness: #ff5722;
  --greenish: #5bff22;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0;
  height: 100%;
}
body {
  margin: 0;
  height: 100%;
  min-height: 100vh;
}

`

interface ThemeInterface {
  colors: {
    primary: string
  }
}

const theme: ThemeInterface = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}