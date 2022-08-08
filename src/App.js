import CustomerRegister from "./Pages/CustomerRegister";
import DashBoard from "./Pages/DashBoard";
import LoginPage from "./Pages/LoginPage";
import {Route, Routes } from 'react-router-dom';
import ProductManage from "./Pages/ProductManage";
import CartManage from "./Pages/CartManage";

function App() {
  return (
    
    
     <Routes>
        <Route exact  path="/" element ={ <LoginPage />}/> 
        <Route exact path="register" element ={<CustomerRegister />}/>
        <Route exact  path="dashboard" element ={ <DashBoard/>}/>
        <Route exact path="products" element={<ProductManage/>}/>
        <Route  path="cart" element={<CartManage/>}/>
      </Routes> 
      
  
  );
}

export default App;