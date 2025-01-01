import { createSlice } from '@reduxjs/toolkit';

// Crea uno slice per gestire gli appuntamenti
const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState: [],
  reducers: {
    addAppointment: (state, action) => {
      state.push(action.payload); // Aggiungi un nuovo appuntamento
    },
    removeAppointment: (state, action) => {
      return state.filter(
        (appointment) => appointment.date !== action.payload.date || appointment.time !== action.payload.time
      ); // Rimuovi un appuntamento
    },
  },
});

// Esporta le azioni create dallo slice
export const { addAppointment, removeAppointment } = appointmentsSlice.actions;

// Esporta il reducer per l'integrazione con lo store
export default appointmentsSlice.reducer;
