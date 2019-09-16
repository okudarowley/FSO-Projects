import React from 'react'

const OneCountry = ({ country }) => {
   return (
      <>
         <h1>{country.name}</h1>
         <div>Capital: {country.capital}</div>
         <div>Population: {country.population}</div>
         <h2>Languages</h2>
         <ul>
            {country.languages.map(language => 
               <li key={language.name}>
                  {language.name}
               </li>)}
         </ul>
      </>
   )
}

export default OneCountry