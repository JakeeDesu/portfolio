import '../styles/globals.css'
import { useState } from 'react'
import PageWrapper from './pageWrapper'


function MyApp({ Component, pageProps }) {

  const [darkTheme, setDarkTheme] = useState(true);

  const changeTheme = () => {
    setDarkTheme(!darkTheme);
  }

  return (
    <PageWrapper darkTheme >
      <Component {...{ ...pageProps, changeTheme, darkTheme }} />
    </PageWrapper>
  )
}

export default MyApp
