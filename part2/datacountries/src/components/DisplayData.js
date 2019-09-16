import React from 'react'
import OneCountry from './OneCountry'

const DisplayData = ({ countries, search }) => {

   console.log('countries', countries)

   const displayNames = () => {
		let filteredSearch = countries.filter(country => country.name.toUpperCase().includes(search.toUpperCase())) 		// filter out the not matching names
      console.log('filtered', filteredSearch)
      if (filteredSearch.length >= 10) {
         return (
            <p>Too many matches, specify another filter</p>
         )
      } else if (filteredSearch.length === 1) {
         return (
            <OneCountry country={filteredSearch[0]} />
         )
      } else {
         return (
            filteredSearch.map(search =>												// function to display names and numbers of people
               <div key={search.name}>{search.name} </div>
            )
         )
      }
   }
   
   return (
      <>
         <div>{displayNames()}</div>
      </>
   )
}

export default DisplayData