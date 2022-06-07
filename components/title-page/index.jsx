import React from 'react'

export default function TitlePage({ category }) {
  const title = category.replace('-', ' ')

  return (
    <div className='title-page'>
      <h2>{title}</h2>
    </div>
  )
}
