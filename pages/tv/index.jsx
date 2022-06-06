import React from 'react'
import HeroCarousel from '../../components/hero-carousel'
import ItemsCollection from '../../components/items-collections'
import {
  getTvAiring,
  getTvOnTheAir,
  getTvPopular,
  getTvTopRated,
} from '../../service'

export default function Movie({ tvAiring, tvPopular, tvOnTheAir, topRatedTv }) {
  return (
    <div>
      <HeroCarousel popular={tvPopular} />
      {/* Movies Collection */}
      <ItemsCollection results={tvAiring} title='Airing Today TV' />
      <ItemsCollection results={tvOnTheAir} title='Airing TV' />
      <ItemsCollection results={tvPopular} title='Popular TV' />
      <ItemsCollection results={topRatedTv} title='Top Rated TV' />
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  // const moviesPopular = await getMoviesPopular()
  // const nowPlaying = await getMoviesPlaying()

  const [tvAiring, tvOnTheAir, tvPopular, topRatedTv] = await Promise.all([
    getTvAiring(),
    getTvOnTheAir(),
    getTvPopular(),
    getTvTopRated(),
  ])

  return {
    props: {
      tvAiring: tvAiring.data.results,
      tvOnTheAir: tvOnTheAir.data.results,
      tvPopular: tvPopular.data.results,
      topRatedTv: topRatedTv.data.results,
    },
  }
}
