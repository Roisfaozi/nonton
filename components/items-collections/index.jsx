import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
const ItemCard = dynamic(() => import('../item-card'), {
  ssr: true,
})
export default function ItemsCollection(props) {
  const { results, title, isTv } = props
  const titleSlug = title.toLowerCase().replaceAll(' ', '-')
  const url = titleSlug.replace('-tv', '')
  const [itemJsx, setItemJsx] = useState('')
  const showItemCard = () => {
    const iJsx = []
    results.map((item, i) => {
      iJsx.push(
        <SwiperSlide key={i}>
          <ItemCard item={item} title={title} isTv={isTv} />
        </SwiperSlide>
      )
    })
    setItemJsx(iJsx)
  }
  if (!itemJsx && results.length) {
    showItemCard()
  }
  return (
    <div className='section mb-3'>
      <div className='section-head'>
        <h2>{title}</h2>
        {title !== 'Recommendations' && title !== 'Similar' && (
          <Link
            href={title.includes('TV') ? `/tv/[category]` : `/movie/[category]`}
            as={title.includes('TV') ? `/tv/${url}` : `/movie/${url}`}>
            <a className='small'>View more</a>
          </Link>
        )}
      </div>
      <div className='items-list'>
        <Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'}>
          {itemJsx}
        </Swiper>
      </div>
    </div>
  )
}
