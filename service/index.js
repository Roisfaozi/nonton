import axios from './axios'

// Movies Endpoint
export const moviesEndpoint = {
  getMovies: (category, params) => {
    const url = `movie/${category}`

    return axios.get(url, params)
  },

  getMoviesById: (id, params) => {
    const url = `movie/${id}`

    return axios.get(url, params)
  },

  getMoviesTopRated: (params) => {
    const url = 'movie/top_rated'

    return axios.get(url, params)
  },
  getMoviesUpcoming: (params) => {
    const url = 'movie/upcoming'

    return axios.get(url, params)
  },
  getMoviesPopular: (params) => {
    const url = 'movie/popular'

    return axios.get(url, params)
  },
  getMoviesPlaying: (params) => {
    const url = 'movie/now_playing'

    return axios.get(url, params)
  },
  getMoviesRecommendations: (id, params) => {
    const url = `movie/${id}/recommendations`

    return axios.get(url, params)
  },
  getMoviesSimiliar: (id, params) => {
    const url = `movie/${id}/similiar`

    return axios.get(url, params)
  },
  getTV: (category, params) => {
    const url = `tv/${category}`

    return axios.get(url, params)
  },
}

// TV Endpoint
export const tvEndpoint = {
  getTV: (category, params) => {
    const url = `tv/${category}`

    return axios.get(url, params)
  },
  getTvById: (id, params) => {
    const url = `tv/${id}`

    return axios.get(url, params)
  },
  getTvTopRated: (params) => {
    const url = 'tv/top_rated'

    return axios.get(url, params)
  },
  getTvAiring: (params) => {
    const url = 'tv/airing_today'

    return axios.get(url, params)
  },
  getTvPopular: (params) => {
    const url = 'tv/popular'

    return axios.get(url, params)
  },
  getTvOnTheAir: (params) => {
    const url = 'tv/on_the_air'

    return axios.get(url, params)
  },
  getTvRecommendations: (id, params) => {
    const url = `tv/${id}/recommendations`

    return axios.get(url, params)
  },
  getTvSimiliar: (id, params) => {
    const url = `tv/${id}/similiar`

    return axios.get(url, params)
  },
}
