import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ModalState } from './context/modal-context';
import { LoginState } from './context/login-context';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalState>
        <LoginState>
          <App />
        </LoginState>
      </ModalState>
    </BrowserRouter>
  </React.StrictMode>
);
