import React from 'react'
import prd from '../prd'
import { Row,Col } from 'react-bootstrap'
import { Product } from '../components/Product'


const HomeScreen = () => {
  return (
    <>
    <h1>Latest Products!</h1>
    <Row>
     {prd.map((prod) =>(
         <Col sm={12} md= {6} lg={4} xl={3}>
             <Product product = {prod} />
         </Col>
     ))}
    </Row>
    </>
  )
}

export default HomeScreen