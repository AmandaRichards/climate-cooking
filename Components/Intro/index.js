import React from 'react'
import css from './Intro.module.css'
import { Row } from 'react-bootstrap'


const Banner = () => {
    return (
        <Row className={css.Banner} >
        <div className={css.p}>
            <p><span className={css.pp}>Take your tastebuds across the world whilst lowering your carbon footprint. 
          Powered by plants</span></p>
            </div>
        </Row>
    )
}

export default Banner