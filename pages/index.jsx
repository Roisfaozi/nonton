import HeroCarousel from '../components/hero-carousel'
import ItemsCollection from '../components/items-collections'
import { moviesEndpoint, tvEndpoint } from '../service'

export default function Home({
  moviesPopular,
  moviesPlaying,
  moviesUpcoming,
  topRatedMovies,
  tvAiring,
  tvPopular,
  tvOnTheAir,
  topRatedTv,
}) {
  return (
    <div>
      <HeroCarousel popular={moviesPopular} />
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

      <ItemsCollection results={tvAiring} title='Airing Today TV' isTv={true} />
      <ItemsCollection results={tvOnTheAir} title='On The Air TV' isTv={true} />
      <ItemsCollection results={tvPopular} title='Popular TV' isTv={true} />
      <ItemsCollection results={topRatedTv} title='Top Rated TV' isTv={true} />
    </div>
  )
}

export async function getServerSideProps() {
  const [
    moviesPopular,
    moviesPlaying,
    moviesUpcoming,
    topRatedMovies,
    tvAiring,
    tvOnTheAir,
    tvPopular,
    topRatedTv,
  ] = await Promise.all([
    moviesEndpoint.getMoviesPopular(),
    moviesEndpoint.getMoviesPlaying(),
    moviesEndpoint.getMoviesUpcoming(),
    moviesEndpoint.getMoviesTopRated(),
    tvEndpoint.getTvAiring(),
    tvEndpoint.getTvOnTheAir(),
    tvEndpoint.getTvPopular(),
    tvEndpoint.getTvTopRated(),
  ])

  return {
    props: {
      moviesPopular: moviesPopular.results,
      moviesPlaying: moviesPlaying.results,
      moviesUpcoming: moviesUpcoming.results,
      topRatedMovies: topRatedMovies.results,
      tvAiring: tvAiring.results,
      tvOnTheAir: tvOnTheAir.results,
      tvPopular: tvPopular.results,
      topRatedTv: topRatedTv.results,
    },
  }
}
