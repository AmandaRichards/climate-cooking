import React from 'react'
import {useState, useEffect} from 'react'
import Header from '../../Components/Header';
import NavBar from '../../Components/NavBar';
import {Row, Col} from 'react-bootstrap';
import { useRouter } from 'next/router';
import css from '../../styles/recipe.module.css'

// export const searchQuery =
//     router && router.query && router.query && router.query.searchQuery
//       ? router.query.searchQuery
//       : "";

export const getStaticProps = async (context) => {
  console.log(context)
 const searchResults = context.params.id
const res = await fetch(`https://climate-conscious-cooking.herokuapp.com/recipes/search` + searchResults);
const data = await res.json();

return {
    props: { recipes: data.payload}
}


}

export const getStaticPaths = async (searchResults) => {
    const res = await fetch(`https://climate-conscious-cooking.herokuapp.com/recipes/search` + searchResults); 
    const data = await res.json();
    console.log(typeof(data))
    const paths =   data.payload.map(recipe => {
        return {
            params: {searchResults: recipe.id.toString()}
        }
    })
    return {
        
        paths,
        fallback: false
    }
}
const SearchResults = ({recipes, handleChange, searchInput, handleEnter}) => {

  

  // const [recipes, setRecipes] = useState()
  const router = useRouter();

console.log({searchQuery})

// useEffect(()=>{
//     async function getRecipe(){
//         const response = await fetch(`https://climate-conscious-cooking.herokuapp.com/recipes/search/${searchQuery}`)
//         const data= await response.json();
//         console.log(data.payload);
//         setRecipes(data.payload)
//         console.log(recipes)
//    }
//     getRecipe();
// }, [ recipes, searchQuery]
// )


  return (
    <>
    <NavBar className={css.NavBar} handleChange={handleChange} searchInput={searchInput} handleEnter={handleEnter} />
    <div>{recipes? recipes[0].title : "we don't have any recipes with this ingredient"}</div>
    </>
  )
}

export default SearchResults;
