import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Label = ({ text }) => <h1>{text}</h1>

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Statistics = ({ feedback, text }) => <div>{text} {' '} {feedback}</div>

const Display = (props) => {
   if(props.allClicks.length === 0) {
      return (
         <div>No feedback given</div>
      )
   }

   return (
      <table>
         <tbody>
            <tr>
               <td><Statistics text="good" /></td>
               <td><Statistics feedback={props.good} /></td>
            </tr>
            <tr>
               <td><Statistics text="neutral" /></td>
               <td><Statistics feedback={props.neutral} /></td>
            </tr>
            <tr>
               <td><Statistics text="bad" /></td>
               <td><Statistics feedback={props.bad} /></td>
            </tr>
            <tr>
               <td><Statistics text="all" /></td>
               <td><Statistics feedback={props.all} /></td>
            </tr>
            <tr>
               <td><Statistics text="average" /></td>
               <td><Statistics feedback={props.average} /></td>
            </tr>
            <tr>
               <td><Statistics text="positive" /></td>
               <td><Statistics feedback={props.positive} /></td>
            </tr>
         </tbody>
      </table>
   )
}

const App = () => {
   // save clicks of each button to own state
   const [good, setGood] = useState(0)
   const [neutral, setNeutral] = useState(0)
   const [bad, setBad] = useState(0)
   const [allClicks, setAll] = useState([])
   const headerLabel = 'give feedback'
   const statsLabel = 'statistics'
   const all = good + neutral + bad
  
   const handleGoodClick = () => {
      setAll(allClicks.concat(good))
      setGood(good + 1)
   }

   const handleNeutralClick = () => {
      setAll(allClicks.concat(neutral))
      setNeutral(neutral + 1)
   }

   const handleBadClick = () => {
      setAll(allClicks.concat(bad))
      setBad(bad + 1)
   }

   return (
      <>
         <Label text={headerLabel} />
         <Button handleClick={() => handleGoodClick()} text="good" />
         <Button handleClick={() => handleNeutralClick()} text="neutral" />
         <Button handleClick={() => handleBadClick()} text="bad" />
         <Label text={statsLabel} />
         <Display allClicks={allClicks} good={good} neutral={neutral} bad={bad} all={all} average={(good - bad) / all} positive={((good / all) * 100).toFixed(2) + ' %'} />
      </>
   )
}

ReactDOM.render(<App />, 
   document.getElementById('root')
)