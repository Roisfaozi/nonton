import Head from 'next/head'
import 'swiper/css'
import 'tailwindcss/tailwind.css'
import Footer from '../components/footer'
import Header from '../components/header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const pageURL = process.env.NEXT_PUBLIC_BASE_URL

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5'
        />
        <link rel='canonical' href={`${pageURL}`} />

        <meta
          name='description'
          itemProp='description'
          content='Watch latest Star TV shows, movies, original series and live cricket on Nonton - hollywood premium video streaming service with more than 85,000 hours of drama and movies in 8 languages.'
        />
        <meta
          name='keywords'
          content='online tv show, movies online, hollywood tv series, bollywood movies'
        />
        <meta
          property='og:title'
          content='Nonton - Watch TV Shows, Movies, Live Cricket Matches &amp; News Online'
        />
        <meta property='og:image' content='/images/Disney+Nonton.jpg' />
        <meta
          name='og:description'
          itemProp='description'
          content='Watch latest Star TV shows, movies, original series and live cricket on Nonton - hollywood premium video streaming service with more than 85,000 hours of drama and movies in 8 languages.'
        />
        <meta
          name='og:keywords'
          content='online tv show, movies online, tv series, bollywood movies'
        />
        <meta name='twitter:card' content='photo' />
        <meta
          name='twitter:title'
          content='Nonton - Watch TV Shows, Movies, Live Cricket Matches &amp; News Online'
        />
        <meta property='twitter:image' content='/images/Disney+Nonton.jpg' />

        <meta name='msapplication-TileColor' content='#172D6D' />
        <meta name='msapplication-TileImage' content='/ms-icon-142x142.png' />
        <meta name='theme-color' content='#192133' />
        <title>
          Nonton - Watch TV Shows, Movies, Live Cricket Matches &amp; News
          Online
        </title>

        <link rel='manifest' href='/manifest.json' />
        <link rel='shortcut icon' href='/favicon.ico' />

        <link
          rel='apple-touch-icon'
          sizes='57x57'
          href='/icons/apple-icon-57x57.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='60x60'
          href='/icons/apple-icon-60x60.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='72x72'
          href='/icons/apple-icon-72x72.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='76x76'
          href='/icons/apple-icon-76x76.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='114x114'
          href='/icons/apple-icon-114x114.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='120x120'
          href='/icons/apple-icon-120x120.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='144x144'
          href='/icons/apple-icon-144x144.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='/icons/apple-icon-152x152.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/icons/apple-icon-180x180.png'
        />

        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/icons/android-icon-192-192.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='icons/android-icon-512-512.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='icons/android-icon-48-48.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='icons/android-icon-72-72.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='icons/android-icon-144-144.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='icons/android-icon-96-96.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/icons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='96x96'
          href='/icons/favicon-96x96.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/icons/favicon-16x16.png'
        />
      </Head>
      <Header {...pageProps} />

      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
