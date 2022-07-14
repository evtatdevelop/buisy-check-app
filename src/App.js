import React, { useState, useEffect } from "react";
import './App.css';
import './rest.css';
import Service from './services';

function App() {
  const [beepStatus, setBeepStatus] = useState('sleep');
  const [event, setEvent] = useState('');
  const [prevs, setPrevs] = useState('');

  useEffect(() => {
    
    const getEvent = () => new Service().getevent().then(event => {
      setEvent(event);
      beep(event)
    })

    const beep = (newevent) => {
      if ( prevs === newevent ) setBeepStatus('control');
      else setBeepStatus('active');
      setTimeout(() => setBeepStatus('sleep'), 1000)     
      setPrevs(newevent)
    }

    let timer = setInterval(() => getEvent(), 5000);
  
    return () => clearTimeout(timer)
  }, [event, prevs]);

  const beeperClasses = `beepper ${beepStatus}`;

  return (
    <div className="App">
      <h1>CorpSystems load control</h1>
      <div className="dashboard">
        <div className={beeperClasses}></div>
        <p>{event ? event.split(' ')[1] : '_ : _ : _'}</p>        
      </div>

    </div>
  );
}

export default App;
