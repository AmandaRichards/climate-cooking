import React from 'react'
import Header from '../Components/Header'
import NavBar from '../Components/NavBar'
import {Row, Col} from 'react-bootstrap'
import { Router, useRouter } from "next/router";
import css from '../styles/homepage.module.css'
import Banner from '../Components/Intro'
import RecipeBox from "../Components/RecipeBox"
import RecipeBoxx from "../Components/RecipeBoxx"
import FactCarousel from '../Components/FactCarrousel'
import Link from 'next/link'
import {useState, useEffect} from 'react';
import { SearchResult } from '../Components/SearchResult';
import { Input } from '@mui/material';

export const getStaticProps = async () => {
    const res = await fetch(`https://climate-conscious-cooking.herokuapp.com/recipes`);
    const data = await res.json();
console.log(data)
    return {
        props: {recipes: data}
    }

}
const Homepage = ({recipes}) => {
    //  const [recipe, setRecipe] = useState();
const router = useRouter(); 
const [searchInput, setSearchInput] = useState("");
//const [recipes, setRecipes] = useState();
const [search, setSearch] = useState('');

console.log(recipes)




  const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);
};

const handleEnter = (e) =>{
    if (e.key === "Enter") {
                  setSearch(searchInput)
}
}

 useEffect(()=>{
    async function getRecipe(){
        const response = await fetch(`https://climate-conscious-cooking.herokuapp.com/recipes/search/${search}`)
        const data= await response.json();
        console.log({searchInput})
        console.log(data.payload);
        setSearch(data.payload)
   }
    getRecipe();
}, [search, searchInput])
console.log(searchInput)
    return (
        <div className={css.body}>
        <Row className={css.row}> <Header text={"Climate-Conscious Cooking"}/></Row>
        <Row className={css.row}> <NavBar className={css.NavBar} handleChange={handleChange} handleEnter={handleEnter} search={search}  link={`/recipes/search/${search}`}/></Row>
        <Row xs={8} className={css.Banner}> <Banner /> </Row>
        {/* {result? result.map(function(recipe, i){
 console.log(result)
  return <SearchResult key={i} title={recipe.title} />
})  : */}
<div>
        <Row className={css.row}><h1>What's Hot?</h1> </Row>
        <Row className={css.box}> 
        
        <Col className={css.col} xs={4}><RecipeBoxx image="https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-eu.s3.amazonaws.com%2F193a7b7e-c930-11e9-a1f4-3669401ba76f?fit=scale-down&source=next&width=700" title={"Vegan Haggis"} text={"Celebrate Burns Night with an address to a vegan haggis."} id={1} link={`/recipes/${1}`}/></Col> 
        <Col className={css.col} xs={4}><RecipeBoxx image={"https://www.budgetbytes.com/wp-content/uploads/2014/08/West-African-Peanut-Stew-V.jpg"} title={"Ugandan Peanut Stew"} text={"Transport yourself to the streets of Kampala."} id={2} link={`/recipes/${2}`}/> </Col>
        <Col className={css.col} xs={4}><RecipeBoxx image={"https://cupfulofkale.com/wp-content/uploads/2021/03/Vegan-Spinach-and-Ricotta-Cannelloni.jpg.webp"} title={"Spinach and Ricotta Lasagne"} text={"Best enjoyed with a glass of merlot."} id={3}link='/recipe'/></Col>
        </Row> 
  
        <div>
       
        <Row className={css.row}>
        <FactCarousel />
        </Row>
        </div>

       
            
        </div>
         } </div>
    
    
)}

export default Homepage