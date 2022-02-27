import React from 'react'
import Header from '../Components/Header'
import NavBar from '../Components/NavBar'
import {Row, Col} from 'react-bootstrap'
import css from '../styles/homepage.module.css'
import Banner from '../Components/Intro'
import RecipeBox from "../Components/RecipeBox"
import RecipeBoxx from "../Components/RecipeBoxx"
import FactCarousel from '../Components/FactCarrousel'

const Homepage = () => {
    return (
        <div className={css.body}>
        <Row className={css.row}> <Header text={"Climate-Conscious Cooking"}/></Row>
        <Row className={css.row}> <NavBar className={css.NavBar}/></Row>
        <Row xs={8} className={css.Banner}> <Banner /> </Row>
        <Row className={css.row}><h1>What's Hot?</h1> </Row>
        <Row className={css.box}> 
        
        <Col className={css.col} xs={4}><RecipeBoxx image="https://thepeskyvegan.com/wp-content/uploads/2020/01/vegan-haggis-feature.jpg" title={"Vegan Haggis"} text={"celebrate Burns Night"}/></Col> 
        <Col className={css.col} xs={4}><RecipeBoxx image={"https://www.budgetbytes.com/wp-content/uploads/2014/08/West-African-Peanut-Stew-V.jpg"} title={"Ugandan Peanut Stew"} text={"Transport yourself to the streets of Kampala"}/> </Col>
        <Col className={css.col} xs={4}><RecipeBoxx image={"https://cupfulofkale.com/wp-content/uploads/2021/03/Vegan-Spinach-and-Ricotta-Cannelloni.jpg.webp"} title={"Spinach and Ricotta Lasagne"} text={"Best enjoyed with a glass of red wine"}/></Col>
        </Row> 
        {/* <Row> */}
{/* <RecipeBox image="https://thepeskyvegan.com/wp-content/uploads/2020/01/vegan-haggis-feature.jpg" title={"Vegan Haggis"} text={"celebrate Burns Night"} /> */}
        {/* </Row> */}
        <div>
        <Row className={css.row}>
        <FactCarousel />
        </Row>
        </div>

       
            
        </div>
    )
}

export default Homepage