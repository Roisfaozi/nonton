import HeroCarousel from '../../components/hero-carousel'
import ItemsCollection from '../../components/items-collections'
import { moviesEndpoint } from '../../service'

export default function Movie({
  moviesPopular,
  moviesPlaying,
  moviesUpcoming,
  topRatedMovies,
}) {
  return (
    <div>
      <HeroCarousel popular={moviesPopular} />
      {/* Movies Collection */}
      <ItemsCollection
        results={moviesPlaying}
        title='Now Playing'
        isTv={false}
      />
      <ItemsCollection results={moviesPopular} title='Popular' isTv={false} />
      <ItemsCollection results={moviesUpcoming} title='Upcoming' isTv={false} />
      <ItemsCollection
        results={topRatedMovies}
        title='Top Rated'
        isTv={false}
      />
    </div>
  )
}

export async function getServerSideProps() {
  const [moviesPopular, moviesPlaying, moviesUpcoming, topRatedMovies] =
    await Promise.all([
      moviesEndpoint.getMoviesPopular(),
      moviesEndpoint.getMoviesPlaying(),
      moviesEndpoint.getMoviesUpcoming(),
      moviesEndpoint.getMoviesTopRated(),
    ])

  return {
    props: {
      moviesPopular: moviesPopular.results,
      moviesPlaying: moviesPlaying.results,
      moviesUpcoming: moviesUpcoming.results,
      topRatedMovies: topRatedMovies.results,
    },
  }
}
