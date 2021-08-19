import React, { useState } from 'react'

const Title = ({ title }) => <h1>{title}</h1>

const Button = ({ handleClick, text }) => (
<button onClick={handleClick}>{text}</button>
)

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
  )

const Statistics = ({ good, neutral, bad, total }) => {
  if (total === 0) {
    return (
      <div>No feedback given</div>
    )
  } else {
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={good}/>
          <StatisticLine text="neutral" value={neutral}/>
          <StatisticLine text="bad" value={bad}/>
          <StatisticLine text="total" value={total}/>
          <StatisticLine text="average" value={(good + bad * -1) / total}/>
          <StatisticLine text="positive" value={`${good / total * 100} %`}/>
        </tbody>
      </table>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const setGoodValue = (newValue) => () => {
    setGood(newValue)
    setTotal(total + 1)
  }

  const setNeutralValue = (newValue) => () => {
    setNeutral(newValue)
    setTotal(total + 1)
  }

  const setBadValue = (newValue) => () => {
    setBad(newValue)
    setTotal(total + 1)
  }

  return (
    <div>
      <Title title="give feedback"/>
      <Button handleClick={setGoodValue(good + 1)} text="good"/>
      <Button handleClick={setNeutralValue(neutral + 1)} text="neutral"/>
      <Button handleClick={setBadValue(bad + 1)} text="bad"/>
      <Title title="statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
    </div>
  )
}

export default App
