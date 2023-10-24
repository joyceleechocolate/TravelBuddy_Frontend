import { getAllItinerary, updateItinerary } from '../api/authApi';
import UserContext from '../contexts/UserContext';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';



export default function UpdateItinerary(){

    const [itinerary, setItinerary] = useState({});
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

return(
    <>
    <h1>My Itinerary</h1>
    {itinerary.length > 0 ? (
    <div>
        {/* <p>Trip Number: {itinerary.id} </p> */}
        <p>Location: {itinerary[0].travel_location}</p>
        <p>Travel Date Starts: {itinerary[0].travel_date_begin}</p>
        <p>Travel Date Ends: {itinerary[0].travel_date_end}</p>
        <p>Travel Duration: {itinerary[0].travel_duration} Days</p>
        <p>Detail Itinerary: {itinerary[0].detail_itinerary}</p>
    </div>
    ) : (
        <p> Loading ... </p>
    )} 
    <button className='edit__button'>Edit</button>
    </>
);

}