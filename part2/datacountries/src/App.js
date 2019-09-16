import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Search from './components/Search'
import DisplayData from './components/DisplayData'

const App = () => {
	const [search, setSearch] = useState('')
	const [countries, setCountries] = useState([])

	useEffect(() => {
		console.log('effect')
		axios
			.get('https://restcountries.eu/rest/v2/all')
			.then(response => {
				console.log('promise fulfilled')
				setCountries(response.data)
			})
	}, [])
	console.log('render', countries.length, 'country')

	const handleSearch = event => {													// event handler to save off the input search term to state
		setSearch(event.target.value)
	}

	return (
		<>
			<Search search={search} handleSearch={handleSearch} />
			<DisplayData countries={countries} search={search} />
		</>
	)
}

export default App