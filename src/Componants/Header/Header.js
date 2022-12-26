import React from 'react'
import './Header.css'
import Button from 'react-bootstrap/Button';
const Header = () => {
  return (
    <section className='PageHead'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-md-12'>
                    <h2>Welcome to Red Panda Site</h2>
                    <p>Welcome to Read Panda Site, Welcome to Read Panda Site Welcome to Read Panda Site</p>
                    <Button variant="success">Success</Button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header

