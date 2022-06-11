import React from 'react'

export default function MoviesHead({ movie }) {
  return (
    <div
      className='h-[90vh] md:h-screen text-white'
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}>
      <div className='w-full h-full featured--vertical '>
        <div className='w-full h-full featured--horizontal flex flex-col justify-center px-3 md:pl-10 pb-[50px]'>
          <h1 className='text-4xl md:text-6xl font-bold'>
            {movie?.title || movie?.name || movie?.original_name}
          </h1>

          <p className='mt-[15px] text-sm md:text-lg lg:text-xl text-[#999]  max-w-[70%] md:max-w-[40%]'>
            {movie.overview ? movie.overview.slice(0, 50) + '...' : ''}
          </p>
          <div className='mt-[15px]  '>
            <a
              onClick={() => handleSelectedMovie(movie)}
              className='cursor-pointer active:scale-95 mr-5 inline-flex justify-center items-center gap-2 text-sm md:text-2xl font-semibold py-2 px-2  md:py-[12px] md:px-[25px] rounded-[5px] bg-[#FFF] text-[#000] transition hover:opacity-[0.8]  '>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='w-[20px] sm:w-[24px]'>
                <path
                  d='M3 2.69127C3 1.93067 3.81547 1.44851 4.48192 1.81506L21.4069 11.1238C22.0977 11.5037 22.0977 12.4963 21.4069 12.8762L4.48192 22.1849C3.81546 22.5515 3 22.0693 3 21.3087V2.69127Z'
                  fill='currentColor'></path>
              </svg>
              <span>Play</span>
            </a>
            <a
              onClick={() => handleSelectedMovie(movie)}
              className='cursor-pointer active:scale-95 inline-flex justify-center items-center gap-2 text-sm md:text-2xl font-semibold py-2 px-2  md:py-[12px] md:px-[25px] rounded-[5px] bg-[#333] text-[#FFF] transition hover:opacity-[0.8] '>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='w-[20px] sm:w-[24px] mr-2'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z'
                  fill='currentColor'></path>
              </svg>
              <span>More info</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
