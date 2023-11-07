import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './components/StateProvider';
import { initialState } from './components/reducer';
import reducer from './components/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App/>
    </StateProvider>
    
  </React.StrictMode>
);

// Si desea comenzar a medir el rendimiento en su aplicación, pase una función
// para registrar resultados (por ejemplo: reportWebVitals(console.log))
// o enviar a un punto final de análisis. Más información: https://bit.ly/CRA-vitals
reportWebVitals();
