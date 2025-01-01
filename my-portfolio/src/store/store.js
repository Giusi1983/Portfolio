import { configureStore } from "@reduxjs/toolkit";
import faqReducer from "../features/faqSlice";

const store = configureStore({
  reducer: {
    faq: faqReducer, // Aggiungi il reducer del slice FAQ
  },
});

export default store;
