import ItemsCollection from '../../components/items-collections'
import MoviesInfo from '../../components/movies-info'
import PlayerHead from '../../components/player-head'
import { moviesEndpoint } from '../../service'

export default function index(props) {
  const { movie, credits, videos, similar, recommendations } = props

  return (
    <>
      <PlayerHead movie={movie} videos={videos} />

      <MoviesInfo movie={movie} credits={credits} />

      <ItemsCollection results={similar} title='Similar' />
      <ItemsCollection results={recommendations} title='Recommendations' />
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
