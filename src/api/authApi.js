async function basicFetch(url, payload) {
    const res = await fetch(url, payload)
    const body = await res.json()
    return body
  }

  export async function register(context) {
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(context)
    }
    const body = await basicFetch("http://127.0.0.1:8000/api/account/signup",payload)
    return body
  }
  
  export async function login(context) {
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(context)
    }
    const body = await basicFetch("http://127.0.0.1:8000/api/account/get-token", payload)
    console.log(body.token)
    return body.token
  }

  export async function getTrip(token) {
    console.log(token)
    const payload = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      }  }
    const body = await basicFetch("http://127.0.0.1:8000/api/travelbuddy/trips/", payload)
    return body
  }

  export async function addTrip(token, newTripNameData) {
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "Authorization": `Token ${token}`
        "Authorization": `Token 4371c7032114376077d7f7b29a1fd54cef21cbbd`
      },
      body: JSON.stringify(newTripNameData)
    }
    const body = await basicFetch("http://127.0.0.1:8000/api/travelbuddy/trips/",payload)
    return body
  } 

  export async function getAllItinerary(token, tripId) {
    const payload = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      }  }
    const body = await basicFetch(`http://127.0.0.1:8000/api/travelbuddy/trips/${tripId}/itinerary/`, payload)
    // const body = await basicFetch(`http://127.0.0.1:8000/api/travelbuddy/trip/itinerary/${itineraryId}`, payload)
    return body
  }

  export async function getItinerary(token, tripId, itineraryId) {
    const payload = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      }  }
    // const body = await basicFetch("http://127.0.0.1:8000/api/travelbuddy/trip/itinerary/", payload)
    const body = await basicFetch(`http://127.0.0.1:8000/api/travelbuddy/trips/${tripId}/itinerary/${itineraryId}`, payload)
    return body
  }

  export async function addItinerary(token, tripId, newItineraryData) {
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "Authorization": `Token ${token}`
        "Authorization": `Token 4371c7032114376077d7f7b29a1fd54cef21cbbd`
      },
      body:JSON.stringify(newItineraryData)
    }
    const body = await basicFetch(`http://127.0.0.1:8000/api/travelbuddy/trips/${tripId}/itinerary/`,payload)
    return body
  }


//   export async function getModel(token) {
//     const payload = {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Token ${token}`
//       }  }
//     const body = await basicFetch("http://127.0.0.1:8000/api/cars/models/", payload)
//     return body
//   }