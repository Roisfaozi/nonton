import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import slugify from 'slugify'

export default function ItemCard({ item, isTv }) {
  const [isShown, setShown] = useState(false)
  return (
    <div className='item-card'>
      <div
        className='card'
        onMouseEnter={() => setShown(true)}
        onMouseLeave={() => setShown(false)}>
        <Image
          src={`https://image.tmdb.org/t/p/w500/${
            item.poster_path || item.backdrop_path
          }`}
          alt={item.title || item.name}
          layout='responsive'
          loading='eager'
          width={197}
          height={295}
          className='card-img'
          objectFit='cover'
          priority={true}
        />
        {/* <img
          src={`https://image.tmdb.org/t/p/w500/${
            item.poster_path || item.backdrop_path
          }`}
          alt={item.title}
          className='card-img'
        /> */}
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
        {isShown && (
          <div className='card-body'>
            <h2 className='name'>{item.title || item.name}</h2>
            <h6 className='des'>
              {item.overview ? item.overview.slice(0, 50) + '...' : ''}
            </h6>
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
            <button className='watchlist-btn'>add to watchlist</button>
          </div>
        )}
      </div>
    </div>
  )
}
