import dynamic from 'next/dynamic';
import { AuthContextProvider } from '../lib/AuthContext';
import '../styles/globals.css';
import "../styles/nprogress.css";

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
