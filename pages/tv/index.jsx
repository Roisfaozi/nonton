import dynamic from 'next/dynamic'
import { tvEndpoint } from '../../service'
const HeroCarousel = dynamic(() => import('../../components/hero-carousel'), {
  ssr: true,
})
const ItemsCollection = dynamic(
  () => import('../../components/items-collections'),
  {
    ssr: true,
  }
)
export default function Movie({ tvAiring, tvPopular, tvOnTheAir, topRatedTv }) {
  return (
    <div>
      <HeroCarousel popular={tvPopular} isTv={true} />
      <ItemsCollection results={tvAiring} title='Airing Today TV' isTv={true} />
      <ItemsCollection results={tvOnTheAir} title='On The Air TV' isTv={true} />
      <ItemsCollection results={tvPopular} title='Popular TV' isTv={true} />
      <ItemsCollection results={topRatedTv} title='Top Rated TV' isTv={true} />
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
