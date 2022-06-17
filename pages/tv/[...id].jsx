import dynamic from 'next/dynamic'
import Head from 'next/head'

import PlayerHead from '../../components/player-head'
import { tvEndpoint } from '../../service'
const MoviesInfo = dynamic(() => import('../../components/movies-info'), {
  ssr: true,
})
const ItemsCollection = dynamic(
  () => import('../../components/items-collections'),
  {
    ssr: true,
  }
)
export default function index(props) {
  const { tvSeries, credits, videos, similar, recommendations } = props
  return (
    <>
      <Head>
        <title>
          Nonton - {tvSeries.name} - Watch TV Shows, Movies, Live Cricket
          Matches &amp; News Online
        </title>
        <meta
          name='description'
          itemProp='description'
          content={tvSeries.overview}
        />
        <meta
          name='keywords'
          content={`${tvSeries.name}, online tv show, movies online, tv series, bollywood movies`}
        />
        <meta
          name='og:title'
          content={`Nonton - ${tvSeries.name} - Watch TV Shows, Movies, Live Cricket Matches &amp; News Online`}
        />
        <meta
          name='twitter:title'
          content={`Nonton - ${tvSeries.name} - Watch TV Shows, Movies, Live Cricket Matches &amp; News Online`}
        />

        <meta
          name='og:keywords'
          content={`${tvSeries.name}, online tv show, movies online, tv series, bollywood movies`}
        />

        <meta
          name='og:description'
          itemProp='description'
          content={tvSeries.overview}
        />
      </Head>
      <PlayerHead movie={tvSeries} videos={videos} />

      <MoviesInfo movie={tvSeries} credits={credits} />

      <ItemsCollection results={similar} title='Similar' isTv={true} />
      {recommendations.length > 1 && (
        <ItemsCollection
          results={recommendations}
          title='Recommendations'
          isTv={true}
        />
      )}
    </>
  )
}

export async function getServerSideProps({ query }) {
  const id = query.id[0]
  const tvSeries = await tvEndpoint.getTvById(id, {
    params: {
      append_to_response: 'videos,images,credits,similar,recommendations',
    },
  })

  return {
    props: {
      tvSeries: tvSeries,
      credits: tvSeries.credits,
      videos: tvSeries.videos.results,
      similar: tvSeries.similar.results,
      recommendations: tvSeries.recommendations.results,
    },
  }
}
