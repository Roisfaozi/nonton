import MoviesInfo from '../../components/movies-info'
import PlayerHead from '../../components/player-head'
import { moviesEndpoint } from '../../service'

export default function index({ movie, credits, videos }) {
  return (
    <div>
      <PlayerHead movie={movie} videos={videos} />

      <MoviesInfo movie={movie} />
    </div>
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
    },
  }
}
