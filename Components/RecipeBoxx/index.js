import React from 'react';
import Card from 'react-bootstrap/Card';
import {Row} from 'react-bootstrap'
import css from './RecipeBoxx.module.css'

const RecipeBoxx = ({image, title, text}) => {
    return (
        <Row >
        <Card  style={{ width: '18rem' }} className={css.card}>
  <Card.Img variant="top" src={image} className={css.image}/>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
     {text}
    </Card.Text>
    
  </Card.Body>
</Card>
</Row>
    )
}

export default RecipeBoxx