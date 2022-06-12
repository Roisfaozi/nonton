import { withRouter } from 'next/router'
import ReactPaginate from 'react-paginate'
import HeroCarousel from '../../components/hero-carousel'
import ItemCard from '../../components/item-card'
import TitlePage from '../../components/title-page'
import { tvEndpoint } from '../../service'

function category(props) {
  const { items, category, totalPages, currentPage } = props
  const pagginationHandler = (page) => {
    const currentPath = props.router.aspath
    const currentQuery = { ...props.router.query }
    currentQuery.page = page.selected + 1

    props.router.push({
      pathname: currentPath,
      query: currentQuery,
    })
  }
  return (
    <>
      <HeroCarousel popular={items} />
      <TitlePage category={category} />
      <div className='section'>
        <div className='item-grid'>
          {items.map((item, i) => (
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
  const category = query.category.replaceAll('-', '_')
  const data = await tvEndpoint.getTV(category, {
    params: { page: page },
  })
  return {
    props: {
      items: data.results,
      category: query.category,
      totalPages: data.total_pages,
      currentPage: data.page,
    },
  }
}

export default withRouter(category)