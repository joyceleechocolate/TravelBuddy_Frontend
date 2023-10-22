import { useState, useEffect, useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { Link } from "react-router-dom"


const TripList = ({trips}) => {

    return (
        <>
        {trips.map((trip,index) => (
            <div key={`a${index}`}>
                <Link to={`/trips/itinerary/${trip.id}`}>{trip.trip_name}</Link> 
            </div>
        ))}
        </>
    );
}
export default TripList;