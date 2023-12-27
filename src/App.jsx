
import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from './Components/Products';
import Cart from './Components/Cart'
import { ShopProvider } from './Context/ShopContext';
import { ToastContainer } from 'react-toastify';
function App() {

  return (
   <ShopProvider>

      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
     </Routes>
     <ToastContainer />
      </Router>
   </ShopProvider>


  )
}

export default App
