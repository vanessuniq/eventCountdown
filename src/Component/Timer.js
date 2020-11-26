import React from 'react'

function Timer({days, hours, minutes, seconds}) {
    return (
        <div>
            <div className="form-field">
                <h1>{days}</h1>
                <small>days</small>
            </div>
            <div class="form-field">
                <h1>{hours}</h1>
                <small>hours</small>
            </div>
            <div className="form-field">
                <h1>{minutes}</h1>
                <small>minutes</small>
            </div>
            <div className="form-field">
                <h1>{seconds}</h1>
                <small>seconds</small>
            </div>
        </div>
    )
}

export default Timer
