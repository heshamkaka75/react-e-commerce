import React from 'react'
import Footer from '../Footer/Footer'
import MyNav from '../Navbar/Nav'
import { Button, Container, Image, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { clear, deleteFromCard } from '../rtk/slices/cardSlice'

const Card = () => {
  const card = useSelector(state => state.card)
  const dispatch = useDispatch()
  const totalPrice = card.reduce( (acc,product) => {
    acc += product.price * product.count;
    return acc;
  }, 0 )
  return (
    <>
        <MyNav />
        <Container>
        <h1>Card</h1>
        <h4>Total Price = ${totalPrice}</h4>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
            <th>Count</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {card.map( (product)=> (
                        <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td><Image style={{ height: '100px',width: '100px' }} variant="top" alt='card' src={product.image} /></td>
                        <td>{product.price}$</td>
                        <td>{product.count}</td>
                        <td><Button variant="danger" onClick={ ()=> dispatch(deleteFromCard(product)) }>Delete</Button></td>
                      </tr>
          ) )}

        </tbody>
      </Table>
      <Button variant="warning" onClick={ ()=> dispatch(clear()) }>Clear</Button>
      </Container>
        <Footer />
        </>
  )
}

export default Card