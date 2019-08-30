import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ text }) => <h1>{text}</h1>                                  // component to display the 2 headers

const QuoteAndVote = ({ selected, vote }) => {                                // component to display the quote and # of votes
   return (
      <>
         <div>{anecdotes[selected]}</div>                                     
         <div>has {vote[selected]} votes</div>
      </>
   )
}

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>      // component to display the buttons

const Stats = ({ vote }) => {                                                 // component to display the largest number of votes
   let index = vote.indexOf(Math.max(...vote))                                // grab the index of the largest number in vote array

   return (
      <>
         <div>{anecdotes[index]}</div>
         <div>has {vote[index]} votes</div>
      </>
   )
}

const App = (props) => {
   const [selected, setSelected] = useState(0)                                // keep track of which sentence was selected
   const [vote, setVote] = useState(Array(6).fill(0))                         // initialize vote array with size 6 filled with 0's
   const header1 = 'Anecdote of the day'
   const header2 = 'Anecdote with most votes'

   const handleNextAnecdotes = () => {
      const random = (Math.floor(Math.random() * props.anecdotes.length))     // get a random generated number between 0 and 5
      setSelected(random)                                                     // update selected with the random value
   }

   const handleVote = () => {
      const copyVote = [...vote]                // use spread operator to copy vote array to copyVote
      copyVote[selected] += 1                   // increment an element based on which sentence was selected
      setVote(copyVote)                         // update the vote array
   }
   
   return (
      <>
         <Header text={header1} />
         <QuoteAndVote selected={selected} vote={vote} />
         <Button handleClick={() => handleVote()} text="vote" />
         <Button handleClick={() => handleNextAnecdotes()} text="next anecdotes" />
         <Header text={header2} />
         <Stats  vote={vote} />
      </>
   )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)