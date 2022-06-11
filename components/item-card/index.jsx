import Link from 'next/link'
import { useState } from 'react'
import slugify from 'slugify'

export default function ItemCard({ item }) {
  const [isShown, setShown] = useState(false)
  return (
    <div className='item-card'>
      <div
        className='card'
        onMouseEnter={() => setShown(true)}
        onMouseLeave={() => setShown(false)}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          alt={item.title}
          className='card-img'
        />
        <Link
          key={item.id}
          href='/movie/[...id]'
          as={`/movie/${item.id}/${slugify(`${item.title}`, { lower: true })}`}>
          <a title={item.title} className='streched-link'></a>
        </Link>
        {isShown && (
          <div className='card-body'>
            <h2 className='name'>{item.title || item.name}</h2>
            <h6 className='des'>
              {item.overview ? item.overview.slice(0, 50) + '...' : ''}
            </h6>
            <Link
              key={item.id}
              href='/movie/[...id]'
              as={`/movie/${item.id}/${slugify(`${item.title}`, {
                lower: true,
              })}`}>
              <a title={item.title} className='streched-link'></a>
            </Link>
            <button className='watchlist-btn'>add to watchlist</button>
          </div>
        )}
      </div>
    </div>
  )
}
