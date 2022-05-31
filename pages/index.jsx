import Header from '../components/header'
import HeroCarousel from '../components/hero-carousel'
import ItemsCollection from '../components/items-collections'
import {
  getMoviesPlaying,
  getMoviesPopular,
  getMoviesTopRated,
  getMoviesUpcoming,
  getTvAiring,
  getTvOnTheAir,
  getTvPopular,
  getTvTopRated,
} from '../service'

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
      <Header />
      <HeroCarousel moviesPopular={moviesPopular} />
      {/* Movies Collection */}
      <ItemsCollection results={moviesPlaying} title='Now Playing' />
      <ItemsCollection results={moviesPopular} title='Trending Movies' />
      <ItemsCollection results={moviesUpcoming} title='Upcoming Movies' />
      <ItemsCollection results={topRatedMovies} title='Top Rated Movies' />

      {/* TV/Series Collection */}
      <ItemsCollection results={tvAiring} title='Airing Today TV Shows' />
      <ItemsCollection results={tvOnTheAir} title='Airing TV Shows' />
      <ItemsCollection results={tvPopular} title='Trending TV' />
      <ItemsCollection results={topRatedTv} title='Top Rated TV' />
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  // const moviesPopular = await getMoviesPopular()
  // const nowPlaying = await getMoviesPlaying()

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
    getMoviesPopular(),
    getMoviesPlaying(),
    getMoviesUpcoming(),
    getMoviesTopRated(),
    getTvAiring(),
    getTvOnTheAir(),
    getTvPopular(),
    getTvTopRated(),
  ])

  return {
    props: {
      moviesPopular: moviesPopular.data.results,
      moviesPlaying: moviesPlaying.data.results,
      moviesUpcoming: moviesUpcoming.data.results,
      topRatedMovies: topRatedMovies.data.results,
      tvAiring: tvAiring.data.results,
      tvOnTheAir: tvOnTheAir.data.results,
      tvPopular: tvPopular.data.results,
      topRatedTv: topRatedTv.data.results,
    },
  }
}
