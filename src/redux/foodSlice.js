import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchFoodItems as fetchFromApi } from "../mock/mockApi"; // import from mockapi.js

// Define async action to fetch food items
export const fetchFoodItems = createAsyncThunk("food/fetchFoodItems", async () => {
  return await fetchFromApi(); // This will either fetch mock data or real API
});

const foodSlice = createSlice({
  name: "food",
  initialState: {
    foodItems: [], // Empty array for food items
    status: "idle", // Initial loading status
    error: null, // Any error from API call
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFoodItems.pending, (state) => {
        state.status = "loading"; // Set loading state
      })
      .addCase(fetchFoodItems.fulfilled, (state, action) => {
        state.status = "succeeded"; // Set success state
        state.foodItems = action.payload; // Update state with food items
      })
      .addCase(fetchFoodItems.rejected, (state, action) => {
        state.status = "failed"; // Set failure state
        state.error = action.error.message; // Update with error message
      });
  },
});

export default foodSlice.reducer;
