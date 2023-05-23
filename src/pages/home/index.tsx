import React from 'react'
import { useSelector } from 'react-redux'
import { ListGroup } from 'react-bootstrap'
import { usePagination } from '../../hooks'
import PaginationBar from '../../components/pagination'
import { RootState } from '../../store'
import { useNavigate } from 'react-router-dom'

function Home() {
  const people = useSelector((state: RootState) => state.peopleState.people)
  const { pages, next, previous, moveToPage, currentPage } = usePagination()
  const navigate = useNavigate()
  if (!people) {
    return (
      <div className='d-flex align-items-center'>
        <strong>Загрузка...</strong>
      </div>
    )
  }

  return (
    <div className='page-content'>
      <div className='list-group-container'>
        <ListGroup>
          {people.map((item) => {
            return (
              <ListGroup.Item key={item.name} onClick={() => navigate('/card' + '/' + item.name, {})}>
                {item.name}
              </ListGroup.Item>
            )
          })}
        </ListGroup>
      </div>
      <div className='pagination-container'>
        <PaginationBar
          pages={pages}
          currentPage={currentPage}
          next={next}
          previous={previous}
          moveToPage={moveToPage}
        />
      </div>
    </div>
  )
}

export default Home
