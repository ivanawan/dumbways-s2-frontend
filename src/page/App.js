import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import UserContext from "../component/context";
import Home from "./Home";
import Register from './Register';
import Login from './Login';
import Product from './Product'
import Kategori from './Kategori';
import Complain from './Complain';
import Profile from './Profile';
import Detail from './Product-detail';
import FromCategori from './forms/From-categori';
import FormPruduct from './forms/Form-product';
import {Isadmin,Islogin,Notlogin} from '../component/private-route';

function App() {
  const [user, setUser] = useState({
    login:false, id: "",token:"", name:"",  role:"" 
  });
  const value={
    get: user,
    setUser
  } 

  useEffect(()=>{
    // console.log('render');
  },[user]);

  return (
  <UserContext.Provider value={value}>
  <BrowserRouter>
  <Routes> 
   
  <Route path="/" element={<Islogin><Home /></Islogin>}/>
  <Route path="/register" element={ <Register/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/categori" element={<Isadmin><Kategori/></Isadmin>}/>
  <Route path="/categori/form" element={<Isadmin><FromCategori/></Isadmin>}/>
  {/* <Route path="/complain" element={<PrivateRoute islogin={true}> <Complain/> </PrivateRoute>} /> */}
  {/* <Route path="/profile" element={<PrivateRoute islogin={true}> <Profile/> </PrivateRoute>}/>
  <Route path="/product"  element={<PrivateRoute isadmin={true}> <Product/> </PrivateRoute>}/>
  <Route path="/product/detail" element={<PrivateRoute islogin={true}> <Detail/> </PrivateRoute>}/>
  <Route path="/product/form" element={<PrivateRoute isadmin={true}> <FormPruduct/> </PrivateRoute>}/> */}
  </Routes>
  </BrowserRouter>
  </UserContext.Provider>
  );
}

export default App;
