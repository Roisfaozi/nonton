import Link from 'next/link'
import slugify from 'slugify'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function HeroCarousel(props) {
  const { popular, isTv } = props
  SwiperCore.use([Autoplay])
  console.log(props)

  const popularShows = popular.slice(0, 6)

  return (
    <div className='hero-carousel'>
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        touchEventsTarget='container'
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className='mySwiper'>
        {popularShows.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <HeroContent
                item={item}
                isTv={isTv}
                className={`${isActive ? 'active' : ''}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

const HeroContent = (props) => {
  const { item, isTv } = props
  const background = `https://image.tmdb.org/t/p/original/${
    item.backdrop_path ? item.backdrop_path : item.poster_path
  }`

  return (
    <div
      className={`hero-slide-item ${props.className}`}
      style={{ backgroundImage: `url(${background})` }}>
      <div className='hero-slide-item-content container'>
        <div className='hero-slide-item-content-poster'>
          <img
            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            alt={item.title || item.name}
          />
        </div>
        <Link
          key={item.id}
          href={isTv ? `/tv/[...id]` : `/movie/[...id]`}
          as={
            isTv
              ? `/tv/${item.id}/${slugify(`${item.title || item.name}`, {
                  lower: true,
                })}`
              : `/movie/${item.id}/${slugify(`${item.title || item.name}`, {
                  lower: true,
                })}`
          }>
          <a title={item.title || item.name} className='streched-link'></a>
        </Link>
        <div className='hero-slide-item-content-info'>
          <h2 className='title'>{item.title || item.name}</h2>
          <p className='overview'>{item.overview}</p>
          <div className='btns'>
            <Link
              key={item.id}
              href={isTv ? `/tv/[...id]` : `/movie/[...id]`}
              as={
                isTv
                  ? `/tv/${item.id}/${slugify(`${item.title || item.name}`, {
                      lower: true,
                    })}`
                  : `/movie/${item.id}/${slugify(`${item.title || item.name}`, {
                      lower: true,
                    })}`
              }>
              <a className='cursor-pointer active:scale-95  inline-flex justify-center items-center gap-2 text-sm md:text-2xl font-semibold p-1  md:py-[12px] md:px-[25px] rounded-full bg-white text-black transition hover:opacity-[0.8]  '>
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
