import { useState, useEffect, useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';


const TripList = ({trips}) => {

    const params = useParams();

    return (
        <>
        {trips.map((trip,index) => (
            <div key={`a${index}`}>
                <Link to={`/trips/${trip.id}/itinerary/`}>{trip.trip_name}</Link> 
            </div>
        ))}
        </>
    );
}
export default TripList;