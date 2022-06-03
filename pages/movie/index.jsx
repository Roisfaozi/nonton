import React from 'react'
import Header from '../../components/header'
import HeroCarousel from '../../components/hero-carousel'
import ItemsCollection from '../../components/items-collections'
import {
  getMoviesPlaying,
  getMoviesPopular,
  getMoviesTopRated,
  getMoviesUpcoming,
} from '../../service'

export default function Movie({
  moviesPopular,
  moviesPlaying,
  moviesUpcoming,
  topRatedMovies,
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
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  // const moviesPopular = await getMoviesPopular()
  // const nowPlaying = await getMoviesPlaying()

  const [moviesPopular, moviesPlaying, moviesUpcoming, topRatedMovies] =
    await Promise.all([
      getMoviesPopular(),
      getMoviesPlaying(),
      getMoviesUpcoming(),
      getMoviesTopRated(),
    ])

  return {
    props: {
      moviesPopular: moviesPopular.data.results,
      moviesPlaying: moviesPlaying.data.results,
      moviesUpcoming: moviesUpcoming.data.results,
      topRatedMovies: topRatedMovies.data.results,
    },
  }
}
