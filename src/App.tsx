import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Search from './components/search'
import Header from './components/header'
import Home from './pages/home'
import { useLoadPeople } from './hooks'
import CardPage from './pages/card-page'

export const App = () => {
  useLoadPeople()
  return (
    <Router>
      <Header label='Star Wars'>
        <Search />
      </Header>

      <Container className="py-5">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/card/:id' element={<CardPage />}></Route>
        </Routes>
      </Container>
    </Router>
  )
}

export default App
