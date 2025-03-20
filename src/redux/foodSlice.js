import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Simulate API call
export const fetchFoodItems = createAsyncThunk("food/fetchFoodItems", async () => {
  return [
    { id: 1, name: "Pani Puri", price: 50 },
    { id: 2, name: "Bhel Puri", price: 60 },
  ]; // Replace with actual API call
});

const foodSlice = createSlice({
  name: "food",
  initialState: {
    foodItems: [], // Ensure it's an array
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFoodItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFoodItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.foodItems = action.payload;
      })
      .addCase(fetchFoodItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default foodSlice.reducer;
