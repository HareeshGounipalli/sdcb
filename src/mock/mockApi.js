import foodData from "./foodData";
import { USE_MOCK } from "./cartApi";

export const fetchFoodItems = async () => {
  if (USE_MOCK) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(foodData);
      }, 500);
    });
  } else {
    const response = await fetch("/fetchdata");
    if (!response.ok) throw new Error("Network error");
    return await response.json();
  }
};
