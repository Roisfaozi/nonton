import MoviesHead from '../../components/movies-head'
import MoviesInfo from '../../components/movies-info'
import { moviesEndpoint } from '../../service'

export default function index({ movie, credits }) {
  console.log(movie.release_date.slice(0, 4))

  return (
    <div>
      <MoviesHead movie={movie} />

      <MoviesInfo movie={movie} />
    </div>
  )
}

export async function getServerSideProps({ query }) {
  const id = query.id[0]
  const movie = await moviesEndpoint.getMoviesById(id)
  const credits = await moviesEndpoint.getMoviesCredit(id)
  return {
    props: {
      movie: movie,
      credits: credits,
    },
  }
}
