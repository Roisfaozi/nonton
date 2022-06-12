import Head from 'next/head'
import ItemsCollection from '../../components/items-collections'
import MoviesInfo from '../../components/movies-info'
import PlayerHead from '../../components/player-head'
import { moviesEndpoint } from '../../service'

export default function index(props) {
  const { movie, credits, videos, similar, recommendations } = props

  return (
    <>
      <Head>
        <title>
          Nonton - {movie.title} - Watch TV Shows, Movies, Live Cricket Matches
          &amp; News Online
        </title>
        <meta
          name='description'
          itemProp='description'
          content={movie.overview}
        />
        <meta
          name='keywords'
          content={`${movie.title}, online tv show, movies online, tv series, bollywood movies`}
        />
        <meta
          name='og:title'
          content={`Nonton - ${movie.title} - Watch TV Shows, Movies, Live Cricket Matches &amp; News Online`}
        />
        <meta
          name='twitter:title'
          content={`Nonton - ${movie.title} - Watch TV Shows, Movies, Live Cricket Matches &amp; News Online`}
        />

        <meta
          name='og:keywords'
          content={`${movie.title}, online tv show, movies online, tv series, bollywood movies`}
        />

        <meta
          name='og:description'
          itemProp='description'
          content={movie.overview}
        />
      </Head>
      <PlayerHead movie={movie} videos={videos} isTv={false} />

      <MoviesInfo movie={movie} credits={credits} isTv={false} />

      <ItemsCollection results={similar} title='Similar' isTv={false} />
      <ItemsCollection
        results={recommendations}
        title='Recommendations'
        isTv={false}
      />
    </>
  )
}

export async function getServerSideProps({ query }) {
  const id = query.id[0]
  const movie = await moviesEndpoint.getMoviesById(id, {
    params: {
      append_to_response: 'videos,images,credits,similar,recommendations',
    },
  })

  return {
    props: {
      movie: movie,
      credits: movie.credits,
      videos: movie.videos.results,
      similar: movie.similar.results,
      recommendations: movie.recommendations.results,
    },
  }
}
