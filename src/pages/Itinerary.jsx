import { getItinerary } from '../api/authApi';
import UserContext from '../contexts/UserContext';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';



export default function Itinerary(){

    const [itinerary, setItinerary] = useState([]);
    const userToken = useContext(UserContext);

    const params = useParams();

    useEffect(() => {
        async function performGetItinerary() {
            const itinerary = await getItinerary(userToken, params.itineraryId);
            console.log(itinerary)
            setItinerary(itinerary);
        }
        if(userToken) {
            performGetItinerary();
        }
    }, [userToken, params.itineraryId]);
    
return(
    <>
    <h1>My Itinerary</h1>
    <div>
        <p>Trip Number: {itinerary.id} </p>
        <p>Location: {itinerary.travel_location}</p>
        <p>Travel Date Starts: {itinerary.travel_date_begin}</p>
        <p>Travel Date Ends: {itinerary.travel_date_end}</p>
        <p>Travel Duration: {itinerary.travel_duration} Days</p>
        <p>Detail Itinerary: {itinerary.detail_itinerary}</p>
    </div>
    </>
)

}