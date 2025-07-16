import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/animations.css';
import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);