import React, {useState} from 'react'
import { addItinerary, addTrip } from '../api/authApi'

export default function AddTripForm() {
  // variables needed for state management
  const [tripName, setTripName] = useState('');
  const [travelDates, setTravelDates] = useState('');
  const [location, setLocation] = useState('');
  const [duration, setDuration] = useState('');
  const [itinerary, setItinerary] = useState('');
// function for handling adding state changes to backend
  const handleTripSubmit = async(event) => {
    event.preventDefault();
    // handling trip name separately from rest of form as independent variable, might need to change this to match your backend variables
    const newTripNameData = {
      tripName, 
    }
    // calling addTrip with new trip

    const res = await addTrip(newTripNameData);
    // checking to see if it works
    console.log('Trip added:', res)
  }
// function to handle the rest of the form data
  const handleItinerarySubmit = async(event) => {
    event.preventDefault();

    // setting variables for form data, might need to change this to match your backend variables
    const newItineraryData = {
      travelDates, 
      location, 
      duration, 
      itinerary
    }

    // calling addItinerary with new itinerary data;
    const res = await addItinerary(newItineraryDatabase);

    // checking to see if it is passing data

    console.log('Itinerary Added:', res)
  }
  return (
    <div className='add__trip__container'>
        <form className='add__trip__form'>
            <div>
              <label htmlFor="">Trip Name:
              <input 
              type="text"/>
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

