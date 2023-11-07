import type { AppProps } from 'next/app';
import '../assets/scss/_reset.scss';
import '../assets/scss/base.scss';
import Sidebar from '../components/Sidebar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Sidebar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
