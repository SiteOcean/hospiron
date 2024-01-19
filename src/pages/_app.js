import '@/styles/globals.css'
import Layout from './aosFunctionalites'
import 'tailwindcss/tailwind.css';
import Head from 'next/head';


export default function App({ Component, pageProps }) {
  return  <Layout>
  <Head>
        <title>Hospiron</title>
        <link rel="icon" href="/favicon.jpg" />
        {/* <meta name="description" content="Description of your page" /> */}
        <meta name="keywords" content="hospiron, hospiron.in, hospiron.com" />
        {/* <meta name="author" content="Your Name" /> */}
      </Head>
  <Component {...pageProps} />
</Layout>
}
