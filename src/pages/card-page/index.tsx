import React, { useState } from 'react'
import { useGetCharacter } from '../../hooks'
import { Button, Container, Form, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import TableRow from '../../components/table-row'
import { PeopleKey, People } from '../../types'
import { useDispatch } from 'react-redux'
import { addEditedPeople } from '../../store/localEditedPerson'

function CardPage() {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false)
  const person = useGetCharacter()
  const [editedPerson, setEditedPerson] = useState<People | undefined>(person)


  const handleChange = (key: string, value: string) => {
    const newEditPerson = { ...editedPerson }
    if (['films', 'species', 'vehicles', 'starships'].includes(key)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      newEditPerson[key] = value.split(' ')
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      newEditPerson[key] = value
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setEditedPerson(newEditPerson)
  }

  if (!editedPerson) return <>No data</>

  const getValues = (value: string | string[]) => {
    if (Array.isArray(value)) {
      return value.map((item) => item + ' ').join('')
    }

    return value
  }

  const onSave = () => {
    if (editedPerson) {
      dispatch(addEditedPeople(editedPerson))
    }

    setEditMode(false)
  }

  return (
    <div>
      <Stack className='p-3 d.flex flex-row justify-content-between align-items-center' style={{ height: '20px' }}>
        <Link to='/' className='text-black w-25'>
          Back
        </Link>
        <Stack className='d.flex flex-row justify-content-end align-items-center gap-2'>
          {editMode && (
            <Button variant='link' className='w-15 d-block text-warning' onClick={onSave}>
              Save
            </Button>
          )}
          <Form.Check // prettier-ignore
            type='switch'
            id='custom-switch'
            label='Edit'
            className='w-20'
            checked={editMode}
            onChange={() => setEditMode(!editMode)}
          />
        </Stack>
      </Stack>
      <Container className='mt-2'>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Parameter</th>
              <th scope='col'>Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(editedPerson).map((key, index) => (
              <TableRow
                key={key}
                field={key}
                idx={index}
                editMode={editMode}
                value={getValues(editedPerson[key as PeopleKey])}
                onChange={handleChange}
              />
            ))}
          </tbody>
        </table>
      </Container>
    </div>
  )
}

export default CardPage
