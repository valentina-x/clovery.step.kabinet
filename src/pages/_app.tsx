import type { AppProps } from 'next/app';
import '../assets/scss/_reset.scss';
import '../assets/scss/base.scss';
import platformStyles from '../assets/scss/pages/_app.module.scss';
import Sidebar from '../components/Sidebar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${platformStyles.platform}`}>
      <Sidebar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
