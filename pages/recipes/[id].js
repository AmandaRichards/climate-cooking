import React from 'react'

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
      
    <div>
    <h1>{ recipes.title}</h1>
    <p>{ recipes.ingredients}</p>
    </div>
  )
}

export default Details
