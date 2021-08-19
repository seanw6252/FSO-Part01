import React, { useState } from 'react'

const Button = ({ text, clickHandler}) => (
  <button onClick={clickHandler}>{text}</button>
)

const AnecdoteDisplay = ({ anecdote }) => <p>{anecdote}</p>

const VoteDisplay = ({ votes }) => <p>has {votes} votes</p>

const Title = ({ text }) => <h1>{text}</h1>

const MostVotedDisplay = ({ mostVoted }) => (
  <div>
    <AnecdoteDisplay anecdote={mostVoted.anecdote}/>
    <VoteDisplay votes={mostVoted.votes}/>
  </div>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({ 0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0 })
  const [mostVoted, setMostVoted] = useState({anecdote:anecdotes[0], votes: 0})

  const randomSelected = () => (() => setSelected(Math.floor(Math.random() * anecdotes.length)))
  
  const voteAnecdote = (index) => {
    const newVotes = {...votes}
    newVotes[index] += 1
    return () => {
      if (newVotes[index] > mostVoted.votes) {
        setMostVoted({anecdote:anecdotes[index], votes:newVotes[index]})
      }
      setVotes(newVotes)
    }
  }

  return (
    <div>
      <Title text="Anecdote of the day"/>
      <AnecdoteDisplay anecdote={anecdotes[selected]} />
      <VoteDisplay votes={votes[selected]} />
      <Button text="next anecdote" clickHandler={randomSelected()} />
      <Button text="vote" clickHandler={voteAnecdote(selected)} />
      <Title text="Anecdote with most votes"/>
      <MostVotedDisplay mostVoted={mostVoted}/>
    </div>
  )
}

export default App