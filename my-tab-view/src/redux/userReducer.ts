import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  loading: boolean;
  data: any[]; // Adjust type based on API response
  error: any; // Adjust type as needed
}

const initialState: UserState = {
  loading: false,
  data: [],
  error: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUsersRequest: (state) => {
      state.loading = true;
    },
    fetchUsersSuccess: (state, action: PayloadAction<any[]>) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchUsersFailure: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } = userSlice.actions;
export default userSlice.reducer;
