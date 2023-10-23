import React, {useState, useContext} from 'react'
import { addItinerary, addTrip } from '../api/authApi'
import UserContext from '../contexts/UserContext';


export default function AddTripForm() {
  // variables needed for state management
  const userToken = useContext(UserContext);
  // console.log(userToken);
  const [tripName, setTripName] = useState('');
  const [travelDateBegin, setTravelDateBegin] = useState('');
  const [travelDateEnd, setTravelDateEnd] = useState('');
  const [location, setLocation] = useState('');
  const [duration, setDuration] = useState('');
  const [itinerary, setItinerary] = useState('');
  
// function for handling adding state changes to backend
  const handleTripSubmit = async(event) => {
    event.preventDefault();

    if (!userToken) {
      //check the uer authentication
      console.log('User is not authenticated. Please log in.')
      return;
    }

    // handling trip name separately from rest of form as independent variable, might need to change this to match your backend variables
    const newTripNameData = {
      trip_name: tripName
    }
    console.log(newTripNameData)
    
    // setting variables for form data, might need to change this to match your backend variables
    const newItineraryData = {
      // trip_id: null,
      travel_date_begin: travelDateBegin, 
      travel_date_end: travelDateEnd,
      travel_location: location, 
      travel_duration: duration, 
      detail_itinerary: itinerary
    }
    console.log(newItineraryData)
    // calling addTrip with new trip
    const tripRes = await addTrip(newTripNameData);

    if(tripRes.id) {
      newItineraryData.trip_id = tripRes.id;
    }

    // calling addItinerary with new itinerary data;
    const itineraryRes = await addItinerary(newItineraryData);

    // checking to see if it works
    console.log('Trip added:', tripRes)

    // checking to see if it is passing data
    console.log('Itinerary Added:', itineraryRes)
  }

  return (
    <div className='add__trip__container'>
        <form className='add__trip__form'>
            <div>
              <label htmlFor="">Trip Name:
              <input 
              type="text"
              id='tripName'
              // settig the value of field to tripName
              value={tripName}
              // setting trip name when it changes
              onChange={(e) => setTripName(e.target.value)}/>
              </label>
            </div>

            <div>
              <label htmlFor=""> Travel Date Begin:
              <input 
              type="text"
              id='travelDateBegin'
              value={travelDateBegin}
              onChange={(e) => setTravelDateBegin(e.target.value)}/>
              </label>
            </div>

            <div>
              <label htmlFor=""> Travel Date End:
              <input 
              type="text"
              id='travelDateEnd'
              value={travelDateEnd}
              onChange={(e) => setTravelDateEnd(e.target.value)}/>
              </label>
            </div>

            <div>
              <label htmlFor=""> Location:
              <input 
              type="text"
              id='location'
              value={location}
              onChange={(e) => setLocation(e.target.value)}/>
              </label>
            </div>

            <div>
              <label htmlFor="">Duration:
              <input 
              type="text"
              id='duration'
              value={duration}
              onChange={(e) =>setDuration(e.target.value)}/>
              </label>
            </div>

            <div>
              <label htmlFor="">Detail Itinerary:</label>
              <textarea 
              className="input__field" 
              id="itinerary" 
              name="itinerary" 
              rows="5"
              value={itinerary}
              onChange={(e) => setItinerary(e.target.value)}
              />
      
            </div>

            <button 
            className='add__trip__button' 
            onClick={handleTripSubmit}>Add Trip
            </button>
            
        </form>
    </div>
  )
}

