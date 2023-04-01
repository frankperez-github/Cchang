import { SiteContextProvider } from '@/Context/siteContext';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return(
    <SiteContextProvider>
      <Component {...pageProps} />
    </SiteContextProvider>
  );
}
