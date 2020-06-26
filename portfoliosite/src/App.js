import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Lyyte Faridi',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Title Here',
        subTitle: 'Subtitle here',
        Text: 'Home text here'
      },
      about: {
        title: 'About Me',
      },
      contact: {
        title: 'Contact Me',
      },
    }
  }

  render() {
    return (
      <Router>
        <Container className='p=0' fluid={true}>

          <Navbar className='border-bottom' bg='transparent' expand='lg'>
            <Navbar.Brand>Lyyte</Navbar.Brand>

            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle'></Navbar.Toggle>
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/about'>About</Link>
                <Link className='nav-link' to='/contactme'>Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>


          <div>Hello World!</div>
        </Container>

      </Router>

    )
  }
}

export default App;
