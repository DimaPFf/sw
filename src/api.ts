import { Params, Response } from './types'
import { API_URL } from './constants'
import { getQuery } from './utils'

export const getData = async (queryPrams?: Params): Promise<Response | undefined> => {
  try {
    const res = await fetch(`${API_URL}/people/${getQuery(queryPrams)}`)
    return await res.json()
  } catch (e) {
    console.log('Error', e)
  }
}