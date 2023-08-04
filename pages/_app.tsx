import "../styles/tailwind.css"
import { DM_Sans } from "next/font/google";
import { AppProps } from "next/app"
import {QueryClient, QueryClientProvider} from "react-query";

const dm_sans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'] })

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {

  return <QueryClientProvider client={queryClient}>
    <main className={dm_sans.className}>
      <Component {...pageProps} />
    </main>
  </QueryClientProvider>
}

export default MyApp
