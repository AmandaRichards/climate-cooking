import React from 'react';
import Card from 'react-bootstrap/Card';
import {Row} from 'react-bootstrap'
import css from './RecipeBoxx.module.css'
import Link from 'next/link'

const RecipeBoxx = ({image, title, text, link, handleClick}) => {
    return (
        <Row >
        <Card  style={{ width: '18rem' }} className={`${css.card} ${css.tooltip}`}  >
        <Link href={link}>
        <span className={css.tooltiptext} onClick={handleClick}>See recipe</span>
        </Link>
      <Row className={css.imagediv}> 
  <Card.Img variant="top" src={image} className={css.image}/>
  </Row>  
  <Row>
  <Card.Body className={css.textRow} >
  
  
    <Card.Title>{title}</Card.Title>
    <Card.Text>
     {text}
    </Card.Text>
    
  </Card.Body>
  </Row>
</Card>
</Row>
    )
}

export default RecipeBoxx