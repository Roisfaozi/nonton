import Image from 'next/image'

export default function MoviesInfo({ movie, credits }) {
  const casts = credits.cast.slice(0, 6)
  const image = `https://image.tmdb.org/t/p/original/${
    movie.poster_path ? movie.poster_path : movie.backdrop_path
  }`
  return (
    <div className='movie-content container'>
      <div className='movie-content-poster'>
        <Image
          src={`${image}`}
          alt={movie.title || movie.name}
          width={304}
          sizes={15}
          height={456}
          className='movie-content-poster-img'
          objectFit='cover'
          loading='lazy'
        />
      </div>
      <div className='movie-content-info'>
        <h1 className='title'>{movie.title || movie.name}</h1>
        <div className='detail'>
          <svg className='fill-current text-yellow-500 w-4' viewBox='0 0 24 24'>
            <g data-name='Layer 2'>
              <path
                d='M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z'
                data-name='star'
              />
            </g>
          </svg>
          <span className='ml-1'>{movie.vote_average}</span>
          <span className='mx-2'>|</span>
          <span>
            {movie.first_air_date
              ? movie.first_air_date.slice(0, 4)
              : movie.release_date.slice(0, 4)}
          </span>
          <span className='mx-2'>|</span>
          <span>{movie.runtime} minutes.</span>
          {movie.genres &&
            movie.genres.slice(0, 5).map((genre, i) => (
              <>
                <span className='mx-2'>|</span>

                <span key={i} className='genres-item'>
                  {genre.name}
                </span>
              </>
            ))}
        </div>

        <p className='overview'>{movie.overview}</p>
        <ul className='cast'>
          <li>
            Casts:
            {casts.map((cast, i) => (
              <>
                <span key={i}>{cast.name}</span>
              </>
            ))}
          </li>
        </ul>
      </div>
    </div>
  )
}
