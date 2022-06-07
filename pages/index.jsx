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
      {/* Movies Collection */}
      <ItemsCollection results={moviesPlaying} title='Now Playing' />
      <ItemsCollection results={moviesPopular} title='Popular' />
      <ItemsCollection results={moviesUpcoming} title='Upcoming' />
      <ItemsCollection results={topRatedMovies} title='Top Rated' />

      {/* TV/Series Collection */}
      <ItemsCollection results={tvAiring} title='Airing Today TV' />
      <ItemsCollection results={tvOnTheAir} title='On The Air TV' />
      <ItemsCollection results={tvPopular} title='Popular TV' />
      <ItemsCollection results={topRatedTv} title='Top Rated TV' />
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
