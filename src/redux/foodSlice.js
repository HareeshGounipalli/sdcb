import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import  foodData  from "../mock/foodData";

export const fetchFoodItems = createAsyncThunk("food/fetchFoodItems", async () => {
  const response = await foodData();
  return response;
});

const foodSlice = createSlice({
  name: "food",
  initialState: {
    food: [],
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
        state.food = action.payload;
      })
      .addCase(fetchFoodItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default foodSlice.reducer;
