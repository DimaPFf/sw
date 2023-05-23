import React from 'react'
import { Form } from 'react-bootstrap'

type Props = {
  field: string
  idx: number
  editMode: boolean
  value: string
  onChange: (key: string, value: string) => void
}

function TableRow({ field, idx, editMode, value, onChange }: Props) {


  return (
    <tr style={{ height: '50px' }}>
      <th scope='row' className='w-25 '>
        {idx + 1}
      </th>
      <td className='w-25'>{field}</td>
      <td className='text-wrap w-50'>
        {editMode && field !== 'name' ? (
          <Form.Control
            className='p-0 border-0'
            value={value}
            onChange={(e) => onChange(field, e.currentTarget.value)}
          />
        ) : (
          <span>{value}</span>
        )}
      </td>
    </tr>
  )
}

export default TableRow
