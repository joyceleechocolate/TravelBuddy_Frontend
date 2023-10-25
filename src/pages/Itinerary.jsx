import { getItinerary, getAllItinerary } from '../api/authApi';
import UserContext from '../contexts/UserContext';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './itinerary.css';
import UpdateTripForm from '../components/EditTripForm';
import TripList from '../components/ComponentTrips';




export default function Itinerary(){

    const [itinerary, setItinerary] = useState({});
    const [isFormVisible, setIsFormVisible] = useState(false);
    const userToken = useContext(UserContext);
    const params = useParams();

    useEffect(() => {
        async function performGetItinerary() {
            try {
                const itinerary = await getAllItinerary(userToken, params.tripId);
                // console.log(itinerary)
                setItinerary(itinerary);
                // console.log(itinerary[0].travel_location)
            } catch (error) {
                console.error('Error fecthing itinerary', error);
            }
        }
        if(userToken) {
            performGetItinerary();
        }
    }, [userToken, params.tripId]);

    const handleEditTripClick = () => {
        setIsFormVisible(!isFormVisible);
      };

return(
    <>
    <h2>My Itinerary</h2>
    {itinerary.length > 0 ? (
    <div className='itinerary__list__container'>
        {/* <p>Trip Number: {itinerary.id} </p> */}
        <p>Trip Name: {itinerary[0].trip_id.trip_name}</p>
        <p>Travel Date Starts: {itinerary[0].travel_date_begin}</p>
        <p>Travel Date Ends: {itinerary[0].travel_date_end}</p>
        <p>Travel Duration: {itinerary[0].travel_duration} Days</p>
        <p>Location: {itinerary[0].travel_location}</p>
        <p>Detail Itinerary: {itinerary[0].detail_itinerary}</p>
    </div>
    ) : (
        <p> Loading ... </p>
    )}
    <div> 
    <button className='edit__button' onClick={handleEditTripClick}>Edit</button>
    </div>
    {/* <div>
        {isFormVisible && <UpdateTripForm/>}
    </div> */}
    <div id="map">map</div>
    </>
);

}