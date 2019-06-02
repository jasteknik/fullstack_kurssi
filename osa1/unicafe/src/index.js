import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {

    if (props.text === 'Positive') {
        return (
            <tr>
                <td>{props.text} feedback</td>
                <td align="right">{props.value} %</td>
            </tr>
        )
    }

    return (
        <tr>
            <td>{props.text} feedback</td>
            <td align="right">{props.value}</td>
        </tr>
    )
}

const Button = (props) => (
    <button onClick={props.handleClick}>{props.text}</button>
)

const calcPositive = (aGood, aAll) => (aGood/aAll) * 100
const calcAll = (a, b, c) => a + b + c
const calcAvg = (aGood, aNeutral, aBad) => (aGood - aBad) / (aGood + aBad + aNeutral)

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const all = good + bad + neutral

    const handleGoodClick = () => {
        setGood(good + 1)
        console.log('good value is ', good)
    }
    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
        console.log('neutral value is ',neutral)
    }
    const handleBadClick = () => {
        setBad(bad + 1)
        console.log('bad value is ', bad)
    }

    if (all === 0) {
        return (
            <div>
                <h1>give feedback</h1>
                <Button handleClick={handleGoodClick} text='Good' />
                <Button handleClick={handleNeutralClick} text='Neutral' />
                <Button handleClick={handleBadClick} text='Bad' />
                <h1>statistics</h1>
                <p><b>No feedback given!</b></p>
            </div>
        )
    }
    return (
        <div>
            <h1>give feedback</h1>
            <Button handleClick={handleGoodClick} text='Good' />
            <Button handleClick={handleNeutralClick} text='Neutral' />
            <Button handleClick={handleBadClick} text='Bad' />
            <h1>statistics</h1>
            <table border="1px solid black">
                <tbody align="justify">
                <Statistics text={'Good'} value={good} />
                <Statistics text={'Neutral'} value={neutral} />
                <Statistics text={'Bad'} value={bad} />
                <Statistics text={'All'} value={calcAll(good, neutral, bad)} />
                <Statistics text={'Average'} value={calcAvg(good, neutral, bad)} />
                <Statistics text={'Positive'} value={calcPositive(good, all)} />
                </tbody>
            </table>
        </div>
    )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)