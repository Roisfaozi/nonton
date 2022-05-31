import Link from 'next/link'
import React, { useState } from 'react'

export default function ItemCard({ item }) {
  const [isShown, setShown] = useState(false)
  return (
    <div className='item-card'>
      {/* <div style={{ borderRadius: 30 }}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          alt={item.title}
        />
        <div class='card-body'>
          <h2 class='name'>movie name</h2>
          <h6 class='des'>Lorem ipsum dolor sit amet consectetur.</h6>
          <button class='watchlist-btn'>add to watchlist</button>
        </div>
        <h3>{item.title || item.name}</h3>
        <Link key={item.id} href='/movie/[id]' as={`/movie/${item.id}`}>
          <a title={item.title} className='streched-link'></a>
        </Link>
      </div> */}
      <div
        class='card'
        onMouseEnter={() => setShown(true)}
        onMouseLeave={() => setShown(false)}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          alt={item.title}
          className='card-img'
        />
        <Link key={item.id} href='/movie/[id]' as={`/movie/${item.id}`}>
          <a title={item.title} className='streched-link'></a>
        </Link>
        {isShown && (
          <div class='card-body'>
            <h2 class='name'>{item.title || item.name}</h2>
            <h6 class='des'>{item.overview.slice(0, 50) + '...'}</h6>
            <Link key={item.id} href='/movie/[id]' as={`/movie/${item.id}`}>
              <a title={item.title} className='streched-link'></a>
            </Link>
            <button class='watchlist-btn'>add to watchlist</button>
          </div>
        )}
      </div>
    </div>
  )
}
