import { configureStore } from "@reduxjs/toolkit";
import blogSliceReducer from "./slices/BlogSlice";
import teamSliceReducer from "./slices/TeamSlice";
import testimonialReducer from "./slices/TestimonialSlice";

export const store = configureStore({
  reducer: {
    blog: blogSliceReducer,
    team: teamSliceReducer,
    testimonial: testimonialReducer,
  },
});
