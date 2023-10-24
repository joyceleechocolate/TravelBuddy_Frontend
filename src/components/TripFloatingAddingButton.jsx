import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect, useContext } from 'react';
import AddTripForm from '../components/AddTripForm';

export default function FloatingActionButtons() {

    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleAddTripClick = () => {
      setIsFormVisible(!isFormVisible);
    };

    return (
      <>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab color="warning" aria-label="add" onClick={handleAddTripClick}>
          <AddIcon className='add__new__trip__btn'  />
        </Fab>
      </Box>
      <div>
          {isFormVisible && <AddTripForm/>}
    </div>
      </>
    );
  }