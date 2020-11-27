import './App.css';
import React, { useEffect, useState } from 'react';
import EventForm from './Component/EventForm';
import Timer from './Component/Timer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [event, setevent] = useState({
    name: '',
    date: '',
    submit: false,
  })
  const [timer, settimer] = useState({
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00'
    })
  const [eventInfo, seteventInfo] = useState({name: 'New Year', date: `${new Date().getFullYear() + 1}-01-01`})
  const inputChange = (e) => {
    setevent({
      ...event,
      [e.target.name]: e.target.value
    })
  }

  const formSubmit = (e) => {
    e.preventDefault()
    seteventInfo(event)
    setevent({...event, name: '', date: '', submit: true})
    
  }
  const calculateTimeLeft = () => {
    const timeLeft = +new Date(eventInfo.date) - new Date()
    return {
      days: Math.floor(timeLeft/(24 * 60 * 60 * 1000)),
      hours: Math.floor((timeLeft/(60 * 60 * 1000)) % 24),
      minutes: Math.floor((timeLeft/(60 * 1000)) % 60),
      seconds: Math.floor((timeLeft/(1000)) % 60)
    }
  }
  
  useEffect(() => {
    //const info = {date: eventInfo.date}
    const countdown = setTimeout(() => {
        settimer( calculateTimeLeft())
      }, 1000)
     //clear timer upon unmounting
    return () => clearTimeout(countdown)
      
  })
  const {days, hours, minutes, seconds} = timer
  const timeUp = days === hours === minutes === seconds === 0
  return (
    <div className="App">
      <header className="App-header">
      
        <EventForm formSubmit={formSubmit} inputChange={inputChange} name={event.name} date={event.date}/>
         {!timeUp && <h1>
          <FontAwesomeIcon icon={faHeart} style={{color:'red'}}/> It's almost time for {eventInfo.name} <FontAwesomeIcon icon={faHeart} style={{color:'red'}}/>
          </h1>}
        <Timer days={days} hours={hours} minutes={minutes} seconds={seconds}/>
        {timeUp && <h2 style={{color: '#ffc0cb'}}>Yes, We Made it! Happy {eventInfo.name} day!</h2>}
      </header>
    </div>
  );
}

export default App;
