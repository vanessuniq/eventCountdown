import React from 'react'

function EventForm({formSubmit, inputChange, name, date}) {
    return (
        <div className='form-container'>
            <form style={{marginBottom: '30px'}} onSubmit={e => formSubmit(e)}>
                <div className='form-sub'>
                    <div className="form-field">
                        <label htmlFor="name"><h3>Event Name</h3></label>
                        <input type="text" name="name" value={name} onChange={inputChange}/>
                    </div>
                    <div className="form-field">
                        <label htmlFor="date"><h3>Event Date</h3></label>
                        <input type="date" name="date" value={date} onChange={inputChange}/>
                    </div>
                    <div className="form-field" style={{marginTop: '60px'}}>
                        <button type="submit" disabled={!(name && date)}>Start Countdown</button>
                    </div>
                </div>
            </form>
      </div>
    )
}

export default EventForm
