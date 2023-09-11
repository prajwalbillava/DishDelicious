// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  username: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { email, username } = action.payload;
      state.email = email;
      state.username = username;
    },
    clearUser: (state) => {
      state.email = '';
      state.username = '';
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
