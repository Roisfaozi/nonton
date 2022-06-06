import React from 'react'
import ItemCard from '../../components/item-card'
import { moviesEndpoint } from '../../service'

export default function category({ movies }) {
  return (
    <>
      <div className='section'>
        <div className='item-grid'>
          {movies.map((item, i) => (
            <ItemCard key={i} item={item} />
          ))}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps({ query }) {
  // Fetch data from external API

  const params = {}

  const category = query.category.replace('-', '_')
  const data = await moviesEndpoint.getMovies(category, params)
  return {
    props: {
      movies: data.results,
    },
  }
}
