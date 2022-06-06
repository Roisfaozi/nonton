import Link from 'next/link'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import ItemCard from '../item-card'

export default function ItemsCollection(props) {
  const { results, title } = props
  const titleProps = title.toLowerCase().replaceAll(' ', '-')
  const url = titleProps.replace('-tv', '')
  // console.log('sega', url)
  // console.log(url.replace('-tv', ''))

  return (
    <div className='section mb-3'>
      <div className='section-head'>
        <h2>{title}</h2>
        <Link href={title.includes('TV') ? `/tv/${url}` : `/movie/${url}`}>
          <a className='small'>View more</a>
        </Link>
      </div>
      <div className='items-list'>
        <Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'}>
          {results.map((item, i) => (
            <SwiperSlide key={i}>
              <ItemCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
