import { getTrip } from '../api/authApi';
import UserContext from '../contexts/UserContext';
import { useState, useEffect, useContext } from 'react';
import FloatingActionButtons from '../components/TripFloatingAddingButton';
import TripList from '../components/ComponentTrips'


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

// useEffect(() => {
//   async function performAddTrips() {
//       const tripRes = await addTrip(newTripNameData, userToken);
//       console.log(tripRes)
//       // setTripName(trip);
//   }
//   if(userToken) {
//       performAddTrips();
//   }
// }, [userToken]);

// useEffect(() => {
//   async function performAddItinerary() {
//       const itineraryRes = await addItinerary(newItineraryData, userToken);
//       console.log(itineraryRes)
//       // setItinerary(itinerary);
//   }
//   if(userToken) {
//       performAddItinerary();
//   }
// }, [userToken]);