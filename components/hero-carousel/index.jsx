import Link from 'next/link'
import React from 'react'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Button from '../button'

export default function HeroCarousel({ popular }) {
  SwiperCore.use([Autoplay])

  const popularShows = popular.slice(0, 6)

  return (
    <div className='hero-carousel'>
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        touchEventsTarget='container'
        // autoplay={{ delay: 3000 }}
        className='mySwiper'>
        {popularShows.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <HeroContent
                item={item}
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
  const item = props.item

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
        <Link key={item.id} href='/movie/[id]' as={`/movie/${item.id}`}>
          <a title={item.title || item.name} className='streched-link'></a>
        </Link>
        <div className='hero-slide-item-content-info'>
          <h2 className='title'>{item.title || item.name}</h2>
          <p className='overview'>{item.overview}</p>
          <div className='btns'>
            <Button onClick={() => hisrory.push('/movie/' + item.id)}>
              Watch now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
