import axios from 'axios'

const baseUrl = process.env.API_URL
const apiKey = process.env.API_KEY

export const moviesType = {
  now_playing: 'now_playing',
  upcoming: 'upcoming',
  popular: 'popular',
  top_rated: 'top_rated',
  similiar: 'similiar',
  recommendations: 'recommendations',
}

export const tvType = {
  airing_today: 'airing_today',
  popular: 'popular',
  top_rated: 'top_rated',
  on_the_air: 'on_the_air',
  similiar: 'similiar',
  recommendations: 'recommendations',
}

// Movies Endpoint

export const getMoviesById = (id) =>
  axios.get(`${baseUrl}/movie/${id}?api_key=${apiKey}`)
export const getMoviesPlaying = () =>
  axios.get(`${baseUrl}/movie/${moviesType.now_playing}?api_key=${apiKey}`)

export const getMoviesPopular = () =>
  axios.get(`${baseUrl}/movie/${moviesType.popular}?api_key=${apiKey}`)
export const getMoviesUpcoming = () =>
  axios.get(`${baseUrl}/movie/${moviesType.upcoming}?api_key=${apiKey}`)
export const getMoviesTopRated = () =>
  axios.get(`${baseUrl}/movie/${moviesType.top_rated}?api_key=${apiKey}`)
export const getMoviesRecommendations = (id) =>
  axios.get(
    `${baseUrl}/movie/${id}/${moviesType.recommendations}?api_key=${apiKey}`
  )
export const getMoviesSimiliar = (id) =>
  axios.get(`${baseUrl}/movie/${id}/${moviesType.similiar}?api_key=${apiKey}`)

// TV Endpoint
export const getTvById = (id) =>
  axios.get(`${baseUrl}/tv/${id}?api_key=${apiKey}`)
export const getTvPopular = () =>
  axios.get(`${baseUrl}/tv/${tvType.popular}?api_key=${apiKey}`)
export const getTvAiring = () =>
  axios.get(`${baseUrl}/tv/${tvType.airing_today}?api_key=${apiKey}`)
export const getTvTopRated = () =>
  axios.get(`${baseUrl}/tv/${tvType.top_rated}?api_key=${apiKey}`)
export const getTvOnTheAir = () =>
  axios.get(`${baseUrl}/tv/${tvType.on_the_air}?api_key=${apiKey}`)
export const getTvRecommendations = (id) =>
  axios.get(`${baseUrl}/tv/${id}/${tvType.recommendations}?api_key=${apiKey}`)
export const getTvSimiliar = (id) =>
  axios.get(`${baseUrl}/tv/${id}/${tvType.similiar}?api_key=${apiKey}`)
