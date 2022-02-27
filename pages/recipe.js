import React from 'react'
import {useState, useEffect} from 'react'
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import {Row, Col} from 'react-bootstrap';

const Recipe = () => {

    const [recipe, setRecipe] = useState();
    const [method, setMethod] = useState([]);
    const [ingredients, setIngredients] =useState([]); 

    useEffect(()=>{
    async function getRecipe(){
        const id=1
        const response = await fetch(`https://climate-conscious-cooking.herokuapp.com/recipes/${id}`)
        const data= await response.json();
        console.log(data.payload);
        setRecipe(data.payload.title);
        setMethod(data.payload.method);
        setIngredients(data.payload.ingredients);


    }
    getRecipe();
}, [recipe])
    return (
        <div>
        <Header text={"Scottish"} />
        <NavBar />
        <Row>
            <h1>{recipe}</h1>
            </Row>
            <Row>
                <Col><h2>Ingredients</h2></Col>
                <Col><h2>Method</h2></Col>
            </Row>
            <Row>
                <Col>
                <ul>{ingredients.map(function(ingredient, i){
  console.log('test');
  return <li key={i}>{ingredient}</li>
})}
</ul>
                 
                </Col>
                <Col>
                    <ol>{method.map(function(step, i){
  console.log('test');
  return <li key={i}>{step}</li>
})}</ol>
                </Col>
            </Row>
        </div>
    )
}

export default Recipe