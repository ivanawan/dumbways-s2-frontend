import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store,persistor} from "../app/store";
import { PersistGate } from "redux-persist/integration/react";
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
import {Isadmin,Islogin,Notlogin,Logout} from '../component/private-route';
import { QueryClient,QueryClientProvider } from "react-query";
import Softdelete from "./product-softdelete";
const queryClient= new QueryClient();

function App() {
  return (
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
  <QueryClientProvider client={queryClient}>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Islogin><Home /></Islogin> }/>
  <Route path="/register" element={<Notlogin> <Register/></Notlogin>}/>
  <Route path="/login" element={<Notlogin><Login/></Notlogin>}/>
  <Route path="/category" element={<Isadmin><Kategori/></Isadmin>}/>
  <Route path="/category/:id" element={<Isadmin><FromCategori/></Isadmin>}/>
  <Route path="/category/form" element={<Isadmin><FromCategori/></Isadmin>}/>
  <Route path="/complain" element={<Islogin><Complain/> </Islogin>} />
  <Route path="/profile" element={<Islogin><Profile/></Islogin>  }/>
  <Route path="/product"  element={<Isadmin><Product/></Isadmin>}/>
  <Route path="/product/form" element={<Isadmin><FormPruduct/></Isadmin>}/>
  <Route path="/product/edit/:id" element={<Isadmin><FormPruduct/></Isadmin>}/>
  <Route path="/product/:id" element={<Islogin><Detail/></Islogin>}/>
  <Route path="/product/softdelete" element={<Islogin><Softdelete/></Islogin>}/>
  <Route path="/logout" element={<Logout/>}/>
  </Routes>
  </BrowserRouter>
  </QueryClientProvider>
  </PersistGate>
  </Provider>
  );
}

export default App;
