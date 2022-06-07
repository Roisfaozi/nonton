import React from 'react'
import HeroCarousel from '../../components/hero-carousel'
import ItemsCollection from '../../components/items-collections'
import { tvEndpoint } from '../../service'

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
  const [tvAiring, tvOnTheAir, tvPopular, topRatedTv] = await Promise.all([
    tvEndpoint.getTvAiring(),
    tvEndpoint.getTvOnTheAir(),
    tvEndpoint.getTvPopular(),
    tvEndpoint.getTvTopRated(),
  ])

  return {
    props: {
      tvAiring: tvAiring.results,
      tvOnTheAir: tvOnTheAir.results,
      tvPopular: tvPopular.results,
      topRatedTv: topRatedTv.results,
    },
  }
}
