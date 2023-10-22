import React from 'react'

export default function AddTripForm() {
  
  // const []
  // const handleTripAddingAction() => {


  // }

  return (
    <div className='add__trip__container'>
        <form className='add__trip__form'>
            <div>
            <label htmlFor="">Trip Name:
            <input type="text">
                
            </input>
            
            </label>
            </div>

            <div>
            <label htmlFor=""> Travel Dates:
            <input type="text">
                
            </input>
            </label>
            </div>
            <div>
            <label htmlFor=""> Location:
            <input type="text">
                
            </input>
            </label>
            </div>
            <div>
            <label htmlFor="">Duration:
            <input type="text">
                
            </input>
            </label>
            </div>

            <div>
            <label htmlFor="">Detail Itinerary:</label>
            <textarea className="input__field" id="itinerary" name="itinerary" rows="5"></textarea>
            {/* <input className="input__field" type="text">
                
            </input> */}
            
            
            </div>

            <button className='add__trip__button' >Add Trip</button>
            
        </form>
    </div>
  )
}
// onClick={handleTripAddingAction}
