import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {AuthState, LoginInputs} from './types'

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({email, password}: LoginInputs) => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email,password}),
      });

      const data = await response.json();
      if (response.ok) {
        return data.accessToken;
      } else {
        throw new Error(data.message)
      }
    } catch (error ) {
      throw new Error("error")
    }
  }
);

export const registerUser = createAsyncThunk('auth/registerUser', async ({email, password}: LoginInputs) => {
  try {
    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password }),
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('Email already exist, Please Try another one');
      }
      throw new Error('Registration failed');
    }
    return await response.json();
  } catch (error) {
    throw new Error('Registration failed');
  }
});

const initialState: AuthState = {
  token: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutUser(state) {
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.token = null;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.token = action.payload
      state.error = null;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = action.payload as string ?? 'Falied To Login';
    });
    builder.addCase(registerUser.pending, (state) => {
      state.token = null;
      state.error = null;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.error = action.payload as string ?? 'Registration failed';
    });
  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;

