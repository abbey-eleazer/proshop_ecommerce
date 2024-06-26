import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap"
import Rating from "../components/Rating"
import { useState, useEffect } from 'react'
import axios from 'axios'



function ProductScreen () {
  
  const [product, setProduct] = useState({})
  const { id: productId } = useParams()

  useEffect(() => {
    const fetchProduct = async () => {
        const {data} = await axios.get(`/api/products/${productId}`)
        setProduct(data)
    } 
      fetchProduct()
  }, [productId])

  return (
     <>
      <Link className="btn btn-light my-3" to='/' > Go Back </Link>
      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">

            {/* product name */}
            <ListGroup.Item> <h3>{product.name}</h3></ListGroup.Item>
            
             {/* product description */}
            <ListGroup.Item>
              Description: {product.description}
            </ListGroup.Item>

            {/* product rating */}
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </ListGroup.Item>

            {/* product price */}
            <ListGroup.Item>
              Price: ${product.price}
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col><strong>${product.price}</strong></Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col><strong>${product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</strong></Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button className="btn-block" type="button" disabled={product.countInStock === 0} > Add To Cart </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
     </>
  )
}

export default ProductScreen