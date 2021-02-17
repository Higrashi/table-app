import React from 'react';
import {createPagination} from './pagination.helper'
import './pagination.styles.css';

const Pagination = ({currentPage, setCurrentPage, numOfData}) => {

    const {pagination} = createPagination({
        numberOfArticles: numOfData,
        articlesPerPage: 50,
        numberOfButtons: 8,
        currentPage
    })

    const handleClick = page => setCurrentPage(page);

    return (
        <div className="pagination">
        <ul>
          <li
            className={`${pagination[0] === currentPage && "disabled"}`}
            onClick={handleClick.bind(null, currentPage - 1)}
          >
            Prev
          </li>
          {pagination.map(page => (
            <li
              className={`${currentPage === page && "active"}`}
              onClick={handleClick.bind(null, page)}
            >
              {page}
            </li>
          ))}
          <li
            className={`${pagination.reverse()[0] === currentPage && "disabled"}`}
            onClick={handleClick.bind(null, currentPage + 1)}
          >
            Next
          </li>
        </ul>
      </div>
    )
}

export default Pagination;

