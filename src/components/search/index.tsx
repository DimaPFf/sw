import React from 'react'
import { Form, Stack } from 'react-bootstrap'
import { useSearchPeople } from '../../hooks'

function Search() {
  const {value, setValue} = useSearchPeople();
  return (
    <Stack direction='horizontal' gap={3}>
      <Form.Control
        className='me-auto'
        placeholder='Find your favorite character...'
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
    </Stack>
  )
}

export default Search
