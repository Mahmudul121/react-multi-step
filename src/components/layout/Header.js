import React from 'react'
import './layout.scss'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
  return (
    <div className='header-wrapper'>
      <Navbar bg='light' data-bs-theme='light'>
        <Container>
          <Navbar.Brand href='#home'>Mahmudul</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home-1</Nav.Link>
            <Nav.Link href='#features'>Home-2</Nav.Link>
            <Nav.Link href='#pricing'>Home-3</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
