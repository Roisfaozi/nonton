import { withRouter } from 'next/router'
import React from 'react'
import ReactPaginate from 'react-paginate'
import HeroCarousel from '../../components/hero-carousel'
import ItemCard from '../../components/item-card'
import TitlePage from '../../components/title-page'
import { moviesEndpoint } from '../../service'

function category({ movies, category, totalPages, currentPage }) {
  const pagginationHandler = (page) => {
    const currentPath = props.router.aspath
    const currentQuery = { ...props.router.query }
    currentQuery.page = page.selected + 1
    console.log(page)

    props.router.push({
      pathname: currentPath,
      query: currentQuery,
    })
  }
  return (
    <>
      <HeroCarousel popular={movies} />
      <TitlePage category={category} />
      <div className='section'>
        <div className='item-grid'>
          {movies.map((item, i) => (
            <ItemCard key={i} item={item} />
          ))}
        </div>
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          activeClassName={'active'}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          initialPage={currentPage - 1}
          pageCount={totalPages} //page count
          marginPagesDisplayed={2}
          pageRangeDisplayed={4}
          onPageChange={pagginationHandler}
        />
      </div>
    </>
  )
}

export async function getServerSideProps({ query }) {
  // Fetch data from external API
  const page = query.page || 1
  const category = query.category.replace('-', '_')
  const data = await moviesEndpoint.getMovies(category, {
    params: { page: page },
  })
  return {
    props: {
      movies: data.results,
      category: query.category,
      totalPages: data.total_pages,
      currentPage: data.page,
    },
  }
}

export default withRouter(category)
