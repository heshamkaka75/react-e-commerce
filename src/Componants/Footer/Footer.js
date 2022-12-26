import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <Container>
            <Row sm={6} md={6} lg={3}>
            <Col sm={3} md={6} lg={3}>
            <h4>Club Information</h4>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
            </ul>
            </Col>
            <Col sm={3} md={6} lg={3}>
            <h4>Club Information</h4>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
            </ul>
            </Col>
            <Col sm={3} md={6} lg={3} >
            <h4>Club Information</h4>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
            </ul>
            </Col>
            <Col sm={3} md={6} lg={3} >
            <h4>Club Information</h4>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
            </ul>
            </Col>
            </Row>
            </Container>
    </div>
  )
}

export default Footer