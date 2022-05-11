import React from 'react';
import { useRouter } from "next/router";
import { useState } from 'react';
const SearchBar = ({searchInput, handleChange, handleEnter}) => {
  const router = useRouter();
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  
  return (
 
    <input 
     style={BarStyling}
     key="random1"
     value={searchInput}
     placeholder={"search ingredient"}
     onChange={handleChange}
     
    //  onChange={(e) => setKeyword(e.target.value)}
    onKeyPress={e => {
                if (e.key === "Enter") {
                  // setResult(recipes)
                  router.push({
                    pathname: `/searchResults/`,
                    query: {
                      searchQuery: {searchInput}
                    }
                  });
                }
              }}
  
    />
  );
}

export default SearchBar

  