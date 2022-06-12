import ReactPlayer from 'react-player'

export default function PlayerHead({ movie, videos }) {
  console.log(videos)
  const vidUrl = videos.find((video) => video.type === 'Trailer')
  console.log(vidUrl)
  return (
    <div className='masthead-container'>
      <div className='masthead-card'>
        <div className='masthead-video'>
          <div className='video-container'>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${vidUrl.key}`}
              width='100%'
              playing
              playIcon={
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-[60px] sm:w-[70px] h-full'>
                  <path
                    d='M3 2.69127C3 1.93067 3.81547 1.44851 4.48192 1.81506L21.4069 11.1238C22.0977 11.5037 22.0977 12.4963 21.4069 12.8762L4.48192 22.1849C3.81546 22.5515 3 22.0693 3 21.3087V2.69127Z'
                    fill='currentColor'></path>
                </svg>
              }
              light={`https://image.tmdb.org/t/p/original/${
                movie.poster_path ? movie.poster_path : movie.backdrop_path
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
