import React from 'react'
import MoviesHead from '../../components/movies-head'
import { moviesEndpoint } from '../../service'

export default function index({ movie }) {
  return (
    <div>
      <MoviesHead movie={movie} />
    </div>
  )
}

export async function getServerSideProps({ query }) {
  const id = query.id[0]
  const movie = await moviesEndpoint.getMoviesById(id)
  return {
    props: {
      movie: movie,
    },
  }
}
