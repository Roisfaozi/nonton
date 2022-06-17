import dynamic from 'next/dynamic'
import { moviesEndpoint } from '../../service'
const HeroCarousel = dynamic(() => import('../../components/hero-carousel'), {
  ssr: true,
})
const ItemsCollection = dynamic(
  () => import('../../components/items-collections'),
  {
    ssr: true,
  }
)
export default function Movie({
  moviesPopular,
  moviesPlaying,
  moviesUpcoming,
  topRatedMovies,
}) {
  return (
    <div>
      <HeroCarousel popular={moviesPopular} isTv={false} />
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
