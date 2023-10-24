import React, {useState, useContext} from 'react'
import { addItinerary, addTrip } from '../api/authApi'
import UserContext from '../contexts/UserContext';
import { useParams } from 'react-router-dom';
import './AddTripForm.css';


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
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null); 
  const params = useParams();
  
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
    const tripRes = await addTrip(userToken, newTripNameData);

    // setting variables for form data, might need to change this to match your backend variables
    if (tripRes.id) {
    const newItineraryData = {
      // trip_id: null,
        travel_date_begin: travelDateBegin, 
        travel_date_end: travelDateEnd,
        travel_location: location, 
        travel_duration: duration, 
        detail_itinerary: itinerary
      };
      console.log(newItineraryData)
    // calling addTrip with new trip
    
    const itineraryRes = await addItinerary(userToken, tripRes.id, newItineraryData);
    
    if(itineraryRes.id) {
      setSuccess('Trip and itinerary added successfully.');
    } else {
      setError('Failed to add itinerary.');
      }
    } else {
      setError('Failed to add trip.');
    }
  };


  return (
    <div className='add__trip__container'>
        <form className='add__trip__form'>
            <div className='add__trip__field__container'>
              <label className='add__trip__label'htmlFor="">
                Trip Name:
              </label>
              <input 
              className='add__trip__input'
              type="text"
              id='tripName'
              // settig the value of field to tripName
              value={tripName}
              // setting trip name when it changes
              onChange={(e) => setTripName(e.target.value)}/>
            </div>

            <div className='add__trip__field__container'>
              <label className='add__trip__label'htmlFor=""> 
              Travel Date Begin:
              </label>
              <input 
              className='add__trip__input'
              type="text"
              id='travelDateBegin'
              value={travelDateBegin}
              onChange={(e) => setTravelDateBegin(e.target.value)}/>
            </div>

            <div className='add__trip__field__container'>
              <label className='add__trip__label'htmlFor="">
                Travel Date End:
              </label>
              <input 
              className='add__trip__input'
              type="text"
              id='travelDateEnd'
              value={travelDateEnd}
              onChange={(e) => setTravelDateEnd(e.target.value)}/>
            </div>

            <div className='add__trip__field__container'>
              <label className='add__trip__label'htmlFor="">
                Location:
              </label>
              <input 
              className='add__trip__input'
              type="text"
              id='location'
              value={location}
              onChange={(e) => setLocation(e.target.value)}/>
            </div>

            <div className='add__trip__field__container'>
              <label className='add__trip__label'htmlFor="">
                Duration:
              </label>
              <input 
              className='add__trip__input'
              type="text"
              id='duration'
              value={duration}
              onChange={(e) =>setDuration(e.target.value)}/>
            </div>

            <div className='add__trip__field__container'>
              <label className='add__trip__label'htmlFor="">
                Detail Itinerary:
              </label>
              <textarea 
              className="add__trip__textarea" 
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

