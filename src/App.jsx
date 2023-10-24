import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';
import Home from './pages/Home';
import Trips from './pages/Trips';
import Itinerary from './pages/Itinerary';
import NotFound from './pages/NotFound';
import UserContext from './contexts/UserContext';
// import Itinerary from './components/ComponentItinerary';


function App() {

  const [formData, setFormData] = useState({ username: '', password: '' });
  const [userToken, setUserToken] = useState(null)


    useEffect( () => {
    const token = localStorage.getItem("token")
    console.log(token)
    if(token) {
      setUserToken(token)
    }

  }, [])
  const handleToken = (token) => {
    console.log("handleToken")
    setFormData({ username: '', password: '' })
    localStorage.setItem("token", token)
    setUserToken(token)
  }
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
     <UserContext.Provider value={userToken}>
          <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home  />} /> 
                <Route path="/register" element={<Register handleInputChange={handleInputChange} formData={formData} /> } /> 
                <Route path="/login" element={<Login handleInputChange={handleInputChange} formData={formData} handleToken={handleToken} />} />
                <Route path="/logout" element={<Logout userToken={userToken} setUserToken={setUserToken}/>} /> 
                {/* <Route path="/trips/:tripId/itinerary/edit" element={<Edit />}/> */}
                <Route path="/trips/:tripId/itinerary/" element={<Itinerary />}/>
                <Route path="/trips" element={<Trips  />} /> 
                <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </UserContext.Provider>
  );
}

export default App