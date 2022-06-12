import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// import { Routes, Route, BrowserRouter } from "react-router-dom";
import './css/index.css'
import App from './page/App';
// import Register from './page/Register';
// import Login from './page/Login';
// import Product from './page/Product'
// import Kategori from './page/Kategori';
// import Complain from './page/Complain';
// import Profile from './page/Profile';
// import Home from './page/Home';
// import FromCategori from './page/forms/From-categori';
// import FormPruduct from './page/forms/Form-product';
// import Detail from './page/Product-detail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
  <App/>
  {/* <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/register" element={<Register/>} />
  <Route path="/login" element={<Login/>} />
  <Route path="/categori" element={<Kategori/>} />
  <Route path="/categori/form" element={<FromCategori/>} />
  <Route path="/complain" element={<Complain/>} />
  <Route path="/profile" element={<Profile/>} />
  <Route path="/product" element={<Product/>} />
  <Route path="/product/detail" element={<Detail/>} />
  <Route path="/product/form" element={<FormPruduct/>} />
  </Routes>
  </BrowserRouter> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
