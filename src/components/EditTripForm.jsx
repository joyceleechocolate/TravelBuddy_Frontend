import React, {useState, useContext, useEffect} from 'react'
import { getAllItinerary, updateTrip, updateItinerary } from '../api/authApi'
import UserContext from '../contexts/UserContext';
import { useParams } from 'react-router-dom';


export default function UpdateTripForm() {
  // variables needed for state management
  const userToken = useContext(UserContext);
  const { tripId, itineraryId } = useParams();
  const [tripName, setTripName] = useState('');
  const [travelDateBegin, setTravelDateBegin] = useState('');
  const [travelDateEnd, setTravelDateEnd] = useState('');
  const [location, setLocation] = useState('');
  const [duration, setDuration] = useState('');
  const [itinerary, setItinerary] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null); 
  
  
  useEffect(() => {
    // Fetch the existing itinerary data and populate the form
    async function fetchItineraryData() {
      try {
        // Make an API request to get the itinerary data
        const itineraryData = await getAllItinerary(userToken, tripId);

        // Set the state with the fetched itinerary data
        setTravelDateBegin(itineraryData.travel_date_begin);
        setTravelDateEnd(itineraryData.travel_date_end);
        setLocation(itineraryData.travel_location);
        setDuration(itineraryData.travel_duration);
        setItinerary(itineraryData.detail_itinerary);
      } catch (error) {
        setError('Failed to fetch itinerary data');
      }
    }

    if (userToken) {
      fetchItineraryData();
    }
  }, [userToken, tripId]);

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    if (!userToken) {
      console.log('User is not authenticated. Please log in.');
      return;
    }

    const updatedItineraryData = {
      travel_date_begin: travelDateBegin,
      travel_date_end: travelDateEnd,
      travel_location: location,
      travel_duration: duration,
      detail_itinerary: itinerary
    };

    try {
      // Make an API request to update the itinerary
      const updatedItineraryRes = await updateItinerary(userToken, tripId, updatedItineraryData);

      if (updatedItineraryRes.id) {
        setSuccess('Itinerary updated successfully.');
      } else {
        setError('Failed to update itinerary.');
      }
    } catch (error) {
      setError('Failed to update itinerary.');
    }
  };

  return (
    <div className="update__itinerary__container">
      <form className="update__itinerary__form">
        <div>
          <label htmlFor="travelDateBegin">Travel Date Begin:</label>
          <input
            type="text"
            id="travelDateBegin"
            value={travelDateBegin}
            onChange={(e) => setTravelDateBegin(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="travelDateEnd">Travel Date End:</label>
          <input
            type="text"
            id="travelDateEnd"
            value={travelDateEnd}
            onChange={(e) => setTravelDateEnd(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="duration">Duration:</label>
          <input
            type="text"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="detailItinerary">Detail Itinerary:</label>
          <textarea
            className="input__field"
            id="detailItinerary"
            name="detailItinerary"
            rows="5"
            value={itinerary}
            onChange={(e) => setItinerary(e.target.value)}
          />
        </div>

        <button className="update__itinerary__button" onClick={handleUpdateSubmit}>
          Update
        </button>
      </form>
    </div>
  );
}