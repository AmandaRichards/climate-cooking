import React from 'react';
import { useRouter } from "next/router";
import { useState } from 'react';
import Link from 'next/link';


const SearchBar = ({Input, handleChange, handleEnter, search, link}) => {
  const router = useRouter();
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  //const ll = link.toString()
  return (
 <>
    <input 
     style={BarStyling}
     key="random1"
     value={Input}
     placeholder={"search ingredient"}
     onChange={handleChange}
     handleEnter={handleEnter}
     
  // onChange={(e) => setKeyword(e.target.value)}
   onKeyPress={e => {
                if (e.key === "Enter") {
               
                  // setResult(recipes)
                  
                  router.push({
                    pathname: `/search/${search}`})}}}
              //       query: {
              //         searchQuery: {searchInput}
              //       }
              //     });
              //   }
              // }}
  
    />
   
    </>
  );
}

export default SearchBar

  