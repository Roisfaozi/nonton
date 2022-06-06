import React from 'react'
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
      <HeroCarousel popular={moviesPopular} />
      {/* Movies Collection */}
      <ItemsCollection results={moviesPlaying} title='Now Playing' />
      <ItemsCollection results={moviesPopular} title='Popular' />
      <ItemsCollection results={moviesUpcoming} title='Upcoming' />
      <ItemsCollection results={topRatedMovies} title='Top Rated' />
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
      moviesPopular: moviesPopular.results,
      moviesPlaying: moviesPlaying.results,
      moviesUpcoming: moviesUpcoming.results,
      topRatedMovies: topRatedMovies.results,
    },
  }
}
