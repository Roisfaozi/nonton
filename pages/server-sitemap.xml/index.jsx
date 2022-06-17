import { getServerSideSitemapIndex } from 'next-sitemap'
import axios from '../../service/axios'

export const getServerSideProps = async (ctx) => {
  const url = process.env.NEXT_PUBLIC_BASE_URL
  let movies = []
  let tv = []
  let page = [...Array(700).keys()]
  await Promise.all(
    page.map(async (page) => {
      await axios
        .get('trending/movie/day', {
          params: {
            page: page + 1,
          },
        })
        .then((res) => {
          const items = res.results
          for (let i = 0; i < items.length; i++) {
            movies.push(items[i])
          }
        })
      await axios
        .get('trending/tv/day', {
          params: {
            page: page + 1,
          },
        })
        .then((res) => {
          const items = res.results
          for (let i = 0; i < items.length; i++) {
            tv.push(items[i])
          }
        })
    })
  )

  return getServerSideSitemapIndex(ctx, [
    `${url}/server-sitemap-1.xml`,
    `${url}/server-sitemap-2.xml`,
    `${url}/server-sitemap-3.xml`,
    `${url}/server-sitemap-4.xml`,
  ])
}

export default function Site() {}
