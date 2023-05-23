export type People = {
  type: string
  name: string
  birth_year: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  gender: string
  homeworld: string
  films: string[]
  species: string[]
  vehicles: string[]
  starships: string[]
  created: string
  edited: string
  url: string
}

export type Params = {
  search?: string
  page?: number
}

export type Response = {
  results: People[]
  previous: string
  next: string
  count: number
}


export type PeopleKey = keyof People

export type LocalPeople = {
  [k: string]: People
}
