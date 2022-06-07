import React from 'react'
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
      <ItemsCollection results={moviesPlaying} title='Now Playing' />
      <ItemsCollection results={moviesPopular} title='Popular' />
      <ItemsCollection results={moviesUpcoming} title='Upcoming' />
      <ItemsCollection results={topRatedMovies} title='Top Rated' />
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
