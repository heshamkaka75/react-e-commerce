import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../Footer/Footer'
import MyNav from '../Navbar/Nav'
import { fetchProducts } from '../rtk/slices/product-slices';
import './Product.css'
import { addToCard } from '../rtk/slices/cardSlice';
import Spinner from 'react-bootstrap/Spinner';

 const Product = () => {

  const products = useSelector((state) => state.products)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts())
  } , [])

  return (
    <>
        <MyNav />

        <Container className='pro'>
          <Row>
            {products.map( (product)=>(
                <Col key={product.id}>
                <Card style={{ width: '18rem' }}>
                <Card.Img style={{ height: '300px' }} variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title className='protitle'>{product.title}</Card.Title>
                  <Card.Text>${product.price}</Card.Text>
                  <Button variant="primary" onClick={ ()=> dispatch(addToCard(product)) }>Add to Cart</Button>
                </Card.Body>
              </Card>
          </Col>
            ) )}
            
          </Row>
        </Container>

        <Footer />
        </>
  )
}

export default Product



