import React, { useMemo } from 'react'
import { Pagination } from 'react-bootstrap'

type Props = {
  pages: number[],
  next: string | null,
  previous: string | null,
  moveToPage: (page: number) => void,
  currentPage: number,
}

function PaginationBar({ pages, next, previous, moveToPage, currentPage }: Props) {
  return (
    <Pagination color='secondary'>
      <Pagination.Prev disabled={!previous} onClick={() => moveToPage(currentPage - 1)} />
      {pages.map((page) => {
        return (
          <Pagination.Item key={page} active={page === currentPage} onClick={() => moveToPage(page)}>
            {page}
          </Pagination.Item>
        )
      })}

      <Pagination.Next disabled={!next} onClick={() => moveToPage(currentPage + 1)} />
    </Pagination>
  )
}

export default PaginationBar
