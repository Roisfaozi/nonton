import ItemsCollection from '../../components/items-collections'
import MoviesInfo from '../../components/movies-info'
import PlayerHead from '../../components/player-head'
import { tvEndpoint } from '../../service'

export default function index(props) {
  const { tvSeries, credits, videos, similar, recommendations } = props
  return (
    <>
      <PlayerHead movie={tvSeries} videos={videos} />

      <MoviesInfo movie={tvSeries} credits={credits} />

      <ItemsCollection results={similar} title='Similar' />
      {recommendations.length > 1 && (
        <ItemsCollection results={recommendations} title='Recommendations' />
      )}
    </>
  )
}

export async function getServerSideProps({ query }) {
  const id = query.id[0]
  const tvSeries = await tvEndpoint.getTvById(id, {
    params: {
      append_to_response: 'videos,images,credits,similar,recommendations',
    },
  })

  return {
    props: {
      tvSeries: tvSeries,
      credits: tvSeries.credits,
      videos: tvSeries.videos.results,
      similar: tvSeries.similar.results,
      recommendations: tvSeries.recommendations.results,
    },
  }
}
