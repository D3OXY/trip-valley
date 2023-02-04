import { AuthContextProvider } from '../lib/AuthContext'
import '../styles/globals.css'
import "../styles/nprogress.css"
import NProgress from 'nprogress';
import Router from 'next/router';
import dynamic from 'next/dynamic';

const TopProgressBar = dynamic(
  () => {
    return import("../components/TopProgressBar");
  },
  { ssr: false },
);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthContextProvider>
        <TopProgressBar />
        <Component {...pageProps} />
      </AuthContextProvider>
    </>
  )
}

export default MyApp
