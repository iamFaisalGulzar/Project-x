import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardItem(props) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img className='h-[190px]' variant="top" src={props.imageUrl} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text className='inline-block font-semibold'>Price: {props.price}</Card.Text>
      <Card.Text className='inline-block float-right font-semibold'>{props.sold} sold</Card.Text>
      <Card.Text>
        {props.description}
      </Card.Text>
      <div className='w-full flex justify-center'>
      <Button variant="primary">
        <a className='text-white no-underline' href={`/products/${props.id}`}>Show Details</a>
      </Button>
      </div>
    </Card.Body>
  </Card>
  )
}

export default CardItem