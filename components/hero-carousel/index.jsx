import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import HeroContent from '../hero-content'

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
