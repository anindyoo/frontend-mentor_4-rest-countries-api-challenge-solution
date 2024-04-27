import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import CountryDetail from './routes/CountryDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} exact>
          <Route index element={<Home />} />
          <Route path=":id" element={<CountryDetail />} exact/>
        </Route>
      </Routes> 
    </BrowserRouter>
  </React.StrictMode>
);
