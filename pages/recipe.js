import React from 'react'
import {useState, useEffect} from 'react'
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import {Row, Col} from 'react-bootstrap';
import css from '../styles/recipe.module.css'

const Recipe = ({id}) => {
    const ID={id}
    const [recipe, setRecipe] = useState();
    const [method, setMethod] = useState([]);
    const [ingredients, setIngredients] =useState([]); 
    const [cuisine, setCuisine] = useState()

    useEffect(()=>{
    async function getRecipe(){
       
        const response = await fetch(`https://climate-conscious-cooking.herokuapp.com/recipes/${ID}`)
        const data= await response.json();
        console.log(data.payload);
        setRecipe(data.payload.title);
        setMethod(data.payload.method);
        setIngredients(data.payload.ingredients);
        setCuisine(data.payload.cuisine)


    }
    getRecipe();
}, [recipe, ID])
    return (
        <div className={css.body}>
        <Header text={cuisine} />
        <NavBar />
        <Row>
            <h1 className={css.h1}>{recipe}</h1>
            </Row>
            <Row>
                <Col><h2 className={css.h1}>Ingredients</h2></Col>
                <Col><h2 className={css.h1}>Method</h2></Col>
            </Row>
            <Row>
                <Col>
                <ul className={css.list}>{ingredients.map(function(ingredient, i){
  console.log('test');
  return <li key={i}>{ingredient}</li>
})}
</ul>
                 
                </Col>
                <Col>
                    <ol className={css.list}>{method.map(function(step, i){
  console.log('test');
  return <li key={i}>{step}</li>
})}</ol>
                </Col>
            </Row>
        </div>
    )
}

export default Recipe