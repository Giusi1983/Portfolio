import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import appointmentsReducer from '../src/features/appointmentsSlice'; // Assicurati che il percorso sia corretto

// Configura lo store Redux
const store = configureStore({
  reducer: {
    appointments: appointmentsReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Misurazione delle performance
reportWebVitals();
