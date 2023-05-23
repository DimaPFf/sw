import { Params, Response } from './types'

export const getQuery = (queryPrams: Params | undefined) => {
  if (queryPrams) {
    const query = Object.entries(queryPrams)
      .map((query) => query.join('='))
      .join('&')
    return '?' + query
  }
  return ''
}

export const prepareData = (data: Response, pageNumber = 1) => {
  return {
    people: data.results,
    previous: data.previous,
    next: data.next,
    totalPeople: data.count,
    currentPage: pageNumber,
  }
}

export const makePages = (totalPeople: number) => () => {
  const pages = []
  let page = 1
  for (let i = 0; i < totalPeople; i += 10) {
    pages.push(page)
    page++
  }

  return pages
}