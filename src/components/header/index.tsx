import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

type Props = {
  label: string,
  children: React.ReactElement
}

function Header({label, children}: Props) {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand>{label}</Navbar.Brand>
        {children}
      </Container>
    </Navbar>
  )
}

export default Header