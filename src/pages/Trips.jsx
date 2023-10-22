import { getTrip } from '../api/authApi';
import { getItinerary } from '../api/authApi';
import UserContext from '../contexts/UserContext';
import { useState, useEffect, useContext } from 'react';
import { Link, useParams } from "react-router-dom"
import FloatingActionButtons from '../components/TripFloatingAddingButton';
import TripList from '../components/ComponentTrips'
// import Itinerary from '../components/ComponentItinerary';


export default function Trips(){

    const [trips, setTrips] = useState([]);


    const userToken = useContext(UserContext);
   
    useEffect(() => {
        async function performGetTrips() {
            const trips = await getTrip(userToken);
            console.log(trips)
            setTrips(trips);
        }
        if(userToken) {
            performGetTrips();
        }
    }, [userToken]);


return(
    <>
    <h1>My Trips</h1>
    <FloatingActionButtons />
    <TripList trips={trips} />
    
    </>
);
}
