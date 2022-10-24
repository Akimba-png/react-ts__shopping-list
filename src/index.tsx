import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ModalState } from './context/modal-context';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ModalState>
      <App />
    </ModalState>
  </React.StrictMode>
);
