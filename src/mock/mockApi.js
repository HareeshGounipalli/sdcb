import foodData from "./foodData";

const USE_MOCK = true; // Set this to false when you want to call the actual API

export const fetchFoodItems = async () => {
  if (USE_MOCK) {
    // Simulate a delay and return mock data
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(foodData);
      }, 500); // Simulated network delay
    });
  } else {
    // Replace with actual API endpoint when available
    const response = await fetch("/fetchdata");
    if (!response.ok) throw new Error("Network error");
    return await response.json();
  }
};
