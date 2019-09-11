import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
	const [persons, setPersons] = useState([										// state to keep track of people
		{ name: 'Arto Hellas', pNumber: '444-321-1234' },
		{ name: 'Ada Lovelace', pNumber: '23-45454-4343' },
		{ name: 'Dan Abramov', pNumber: '2352424524524' },
		{ name: 'Mary Poppendieck', pNumber: '2342355252' }
	])
	const [newName, setNewName] = useState('')									// state to keep track of names in the input field
	const [newPNumber, setNewPNumber] = useState('')							// state to keep track of number in the input field
	const [filter, setFilter] = useState('')										// state to keep track of search filter input field

	const displayNames = () => {
		let filteredSearch = persons.filter(person => person.name.toUpperCase().includes(filter.toUpperCase())) 		// filter out the not matching names
		
		return (
			filteredSearch.map(search =>												// function to display names and numbers of people
				<div key={search.name}>{search.name} {search.pNumber}</div>
			)
		)
	}

	const addPerson = event => {														// event handler for adding a new person to the list
		event.preventDefault()
		const personObject = {
			name: newName,
			pNumber: newPNumber
		}

		if (persons.filter(person => person.name === newName).length === 0) {			// check for duplication
			setPersons(persons.concat(personObject))
			setNewName('')
			setNewPNumber('')
		} else {
			alert(`${newName} is already added to phonebook`)									// send alert if duplicate
		}
	}

	const handleNameChange = event => {												// event handler to save off the input name to state
		console.log(event.target.value)
		setNewName(event.target.value)
	}

	const handlePhoneChange = event => {											// event handler to save off the input number to state
		setNewPNumber(event.target.value)
	}

	const handleFilter = event => {													// event handler to save off the input search term to state
		setFilter(event.target.value)
	}

  	return (
    	<>
      	<h2>Phonebook</h2>
			<Filter filter={filter} handleFilter={handleFilter} />
			<h3>add a new</h3>
			<PersonForm newName={newName} handleNameChange={handleNameChange} newPNumber={newPNumber} handlePhoneChange={handlePhoneChange} addPerson={addPerson} />
   		<h3>Numbers</h3>
			<Persons displayNames={displayNames} />
    	</>
  	)  
}

export default App