import { createSlice } from '@reduxjs/toolkit';

const faqSlice = createSlice({
  name: 'faq',
  initialState: {
    expandedId: null, // Nessuna sezione espansa inizialmente
  },
  reducers: {
    toggleFAQ: (state, action) => {
      const id = action.payload;
      // Se la sezione cliccata è già espansa, chiudila
      state.expandedId = state.expandedId === id ? null : id;
    },
  },
});

export const { toggleFAQ } = faqSlice.actions;
export default faqSlice.reducer;
