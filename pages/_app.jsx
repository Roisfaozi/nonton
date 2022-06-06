import Head from 'next/head'
import Script from 'next/script'
import 'swiper/css'
import 'tailwindcss/tailwind.css'
import Footer from '../components/footer'
import Header from '../components/header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
        />
        {/* meta description */}
        <meta
          name='description'
          itemProp='description'
          content='Watch latest Star TV shows, movies, original series and live cricket on Hotstar - India’s premium video streaming service with more than 85,000 hours of drama and movies in 8 languages.'
        />
        <meta
          name='keywords'
          content='online tv show, movies online, indian tv serial, bollywood movies'
        />
        <meta
          property='og:title'
          content='Hotstar - Watch TV Shows, Movies, Live Cricket Matches &amp; News Online'
        />
        <meta property='og:image' content='/images/Disney+Hotstar.jpg' />
        <meta
          name='og:description'
          itemProp='description'
          content='Watch latest Star TV shows, movies, original series and live cricket on Hotstar - India’s premium video streaming service with more than 85,000 hours of drama and movies in 8 languages.'
        />
        <meta
          name='og:keywords'
          content='online tv show, movies online, indian tv serial, bollywood movies'
        />
        <meta name='twitter:card' content='photo' />
        <meta
          name='twitter:title'
          content='Hotstar - Watch TV Shows, Movies, Live Cricket Matches &amp; News Online'
        />
        <meta property='twitter:image' content='/images/Disney+Hotstar.jpg' />

        {/* ms icon */}
        <meta name='msapplication-TileColor' content='#172D6D' />
        <meta name='msapplication-TileImage' content='/ms-icon-142x142.png' />
        <meta name='theme-color' content='#192133' />
        <title>
          Hotstar - Watch TV Shows, Movies, Live Cricket Matches &amp; News
          Online
        </title>

        <link rel='manifest' href='/manifest.json' />
        <link rel='shortcut icon' href='/favicon.ico' />

        {/* apple icon */}
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

        {/* favicon */}
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/icons/android-icon-192x192.png'
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
        <Script
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
                    var _Hasync = _Hasync || [] _Hasync.push(['Histats.start',
                  '1,4564307,4,0,0,0,00010000']) _Hasync.push(['Histats.fasi', '1'])
                  _Hasync.push(['Histats.track_hits', '']) ;
                  function () {
                    var hs = document.createElement('script')
                    hs.type = 'text/javascript'
                    hs.async = true
                    hs.src = '//s10.histats.com/js15_as.js'
                    ;(
                      document.getElementsByTagName('head')[0] ||
                      document.getElementsByTagName('body')[0]
                    ).appendChild(hs)
                  }
                  ()
  `,
          }}
        />
        <a href='/' target='_blank'>
          <img
            src='//sstatic1.histats.com/0.gif?4564307&101'
            alt='free stats'
            border='0'
          />
        </a>
      </Head>
      <Header {...pageProps} />

      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
