import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import css from './FactCarousel.module.css'


const FactCarousel = () => {
    return (
        <Carousel fade className={css.carousel}>
  <Carousel.Item className={css.carousel}>
  
    <Carousel.Caption className={css.carouselText}>
      <h3>Food production accounts for one-quarter of the world’s greenhouse gas emissions and takes up half of the planet’s habitable surface.</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className={css.carousel}>
    

    <Carousel.Caption className={css.carouselText} >
      <h3>Meat and dairy specifically accounts for around 14.5% of global greenhouse gas emissions, according to the UN’s Food and Agricultural Organization (FAO).

</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className={css.carousel}>


    <Carousel.Caption className={css.carouselText}>
      <h3>The conversion of land for beef production and animal feed is a leading cause of deforestation in many tropical regions, including in the Amazon.</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}

export default FactCarousel