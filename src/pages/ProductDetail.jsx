import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react';
import ProductService from '../services/productService';
 

export default function ProductDetail() {
  let {id} = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    let productService = new ProductService();
    productService.getByProductId(id).then(result => setProduct(result.data));
  }, [])

  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated='right'
              size='mini'
              src='/images/avatar/large/jenny.jpg'
            />
            <Card.Header>{product.title}</Card.Header>
            <Card.Meta>{product.category}</Card.Meta>
            <Card.Description>{product.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>
                Sepete ekle
              </Button>
              <Button basic color='red'>
                Sepete git
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  )
}