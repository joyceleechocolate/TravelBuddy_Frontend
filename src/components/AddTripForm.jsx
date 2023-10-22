import React, {useState} from 'react'
import { addItinerary, addTrip } from '../api/authApi'

export default function AddTripForm() {
  const [tripName, setTripName] = useState('');
  const [travelDates, setTravelDates] = useState('');
  const [location, setLocation] = useState('');
  const [duration, setDuration] = useState('');
  const [itinerary, setItinerary] = useState('');
  return (
    <div className='add__trip__container'>
        <form className='add__trip__form'>
            <div>
              <label htmlFor="">Trip Name:
              <input type="text"/>
              </label>
            </div>

            <div>
              <label htmlFor=""> Travel Dates:
              <input type="text"/>
              </label>
            </div>

            <div>
              <label htmlFor=""> Location:
              <input type="text"/>
              </label>
            </div>

            <div>
              <label htmlFor="">Duration:
              <input type="text"/>
              </label>
            </div>

            <div>
              <label htmlFor="">Detail Itinerary:</label>
              <textarea className="input__field" id="itinerary" name="itinerary" rows="5"></textarea>
            </div>

            <button className='add__trip__button' >Add Trip</button>
            
        </form>
    </div>
  )
}

