import React, { useState}  from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => (
   <button onClick={props.value}>{props.text} </button>
)

const Statistics = (props) => {
  if (props.good || props.neutral || props.bad > 0){
    return (
      <div>
      <Statistic text='Good:' value={props.good} />
      <Statistic text='Neutral:' value={props.neutral} />
      <Statistic text='Bad:' value={props.bad} />
      <table>
        <tbody>
          <tr>
            <td style={{width: 75}}>All:</td><td>{props.good + props.neutral + props.bad}</td>
          </tr>
        </tbody>
        
        <tbody>
        <tr><td style={{width: 75}}>Average:</td><td> {(props.good + props.bad*-1 + props.neutral*0)/(props.good + props.neutral + props.bad)} </td></tr>
        </tbody>
        
        <tbody>
          <tr>
            <td style={{width: 75}}>Positive:</td><td> {props.good/(props.good+ props.neutral+ props.bad)*100}%</td>
          </tr>
        </tbody>
      </table>
  
      </div>
    )
    
  }
  return <div>
        No feedback given
      </div>
}


const Statistic = (props) => {
  return (
    <div>
      <table>  
        <tbody>       
          <tr>
            <td style={{width: 75}}>{props.text}</td><td>{props.value}</td>
          </tr> 
        </tbody>
      </table>   
    </div>
)
}

const App = () => {

  const [good, setGood] = useState(0) 
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const goodValue = (newGoodValue) => () => setGood(newGoodValue)
  const neutralValue = (newNeutralValue) => () => setNeutral(newNeutralValue)
  const badvalue = (newBadValue) => () => setBad(newBadValue)

  return (   
  
    <div> 
      <h1>
        Give Feedback
      </h1>
      <Button value={goodValue(good+1)} text='Good' />
      <Button value={neutralValue(neutral+1)} text='Neutral' />
      <Button value={badvalue(bad+1)} text='Bad' />

      <h1>
        Statistics
      </h1>

      <Statistics good={good} neutral={neutral} bad={bad} />   

    </div>
  )

}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

