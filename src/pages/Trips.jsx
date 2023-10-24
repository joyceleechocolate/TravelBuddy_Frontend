import { getTrip } from '../api/authApi';
import UserContext from '../contexts/UserContext';
import { useState, useEffect, useContext } from 'react';
import FloatingActionButtons from '../components/TripFloatingAddingButton';
import TripList from '../components/ComponentTrips'
import './Trips.css'


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
    <div className='trips__page__container'>
        <div className='trips__page__title'>
            <h1>My Trips</h1>
        </div>
    <div>
    <FloatingActionButtons />
    <div className='trips__list__container'>
    <TripList trips={trips} />
    </div>
    </div>
    
    
    </div>
);
}
