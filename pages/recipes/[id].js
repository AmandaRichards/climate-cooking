import React from 'react'
import Header from '../../Components/Header';
import NavBar from '../../Components/NavBar';
import { Row, Col } from 'react-bootstrap';
import css from '../../styles/recipe.module.css'

export const getStaticProps = async (context) => {
const id = context.params.id;
const res = await fetch(`https://climate-conscious-cooking.herokuapp.com/recipes/` + id);
const data = await res.json();

return {
    props: { recipes: data.payload}
}


}

export const getStaticPaths = async () => {
    const res = await fetch(`https://climate-conscious-cooking.herokuapp.com/recipes`); 
    const data = await res.json();
    console.log(typeof(data))
    const paths =   data.payload.map(recipe => {
        return {
            params: {id: recipe.id.toString()}
        }
    })
    return {
        
        paths,
        fallback: false
    }
}




const Details = ({recipes}) => {
    console.log(recipes)
  return (
      
        <div className={css.body}>
        <Header text={recipes.title} />
        <NavBar />
        {/* <Row>
            <h1 className={css.h1}>{recipe}</h1>
            </Row> */}
            <Row>
                <Col><h2 className={css.h1}>Ingredients</h2></Col>
                <Col><h2 className={css.h1}>Method</h2></Col>
            </Row>
            <Row>
                <Col>
                <ul className={css.list}>{recipes.ingredients.map(function(ingredient, i){
  console.log('test');
  return <li key={i}>{ingredient}</li>
})}
</ul>
                 
                </Col>
                <Col>
                    <ol className={css.list}>{recipes.method.map(function(step, i){
  console.log('test');
  return <li key={i}>{step}</li>
})}</ol>
                </Col>
            </Row>
        </div>
      
    )
}

//     <div>
//     <h1>{ recipes.title}</h1>
//     <p>{ recipes.ingredients}</p>
//     </div>
//   )
// }

export default Details
