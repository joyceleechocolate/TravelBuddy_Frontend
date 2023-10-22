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
    return body.token
  }

  export async function getTrip(token) {
    const payload = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      }  }
    const body = await basicFetch("http://127.0.0.1:8000/api/travelbuddy/trip/", payload)
    return body
  }

  export async function addTrip(context) {
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(context)
    }
    const body = await basicFetch("http://127.0.0.1:8000/api/travelbuddy/trip/",payload)
    return body
  } 

  export async function getAllItinerary(token) {
    const payload = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      }  }
    const body = await basicFetch("http://127.0.0.1:8000/api/travelbuddy/trip/itinerary/", payload)
    // const body = await basicFetch(`http://127.0.0.1:8000/api/travelbuddy/trip/itinerary/${itineraryId}`, payload)
    return body
  }

  export async function getItinerary(token, itineraryId) {
    const payload = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      }  }
    // const body = await basicFetch("http://127.0.0.1:8000/api/travelbuddy/trip/itinerary/", payload)
    const body = await basicFetch(`http://127.0.0.1:8000/api/travelbuddy/trip/itinerary/${itineraryId}`, payload)
    return body
  }

  export async function addItinerary(context) {
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(context)
    }
    const body = await basicFetch("http://127.0.0.1:8000/api/travelbuddy/trip/itinerary",payload)
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