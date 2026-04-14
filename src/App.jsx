import { Route, Routes, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Products from "./pages/Products"
import Home from "./pages/Home"
import './App.css'
import { useEffect } from "react"
import ProductDetail from "./pages/ProductDetail"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Footer from "./components/Footer"

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
    
    <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<h1>Login</h1>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
