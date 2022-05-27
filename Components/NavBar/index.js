import React from 'react';
import {Navbar} from 'react-bootstrap'
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import Link from "next/link";
import SearchBar from '../SearchBar';
import css from "./navBar.module.css";


export function NavBar({handleChange, handleEnter, search, recipes, link}){
    return(
 <div >
<Navbar  expand="lg" sticky="top"  className={css.NavBar}>
  <Container className={css.NavBar}>
    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" className={css.NavBar}/>
    <Navbar.Collapse id="basic-navbar-nav"  >
      <Nav className="me-auto" className={css.NavBar}>
             <Link href="./homepage">
        <Nav.Link href="#home" className={css.NavBar}><h4 className={css.NavBar}>Home</h4></Nav.Link>
        </Link>
        <Nav.Link href="#link" className={css.NavBar}><h4 className={css.NavBar}>About us</h4></Nav.Link>
        <NavDropdown  title={<span className={css.NavBar}><h4>Cuisine</h4></span>} id="basic-nav-dropdown" className={css.NavBar}>
          <NavDropdown.Item href="#action/3.1" className={css.NavBar} >Indian</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2" className={css.NavBar}>Italian</NavDropdown.Item>
          <Link href="./recipe">
          <NavDropdown.Item href="#action/3.3" className={css.NavBar}>Scottish</NavDropdown.Item>
          </Link>
           <NavDropdown.Item href="#action/3.4" className={css.NavBar}>Ugandan</NavDropdown.Item>
          <NavDropdown.Divider className={css.NavBar}/>
          <NavDropdown.Item href="#action/3.5" className={css.NavBar}>View all</NavDropdown.Item>
        </NavDropdown>
         <NavDropdown  title={<span className={css.NavBar}><h4>Meal Type</h4></span>} id="basic-nav-dropdown" className={css.NavBar}>
          <NavDropdown.Item href="#action/3.1" className={css.NavBar} >Breakfast</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2" className={css.NavBar}>Dinner</NavDropdown.Item>
          <Link href="./recipe">
          <NavDropdown.Item href="#action/3.3" className={css.NavBar}>Dessert</NavDropdown.Item>
          </Link>
           <NavDropdown.Item href="#action/3.4" className={css.NavBar}>Snacks</NavDropdown.Item>
          <NavDropdown.Divider className={css.NavBar}/>
          <NavDropdown.Item href="#action/3.5" className={css.NavBar}>View all</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
    <SearchBar handleChange={handleChange} handleEnter={handleEnter} search={search} recipes={recipes} link={link}/>
  </Container>
</Navbar>
    
  
    </div>
    )
}

export default NavBar;