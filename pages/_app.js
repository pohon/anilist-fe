import { ApolloProvider } from "@apollo/client"
import { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import client from "../apollo-client"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Toast, { ToastContext } from "../components/Toast"
import '../styles/globals.css'

const DEFAULT_TOAST_STATE = {
  message: '',
  type: ''
}

export const AppBody = ({ Component, pageProps }) => {

  const isHome = useRouter()?.pathname === '/';

  // states
  const [toast, showToast] = useState({ ...DEFAULT_TOAST_STATE })

  useEffect(() => {
    setTimeout(() => {
      showToast({ ...DEFAULT_TOAST_STATE });
    }, 2000);
  }, [toast.message]);

  return (
    <>
      <ToastContext.Provider value={{ showToast }}>
        <Header isHome={isHome} />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </ToastContext.Provider>
      <Toast
        message={toast['message']}
        type={toast['type']}
      />
    </>
  )
}

const MyApp = ({ Component, pageProps }) => (
  <ApolloProvider client={client}>
    <AppBody
      Component={Component}
      pageProps={pageProps}
    />
  </ApolloProvider>
)

export default MyApp
