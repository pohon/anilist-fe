import { ApolloProvider } from "@apollo/client"
import { useEffect, useState } from "react"
import client from "../apollo-client"
import Toast, { ToastContext } from "../components/Toast"
import '../styles/globals.css'

const DEFAULT_TOAST_STATE = {
  message: '',
  type: ''
}

function MyApp({ Component, pageProps }) {

  // states
  const [toast, showToast] = useState({ ...DEFAULT_TOAST_STATE })

  useEffect(() => {
    setTimeout(() => {
      showToast({ ...DEFAULT_TOAST_STATE });
    }, 2000);
  }, [toast.message]);

  return (
    <ApolloProvider client={client}>
      <ToastContext.Provider value={{ showToast }}>
        <Component {...pageProps} />
      </ToastContext.Provider>
      <Toast
        message={toast['message']}
        type={toast['type']}
      />
    </ApolloProvider>
  )
}

export default MyApp
