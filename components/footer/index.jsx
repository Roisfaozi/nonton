import { useEffect, useState } from 'react'
export default function Footer() {
  const [pageURL, setPageURL] = useState(0)
  const year = new Date().getFullYear()
  useEffect(() => {
    setPageURL(window.location.origin)
  })

  return (
    <footer>
      <div className='footer-container'>
        © {year} Copyright: <a href={pageURL}>{pageURL}</a> | Designed by{' '}
        <a href={pageURL}>Rois Faozi</a>
      </div>
    </footer>
  )
}
