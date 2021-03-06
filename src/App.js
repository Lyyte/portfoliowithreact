import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Footer from './components/Footer'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BootcampPage from './pages/BootcampPage';


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
        title: 'Lyyte Faridi',
        subTitle: '"It’s fine to celebrate success but it is more important to heed the lessons of failure." ',
        text: "-Bill Gates"
      },
      about: {
        title: 'About Me',
      },
      contact: {
        title: 'Contact Me',
      },
      bootcamp: {
        title: 'UT Full-Stack Bootcamp',
        subTitle: 'Concept Coursework',
        text: 'Assignments for the Bootcamp to apply concepts and technologies learned in class'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className='p=0' fluid={true}>

          <Navbar className='border-bottom' bg='transparent' expand='lg'>
            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle'></Navbar.Toggle>
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/about'>About</Link>
                <Link className='nav-link' to='/contactme'>Contact</Link>
                <Link className='nav-link' to='/bootcamp'>Bootcamp</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

    <Route path='/' exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
    <Route path='/about' exact render={() => <AboutPage title={this.state.about.title} />} />
    <Route path='/contactme' exact render={() => <ContactPage title={this.state.contact.title} />} />
    <Route path='/bootcamp' exact render={() => <BootcampPage title={this.state.bootcamp.title} subTitle={this.state.bootcamp.subTitle} text={this.state.bootcamp.text} />} />

      <Footer />
  
        </Container>

      </Router>

    )
  }
}

export default App;
