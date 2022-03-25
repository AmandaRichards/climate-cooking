import React from 'react'
import {useState, useEffect} from 'react'
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import {Row, Col} from 'react-bootstrap';


export const searchResults = () => {

      useEffect(()=>{
    async function getRecipes(){
        const id=1
        const response = await fetch(`https://climate-conscious-cooking.herokuapp.com/recipes/search/${ingredient}`)
        const data= await response.json();
        console.log(data.payload);
        setRecipe(data.payload.title);
        setMethod(data.payload.method);
        setIngredients(data.payload.ingredients);
        setCuisine(data.payload.cuisine)


    }
    getRecipe();
}, [recipe])
  return (
    <div>searchResults</div>
  )
}
