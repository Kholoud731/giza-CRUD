import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {FlightState, FlightInputs} from './types'

const initialState: FlightState = {
  flights: [],
  loading: false,
  error: null
};

export const getFlights = createAsyncThunk(
  'flights/getFlights',
  async () => {
    try {
      const response = await fetch('http://localhost:3000/flights');

      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        throw new Error(data.message)

      }
    } catch (error) {
        throw new Error('')
    }
  }
);

export const addFlight = createAsyncThunk(
  'flights/addFlight',
  async ({code, date, capacity}: FlightInputs) => {
    try {
      const response = await fetch('http://localhost:3000/flights', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({code, date, capacity }),
      });
  
      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Email already exist, Please Try another one');
        }
        throw new Error('');
      }
  
      return await response.json();
    } catch (error) {
      throw new Error('Registration failed');
    }
  }
);

export const updateFlight = createAsyncThunk(
  'flights/updateFlight',
  async ({code, date, capacity, id}: {
    code: string;
    date: string;
    capacity: string;
    id: number
  }) => {
    try {
      const response = await fetch(`http://localhost:3000/flights/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({code, date, capacity }),
      });
  
      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Email already exist, Please Try another one');
        }
        throw new Error('Registration failed');
      }
    
      return await response.json();
    } catch (error) {
      throw new Error('');
    }
  }
);

export const deleteFlights = createAsyncThunk(
  'flights/deleteFlights',
  async (id:number) => {
    try {
      const response = await fetch(`http://localhost:3000/flights/${id}`,{
        method:'DELETE'
      });

      const data = await response.json();
      if (response.ok) {
        return id;
      } else {
        throw new Error(data.message)

      }
    } catch (error) {
        throw new Error('Not Found')
    }
  }
);



const flightSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder.addCase(getFlights.pending, (state) => {
      state.loading = true
      state.error = null
    });
    builder.addCase(getFlights.fulfilled, (state, action) => {
      state.flights = action.payload;
      state.loading = false
    })
    builder.addCase(getFlights.rejected, (state, action) => {
      state.error = action.payload as string ?? 'Error accessing the data';
    });

    builder.addCase(deleteFlights.pending, (state) => {
      state.loading = true
      state.error = null
    });
    builder.addCase(deleteFlights.fulfilled, (state, action) => {
      state.flights = state.flights.filter(flight => flight.id !== +action.payload);
      state.loading = false
    })
    builder.addCase(deleteFlights.rejected, (state, action) => {
      state.error = action.payload as string ?? 'Error deleting the data';
    });

    builder.addCase(addFlight.pending, (state) => {
      state.loading = true
      state.error = null
    });
    builder.addCase(addFlight.fulfilled, (state, action) => {
      state.flights.push(action.payload)
      state.loading = false
    })
    builder.addCase(addFlight.rejected, (state, action) => {
      state.error = action.payload as string ?? 'Error accessing the data';
    });

    builder.addCase(updateFlight.pending, (state) => {
      state.loading = true
      state.error = null
    });
    builder.addCase(updateFlight.fulfilled, (state, action) => {
      const ind = state.flights.findIndex((flight) => flight.id === action.payload.id)
      state.flights[ind] = {...action.payload}
      state.loading = false
    })
    builder.addCase(updateFlight.rejected, (state, action) => {
      state.error = action.payload as string ?? 'Error updating the data';
    });
  },
});

export default flightSlice.reducer;
