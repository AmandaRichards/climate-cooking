import React from 'react'
import {useState, useEffect} from 'react'
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import {Row, Col} from 'react-bootstrap';
import { useRouter } from 'next/router';
import css from '../styles/homepage.module.css'


const SearchResults = ({handleChange, searchInput, handleEnter}) => {

  const [recipes, setRecipes] = useState()
  const router = useRouter();
const searchQuery =
    router && router.query && router.query && router.query.searchQuery
      ? router.query.searchQuery
      : "";
console.log({searchQuery})

useEffect(()=>{
    async function getRecipe(){
        const response = await fetch(`https://climate-conscious-cooking.herokuapp.com/recipes/search/${searchQuery}`)
        const data= await response.json();
        console.log(data.payload);
        setRecipes(data.payload)
        console.log(recipes)
   }
    getRecipe();
}, [ recipes, searchQuery]
)


  return (
    <>
    <NavBar className={css.NavBar} handleChange={handleChange} searchInput={searchInput} handleEnter={handleEnter} />
    <div>{recipes? recipes[0] : "we don't have any recipes with this ingredient"}</div>
    </>
  )
}

export default SearchResults;
