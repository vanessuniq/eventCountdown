import './App.css';
import React, { useState } from 'react';

function App() {
  const [event, setevent] = useState({
    name: '',
    date: '',
    submit: false,
    timer: {
      days: '',
      hours: '',
      minutes: '',
      seconds: ''
    }
  })
  let eventInfo;
  const inputChange = (e) => {
    setevent({
      ...event,
      [e.target.name]: e.target.value
    })
  }

  const formSubmit = (e) => {
    e.preventDefault()
    eventInfo = {name: event.name, date: event.date}
    setevent({...event, name: '', date: '', submit: true})
    console.log(eventInfo);

  }
  const calculateTimeLeft = (eventInfo) => {
    const timeLeft = +new Date(eventInfo.date) - new Date()
    return {
      days: Math.floor(timeLeft/(24 * 60 * 60 * 1000)),
      hours: Math.floor((timeLeft/(60 * 60 * 1000)) % 24),
      minutes: Math.floor((timeLeft/(60 * 1000)) % 60),
      seconds: Math.floor((timeLeft/(1000)) % 60)
    }

  }
  return (
    <div className="App">
      <header className="App-header">
      <div style={{borderColor: '#fff', borderStyle: 'groove'}}>
        <form style={{marginBottom: '30px'}} onSubmit={formSubmit}>
          <div style={{display: 'flex'}}>
            <div className="form-field">
              <label htmlFor="name"><h3>Event Name</h3></label>
              <input type="text" name="name" value={event.name} onChange={inputChange}/>
            </div>
            <div className="form-field">
              <label htmlFor="date"><h3>Event Date</h3></label>
              <input type="date" name="date" value={event.date} onChange={inputChange}/>
            </div>
            <div className="form-field" style={{marginTop: '60px'}}>
              <button type="submit" disabled={!(event.name && event.date)}>Start Countdown</button>
            </div>
          </div>
        </form>
      </div>
        <h2>Let's Create an event countdown shall we?</h2>
      </header>
    </div>
  );
}

export default App;
