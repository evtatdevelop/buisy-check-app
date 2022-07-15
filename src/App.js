import React, { useState, useEffect } from "react";
import './App.css';
import './rest.css';
import Service from './services';

function App() {
  const [beepStatus, setBeepStatus] = useState('sleep');
  const [event, setEvent] = useState('');
  const [chart, setChart] = useState([]);
  const [minutes, setNinutes] = useState([]);


  useEffect(() => {
    
    const getEvent = () => new Service().getevent().then(event => {
      setEvent(event);
      beep(event)
      charting(event)
    })

    const charting = (newevent) => {
      const val = event === newevent ? 0 : 1;
      setChart([...chart, val])
      setNinutes([...minutes, chart.slice(-20).reduce((acc, num) => acc + num, 0)])
      // console.log( chart.slice(-20), `(${lastMinuteActs})`, `${averageActivity}` );
    }

    const beep = (newevent) => {
      if ( event === newevent ) setBeepStatus('control');
      else setBeepStatus('active');
      setTimeout(() => setBeepStatus('sleep'), 1000)
    }

    let timer = setInterval(() => getEvent(), 5000);
  
    return () => clearTimeout(timer)
  }, [event, chart, minutes]);

  const beeperClasses = `beepper ${beepStatus}`;


  return (
    <div className="App">
      <h1>CorpSystems load control</h1>
      <div className="chart">
        
        <ul>
          { minutes.map((minute, index) => <li 
              key={index}
              style={{height: `${+minute}vmin`}}
            ></li>)
          }          
        </ul>

        <div className="bgGreed">
          {new Array(50).fill(1).map((cell, index) => <div key={index}></div>)}
        </div>

        <div className="dashboard">
          <div className={beeperClasses}></div>
          <p>{event ? event.split(' ')[1] : '_ : _ : _'}</p>        
        </div>

        <div className="minActs">{`${minutes[minutes.length - 1]} in min`}</div>  

      </div>

    </div>
  );
}

export default App;
