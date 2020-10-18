import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.action}>{props.text} </button>
)
const Anecdotes = (props) => <>{anecdotes[props.index]}</>


const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [voted, setVote] = useState(points)
  const mostVoted = voted.indexOf(Math.max(...voted))

  const handleVote = () => {
    const copy=[...voted]
    copy[selected]+=1
    setVote(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1> 
      {props.anecdotes[selected]} <br />
      has {voted[selected]} votes<br />
      <Button text="next anecdote" action={() =>setSelected(variable)}/>
      <Button text="vote" action={handleVote} />

      <h1>Anecdote with the most votes</h1><br />
      <Anecdotes index={mostVoted} /> <br /> 
      has {voted[mostVoted]} votes.
    </div>
    
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
const variable = () => Math.floor(Math.random()*anecdotes.length) 
const points = [0,0,0,0,0,0 ]


ReactDOM.render(
  <App anecdotes={anecdotes} />,

  document.getElementById('root')
)