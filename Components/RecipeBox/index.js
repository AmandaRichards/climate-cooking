import React from 'react'
import Card from 'react-bootstrap/Card'
import {Row, Col} from 'react-bootstrap'

const RecipeBox = ({image,title, text}) => {
    return (
       <Row xs={1} md={3} className="g-4">
  {Array.from({ length: 3 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
    )
}

export default RecipeBox

