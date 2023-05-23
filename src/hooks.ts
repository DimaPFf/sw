import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPeople, addSearch } from './store/peopleSlice'
import { RootState } from './store'
import { useParams } from 'react-router-dom'
import { getData } from './api'
import { makePages, prepareData } from './utils'

export const useLoadPeople = () => {
  const dispatch = useDispatch()

  getData().then((data) => {
    if (data) {
      dispatch(addPeople(prepareData(data)))
    }
  })
}

export const useSearchPeople = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    getData({ search: value }).then((data) => {
      if (data) {
        dispatch(addPeople(prepareData(data)))
      }
    })
    dispatch(addSearch(value))
  }, [value])

  return { value, setValue }
}

export const usePagination = () => {
  const dispatch = useDispatch()
  const { totalPeople, next, previous, currentPage, search } = useSelector((state: RootState) => state.peopleState)
  const getPages = useMemo(makePages(totalPeople), [totalPeople])

  const moveToPage = (pageNumber: number) => {
    getData({ page: pageNumber, search }).then((data) => {
      if (data) {
        dispatch(addPeople(prepareData(data, pageNumber)))
      }
    })
  }

  return { pages: getPages, next, previous, moveToPage, currentPage }
}

export const useGetCharacter = () => {
  const { id } = useParams()
  const { people } = useSelector((state: RootState) => state.peopleState)
  const { localEditedPeople } = useSelector((state: RootState) => state.editedPeopleState)

  if (id && localEditedPeople[id]) {
    return localEditedPeople[id]
  }

  return people.find((item) => item.name === id)
}
